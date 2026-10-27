import React, { useState, useMemo } from 'react';
import {
  Bookmark,
  BookmarkX,
  PlaySquare,
  Search,
  Filter,
  CheckCircle2,
  Clock,
  ArrowRight,
} from 'lucide-react';
import { useApp } from '../state/AppContext';
import { ALL_SCENARIOS } from '../data/scenarios';
import { Scenario } from '../types';

export const SavedPage: React.FC = () => {
  const { progress, toggleSaveScenario, setDestination, setActiveScenarioId } = useApp();

  const [searchQuery, setSearchQuery] = useState('');
  const [selectedDifficulty, setSelectedDifficulty] = useState<number | 'all'>('all');

  const savedScenarios = useMemo(() => {
    return ALL_SCENARIOS.filter(s => progress.savedScenarioIds.includes(s.id));
  }, [progress.savedScenarioIds]);

  const filteredSaved = useMemo(() => {
    return savedScenarios.filter(s => {
      const matchesSearch =
        s.title.toLowerCase().includes(searchQuery.toLowerCase()) ||
        s.setting.toLowerCase().includes(searchQuery.toLowerCase()) ||
        s.skillTags.some(t => t.toLowerCase().includes(searchQuery.toLowerCase()));

      if (!matchesSearch) return false;
      if (selectedDifficulty !== 'all' && s.difficulty !== selectedDifficulty) return false;
      return true;
    });
  }, [savedScenarios, searchQuery, selectedDifficulty]);

  const completedIds = new Set(progress.attempts.map(a => a.scenarioId));

  return (
    <div className="space-y-8 animate-fade-in max-w-5xl mx-auto pb-16">
      {/* Header */}
      <div className="border-b border-room-border dark:border-room-darkBorder pb-6 flex flex-col md:flex-row md:items-end justify-between gap-4">
        <div>
          <span className="font-mono text-xs uppercase tracking-widest text-room-muted block mb-1">
            PERSONAL REPOSITORY
          </span>
          <h2 className="text-3xl sm:text-4xl font-light text-room-text dark:text-room-darkText tracking-tight">
            Saved Scenarios ({savedScenarios.length})
          </h2>
          <p className="text-sm text-room-muted dark:text-room-darkMuted mt-1 max-w-xl">
            Bookmarked situational exercises for iterative practice, psychological review, and
            scenario replays.
          </p>
        </div>

        {savedScenarios.length > 0 && (
          <button
            onClick={() => {
              setActiveScenarioId(savedScenarios[0].id);
              setDestination('simulator');
            }}
            className="px-5 py-2.5 rounded bg-room-text dark:bg-room-darkText text-room-surface dark:text-room-darkBg font-mono text-xs uppercase font-medium hover:opacity-90 flex items-center space-x-2"
          >
            <PlaySquare size={14} />
            <span>Practice First Saved Drill</span>
          </button>
        )}
      </div>

      {/* Filter and Search Bar */}
      {savedScenarios.length > 0 && (
        <div className="flex flex-col sm:flex-row items-stretch sm:items-center justify-between gap-3 p-4 rounded-xl border border-room-border dark:border-room-darkBorder bg-room-surface dark:bg-room-darkSurface">
          <div className="relative flex-1">
            <Search size={15} className="absolute left-3 top-1/2 -translate-y-1/2 text-room-muted" />
            <input
              type="text"
              value={searchQuery}
              onChange={e => setSearchQuery(e.target.value)}
              placeholder="Search saved scenarios by title or tags..."
              className="w-full pl-9 pr-4 py-2 text-xs rounded border border-room-border dark:border-room-darkBorder bg-room-bg dark:bg-room-darkBg text-room-text dark:text-room-darkText placeholder-room-muted focus:outline-none"
            />
          </div>

          <select
            value={selectedDifficulty}
            onChange={e =>
              setSelectedDifficulty(
                e.target.value === 'all' ? 'all' : parseInt(e.target.value, 10)
              )
            }
            className="px-3 py-2 text-xs font-mono rounded border border-room-border dark:border-room-darkBorder bg-room-bg dark:bg-room-darkBg text-room-text dark:text-room-darkText focus:outline-none"
          >
            <option value="all">All Levels</option>
            <option value="1">Level 1</option>
            <option value="2">Level 2</option>
            <option value="3">Level 3</option>
            <option value="4">Level 4</option>
            <option value="5">Level 5</option>
          </select>
        </div>
      )}

      {/* Saved List */}
      <div className="space-y-3">
        {savedScenarios.length === 0 ? (
          <div className="p-12 text-center rounded-xl border border-room-border dark:border-room-darkBorder bg-room-surface dark:bg-room-darkSurface space-y-3">
            <Bookmark size={32} className="mx-auto text-room-muted" />
            <h4 className="text-base font-medium text-room-text dark:text-room-darkText">
              No Bookmarked Scenarios
            </h4>
            <p className="text-xs text-room-muted max-w-md mx-auto">
              Whenever you encounter a scenario that challenged your instincts, click the bookmark icon
              to save it here for targeted repetition.
            </p>
            <button
              onClick={() => setDestination('modules')}
              className="mt-3 px-4 py-2 text-xs font-mono rounded bg-room-text dark:bg-room-darkText text-room-surface dark:text-room-darkBg font-medium"
            >
              Browse Curriculum Modules
            </button>
          </div>
        ) : filteredSaved.length === 0 ? (
          <div className="p-8 text-center text-xs font-mono text-room-muted">
            No saved scenarios matched your search filter.
          </div>
        ) : (
          filteredSaved.map(sc => {
            const isCompleted = completedIds.has(sc.id);
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
                    <span className="capitalize">{sc.category.replace('-', ' ')}</span>
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

                  <h3 className="text-base font-medium text-room-text dark:text-room-darkText">
                    {sc.title}
                  </h3>

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

                <div className="flex items-center space-x-2 flex-shrink-0">
                  <button
                    onClick={() => toggleSaveScenario(sc.id)}
                    className="p-2 rounded border border-room-border text-room-muted hover:text-rose-600 dark:hover:text-rose-400 transition-colors"
                    title="Remove from Saved"
                  >
                    <BookmarkX size={16} />
                  </button>

                  <button
                    onClick={() => {
                      setActiveScenarioId(sc.id);
                      setDestination('simulator');
                    }}
                    className="px-4 py-2 rounded bg-room-text dark:bg-room-darkText text-room-surface dark:text-room-darkBg font-mono text-xs uppercase font-medium hover:opacity-90 flex items-center space-x-1.5"
                  >
                    <PlaySquare size={13} />
                    <span>Launch Drill</span>
                  </button>
                </div>
              </div>
            );
          })
        )}
      </div>
    </div>
  );
};
