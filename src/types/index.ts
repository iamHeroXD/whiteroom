export type Difficulty = 1 | 2 | 3 | 4 | 5;

export type ModuleCategory =
  | 'social-intelligence'
  | 'emotional-control'
  | 'conversation-mastery'
  | 'strategic-thinking'
  | 'manipulation-defense'
  | 'conflict-resolution'
  | 'digital-social'
  | 'leadership-teamwork';

export interface ScenarioOption {
  id: string;
  label: string; // e.g. "A", "B", "C", "D"
  text: string;
  intent: string;
  feedback: {
    situationAnalysis: string;
    decisionReview: {
      accomplished: string;
      strengths: string[];
      risks: string[];
    };
    perspectiveCheck: {
      otherInterpretation: string;
      missingInformation: string;
    };
    consequences: {
      shortTerm: string;
      longTerm: string;
      tradeoffs: string;
    };
    alternativeNaturalResponse: string;
    skillDevelopment: {
      skill: string;
      practicalExercise: string;
    };
    scoreIndicator: {
      emotionalRegulation: number; // 0 - 100
      socialAwareness: number;
      strategicThinking: number;
      assertiveness: number;
    };
  };
  nextBranchId?: string; // Optional branching ID for multi-stage scenarios
}

export interface ScenarioBranch {
  id: string;
  stageTitle: string;
  characterDialogue: string;
  dialogueSpeaker: string;
  contextNote?: string;
  options: ScenarioOption[];
}

export interface Scenario {
  id: string;
  number: string; // e.g., "001"
  title: string;
  category: ModuleCategory;
  difficulty: Difficulty;
  setting: string;
  context: string;
  characterDialogue: string;
  dialogueSpeaker: string;
  estimatedDuration: string; // e.g. "3-5 min"
  skillTags: string[];
  learningObjectives: string[];
  options: ScenarioOption[];
  reflectionPrompt: string;
  branches?: Record<string, ScenarioBranch>;
  followUpScenarioIds?: string[];
}

export interface ScenarioAttempt {
  id: string;
  scenarioId: string;
  scenarioTitle: string;
  category: ModuleCategory;
  selectedOptionId: string;
  selectedOptionLabel: string;
  branchPathTaken?: string[];
  userReflection?: string;
  timestamp: number;
  scoreIndicators: {
    emotionalRegulation: number;
    socialAwareness: number;
    strategicThinking: number;
    assertiveness: number;
  };
}

export interface TrainingModule {
  id: ModuleCategory;
  number: string;
  title: string;
  shortDescription: string;
  fullDescription: string;
  difficulty: Difficulty;
  scenariosCount: number;
  relevantSkills: string[];
  learningObjectives: string[];
  corePrinciples: string[];
}

export interface SkillScores {
  emotionalRegulation: number;
  perspectiveTaking: number;
  socialAwareness: number;
  communication: number;
  conflictResolution: number;
  deliberateDecisionMaking: number;
}

export interface AssessmentQuestion {
  id: string;
  number: number;
  category: keyof SkillScores;
  question: string;
  context?: string;
  options: {
    text: string;
    score: number; // 1 to 5
    rationale: string;
  }[];
}

export interface AssessmentResult {
  id: string;
  timestamp: number;
  scores: SkillScores;
  primaryStrengths: string[];
  growthAreas: string[];
  recommendedModuleIds: ModuleCategory[];
  levelTitle: string;
  summaryAnalysis: string;
}

export interface JournalEntry {
  id: string;
  title: string;
  category: ModuleCategory | 'general-observation';
  situation: string;
  response: string;
  learnedTakeaway: string;
  futureAction: string;
  timestamp: number;
  isDemo?: boolean;
}

export type TrainingStage = 'Observer' | 'Analyst' | 'Strategist' | 'Self-Mastered';

export interface UserPreferences {
  theme: 'light' | 'dark';
  reducedMotion: boolean;
  soundEnabled: boolean;
  ambientSound: boolean;
  pressureMode: boolean;
  interfaceDensity: 'compact' | 'comfortable';
}

export interface UserProgress {
  attempts: ScenarioAttempt[];
  savedScenarioIds: string[];
  journalEntries: JournalEntry[];
  assessmentResults: AssessmentResult[];
  preferences: UserPreferences;
  currentStage: TrainingStage;
  lastActiveScenarioId?: string;
  xp: number;
  streak: number;
  lastActiveDate?: string;
  unlockedAchievements: string[];
  flashDrillHighScore: number;
  pauseCount: number;
}

export type NavigationDestination =
  | 'intro'
  | 'overview'
  | 'modules'
  | 'module-detail'
  | 'simulator'
  | 'assessment'
  | 'progress'
  | 'journal'
  | 'saved'
  | 'settings'
  | 'methodology'
  | 'flash-drills'
  | 'achievements';
