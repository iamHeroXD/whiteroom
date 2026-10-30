import React from 'react';
import {
  Sun,
  Moon,
  Search,
  Volume2,
  VolumeX,
  Radio,
  Zap,
  Award,
  Sparkles,
  Flame,
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
    levelInfo,
    progress,
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
      case 'flash-drills':
        return { title: 'Rapid Intent Decoders', category: 'Flash Reflex Training' };
      case 'achievements':
        return { title: 'Operator Accolades', category: 'Progression & Ranks' };
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
    <header className="h-16 border-b border-room-border dark:border-room-darkBorder bg-room-surface/80 dark:bg-room-darkSurface/80 backdrop-blur-md px-4 sm:px-6 flex items-center justify-between sticky top-0 z-10 transition-colors">
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
          className="flex items-center space-x-2 px-2.5 sm:px-3 py-1.5 text-xs rounded border border-room-border dark:border-room-darkBorder bg-room-bg dark:bg-room-darkBg text-room-muted dark:text-room-darkMuted hover:text-room-text dark:hover:text-room-darkText hover:border-room-muted transition-all"
          title="Open Command Palette (Ctrl+K or Cmd+K)"
        >
          <Search size={14} />
          <span className="hidden md:inline font-mono">Search drills or jumps...</span>
          <kbd className="hidden sm:inline-flex items-center space-x-0.5 px-1.5 py-0.5 text-[10px] font-mono bg-room-subtle dark:bg-room-darkSubtle rounded border border-room-border dark:border-room-darkBorder">
            <span>⌘K</span>
          </kbd>
        </button>

        {/* Operator Level Pill (clickable to accolades) */}
        <button
          onClick={() => {
            sounds.playClick(preferences.soundEnabled);
            setDestination('achievements');
          }}
          className="hidden sm:flex items-center gap-1.5 px-2.5 py-1 rounded text-xs font-mono border border-room-border dark:border-room-darkBorder bg-room-subtle dark:bg-room-darkSubtle hover:border-room-text/40 dark:hover:border-room-darkText/40 transition-all text-room-text dark:text-room-darkText"
          title={`Level ${levelInfo.level} · ${progress.xp || 0} XP`}
        >
          <Award size={13} className="text-amber-500" />
          <span className="font-semibold">Lvl {levelInfo.level}</span>
          <span className="text-room-muted hidden lg:inline">({progress.xp || 0} XP)</span>
        </button>

        {/* Ambient Sound Drone Toggle */}
        <button
          onClick={() => {
            sounds.playClick(preferences.soundEnabled);
            updatePreferences({ ambientSound: !preferences.ambientSound });
          }}
          className={`flex items-center gap-1 px-2 py-1.5 rounded border text-xs font-mono transition-all ${
            preferences.ambientSound
              ? 'bg-emerald-500/10 border-emerald-500/40 text-emerald-600 dark:text-emerald-400'
              : 'border-room-border dark:border-room-darkBorder text-room-muted hover:text-room-text dark:hover:text-room-darkText'
          }`}
          title={preferences.ambientSound ? "Mute Atmospheric Drone" : "Enable Focus Drone Sound"}
        >
          <Radio size={13} className={preferences.ambientSound ? "animate-pulse" : ""} />
          <span className="hidden xl:inline text-[10px]">AMBIENT</span>
        </button>

        {/* Sound Effects Toggle */}
        <button
          onClick={() => {
            const nextSound = !preferences.soundEnabled;
            updatePreferences({ soundEnabled: nextSound });
            if (nextSound) sounds.playClick(true);
          }}
          className="p-1.5 rounded text-room-muted hover:text-room-text dark:hover:text-room-darkText transition-colors"
          title={preferences.soundEnabled ? 'Disable UI Audio' : 'Enable UI Audio'}
          aria-label={preferences.soundEnabled ? 'Disable Audio' : 'Enable Audio'}
        >
          {preferences.soundEnabled ? <Volume2 size={16} /> : <VolumeX size={16} />}
        </button>

        {/* Theme Toggle (Light / Dark) */}
        <button
          onClick={() => {
            sounds.playClick(preferences.soundEnabled);
            updatePreferences({
              theme: preferences.theme === 'dark' ? 'light' : 'dark',
            });
          }}
          className="p-1.5 rounded text-room-muted hover:text-room-text dark:hover:text-room-darkText transition-colors"
          title={`Switch to ${preferences.theme === 'dark' ? 'Light' : 'Dark'} Mode`}
          aria-label="Toggle Theme"
        >
          {preferences.theme === 'dark' ? <Sun size={16} /> : <Moon size={16} />}
        </button>
      </div>
    </header>
  );
};
