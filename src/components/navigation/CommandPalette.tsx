import React, { useState, useEffect, useRef } from 'react';
import {
  Search,
  Compass,
  PlaySquare,
  BookOpen,
  CheckCircle2,
  TrendingUp,
  BookMarked,
  Bookmark,
  Settings,
  HelpCircle,
  Sun,
  Moon,
  ArrowRight,
  X,
  Zap,
  Award,
} from 'lucide-react';
import { useApp } from '../../state/AppContext';
import { ALL_SCENARIOS, searchScenarios } from '../../data/scenarios';
import { NavigationDestination } from '../../types';

export const CommandPalette: React.FC = () => {
  const {
    isCommandPaletteOpen,
    setIsCommandPaletteOpen,
    setDestination,
    setActiveScenarioId,
    preferences,
    updatePreferences,
  } = useApp();

  const [query, setQuery] = useState('');
  const [selectedIndex, setSelectedIndex] = useState(0);
  const inputRef = useRef<HTMLInputElement>(null);

  // Keyboard shortcut listener for Ctrl+K / Cmd+K and Esc
  useEffect(() => {
    const handleKeyDown = (e: KeyboardEvent) => {
      if ((e.metaKey || e.ctrlKey) && e.key === 'k') {
        e.preventDefault();
        setIsCommandPaletteOpen(!isCommandPaletteOpen);
      }
      if (e.key === 'Escape' && isCommandPaletteOpen) {
        setIsCommandPaletteOpen(false);
      }
    };

    window.addEventListener('keydown', handleKeyDown);
    return () => window.removeEventListener('keydown', handleKeyDown);
  }, [isCommandPaletteOpen, setIsCommandPaletteOpen]);

  // Focus input when opened
  useEffect(() => {
    if (isCommandPaletteOpen) {
      setQuery('');
      setSelectedIndex(0);
      setTimeout(() => inputRef.current?.focus(), 50);
    }
  }, [isCommandPaletteOpen]);

  if (!isCommandPaletteOpen) return null;

  // Base navigation commands
  const baseCommands = [
    {
      id: 'cmd-overview',
      type: 'action',
      label: 'Navigate to Overview',
      subtitle: 'Candidate training dashboard and profile',
      icon: Compass,
      perform: () => {
        setDestination('overview');
        setIsCommandPaletteOpen(false);
      },
    },
    {
      id: 'cmd-simulator',
      type: 'action',
      label: 'Open Training Room (Simulator)',
      subtitle: 'Face interactive social and psychological scenarios',
      icon: PlaySquare,
      perform: () => {
        setDestination('simulator');
        setIsCommandPaletteOpen(false);
      },
    },
    {
      id: 'cmd-flash-drills',
      type: 'action',
      label: 'Launch Flash Intent Drills',
      subtitle: '8-second rapid psychological decoder challenges with combo multipliers',
      icon: Zap,
      perform: () => {
        setDestination('flash-drills');
        setIsCommandPaletteOpen(false);
      },
    },
    {
      id: 'cmd-achievements',
      type: 'action',
      label: 'View Accolades & Operator Rank',
      subtitle: 'Check unlocked badges, level milestones, and XP progression',
      icon: Award,
      perform: () => {
        setDestination('achievements');
        setIsCommandPaletteOpen(false);
      },
    },
    {
      id: 'cmd-modules',
      type: 'action',
      label: 'Browse Modules',
      subtitle: '8 training modules across EQ and strategic skills',
      icon: BookOpen,
      perform: () => {
        setDestination('modules');
        setIsCommandPaletteOpen(false);
      },
    },
    {
      id: 'cmd-assessment',
      type: 'action',
      label: 'Open Baseline Assessment',
      subtitle: 'Take or review the 16-point diagnostic assessment',
      icon: CheckCircle2,
      perform: () => {
        setDestination('assessment');
        setIsCommandPaletteOpen(false);
      },
    },
    {
      id: 'cmd-progress',
      type: 'action',
      label: 'View Progress & Analytics',
      subtitle: 'Candidate analytics, stages, and practice history',
      icon: TrendingUp,
      perform: () => {
        setDestination('progress');
        setIsCommandPaletteOpen(false);
      },
    },
    {
      id: 'cmd-journal',
      type: 'action',
      label: 'Open Decision Journal',
      subtitle: 'Review personal reflection entries and takeaways',
      icon: BookMarked,
      perform: () => {
        setDestination('journal');
        setIsCommandPaletteOpen(false);
      },
    },
    {
      id: 'cmd-saved',
      type: 'action',
      label: 'View Saved Scenarios',
      subtitle: 'Access bookmarked training drills',
      icon: Bookmark,
      perform: () => {
        setDestination('saved');
        setIsCommandPaletteOpen(false);
      },
    },
    {
      id: 'cmd-theme',
      type: 'action',
      label: `Switch to ${preferences.theme === 'dark' ? 'Light' : 'Dark'} Mode`,
      subtitle: 'Toggle interface monochromatic theme',
      icon: preferences.theme === 'dark' ? Sun : Moon,
      perform: () => {
        updatePreferences({
          theme: preferences.theme === 'dark' ? 'light' : 'dark',
        });
        setIsCommandPaletteOpen(false);
      },
    },
    {
      id: 'cmd-methodology',
      type: 'action',
      label: 'Read The White Room Method',
      subtitle: 'Architectural principles and cognitive discipline',
      icon: HelpCircle,
      perform: () => {
        setDestination('methodology');
        setIsCommandPaletteOpen(false);
      },
    },
  ];

  // Filter commands by query
  const filteredCommands = query.trim()
    ? baseCommands.filter(
        c =>
          c.label.toLowerCase().includes(query.toLowerCase()) ||
          c.subtitle.toLowerCase().includes(query.toLowerCase())
      )
    : baseCommands;

  // Search scenarios by query
  const matchingScenarios = query.trim()
    ? searchScenarios(query).slice(0, 5)
    : ALL_SCENARIOS.slice(0, 4);

  // Combine items for arrow navigation
  const allItems = [
    ...filteredCommands.map(c => ({ kind: 'command' as const, data: c })),
    ...matchingScenarios.map(s => ({ kind: 'scenario' as const, data: s })),
  ];

  const handleKeyDown = (e: React.KeyboardEvent) => {
    if (e.key === 'ArrowDown') {
      e.preventDefault();
      setSelectedIndex(prev => (prev < allItems.length - 1 ? prev + 1 : 0));
    } else if (e.key === 'ArrowUp') {
      e.preventDefault();
      setSelectedIndex(prev => (prev > 0 ? prev - 1 : allItems.length - 1));
    } else if (e.key === 'Enter') {
      e.preventDefault();
      const current = allItems[selectedIndex];
      if (current) {
        if (current.kind === 'command') {
          current.data.perform();
        } else {
          setActiveScenarioId(current.data.id);
          setDestination('simulator');
          setIsCommandPaletteOpen(false);
        }
      }
    }
  };

  return (
    <div className="fixed inset-0 z-50 bg-black/60 backdrop-blur-sm flex items-start justify-center pt-20 px-4 animate-fade-in">
      <div
        className="w-full max-w-2xl bg-room-surface dark:bg-room-darkSurface rounded-lg border border-room-border dark:border-room-darkBorder shadow-2xl overflow-hidden flex flex-col"
        onClick={e => e.stopPropagation()}
      >
        {/* Search Input Bar */}
        <div className="flex items-center px-4 py-3.5 border-b border-room-border dark:border-room-darkBorder">
          <Search size={18} className="text-room-muted dark:text-room-darkMuted mr-3" />
          <input
            ref={inputRef}
            type="text"
            value={query}
            onChange={e => {
              setQuery(e.target.value);
              setSelectedIndex(0);
            }}
            onKeyDown={handleKeyDown}
            placeholder="Type a command, destination, or scenario keyword..."
            className="flex-1 bg-transparent text-room-text dark:text-room-darkText placeholder-room-muted dark:placeholder-room-darkMuted text-sm outline-none font-sans"
          />
          <button
            onClick={() => setIsCommandPaletteOpen(false)}
            className="p-1 rounded text-room-muted hover:text-room-text dark:hover:text-room-darkText"
          >
            <X size={16} />
          </button>
        </div>

        {/* Results Body */}
        <div className="max-h-[380px] overflow-y-auto p-2 space-y-4">
          {/* Quick Actions */}
          {filteredCommands.length > 0 && (
            <div>
              <div className="px-2 py-1 text-[11px] font-mono uppercase tracking-wider text-room-muted dark:text-room-darkMuted">
                Commands & Destinations
              </div>
              <div className="space-y-0.5 mt-1">
                {filteredCommands.map((cmd, idx) => {
                  const Icon = cmd.icon;
                  const isSelected = selectedIndex === idx;
                  return (
                    <button
                      key={cmd.id}
                      onClick={cmd.perform}
                      className={`w-full flex items-center justify-between p-2.5 rounded text-left transition-colors ${
                        isSelected
                          ? 'bg-room-subtle dark:bg-room-darkSubtle text-room-text dark:text-room-darkText'
                          : 'text-room-muted dark:text-room-darkMuted hover:bg-room-subtle/50 dark:hover:bg-room-darkSubtle/50'
                      }`}
                    >
                      <div className="flex items-center space-x-3">
                        <Icon size={16} className="text-room-text dark:text-room-darkText" />
                        <div>
                          <span className="text-xs font-medium text-room-text dark:text-room-darkText block">
                            {cmd.label}
                          </span>
                          <span className="text-[11px] text-room-muted dark:text-room-darkMuted">
                            {cmd.subtitle}
                          </span>
                        </div>
                      </div>
                      <ArrowRight size={13} className="text-room-muted" />
                    </button>
                  );
                })}
              </div>
            </div>
          )}

          {/* Scenario Matches */}
          {matchingScenarios.length > 0 && (
            <div>
              <div className="px-2 py-1 text-[11px] font-mono uppercase tracking-wider text-room-muted dark:text-room-darkMuted">
                {query.trim() ? 'Matching Scenarios' : 'Featured Drills'}
              </div>
              <div className="space-y-0.5 mt-1">
                {matchingScenarios.map((sc, idx) => {
                  const itemIndex = filteredCommands.length + idx;
                  const isSelected = selectedIndex === itemIndex;
                  return (
                    <button
                      key={sc.id}
                      onClick={() => {
                        setActiveScenarioId(sc.id);
                        setDestination('simulator');
                        setIsCommandPaletteOpen(false);
                      }}
                      className={`w-full flex items-center justify-between p-2.5 rounded text-left transition-colors ${
                        isSelected
                          ? 'bg-room-subtle dark:bg-room-darkSubtle text-room-text dark:text-room-darkText'
                          : 'text-room-muted dark:text-room-darkMuted hover:bg-room-subtle/50 dark:hover:bg-room-darkSubtle/50'
                      }`}
                    >
                      <div className="flex items-center space-x-3">
                        <span className="font-mono text-xs text-room-muted font-semibold">
                          #{sc.number}
                        </span>
                        <div>
                          <span className="text-xs font-medium text-room-text dark:text-room-darkText block">
                            {sc.title}
                          </span>
                          <span className="text-[11px] text-room-muted dark:text-room-darkMuted line-clamp-1">
                            {sc.setting} — {sc.skillTags.slice(0, 2).join(', ')}
                          </span>
                        </div>
                      </div>
                      <span className="text-[10px] font-mono px-1.5 py-0.5 bg-room-border/40 dark:bg-room-darkBorder rounded text-room-muted">
                        Lvl {sc.difficulty}
                      </span>
                    </button>
                  );
                })}
              </div>
            </div>
          )}

          {allItems.length === 0 && (
            <div className="py-8 text-center text-room-muted dark:text-room-darkMuted text-xs font-mono">
              No matching commands or scenarios found for "{query}".
            </div>
          )}
        </div>

        {/* Footer shortcuts helper */}
        <div className="px-4 py-2 bg-room-bg dark:bg-room-darkBg border-t border-room-border dark:border-room-darkBorder flex items-center justify-between text-[11px] font-mono text-room-muted">
          <span>Use ↑ and ↓ to navigate</span>
          <span>Press Enter to select • Esc to close</span>
        </div>
      </div>
    </div>
  );
};
