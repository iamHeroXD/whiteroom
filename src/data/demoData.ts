import { JournalEntry, ScenarioAttempt, AssessmentResult, UserPreferences } from '../types';

export const INITIAL_PREFERENCES: UserPreferences = {
  theme: 'light',
  reducedMotion: false,
  soundEnabled: false,
  interfaceDensity: 'comfortable',
};

export const DEMO_JOURNAL_ENTRIES: JournalEntry[] = [
  {
    id: 'demo-journal-1',
    title: 'De-escalating the Review Standoff',
    category: 'conflict-resolution',
    situation: 'During our sprint retro, an external designer openly challenged my backend schema, claiming it slowed down client rendering.',
    response: 'I paused for 3 seconds, acknowledged that render latency was an essential user metric, and offered to profile the payload together on staging rather than arguing about blame.',
    learnedTakeaway: 'The moment you agree that the other person’s metric is valuable, their need to defend their status drops immediately.',
    futureAction: 'Before countering a technical critique, validate the underlying user outcome they are trying to protect.',
    timestamp: Date.now() - 86400000 * 3, // 3 days ago
    isDemo: true,
  },
  {
    id: 'demo-journal-2',
    title: 'Resisting False Urgency on Slack',
    category: 'conversation-mastery',
    situation: 'Received an ambiguous ping at 10 PM marked "URGENT PLEASE READ" regarding a non-blocking copy change.',
    response: 'Resisted the impulse to boot my workstation. Left it unread until 8:30 AM and replied with the revised string cleanly.',
    learnedTakeaway: 'Urgency is often an emotional state projected by poor planners, not an objective operational emergency.',
    futureAction: 'Maintain strict asynchronous response windows to protect evening focus.',
    timestamp: Date.now() - 86400000 * 1, // 1 day ago
    isDemo: true,
  }
];

export const DEMO_SCENARIO_ATTEMPTS: ScenarioAttempt[] = [
  {
    id: 'demo-attempt-1',
    scenarioId: 'sc-001',
    scenarioTitle: 'The Public Challenge',
    category: 'social-intelligence',
    selectedOptionId: 'opt-1b',
    selectedOptionLabel: 'B',
    userReflection: 'Felt my chest tighten when Julian spoke, but asking for evidence turned the whole room’s dynamic back in my favor.',
    timestamp: Date.now() - 86400000 * 2,
    scoreIndicators: {
      emotionalRegulation: 92,
      socialAwareness: 90,
      strategicThinking: 95,
      assertiveness: 88,
    }
  }
];

export const DEMO_ASSESSMENT_RESULT: AssessmentResult = {
  id: 'demo-assessment-1',
  timestamp: Date.now() - 86400000 * 7,
  scores: {
    emotionalRegulation: 78,
    perspectiveTaking: 82,
    socialAwareness: 80,
    communication: 74,
    conflictResolution: 85,
    deliberateDecisionMaking: 80,
  },
  primaryStrengths: ['Conflict De-escalation', 'Perspective-Taking'],
  growthAreas: ['Precision Communication', 'Emotional Regulation'],
  recommendedModuleIds: ['conversation-mastery', 'emotional-control'],
  levelTitle: 'Strategist (Proficient Operator)',
  summaryAnalysis: 'You reliably decouple ego from provocation and anticipate second-order consequences. Deepening your diagnostic questioning under pressure will elevate you to complete mastery.'
};
