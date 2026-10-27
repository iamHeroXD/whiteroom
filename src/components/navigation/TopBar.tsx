import React from 'react';
import {
  Sun,
  Moon,
  Search,
  Volume2,
  VolumeX,
  HelpCircle,
  PlaySquare,
  Sparkles,
  Compass,
} from 'lucide-react';
import { useApp } from '../../state/AppContext';
import { NavigationDestination } from '../../types';
import { sounds } from '../../utils/audio';

export const TopBar: React.FC = () => {
  const {
    destination,
    setDestination,
    preferences,
    updatePreferences,
    setIsCommandPaletteOpen,
    setIsOnboardingOpen,
  } = useApp();

  const getPageTitle = (dest: NavigationDestination): { title: string; category?: string } => {
    switch (dest) {
      case 'intro':
        return { title: 'White Room', category: 'Entry Protocol' };
      case 'overview':
        return { title: 'Training Overview', category: 'Candidate Dashboard' };
      case 'modules':
        return { title: 'Curriculum Modules', category: 'Tactical Domains' };
      case 'module-detail':
        return { title: 'Module Specification', category: 'Curriculum' };
      case 'simulator':
        return { title: 'Situation Simulator', category: 'Live Environment' };
      case 'assessment':
        return { title: 'EQ Baseline Assessment', category: 'Diagnostic Evaluation' };
      case 'progress':
        return { title: 'Progress & Analytics', category: 'Performance Metrics' };
      case 'journal':
        return { title: 'Decision Journal', category: 'Personal Reflection' };
      case 'saved':
        return { title: 'Saved Scenarios', category: 'Archived Drills' };
      case 'settings':
        return { title: 'System Settings', category: 'Preferences & Storage' };
      case 'methodology':
        return { title: 'The White Room Method', category: 'Architectural Philosophy' };
      default:
        return { title: 'White Room', category: 'System' };
    }
  };

  const { title, category } = getPageTitle(destination);

  return (
    <header className="h-16 border-b border-room-border dark:border-room-darkBorder bg-room-surface/80 dark:bg-room-darkSurface/80 backdrop-blur-md px-6 flex items-center justify-between sticky top-0 z-10 transition-colors">
      {/* Breadcrumb / Title */}
      <div className="flex items-center space-x-3">
        <div className="hidden sm:block">
          <span className="font-mono text-[11px] text-room-muted dark:text-room-darkMuted uppercase tracking-wider block leading-none">
            {category}
          </span>
          <h1 className="text-base font-semibold tracking-tight text-room-text dark:text-room-darkText mt-0.5">
            {title}
          </h1>
        </div>
        <div className="sm:hidden text-sm font-semibold text-room-text dark:text-room-darkText">
          {title}
        </div>
      </div>

      {/* Center / Right controls */}
      <div className="flex items-center space-x-2 sm:space-x-3">
        {/* Command Search Palette trigger */}
        <button
          onClick={() => setIsCommandPaletteOpen(true)}
          className="flex items-center space-x-2 px-3 py-1.5 text-xs rounded border border-room-border dark:border-room-darkBorder bg-room-bg dark:bg-room-darkBg text-room-muted dark:text-room-darkMuted hover:text-room-text dark:hover:text-room-darkText hover:border-room-muted transition-all"
          title="Open Command Palette (Ctrl+K or Cmd+K)"
        >
          <Search size={14} />
          <span className="hidden md:inline font-mono">Search drills or jumps...</span>
          <kbd className="hidden sm:inline-flex items-center space-x-0.5 px-1.5 py-0.5 text-[10px] font-mono bg-room-subtle dark:bg-room-darkSubtle rounded border border-room-border dark:border-room-darkBorder">
            <span>⌘</span>
            <span>K</span>
          </kbd>
        </button>

        {/* Quick Simulator Resume Button if not in simulator */}
        {destination !== 'simulator' && destination !== 'intro' && (
          <button
            onClick={() => {
              sounds.playClick(preferences.soundEnabled);
              setDestination('simulator');
            }}
            className="hidden lg:flex items-center space-x-1.5 px-3 py-1.5 text-xs font-mono font-medium rounded bg-room-text dark:bg-room-darkText text-room-surface dark:text-room-darkBg hover:opacity-90 transition-opacity"
          >
            <PlaySquare size={13} />
            <span>Enter Simulator</span>
          </button>
        )}

        {/* System Tour / Quick Guide Button */}
        <button
          onClick={() => {
            sounds.playClick(preferences.soundEnabled);
            setIsOnboardingOpen(true);
          }}
          className="flex items-center space-x-1 px-2.5 py-1.5 rounded border border-room-border dark:border-room-darkBorder text-xs font-mono text-room-muted hover:text-room-text dark:hover:text-room-darkText transition-colors"
          title="How White Room Works"
        >
          <Sparkles size={13} className="text-amber-500" />
          <span className="hidden sm:inline">Guide</span>
        </button>

        {/* Sound toggle */}
        <button
          onClick={() => {
            const next = !preferences.soundEnabled;
            if (next) sounds.playSuccess(true);
            updatePreferences({ soundEnabled: next });
          }}
          className={`p-2 rounded border border-room-border dark:border-room-darkBorder hover:bg-room-subtle dark:hover:bg-room-darkSubtle transition-colors ${
            preferences.soundEnabled ? 'text-room-text dark:text-room-darkText' : 'text-room-muted dark:text-room-darkMuted'
          }`}
          title={preferences.soundEnabled ? 'Sound Enabled' : 'Sound Muted'}
          aria-label="Toggle Sound"
        >
          {preferences.soundEnabled ? <Volume2 size={16} /> : <VolumeX size={16} />}
        </button>

        {/* Theme toggle */}
        <button
          onClick={() => {
            sounds.playClick(preferences.soundEnabled);
            updatePreferences({
              theme: preferences.theme === 'dark' ? 'light' : 'dark',
            });
          }}
          className="p-2 rounded border border-room-border dark:border-room-darkBorder text-room-text dark:text-room-darkText hover:bg-room-subtle dark:hover:bg-room-darkSubtle transition-colors"
          title={`Switch to ${preferences.theme === 'dark' ? 'Light' : 'Dark'} Mode`}
          aria-label="Toggle Theme"
        >
          {preferences.theme === 'dark' ? <Sun size={16} /> : <Moon size={16} />}
        </button>

        {/* Methodology quick link */}
        <button
          onClick={() => setDestination('methodology')}
          className="p-2 rounded border border-room-border dark:border-room-darkBorder text-room-muted hover:text-room-text dark:text-room-darkMuted dark:hover:text-room-darkText hover:bg-room-subtle dark:hover:bg-room-darkSubtle transition-colors"
          title="Methodology Guide"
          aria-label="Methodology Guide"
        >
          <HelpCircle size={16} />
        </button>
      </div>
    </header>
  );
};
