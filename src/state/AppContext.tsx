import React, { createContext, useContext, useEffect, useState, useMemo, ReactNode } from 'react';
import {
  NavigationDestination,
  UserPreferences,
  UserProgress,
  ScenarioAttempt,
  JournalEntry,
  AssessmentResult,
  ModuleCategory,
  TrainingStage,
} from '../types';
import {
  INITIAL_PREFERENCES,
  DEMO_JOURNAL_ENTRIES,
  DEMO_SCENARIO_ATTEMPTS,
  DEMO_ASSESSMENT_RESULT,
} from '../data/demoData';
import { ACHIEVEMENTS, calculateLevelFromXP } from '../data/achievements';
import { sounds } from '../utils/audio';

interface AppContextType {
  // Navigation
  destination: NavigationDestination;
  setDestination: (dest: NavigationDestination) => void;
  activeScenarioId?: string;
  setActiveScenarioId: (id?: string) => void;
  activeModuleId?: ModuleCategory;
  setActiveModuleId: (id?: ModuleCategory) => void;
  isCommandPaletteOpen: boolean;
  setIsCommandPaletteOpen: (open: boolean) => void;
  isOnboardingOpen: boolean;
  setIsOnboardingOpen: (open: boolean) => void;

  // Preferences
  preferences: UserPreferences;
  updatePreferences: (updates: Partial<UserPreferences>) => void;

  // Progress and state
  progress: UserProgress;
  recordScenarioAttempt: (attempt: Omit<ScenarioAttempt, 'id' | 'timestamp'>) => void;
  toggleSaveScenario: (scenarioId: string) => boolean;
  isScenarioSaved: (scenarioId: string) => boolean;
  
  // Gamification & XP
  addXP: (amount: number, reason?: string) => void;
  unlockAchievement: (id: string) => void;
  incrementPauseCount: () => void;
  recordFlashDrillScore: (score: number) => void;
  levelInfo: ReturnType<typeof calculateLevelFromXP>;
  newAchievementToast: string | null;

  // Journal
  journalEntries: JournalEntry[];
  addJournalEntry: (entry: Omit<JournalEntry, 'id' | 'timestamp'>) => void;
  updateJournalEntry: (id: string, updates: Partial<JournalEntry>) => void;
  deleteJournalEntry: (id: string) => void;

  // Assessment
  saveAssessmentResult: (result: Omit<AssessmentResult, 'id' | 'timestamp'>) => void;
  latestAssessment?: AssessmentResult;

  // Management / Reset
  resetProgress: () => void;
  restoreSampleData: () => void;
  clearJournalData: () => void;

  // Computed metrics
  overallStage: TrainingStage;
  completedScenarioCount: number;
}

const STORAGE_KEY = 'whiteroom_state_v2';

const AppContext = createContext<AppContextType | undefined>(undefined);

function getInitialProgress(): UserProgress {
  try {
    const raw = localStorage.getItem(STORAGE_KEY) || localStorage.getItem('whiteroom_state_v1');
    if (raw) {
      const parsed = JSON.parse(raw);
      if (parsed && typeof parsed === 'object') {
        return {
          attempts: Array.isArray(parsed.attempts) ? parsed.attempts : DEMO_SCENARIO_ATTEMPTS,
          savedScenarioIds: Array.isArray(parsed.savedScenarioIds) ? parsed.savedScenarioIds : ['sc-001', 'sc-004'],
          journalEntries: Array.isArray(parsed.journalEntries) ? parsed.journalEntries : DEMO_JOURNAL_ENTRIES,
          assessmentResults: Array.isArray(parsed.assessmentResults) ? parsed.assessmentResults : [DEMO_ASSESSMENT_RESULT],
          preferences: { ...INITIAL_PREFERENCES, ...(parsed.preferences || {}) },
          currentStage: parsed.currentStage || 'Observer',
          lastActiveScenarioId: parsed.lastActiveScenarioId || 'sc-001',
          xp: typeof parsed.xp === 'number' ? parsed.xp : 320,
          streak: typeof parsed.streak === 'number' ? parsed.streak : 1,
          lastActiveDate: parsed.lastActiveDate || new Date().toISOString().split('T')[0],
          unlockedAchievements: Array.isArray(parsed.unlockedAchievements) ? parsed.unlockedAchievements : ['first-drill'],
          flashDrillHighScore: typeof parsed.flashDrillHighScore === 'number' ? parsed.flashDrillHighScore : 0,
          pauseCount: typeof parsed.pauseCount === 'number' ? parsed.pauseCount : 0,
        };
      }
    }
  } catch (err) {
    console.error('Failed to load local storage state:', err);
  }

  return {
    attempts: DEMO_SCENARIO_ATTEMPTS,
    savedScenarioIds: ['sc-001', 'sc-004'],
    journalEntries: DEMO_JOURNAL_ENTRIES,
    assessmentResults: [DEMO_ASSESSMENT_RESULT],
    preferences: INITIAL_PREFERENCES,
    currentStage: 'Observer',
    lastActiveScenarioId: 'sc-001',
    xp: 320,
    streak: 1,
    lastActiveDate: new Date().toISOString().split('T')[0],
    unlockedAchievements: ['first-drill'],
    flashDrillHighScore: 0,
    pauseCount: 0,
  };
}

export const AppProvider: React.FC<{ children: ReactNode }> = ({ children }) => {
  const [progress, setProgress] = useState<UserProgress>(getInitialProgress);
  const [destination, setDestination] = useState<NavigationDestination>('intro');
  const [activeScenarioId, setActiveScenarioId] = useState<string | undefined>('sc-001');
  const [activeModuleId, setActiveModuleId] = useState<ModuleCategory | undefined>('social-intelligence');
  const [isCommandPaletteOpen, setIsCommandPaletteOpen] = useState(false);
  const [isOnboardingOpen, setIsOnboardingOpen] = useState(false);
  const [newAchievementToast, setNewAchievementToast] = useState<string | null>(null);

  // Sync to local storage
  useEffect(() => {
    try {
      localStorage.setItem(STORAGE_KEY, JSON.stringify(progress));
    } catch (err) {
      console.error('Failed to save to local storage:', err);
    }
  }, [progress]);

  // Sync dark class on documentElement
  useEffect(() => {
    const root = document.documentElement;
    if (progress.preferences.theme === 'dark') {
      root.classList.add('dark');
    } else {
      root.classList.remove('dark');
    }
  }, [progress.preferences.theme]);

  // Sync ambient sound drone
  useEffect(() => {
    if (progress.preferences.ambientSound) {
      sounds.toggleAmbient(true);
    } else {
      sounds.toggleAmbient(false);
    }
    return () => {
      sounds.toggleAmbient(false);
    };
  }, [progress.preferences.ambientSound]);

  // Update daily streak
  useEffect(() => {
    const today = new Date().toISOString().split('T')[0];
    if (progress.lastActiveDate !== today) {
      const yesterday = new Date(Date.now() - 86400000).toISOString().split('T')[0];
      const continuesStreak = progress.lastActiveDate === yesterday;
      setProgress(prev => ({
        ...prev,
        lastActiveDate: today,
        streak: continuesStreak ? prev.streak + 1 : 1,
      }));
    }
  }, [progress.lastActiveDate]);

  // Calculate current stage dynamically based on real attempts and reflections
  const calculatedStage = useMemo<TrainingStage>(() => {
    const attemptsCount = progress.attempts.length;
    const journalCount = progress.journalEntries.length;
    const assessmentCount = progress.assessmentResults.length;

    if (attemptsCount >= 16 && journalCount >= 5 && assessmentCount >= 2) {
      return 'Self-Mastered';
    }
    if (attemptsCount >= 8 && journalCount >= 3) {
      return 'Strategist';
    }
    if (attemptsCount >= 3 || journalCount >= 1) {
      return 'Analyst';
    }
    return 'Observer';
  }, [progress.attempts, progress.journalEntries, progress.assessmentResults]);

  // Level Info from XP
  const levelInfo = useMemo(() => {
    return calculateLevelFromXP(progress.xp || 0);
  }, [progress.xp]);

  const updatePreferences = (updates: Partial<UserPreferences>) => {
    setProgress(prev => ({
      ...prev,
      preferences: {
        ...prev.preferences,
        ...updates,
      },
    }));
  };

  const addXP = (amount: number, _reason?: string) => {
    setProgress(prev => {
      const nextXP = (prev.xp || 0) + amount;
      return {
        ...prev,
        xp: nextXP,
      };
    });
  };

  const unlockAchievement = (id: string) => {
    const target = ACHIEVEMENTS.find(a => a.id === id);
    if (!target) return;

    setProgress(prev => {
      if (prev.unlockedAchievements.includes(id)) return prev;

      setNewAchievementToast(`Achievement Unlocked: ${target.title} (+${target.xpReward} XP)`);
      setTimeout(() => setNewAchievementToast(null), 4000);
      sounds.playSuccess(prev.preferences.soundEnabled);

      return {
        ...prev,
        xp: (prev.xp || 0) + target.xpReward,
        unlockedAchievements: [...prev.unlockedAchievements, id],
      };
    });
  };

  const incrementPauseCount = () => {
    setProgress(prev => {
      const nextCount = (prev.pauseCount || 0) + 1;
      if (nextCount >= 3) {
        unlockAchievement('breath-master');
      }
      return {
        ...prev,
        pauseCount: nextCount,
      };
    });
  };

  const recordFlashDrillScore = (score: number) => {
    setProgress(prev => {
      if (score >= 5) {
        unlockAchievement('flash-master');
      }
      return {
        ...prev,
        flashDrillHighScore: Math.max(prev.flashDrillHighScore || 0, score),
      };
    });
  };

  const recordScenarioAttempt = (attemptData: Omit<ScenarioAttempt, 'id' | 'timestamp'>) => {
    const newAttempt: ScenarioAttempt = {
      ...attemptData,
      id: 'attempt-' + Date.now() + '-' + Math.random().toString(36).substring(2, 7),
      timestamp: Date.now(),
    };

    // Evaluate grade
    const avgScore = (
      attemptData.scoreIndicators.emotionalRegulation * 0.35 +
      attemptData.scoreIndicators.strategicThinking * 0.35 +
      attemptData.scoreIndicators.socialAwareness * 0.2 +
      attemptData.scoreIndicators.assertiveness * 0.1
    );

    let xpBonus = 50;
    if (avgScore >= 90) {
      xpBonus = 125;
      unlockAchievement('s-rank-first');
    } else if (avgScore >= 80) {
      xpBonus = 90;
    }

    if (progress.preferences.pressureMode) {
      xpBonus += 50;
      unlockAchievement('pressure-veteran');
    }

    setProgress(prev => {
      const nextAttempts = [newAttempt, ...prev.attempts];
      const categoriesCovered = new Set(nextAttempts.map(a => a.category));
      if (categoriesCovered.size >= 4) {
        unlockAchievement('tactical-triad');
      }
      if (nextAttempts.length >= 1) {
        unlockAchievement('first-drill');
      }

      return {
        ...prev,
        attempts: nextAttempts,
        lastActiveScenarioId: newAttempt.scenarioId,
        xp: (prev.xp || 0) + xpBonus,
      };
    });
  };

  const toggleSaveScenario = (scenarioId: string): boolean => {
    let nowSaved = false;
    setProgress(prev => {
      const exists = prev.savedScenarioIds.includes(scenarioId);
      nowSaved = !exists;
      return {
        ...prev,
        savedScenarioIds: exists
          ? prev.savedScenarioIds.filter(id => id !== scenarioId)
          : [...prev.savedScenarioIds, scenarioId],
      };
    });
    return nowSaved;
  };

  const isScenarioSaved = (scenarioId: string): boolean => {
    return progress.savedScenarioIds.includes(scenarioId);
  };

  const addJournalEntry = (entryData: Omit<JournalEntry, 'id' | 'timestamp'>) => {
    const newEntry: JournalEntry = {
      ...entryData,
      id: 'journal-' + Date.now() + '-' + Math.random().toString(36).substring(2, 7),
      timestamp: Date.now(),
      isDemo: false,
    };
    setProgress(prev => {
      const nextEntries = [newEntry, ...prev.journalEntries];
      if (nextEntries.length >= 3) {
        unlockAchievement('journal-scholar');
      }
      return {
        ...prev,
        journalEntries: nextEntries,
        xp: (prev.xp || 0) + 40,
      };
    });
  };

  const updateJournalEntry = (id: string, updates: Partial<JournalEntry>) => {
    setProgress(prev => ({
      ...prev,
      journalEntries: prev.journalEntries.map(e => (e.id === id ? { ...e, ...updates } : e)),
    }));
  };

  const deleteJournalEntry = (id: string) => {
    setProgress(prev => ({
      ...prev,
      journalEntries: prev.journalEntries.filter(e => e.id !== id),
    }));
  };

  const saveAssessmentResult = (resultData: Omit<AssessmentResult, 'id' | 'timestamp'>) => {
    const newResult: AssessmentResult = {
      ...resultData,
      id: 'assessment-' + Date.now(),
      timestamp: Date.now(),
    };
    setProgress(prev => ({
      ...prev,
      assessmentResults: [newResult, ...prev.assessmentResults],
      xp: (prev.xp || 0) + 150,
    }));
  };

  const resetProgress = () => {
    const fresh: UserProgress = {
      attempts: [],
      savedScenarioIds: [],
      journalEntries: [],
      assessmentResults: [],
      preferences: progress.preferences,
      currentStage: 'Observer',
      lastActiveScenarioId: 'sc-001',
      xp: 0,
      streak: 1,
      lastActiveDate: new Date().toISOString().split('T')[0],
      unlockedAchievements: [],
      flashDrillHighScore: 0,
      pauseCount: 0,
    };
    setProgress(fresh);
  };

  const restoreSampleData = () => {
    const sample: UserProgress = {
      attempts: DEMO_SCENARIO_ATTEMPTS,
      savedScenarioIds: ['sc-001', 'sc-004'],
      journalEntries: DEMO_JOURNAL_ENTRIES,
      assessmentResults: [DEMO_ASSESSMENT_RESULT],
      preferences: progress.preferences,
      currentStage: 'Observer',
      lastActiveScenarioId: 'sc-001',
      xp: 450,
      streak: 3,
      lastActiveDate: new Date().toISOString().split('T')[0],
      unlockedAchievements: ['first-drill', 's-rank-first'],
      flashDrillHighScore: 4,
      pauseCount: 1,
    };
    setProgress(sample);
  };

  const clearJournalData = () => {
    setProgress(prev => ({
      ...prev,
      journalEntries: [],
    }));
  };

  const latestAssessment = progress.assessmentResults[0];

  return (
    <AppContext.Provider
      value={{
        destination,
        setDestination,
        activeScenarioId,
        setActiveScenarioId,
        activeModuleId,
        setActiveModuleId,
        isCommandPaletteOpen,
        setIsCommandPaletteOpen,
        isOnboardingOpen,
        setIsOnboardingOpen,
        preferences: progress.preferences,
        updatePreferences,
        progress,
        recordScenarioAttempt,
        toggleSaveScenario,
        isScenarioSaved,
        addXP,
        unlockAchievement,
        incrementPauseCount,
        recordFlashDrillScore,
        levelInfo,
        newAchievementToast,
        journalEntries: progress.journalEntries,
        addJournalEntry,
        updateJournalEntry,
        deleteJournalEntry,
        saveAssessmentResult,
        latestAssessment,
        resetProgress,
        restoreSampleData,
        clearJournalData,
        overallStage: calculatedStage,
        completedScenarioCount: new Set(progress.attempts.map(a => a.scenarioId)).size,
      }}
    >
      {children}
    </AppContext.Provider>
  );
};

export const useApp = () => {
  const ctx = useContext(AppContext);
  if (!ctx) {
    throw new Error('useApp must be used within an AppProvider');
  }
  return ctx;
};
