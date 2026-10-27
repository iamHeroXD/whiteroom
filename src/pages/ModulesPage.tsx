import React, { useState, useMemo } from 'react';
import {
  BookOpen,
  Filter,
  Search,
  CheckCircle2,
  Clock,
  ArrowRight,
  Shield,
  Layers,
  Sparkles,
} from 'lucide-react';
import { useApp } from '../state/AppContext';
import { TRAINING_MODULES } from '../data/modules';
import { ALL_SCENARIOS } from '../data/scenarios';
import { ModuleCategory } from '../types';

export const ModulesPage: React.FC = () => {
  const { setDestination, setActiveModuleId, setActiveScenarioId, progress } = useApp();

  const [searchQuery, setSearchQuery] = useState('');
  const [selectedDifficulty, setSelectedDifficulty] = useState<number | 'all'>('all');
  const [completionFilter, setCompletionFilter] = useState<'all' | 'completed' | 'in-progress'>('all');

  const completedScenarioIds = useMemo(
    () => new Set(progress.attempts.map(a => a.scenarioId)),
    [progress.attempts]
  );

  const filteredModules = useMemo(() => {
    return TRAINING_MODULES.filter(mod => {
      // Search text
      const matchesSearch =
        mod.title.toLowerCase().includes(searchQuery.toLowerCase()) ||
        mod.shortDescription.toLowerCase().includes(searchQuery.toLowerCase()) ||
        mod.relevantSkills.some(s => s.toLowerCase().includes(searchQuery.toLowerCase()));

      if (!matchesSearch) return false;

      // Difficulty
      if (selectedDifficulty !== 'all' && mod.difficulty !== selectedDifficulty) {
        return false;
      }

      // Completion
      const scenariosInMod = ALL_SCENARIOS.filter(s => s.category === mod.id);
      const completedCount = scenariosInMod.filter(s => completedScenarioIds.has(s.id)).length;
      const isComplete = scenariosInMod.length > 0 && completedCount === scenariosInMod.length;

      if (completionFilter === 'completed' && !isComplete) return false;
      if (completionFilter === 'in-progress' && (isComplete || completedCount === 0)) return false;

      return true;
    });
  }, [searchQuery, selectedDifficulty, completionFilter, completedScenarioIds]);

  const handleOpenModule = (modId: ModuleCategory) => {
    setActiveModuleId(modId);
    setDestination('module-detail');
  };

  return (
    <div className="space-y-8 animate-fade-in">
      {/* Page Header */}
      <div className="border-b border-room-border dark:border-room-darkBorder pb-6">
        <span className="font-mono text-xs uppercase tracking-widest text-room-muted block mb-1">
          TACTICAL CURRICULUM
        </span>
        <h2 className="text-3xl sm:text-4xl font-light text-room-text dark:text-room-darkText tracking-tight">
          Training Modules
        </h2>
        <p className="text-sm text-room-muted dark:text-room-darkMuted mt-1 max-w-2xl">
          Eight structured domains encompassing social perception, emotional regulation, high-stakes
          conversational pacing, and strategic defense.
        </p>
      </div>

      {/* Filter and Search Controls */}
      <div className="flex flex-col md:flex-row items-stretch md:items-center justify-between gap-4 p-4 rounded-xl border border-room-border dark:border-room-darkBorder bg-room-surface dark:bg-room-darkSurface">
        {/* Search Input */}
        <div className="relative flex-1">
          <Search size={16} className="absolute left-3 top-1/2 -translate-y-1/2 text-room-muted" />
          <input
            type="text"
            value={searchQuery}
            onChange={e => setSearchQuery(e.target.value)}
            placeholder="Search module titles, skills, or concepts..."
            className="w-full pl-9 pr-4 py-2 text-xs rounded border border-room-border dark:border-room-darkBorder bg-room-bg dark:bg-room-darkBg text-room-text dark:text-room-darkText placeholder-room-muted focus:outline-none focus:border-room-text dark:focus:border-room-darkText font-sans"
          />
        </div>

        {/* Filter Drops / Buttons */}
        <div className="flex flex-wrap items-center gap-2">
          {/* Difficulty Dropdown */}
          <select
            value={selectedDifficulty}
            onChange={e =>
              setSelectedDifficulty(
                e.target.value === 'all' ? 'all' : parseInt(e.target.value, 10)
              )
            }
            className="px-3 py-2 text-xs font-mono rounded border border-room-border dark:border-room-darkBorder bg-room-bg dark:bg-room-darkBg text-room-text dark:text-room-darkText focus:outline-none"
          >
            <option value="all">All Difficulties</option>
            <option value="1">Level 1 (Foundational)</option>
            <option value="2">Level 2 (Ambiguity)</option>
            <option value="3">Level 3 (Conflicting Goals)</option>
            <option value="4">Level 4 (Complex Dynamics)</option>
            <option value="5">Level 5 (Mastery)</option>
          </select>

          {/* Completion Status */}
          <select
            value={completionFilter}
            onChange={e => setCompletionFilter(e.target.value as any)}
            className="px-3 py-2 text-xs font-mono rounded border border-room-border dark:border-room-darkBorder bg-room-bg dark:bg-room-darkBg text-room-text dark:text-room-darkText focus:outline-none"
          >
            <option value="all">All Status</option>
            <option value="completed">Completed Only</option>
            <option value="in-progress">In Progress</option>
          </select>
        </div>
      </div>

      {/* Modules Grid */}
      <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
        {filteredModules.map(mod => {
          const modScenarios = ALL_SCENARIOS.filter(s => s.category === mod.id);
          const completedCount = modScenarios.filter(s =>
            completedScenarioIds.has(s.id)
          ).length;
          const progressPercent = Math.round(
            (completedCount / (modScenarios.length || 1)) * 100
          );

          return (
            <div
              key={mod.id}
              className="p-6 rounded-xl border border-room-border dark:border-room-darkBorder bg-room-surface dark:bg-room-darkSurface hover:border-room-text dark:hover:border-room-darkText transition-all flex flex-col justify-between group shadow-sm"
            >
              <div>
                {/* Header line */}
                <div className="flex items-center justify-between pb-3 border-b border-room-border/60 dark:border-room-darkBorder font-mono text-xs text-room-muted">
                  <span className="font-semibold text-room-text dark:text-room-darkText">
                    MODULE {mod.number}
                  </span>
                  <div className="flex items-center space-x-2">
                    <span className="px-2 py-0.5 rounded bg-room-subtle dark:bg-room-darkSubtle text-room-text dark:text-room-darkText">
                      Lvl {mod.difficulty}
                    </span>
                    <span>{modScenarios.length} Drills</span>
                  </div>
                </div>

                {/* Title & Description */}
                <div className="mt-4">
                  <h3 className="text-xl font-medium text-room-text dark:text-room-darkText group-hover:underline cursor-pointer" onClick={() => handleOpenModule(mod.id)}>
                    {mod.title}
                  </h3>
                  <p className="text-xs sm:text-sm text-room-muted dark:text-room-darkMuted mt-2 leading-relaxed">
                    {mod.shortDescription}
                  </p>
                </div>

                {/* Relevant Skills Tags */}
                <div className="mt-4 flex flex-wrap gap-1.5">
                  {mod.relevantSkills.map(skill => (
                    <span
                      key={skill}
                      className="px-2 py-0.5 rounded text-[11px] font-mono bg-room-bg dark:bg-room-darkBg text-room-muted dark:text-room-darkMuted border border-room-border/60 dark:border-room-darkBorder"
                    >
                      {skill}
                    </span>
                  ))}
                </div>
              </div>

              {/* Bottom Progress & Action Row */}
              <div className="mt-6 pt-4 border-t border-room-border dark:border-room-darkBorder">
                <div className="flex items-center justify-between mb-2 text-xs">
                  <span className="font-mono text-room-muted">Progress</span>
                  <span className="font-mono font-medium text-room-text dark:text-room-darkText">
                    {completedCount} / {modScenarios.length} ({progressPercent}%)
                  </span>
                </div>

                {/* Progress bar */}
                <div className="w-full h-1.5 rounded-full bg-room-subtle dark:bg-room-darkSubtle overflow-hidden mb-4">
                  <div
                    className="h-full bg-room-text dark:bg-room-darkText rounded-full transition-all duration-300"
                    style={{ width: `${progressPercent}%` }}
                  />
                </div>

                <div className="flex items-center justify-between gap-3">
                  <button
                    onClick={() => handleOpenModule(mod.id)}
                    className="text-xs font-mono text-room-text dark:text-room-darkText hover:underline flex items-center space-x-1"
                  >
                    <span>Module Syllabus</span>
                    <ArrowRight size={12} />
                  </button>

                  <button
                    onClick={() => {
                      const firstUnfinished =
                        modScenarios.find(s => !completedScenarioIds.has(s.id)) ||
                        modScenarios[0];
                      if (firstUnfinished) {
                        setActiveScenarioId(firstUnfinished.id);
                        setDestination('simulator');
                      }
                    }}
                    className="px-3.5 py-1.5 rounded bg-room-text dark:bg-room-darkText text-room-surface dark:text-room-darkBg font-mono text-xs uppercase font-medium hover:opacity-90 transition-opacity"
                  >
                    {completedCount === 0 ? 'Start Module' : 'Continue Module'}
                  </button>
                </div>
              </div>
            </div>
          );
        })}
      </div>

      {filteredModules.length === 0 && (
        <div className="p-12 text-center rounded-xl border border-room-border dark:border-room-darkBorder bg-room-surface dark:bg-room-darkSurface text-room-muted">
          <p className="text-sm font-mono">No modules matched your current filter criteria.</p>
          <button
            onClick={() => {
              setSearchQuery('');
              setSelectedDifficulty('all');
              setCompletionFilter('all');
            }}
            className="mt-3 px-4 py-1.5 text-xs font-mono rounded bg-room-text dark:bg-room-darkText text-room-surface dark:text-room-darkBg"
          >
            Clear Filters
          </button>
        </div>
      )}
    </div>
  );
};
