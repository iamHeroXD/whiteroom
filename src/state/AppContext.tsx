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

const STORAGE_KEY = 'whiteroom_state_v1';

const AppContext = createContext<AppContextType | undefined>(undefined);

function getInitialProgress(): UserProgress {
  try {
    const raw = localStorage.getItem(STORAGE_KEY);
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
  };
}

export const AppProvider: React.FC<{ children: ReactNode }> = ({ children }) => {
  const [progress, setProgress] = useState<UserProgress>(getInitialProgress);
  const [destination, setDestination] = useState<NavigationDestination>('intro');
  const [activeScenarioId, setActiveScenarioId] = useState<string | undefined>('sc-001');
  const [activeModuleId, setActiveModuleId] = useState<ModuleCategory | undefined>('social-intelligence');
  const [isCommandPaletteOpen, setIsCommandPaletteOpen] = useState(false);
  const [isOnboardingOpen, setIsOnboardingOpen] = useState(false);

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

  const updatePreferences = (updates: Partial<UserPreferences>) => {
    setProgress(prev => ({
      ...prev,
      preferences: {
        ...prev.preferences,
        ...updates,
      },
    }));
  };

  const recordScenarioAttempt = (attemptData: Omit<ScenarioAttempt, 'id' | 'timestamp'>) => {
    const newAttempt: ScenarioAttempt = {
      ...attemptData,
      id: 'attempt-' + Date.now() + '-' + Math.random().toString(36).substring(2, 7),
      timestamp: Date.now(),
    };

    setProgress(prev => {
      // Filter out past attempt for same scenario if we only want unique or keep all for history
      return {
        ...prev,
        attempts: [newAttempt, ...prev.attempts],
        lastActiveScenarioId: newAttempt.scenarioId,
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
    setProgress(prev => ({
      ...prev,
      journalEntries: [newEntry, ...prev.journalEntries],
    }));
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
