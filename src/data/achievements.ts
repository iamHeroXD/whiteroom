export interface Achievement {
  id: string;
  title: string;
  description: string;
  category: 'tactical' | 'discipline' | 'intuition' | 'mastery';
  xpReward: number;
  icon: string; // Lucide icon name indicator
}

export const ACHIEVEMENTS: Achievement[] = [
  {
    id: 'first-drill',
    title: 'Initiate Protocol',
    description: 'Complete your first situational simulation drill.',
    category: 'tactical',
    xpReward: 100,
    icon: 'PlaySquare',
  },
  {
    id: 's-rank-first',
    title: 'Cold Composure',
    description: 'Achieve an S-Rank evaluation on any simulation scenario.',
    category: 'discipline',
    xpReward: 200,
    icon: 'Shield',
  },
  {
    id: 'breath-master',
    title: 'Master of the Pause',
    description: 'Execute the 3-Second Breath & Diagnostic Pause in 3 different drills.',
    category: 'discipline',
    xpReward: 150,
    icon: 'Brain',
  },
  {
    id: 'pressure-veteran',
    title: 'Pressure Tested',
    description: 'Complete a simulation drill with High-Pressure Timer mode enabled.',
    category: 'tactical',
    xpReward: 250,
    icon: 'Zap',
  },
  {
    id: 'journal-scholar',
    title: 'Reflective Clarity',
    description: 'Document 3 deliberate reflections in your Decision Journal.',
    category: 'discipline',
    xpReward: 175,
    icon: 'BookMarked',
  },
  {
    id: 'flash-master',
    title: 'Cognitive Radar',
    description: 'Achieve a 5+ correct streak in Flash Reaction Drills.',
    category: 'intuition',
    xpReward: 250,
    icon: 'Sparkles',
  },
  {
    id: 'tactical-triad',
    title: 'Cross-Domain Operator',
    description: 'Complete drills across at least 4 different curriculum modules.',
    category: 'tactical',
    xpReward: 300,
    icon: 'Compass',
  },
  {
    id: 'self-mastered',
    title: 'The Room Master',
    description: 'Ascend to the highest candidate rank: Self-Mastered.',
    category: 'mastery',
    xpReward: 500,
    icon: 'Award',
  },
];

export function calculateLevelFromXP(xp: number): {
  level: number;
  title: string;
  currentLevelXp: number;
  nextLevelXp: number;
  progressPercent: number;
} {
  const thresholds = [
    { level: 1, xp: 0, title: 'Candidate #048 (Trainee)' },
    { level: 2, xp: 250, title: 'Cold Observer' },
    { level: 3, xp: 600, title: 'Diagnostic Analyst' },
    { level: 4, xp: 1100, title: 'Tactical Strategist' },
    { level: 5, xp: 1800, title: 'Senior Operator' },
    { level: 6, xp: 2700, title: 'Master of Composure' },
    { level: 7, xp: 4000, title: 'Room Director' },
  ];

  let currentThreshold = thresholds[0];
  let nextThreshold = thresholds[1];

  for (let i = thresholds.length - 1; i >= 0; i--) {
    if (xp >= thresholds[i].xp) {
      currentThreshold = thresholds[i];
      nextThreshold = thresholds[i + 1] || { level: currentThreshold.level + 1, xp: currentThreshold.xp + 1500, title: 'Ascended Master' };
      break;
    }
  }

  const range = nextThreshold.xp - currentThreshold.xp;
  const inLevel = Math.max(0, xp - currentThreshold.xp);
  const progressPercent = Math.min(100, Math.round((inLevel / range) * 100));

  return {
    level: currentThreshold.level,
    title: currentThreshold.title,
    currentLevelXp: xp,
    nextLevelXp: nextThreshold.xp,
    progressPercent,
  };
}
