import { Scenario, ModuleCategory } from '../../types';
import { SCENARIOS_1_8 } from './scenarios1_8';
import { SCENARIOS_9_16 } from './scenarios9_16';
import { SCENARIOS_17_24 } from './scenarios17_24';
import { SCENARIOS_25_32 } from './scenarios25_32';

export const ALL_SCENARIOS: Scenario[] = [
  ...SCENARIOS_1_8,
  ...SCENARIOS_9_16,
  ...SCENARIOS_17_24,
  ...SCENARIOS_25_32,
];

export function getScenarioById(id: string): Scenario | undefined {
  return ALL_SCENARIOS.find(s => s.id === id || s.number === id);
}

export function getScenariosByCategory(category: ModuleCategory): Scenario[] {
  return ALL_SCENARIOS.filter(s => s.category === category);
}

export function getScenariosByDifficulty(difficulty: number): Scenario[] {
  return ALL_SCENARIOS.filter(s => s.difficulty === difficulty);
}

export function searchScenarios(query: string): Scenario[] {
  const q = query.toLowerCase().trim();
  if (!q) return ALL_SCENARIOS;
  return ALL_SCENARIOS.filter(s =>
    s.title.toLowerCase().includes(q) ||
    s.setting.toLowerCase().includes(q) ||
    s.context.toLowerCase().includes(q) ||
    s.skillTags.some(t => t.toLowerCase().includes(q)) ||
    s.number.includes(q)
  );
}
