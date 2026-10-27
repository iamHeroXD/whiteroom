import React, { useState } from 'react';
import {
  Settings,
  Sun,
  Moon,
  Volume2,
  VolumeX,
  RotateCcw,
  Trash2,
  Shield,
  Check,
  AlertTriangle,
  Monitor,
  Layout,
  HardDrive,
} from 'lucide-react';
import { useApp } from '../state/AppContext';

export const SettingsPage: React.FC = () => {
  const {
    preferences,
    updatePreferences,
    resetProgress,
    restoreSampleData,
    clearJournalData,
    progress,
  } = useApp();

  const [confirmModal, setConfirmModal] = useState<{
    type: 'reset' | 'restore' | 'clear-journal';
    title: string;
    message: string;
  } | null>(null);

  const [toastMessage, setToastMessage] = useState<string | null>(null);

  const showToast = (msg: string) => {
    setToastMessage(msg);
    setTimeout(() => setToastMessage(null), 3000);
  };

  const handleExecuteModalAction = () => {
    if (!confirmModal) return;

    if (confirmModal.type === 'reset') {
      resetProgress();
      showToast('All training records and candidate progress have been cleared.');
    } else if (confirmModal.type === 'restore') {
      restoreSampleData();
      showToast('Demonstration baseline dataset restored successfully.');
    } else if (confirmModal.type === 'clear-journal') {
      clearJournalData();
      showToast('Personal decision journal records cleared.');
    }

    setConfirmModal(null);
  };

  return (
    <div className="space-y-8 animate-fade-in max-w-4xl mx-auto pb-16">
      {/* Header */}
      <div className="border-b border-room-border dark:border-room-darkBorder pb-6">
        <span className="font-mono text-xs uppercase tracking-widest text-room-muted block mb-1">
          SYSTEM CONFIGURATION
        </span>
        <h2 className="text-3xl sm:text-4xl font-light text-room-text dark:text-room-darkText tracking-tight">
          Settings & Environment
        </h2>
        <p className="text-sm text-room-muted dark:text-room-darkMuted mt-1">
          Manage visual presentation, motion dynamics, auditory signaling, and local storage state.
        </p>
      </div>

      {toastMessage && (
        <div className="p-4 rounded-lg bg-room-subtle dark:bg-room-darkSubtle border border-room-border dark:border-room-darkBorder font-mono text-xs text-room-text dark:text-room-darkText flex items-center space-x-2 animate-slide-up">
          <Check size={15} className="text-emerald-500" />
          <span>{toastMessage}</span>
        </div>
      )}

      {/* Visual & Interface Preferences */}
      <section className="p-6 sm:p-8 rounded-xl border border-room-border dark:border-room-darkBorder bg-room-surface dark:bg-room-darkSurface space-y-6">
        <h3 className="text-base font-semibold text-room-text dark:text-room-darkText flex items-center space-x-2">
          <Monitor size={17} />
          <span>Display & Sensory Calibration</span>
        </h3>

        <div className="space-y-6">
          {/* Theme Mode */}
          <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-4 pb-4 border-b border-room-border/60 dark:border-room-darkBorder">
            <div>
              <span className="text-sm font-medium text-room-text dark:text-room-darkText block">
                Color Presentation Theme
              </span>
              <span className="text-xs text-room-muted">
                Architectural high-contrast monochromatic visual theme.
              </span>
            </div>
            <div className="flex items-center space-x-2">
              <button
                onClick={() => updatePreferences({ theme: 'light' })}
                className={`px-4 py-2 text-xs font-mono rounded border flex items-center space-x-1.5 transition-colors ${
                  preferences.theme === 'light'
                    ? 'border-room-text bg-room-text text-room-surface dark:text-room-darkBg font-medium'
                    : 'border-room-border text-room-muted hover:text-room-text'
                }`}
              >
                <Sun size={14} />
                <span>Light</span>
              </button>
              <button
                onClick={() => updatePreferences({ theme: 'dark' })}
                className={`px-4 py-2 text-xs font-mono rounded border flex items-center space-x-1.5 transition-colors ${
                  preferences.theme === 'dark'
                    ? 'border-room-darkText bg-room-darkText text-room-darkBg font-medium'
                    : 'border-room-border text-room-muted hover:text-room-text'
                }`}
              >
                <Moon size={14} />
                <span>Dark</span>
              </button>
            </div>
          </div>

          {/* Reduced Motion */}
          <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-4 pb-4 border-b border-room-border/60 dark:border-room-darkBorder">
            <div>
              <span className="text-sm font-medium text-room-text dark:text-room-darkText block">
                Reduced Motion Protocol
              </span>
              <span className="text-xs text-room-muted">
                Minimizes interface transitions and slide animations.
              </span>
            </div>
            <button
              onClick={() =>
                updatePreferences({ reducedMotion: !preferences.reducedMotion })
              }
              className={`px-4 py-2 text-xs font-mono rounded border transition-colors ${
                preferences.reducedMotion
                  ? 'border-room-text dark:border-room-darkText bg-room-subtle dark:bg-room-darkSubtle text-room-text dark:text-room-darkText font-semibold'
                  : 'border-room-border text-room-muted'
              }`}
            >
              {preferences.reducedMotion ? 'Enabled (Restrained)' : 'Disabled (Standard)'}
            </button>
          </div>

          {/* Sound Signaling */}
          <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-4 pb-4 border-b border-room-border/60 dark:border-room-darkBorder">
            <div>
              <span className="text-sm font-medium text-room-text dark:text-room-darkText block">
                Acoustic Feedback Signals
              </span>
              <span className="text-xs text-room-muted">
                Subtle auditory cues upon scenario submission (default disabled).
              </span>
            </div>
            <button
              onClick={() =>
                updatePreferences({ soundEnabled: !preferences.soundEnabled })
              }
              className={`px-4 py-2 text-xs font-mono rounded border transition-colors flex items-center space-x-1.5 ${
                preferences.soundEnabled
                  ? 'border-room-text dark:border-room-darkText bg-room-subtle dark:bg-room-darkSubtle text-room-text dark:text-room-darkText font-semibold'
                  : 'border-room-border text-room-muted'
              }`}
            >
              {preferences.soundEnabled ? <Volume2 size={14} /> : <VolumeX size={14} />}
              <span>{preferences.soundEnabled ? 'Acoustic Enabled' : 'Muted'}</span>
            </button>
          </div>

          {/* Interface Density */}
          <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-4">
            <div>
              <span className="text-sm font-medium text-room-text dark:text-room-darkText block">
                Layout Density
              </span>
              <span className="text-xs text-room-muted">
                Adjust typography line spacing and vertical component padding.
              </span>
            </div>
            <div className="flex items-center space-x-2">
              <button
                onClick={() => updatePreferences({ interfaceDensity: 'compact' })}
                className={`px-3 py-1.5 text-xs font-mono rounded border ${
                  preferences.interfaceDensity === 'compact'
                    ? 'border-room-text dark:border-room-darkText bg-room-subtle dark:bg-room-darkSubtle font-medium text-room-text dark:text-room-darkText'
                    : 'border-room-border text-room-muted'
                }`}
              >
                Compact
              </button>
              <button
                onClick={() => updatePreferences({ interfaceDensity: 'comfortable' })}
                className={`px-3 py-1.5 text-xs font-mono rounded border ${
                  preferences.interfaceDensity === 'comfortable'
                    ? 'border-room-text dark:border-room-darkText bg-room-subtle dark:bg-room-darkSubtle font-medium text-room-text dark:text-room-darkText'
                    : 'border-room-border text-room-muted'
                }`}
              >
                Comfortable
              </button>
            </div>
          </div>
        </div>
      </section>

      {/* Storage & Data Lifecycle Management */}
      <section className="p-6 sm:p-8 rounded-xl border border-room-border dark:border-room-darkBorder bg-room-surface dark:bg-room-darkSurface space-y-6">
        <h3 className="text-base font-semibold text-room-text dark:text-room-darkText flex items-center space-x-2">
          <HardDrive size={17} />
          <span>Local Storage & State Management</span>
        </h3>

        <div className="p-4 rounded-lg bg-room-bg dark:bg-room-darkBg border border-room-border/60 dark:border-room-darkBorder text-xs font-mono text-room-muted space-y-1">
          <div>Storage Engine: HTML5 LocalStorage (Key: whiteroom_state_v1)</div>
          <div>Active Scenario Attempts: {progress.attempts.length} records</div>
          <div>Saved Drill Bookmarks: {progress.savedScenarioIds.length} items</div>
          <div>Journal Entries: {progress.journalEntries.length} reflections</div>
          <div>Assessment Records: {progress.assessmentResults.length} evaluations</div>
        </div>

        <div className="space-y-4 pt-2">
          {/* Restore Sample Data */}
          <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-4 pb-4 border-b border-room-border/60 dark:border-room-darkBorder">
            <div>
              <span className="text-sm font-medium text-room-text dark:text-room-darkText block">
                Restore Demonstration Sample Data
              </span>
              <span className="text-xs text-room-muted">
                Preloads realistic candidate history, baseline scores, and sample reflection entries.
              </span>
            </div>
            <button
              onClick={() =>
                setConfirmModal({
                  type: 'restore',
                  title: 'Restore Sample Data',
                  message:
                    'This will reset your current progress and restore the rich demo assessment and journal baseline. Continue?',
                })
              }
              className="px-4 py-2 text-xs font-mono rounded border border-room-border hover:bg-room-subtle dark:hover:bg-room-darkSubtle text-room-text dark:text-room-darkText flex-shrink-0"
            >
              Restore Sample Data
            </button>
          </div>

          {/* Clear Journal Data */}
          <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-4 pb-4 border-b border-room-border/60 dark:border-room-darkBorder">
            <div>
              <span className="text-sm font-medium text-room-text dark:text-room-darkText block">
                Clear Decision Journal Entries
              </span>
              <span className="text-xs text-room-muted">
                Wipes all personal and demo reflection logs while preserving scenario attempts.
              </span>
            </div>
            <button
              onClick={() =>
                setConfirmModal({
                  type: 'clear-journal',
                  title: 'Clear Journal Records',
                  message:
                    'This will permanently delete all entries in your Decision Journal. This action cannot be reversed.',
                })
              }
              className="px-4 py-2 text-xs font-mono rounded border border-rose-300 dark:border-rose-900 text-rose-600 dark:text-rose-400 hover:bg-rose-50 dark:hover:bg-rose-950/20 flex-shrink-0"
            >
              Clear Journal
            </button>
          </div>

          {/* Total Reset */}
          <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-4">
            <div>
              <span className="text-sm font-medium text-rose-600 dark:text-rose-400 block">
                Total System Reset
              </span>
              <span className="text-xs text-room-muted">
                Clears all attempts, bookmarks, journal entries, and assessment records back to a pristine state.
              </span>
            </div>
            <button
              onClick={() =>
                setConfirmModal({
                  type: 'reset',
                  title: 'Total System Reset',
                  message:
                    'Are you sure you want to wipe all local progress, attempts, journal entries, and assessments? This action cannot be undone.',
                })
              }
              className="px-4 py-2 text-xs font-mono rounded bg-rose-600 text-white font-medium hover:bg-rose-700 flex-shrink-0"
            >
              Reset Everything
            </button>
          </div>
        </div>
      </section>

      {/* Confirmation Dialog Modal */}
      {confirmModal && (
        <div className="fixed inset-0 z-50 bg-black/60 backdrop-blur-sm flex items-center justify-center p-4 animate-fade-in">
          <div className="w-full max-w-md bg-room-surface dark:bg-room-darkSurface rounded-xl border border-room-border dark:border-room-darkBorder p-6 space-y-4 shadow-2xl">
            <div className="flex items-center space-x-2 text-rose-600 dark:text-rose-400">
              <AlertTriangle size={18} />
              <h4 className="text-base font-semibold">{confirmModal.title}</h4>
            </div>
            <p className="text-xs text-room-muted leading-relaxed">
              {confirmModal.message}
            </p>
            <div className="flex justify-end space-x-2 pt-2">
              <button
                onClick={() => setConfirmModal(null)}
                className="px-4 py-2 text-xs font-mono rounded border border-room-border text-room-text"
              >
                Cancel
              </button>
              <button
                onClick={handleExecuteModalAction}
                className="px-4 py-2 text-xs font-mono rounded bg-rose-600 text-white font-medium hover:bg-rose-700"
              >
                Confirm Action
              </button>
            </div>
          </div>
        </div>
      )}
    </div>
  );
};
