import React from 'react';
import {
  ArrowLeft,
  PlaySquare,
  Bookmark,
  CheckCircle2,
  Clock,
  Shield,
  Layers,
  Sparkles,
} from 'lucide-react';
import { useApp } from '../state/AppContext';
import { TRAINING_MODULES } from '../data/modules';
import { ALL_SCENARIOS } from '../data/scenarios';

export const ModuleDetailPage: React.FC = () => {
  const {
    activeModuleId,
    setDestination,
    setActiveScenarioId,
    progress,
    toggleSaveScenario,
    isScenarioSaved,
  } = useApp();

  const currentModule =
    TRAINING_MODULES.find(m => m.id === activeModuleId) || TRAINING_MODULES[0];

  const scenarios = ALL_SCENARIOS.filter(s => s.category === currentModule.id);

  const completedIds = new Set(progress.attempts.map(a => a.scenarioId));
  const completedCount = scenarios.filter(s => completedIds.has(s.id)).length;

  return (
    <div className="space-y-8 animate-fade-in max-w-5xl mx-auto">
      {/* Back button */}
      <div>
        <button
          onClick={() => setDestination('modules')}
          className="inline-flex items-center space-x-2 text-xs font-mono text-room-muted hover:text-room-text dark:hover:text-room-darkText transition-colors"
        >
          <ArrowLeft size={14} />
          <span>Return to Modules Directory</span>
        </button>
      </div>

      {/* Module Header Card */}
      <div className="p-6 sm:p-8 rounded-xl border border-room-border dark:border-room-darkBorder bg-room-surface dark:bg-room-darkSurface space-y-6">
        <div className="flex flex-wrap items-center justify-between gap-2 pb-4 border-b border-room-border dark:border-room-darkBorder font-mono text-xs text-room-muted">
          <span className="font-semibold text-room-text dark:text-room-darkText">
            MODULE SPECIFICATION — {currentModule.number}
          </span>
          <div className="flex items-center space-x-3">
            <span className="px-2 py-0.5 rounded bg-room-subtle dark:bg-room-darkSubtle text-room-text dark:text-room-darkText">
              Lvl {currentModule.difficulty}
            </span>
            <span>
              {completedCount}/{scenarios.length} Drills Solved
            </span>
          </div>
        </div>

        <div>
          <h2 className="text-2xl sm:text-3xl font-light text-room-text dark:text-room-darkText tracking-tight">
            {currentModule.title}
          </h2>
          <p className="text-sm sm:text-base text-room-muted dark:text-room-darkMuted mt-3 leading-relaxed">
            {currentModule.fullDescription}
          </p>
        </div>

        {/* 2 Grid: Learning Objectives & Core Principles */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6 pt-4 border-t border-room-border dark:border-room-darkBorder">
          {/* Learning Objectives */}
          <div>
            <h4 className="text-xs font-mono uppercase tracking-widest text-room-muted mb-3">
              Learning Objectives
            </h4>
            <ul className="space-y-2">
              {currentModule.learningObjectives.map((obj, i) => (
                <li key={i} className="text-xs text-room-text dark:text-room-darkText flex items-start space-x-2">
                  <span className="text-room-muted font-mono mt-0.5">•</span>
                  <span>{obj}</span>
                </li>
              ))}
            </ul>
          </div>

          {/* Core Principles */}
          <div>
            <h4 className="text-xs font-mono uppercase tracking-widest text-room-muted mb-3">
              Core Principles
            </h4>
            <ul className="space-y-2">
              {currentModule.corePrinciples.map((pri, i) => (
                <li key={i} className="text-xs text-room-text dark:text-room-darkText flex items-start space-x-2">
                  <span className="text-room-muted font-mono mt-0.5">―</span>
                  <span className="italic">{pri}</span>
                </li>
              ))}
            </ul>
          </div>
        </div>
      </div>

      {/* Module Scenarios List */}
      <div className="space-y-4">
        <div className="flex items-center justify-between">
          <h3 className="text-lg font-medium text-room-text dark:text-room-darkText">
            Curriculum Scenarios ({scenarios.length})
          </h3>
          <span className="text-xs font-mono text-room-muted">
            All scenarios contain branching outcomes & local coaching feedback
          </span>
        </div>

        <div className="space-y-3">
          {scenarios.map(sc => {
            const isCompleted = completedIds.has(sc.id);
            const isSaved = isScenarioSaved(sc.id);

            return (
              <div
                key={sc.id}
                className="p-5 rounded-xl border border-room-border dark:border-room-darkBorder bg-room-surface dark:bg-room-darkSurface hover:border-room-text dark:hover:border-room-darkText transition-all flex flex-col sm:flex-row sm:items-center justify-between gap-4"
              >
                <div className="space-y-1.5 flex-1 min-w-0">
                  <div className="flex items-center space-x-2 text-xs font-mono text-room-muted">
                    <span className="font-semibold text-room-text dark:text-room-darkText">
                      #{sc.number}
                    </span>
                    <span>•</span>
                    <span>Lvl {sc.difficulty}</span>
                    <span>•</span>
                    <span>{sc.setting}</span>
                    {isCompleted && (
                      <span className="inline-flex items-center space-x-1 text-emerald-600 dark:text-emerald-400 font-medium">
                        <CheckCircle2 size={12} />
                        <span>Completed</span>
                      </span>
                    )}
                  </div>

                  <h4 className="text-base font-medium text-room-text dark:text-room-darkText">
                    {sc.title}
                  </h4>

                  <p className="text-xs text-room-muted line-clamp-1">
                    {sc.context}
                  </p>

                  <div className="flex flex-wrap gap-1.5 pt-1">
                    {sc.skillTags.map(tag => (
                      <span
                        key={tag}
                        className="px-2 py-0.5 rounded text-[10px] font-mono bg-room-subtle dark:bg-room-darkSubtle text-room-muted"
                      >
                        {tag}
                      </span>
                    ))}
                  </div>
                </div>

                {/* Actions */}
                <div className="flex items-center space-x-2 sm:self-center flex-shrink-0">
                  <button
                    onClick={() => toggleSaveScenario(sc.id)}
                    className={`p-2 rounded border border-room-border dark:border-room-darkBorder transition-colors ${
                      isSaved
                        ? 'text-room-text dark:text-room-darkText bg-room-subtle dark:bg-room-darkSubtle'
                        : 'text-room-muted hover:text-room-text dark:hover:text-room-darkText'
                    }`}
                    title={isSaved ? 'Remove from Saved' : 'Save Scenario'}
                  >
                    <Bookmark size={15} fill={isSaved ? 'currentColor' : 'none'} />
                  </button>

                  <button
                    onClick={() => {
                      setActiveScenarioId(sc.id);
                      setDestination('simulator');
                    }}
                    className="px-4 py-2 rounded bg-room-text dark:bg-room-darkText text-room-surface dark:text-room-darkBg font-mono text-xs uppercase font-medium hover:opacity-90 transition-opacity flex items-center space-x-1.5"
                  >
                    <PlaySquare size={13} />
                    <span>{isCompleted ? 'Replay Drill' : 'Start Drill'}</span>
                  </button>
                </div>
              </div>
            );
          })}
        </div>
      </div>
    </div>
  );
};
