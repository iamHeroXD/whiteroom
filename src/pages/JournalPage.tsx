import React, { useState, useMemo } from 'react';
import {
  BookMarked,
  Plus,
  Search,
  Filter,
  Trash2,
  Edit3,
  Calendar,
  Shield,
  AlertCircle,
  X,
  Check,
  ChevronDown,
} from 'lucide-react';
import { useApp } from '../state/AppContext';
import { JournalEntry, ModuleCategory } from '../types';

export const JournalPage: React.FC = () => {
  const { journalEntries, addJournalEntry, updateJournalEntry, deleteJournalEntry } = useApp();

  const [searchQuery, setSearchQuery] = useState('');
  const [categoryFilter, setCategoryFilter] = useState<string>('all');
  const [sortOrder, setSortOrder] = useState<'desc' | 'asc'>('desc');

  // Modal State for Create / Edit
  const [isEditorOpen, setIsEditorOpen] = useState(false);
  const [editingId, setEditingId] = useState<string | null>(null);

  // Form Fields
  const [formTitle, setFormTitle] = useState('');
  const [formCategory, setFormCategory] = useState<ModuleCategory | 'general-observation'>('social-intelligence');
  const [formSituation, setFormSituation] = useState('');
  const [formResponse, setFormResponse] = useState('');
  const [formLearnedTakeaway, setFormLearnedTakeaway] = useState('');
  const [formFutureAction, setFormFutureAction] = useState('');
  const [formError, setFormError] = useState('');

  // Confirmation modal state for deletion
  const [deleteTargetId, setDeleteTargetId] = useState<string | null>(null);

  // Selected Entry Detail Modal
  const [viewingEntry, setViewingEntry] = useState<JournalEntry | null>(null);

  const resetForm = () => {
    setFormTitle('');
    setFormCategory('social-intelligence');
    setFormSituation('');
    setFormResponse('');
    setFormLearnedTakeaway('');
    setFormFutureAction('');
    setFormError('');
    setEditingId(null);
  };

  const handleOpenCreate = () => {
    resetForm();
    setIsEditorOpen(true);
  };

  const handleOpenEdit = (entry: JournalEntry) => {
    setEditingId(entry.id);
    setFormTitle(entry.title);
    setFormCategory(entry.category);
    setFormSituation(entry.situation);
    setFormResponse(entry.response);
    setFormLearnedTakeaway(entry.learnedTakeaway);
    setFormFutureAction(entry.futureAction);
    setFormError('');
    setIsEditorOpen(true);
  };

  const handleSaveEntry = (e: React.FormEvent) => {
    e.preventDefault();
    if (!formTitle.trim() || !formSituation.trim() || !formResponse.trim() || !formLearnedTakeaway.trim()) {
      setFormError('Please complete all required fields.');
      return;
    }

    if (editingId) {
      updateJournalEntry(editingId, {
        title: formTitle.trim(),
        category: formCategory,
        situation: formSituation.trim(),
        response: formResponse.trim(),
        learnedTakeaway: formLearnedTakeaway.trim(),
        futureAction: formFutureAction.trim(),
      });
    } else {
      addJournalEntry({
        title: formTitle.trim(),
        category: formCategory,
        situation: formSituation.trim(),
        response: formResponse.trim(),
        learnedTakeaway: formLearnedTakeaway.trim(),
        futureAction: formFutureAction.trim(),
      });
    }

    setIsEditorOpen(false);
    resetForm();
  };

  const handleConfirmDelete = () => {
    if (deleteTargetId) {
      deleteJournalEntry(deleteTargetId);
      setDeleteTargetId(null);
      if (viewingEntry?.id === deleteTargetId) {
        setViewingEntry(null);
      }
    }
  };

  // Filter & Sort
  const filteredEntries = useMemo(() => {
    return journalEntries
      .filter(entry => {
        const matchesQuery =
          entry.title.toLowerCase().includes(searchQuery.toLowerCase()) ||
          entry.situation.toLowerCase().includes(searchQuery.toLowerCase()) ||
          entry.learnedTakeaway.toLowerCase().includes(searchQuery.toLowerCase());

        if (!matchesQuery) return false;
        if (categoryFilter !== 'all' && entry.category !== categoryFilter) return false;
        return true;
      })
      .sort((a, b) => {
        return sortOrder === 'desc' ? b.timestamp - a.timestamp : a.timestamp - b.timestamp;
      });
  }, [journalEntries, searchQuery, categoryFilter, sortOrder]);

  return (
    <div className="space-y-8 animate-fade-in max-w-5xl mx-auto pb-16">
      {/* Header */}
      <div className="border-b border-room-border dark:border-room-darkBorder pb-6 flex flex-col md:flex-row md:items-end justify-between gap-4">
        <div>
          <span className="font-mono text-xs uppercase tracking-widest text-room-muted block mb-1">
            PERSONAL METRIC REFLECTION
          </span>
          <h2 className="text-3xl sm:text-4xl font-light text-room-text dark:text-room-darkText tracking-tight">
            Decision Journal
          </h2>
          <p className="text-sm text-room-muted dark:text-room-darkMuted mt-1 max-w-xl">
            Document real-world social friction, audit your spontaneous responses, and calibrate
            concrete behavioral protocols.
          </p>
        </div>

        <button
          onClick={handleOpenCreate}
          className="px-5 py-2.5 rounded bg-room-text dark:bg-room-darkText text-room-surface dark:text-room-darkBg font-mono text-xs uppercase font-medium hover:opacity-90 flex items-center space-x-2 flex-shrink-0"
        >
          <Plus size={14} />
          <span>New Journal Entry</span>
        </button>
      </div>

      {/* Privacy Notice per Part 12 */}
      <div className="p-4 rounded-lg bg-room-surface dark:bg-room-darkSurface border border-room-border dark:border-room-darkBorder flex items-center space-x-3 text-xs text-room-muted">
        <Shield size={16} className="text-room-text dark:text-room-darkText flex-shrink-0" />
        <span>
          <strong>Local Privacy Assurance:</strong> Your journal entries are stored strictly in your
          local browser storage. No entries are transmitted to any external server or API.
        </span>
      </div>

      {/* Filter and Search Bar */}
      <div className="flex flex-col sm:flex-row items-stretch sm:items-center justify-between gap-3 p-4 rounded-xl border border-room-border dark:border-room-darkBorder bg-room-surface dark:bg-room-darkSurface">
        {/* Search */}
        <div className="relative flex-1">
          <Search size={15} className="absolute left-3 top-1/2 -translate-y-1/2 text-room-muted" />
          <input
            type="text"
            value={searchQuery}
            onChange={e => setSearchQuery(e.target.value)}
            placeholder="Search entries by title, situation, or lessons..."
            className="w-full pl-9 pr-4 py-2 text-xs rounded border border-room-border dark:border-room-darkBorder bg-room-bg dark:bg-room-darkBg text-room-text dark:text-room-darkText placeholder-room-muted focus:outline-none"
          />
        </div>

        <div className="flex items-center space-x-2">
          {/* Category Dropdown */}
          <select
            value={categoryFilter}
            onChange={e => setCategoryFilter(e.target.value)}
            className="px-3 py-2 text-xs font-mono rounded border border-room-border dark:border-room-darkBorder bg-room-bg dark:bg-room-darkBg text-room-text dark:text-room-darkText focus:outline-none"
          >
            <option value="all">All Domains</option>
            <option value="social-intelligence">Social Intelligence</option>
            <option value="emotional-control">Emotional Control</option>
            <option value="conversation-mastery">Conversation Mastery</option>
            <option value="strategic-thinking">Strategic Thinking</option>
            <option value="manipulation-defense">Manipulation Defense</option>
            <option value="conflict-resolution">Conflict Resolution</option>
            <option value="digital-social">Digital Social</option>
            <option value="leadership-teamwork">Leadership & Teamwork</option>
            <option value="general-observation">General Observation</option>
          </select>

          {/* Sort Order */}
          <button
            onClick={() => setSortOrder(prev => (prev === 'desc' ? 'asc' : 'desc'))}
            className="px-3 py-2 text-xs font-mono rounded border border-room-border dark:border-room-darkBorder bg-room-bg dark:bg-room-darkBg text-room-muted hover:text-room-text"
          >
            {sortOrder === 'desc' ? 'Newest First' : 'Oldest First'}
          </button>
        </div>
      </div>

      {/* Entries List */}
      <div className="space-y-4">
        {filteredEntries.length === 0 ? (
          <div className="p-12 text-center rounded-xl border border-room-border dark:border-room-darkBorder bg-room-surface dark:bg-room-darkSurface space-y-3">
            <BookMarked size={28} className="mx-auto text-room-muted" />
            <h4 className="text-sm font-medium text-room-text dark:text-room-darkText">
              No Journal Entries Found
            </h4>
            <p className="text-xs text-room-muted max-w-md mx-auto">
              Record a personal social encounter from daily life or solve a simulation scenario to
              save reflections into your personal journal.
            </p>
            <button
              onClick={handleOpenCreate}
              className="mt-2 px-4 py-2 text-xs font-mono rounded bg-room-text dark:bg-room-darkText text-room-surface dark:text-room-darkBg font-medium"
            >
              Write First Entry
            </button>
          </div>
        ) : (
          filteredEntries.map(entry => (
            <div
              key={entry.id}
              className="p-5 sm:p-6 rounded-xl border border-room-border dark:border-room-darkBorder bg-room-surface dark:bg-room-darkSurface hover:border-room-text dark:hover:border-room-darkText transition-all space-y-4"
            >
              <div className="flex items-start justify-between gap-4">
                <div>
                  <div className="flex items-center space-x-2 text-[11px] font-mono text-room-muted">
                    <span className="capitalize">{entry.category.replace('-', ' ')}</span>
                    <span>•</span>
                    <span>{new Date(entry.timestamp).toLocaleDateString()}</span>
                    {entry.isDemo && (
                      <span className="px-1.5 py-0.5 rounded bg-room-subtle dark:bg-room-darkSubtle text-[10px] font-semibold text-room-text dark:text-room-darkText">
                        DEMO SEED
                      </span>
                    )}
                  </div>
                  <h3
                    onClick={() => setViewingEntry(entry)}
                    className="text-lg font-medium text-room-text dark:text-room-darkText mt-1 hover:underline cursor-pointer"
                  >
                    {entry.title}
                  </h3>
                </div>

                <div className="flex items-center space-x-1.5">
                  <button
                    onClick={() => handleOpenEdit(entry)}
                    className="p-1.5 rounded text-room-muted hover:text-room-text dark:hover:text-room-darkText hover:bg-room-subtle dark:hover:bg-room-darkSubtle transition-colors"
                    title="Edit Entry"
                  >
                    <Edit3 size={15} />
                  </button>
                  <button
                    onClick={() => setDeleteTargetId(entry.id)}
                    className="p-1.5 rounded text-room-muted hover:text-rose-600 dark:hover:text-rose-400 hover:bg-rose-50 dark:hover:bg-rose-950/30 transition-colors"
                    title="Delete Entry"
                  >
                    <Trash2 size={15} />
                  </button>
                </div>
              </div>

              {/* Situation & Response Preview */}
              <div className="grid grid-cols-1 md:grid-cols-2 gap-4 text-xs pt-1">
                <div className="p-3 rounded bg-room-bg dark:bg-room-darkBg border border-room-border/60 dark:border-room-darkBorder">
                  <span className="font-mono text-room-muted block mb-1 uppercase font-semibold">
                    The Situation:
                  </span>
                  <p className="text-room-text dark:text-room-darkText line-clamp-3">
                    {entry.situation}
                  </p>
                </div>
                <div className="p-3 rounded bg-room-bg dark:bg-room-darkBg border border-room-border/60 dark:border-room-darkBorder">
                  <span className="font-mono text-room-muted block mb-1 uppercase font-semibold">
                    Learned Takeaway:
                  </span>
                  <p className="text-room-text dark:text-room-darkText line-clamp-3">
                    {entry.learnedTakeaway}
                  </p>
                </div>
              </div>

              {entry.futureAction && (
                <div className="pt-2 text-xs font-mono text-room-muted flex items-center space-x-2">
                  <span className="font-semibold text-room-text dark:text-room-darkText">Future Action:</span>
                  <span className="line-clamp-1">{entry.futureAction}</span>
                </div>
              )}
            </div>
          ))
        )}
      </div>

      {/* Entry Detail Modal */}
      {viewingEntry && (
        <div className="fixed inset-0 z-50 bg-black/60 backdrop-blur-sm flex items-center justify-center p-4 animate-fade-in">
          <div className="w-full max-w-2xl bg-room-surface dark:bg-room-darkSurface rounded-xl border border-room-border dark:border-room-darkBorder shadow-2xl p-6 sm:p-8 space-y-6 max-h-[90vh] overflow-y-auto">
            <div className="flex items-start justify-between pb-4 border-b border-room-border dark:border-room-darkBorder">
              <div>
                <span className="font-mono text-xs text-room-muted uppercase">
                  {viewingEntry.category.replace('-', ' ')} • {new Date(viewingEntry.timestamp).toLocaleDateString()}
                </span>
                <h3 className="text-xl font-light text-room-text dark:text-room-darkText mt-1">
                  {viewingEntry.title}
                </h3>
              </div>
              <button
                onClick={() => setViewingEntry(null)}
                className="p-1 rounded text-room-muted hover:text-room-text"
              >
                <X size={18} />
              </button>
            </div>

            <div className="space-y-4 text-xs sm:text-sm">
              <div>
                <h4 className="font-mono text-xs uppercase tracking-wider text-room-muted mb-1">
                  The Situation
                </h4>
                <p className="text-room-text dark:text-room-darkText leading-relaxed">
                  {viewingEntry.situation}
                </p>
              </div>

              <div>
                <h4 className="font-mono text-xs uppercase tracking-wider text-room-muted mb-1">
                  My Reaction / Response
                </h4>
                <p className="text-room-text dark:text-room-darkText leading-relaxed">
                  {viewingEntry.response}
                </p>
              </div>

              <div>
                <h4 className="font-mono text-xs uppercase tracking-wider text-room-muted mb-1">
                  Learned Takeaway
                </h4>
                <p className="text-room-text dark:text-room-darkText leading-relaxed">
                  {viewingEntry.learnedTakeaway}
                </p>
              </div>

              {viewingEntry.futureAction && (
                <div>
                  <h4 className="font-mono text-xs uppercase tracking-wider text-room-muted mb-1">
                    Future Calibrated Action
                  </h4>
                  <p className="text-room-text dark:text-room-darkText leading-relaxed">
                    {viewingEntry.futureAction}
                  </p>
                </div>
              )}
            </div>

            <div className="pt-4 border-t border-room-border dark:border-room-darkBorder flex justify-end space-x-2">
              <button
                onClick={() => {
                  const toEdit = viewingEntry;
                  setViewingEntry(null);
                  handleOpenEdit(toEdit);
                }}
                className="px-4 py-2 text-xs font-mono rounded border border-room-border text-room-text"
              >
                Edit Entry
              </button>
              <button
                onClick={() => setViewingEntry(null)}
                className="px-4 py-2 text-xs font-mono rounded bg-room-text text-room-surface dark:bg-room-darkText dark:text-room-darkBg font-medium"
              >
                Close
              </button>
            </div>
          </div>
        </div>
      )}

      {/* Create / Edit Form Modal */}
      {isEditorOpen && (
        <div className="fixed inset-0 z-50 bg-black/60 backdrop-blur-sm flex items-center justify-center p-4 animate-fade-in">
          <form
            onSubmit={handleSaveEntry}
            className="w-full max-w-2xl bg-room-surface dark:bg-room-darkSurface rounded-xl border border-room-border dark:border-room-darkBorder shadow-2xl p-6 sm:p-8 space-y-4 max-h-[90vh] overflow-y-auto"
          >
            <div className="flex items-center justify-between pb-3 border-b border-room-border dark:border-room-darkBorder">
              <h3 className="text-lg font-light text-room-text dark:text-room-darkText">
                {editingId ? 'Edit Decision Journal Entry' : 'Log New Decision Experience'}
              </h3>
              <button
                type="button"
                onClick={() => setIsEditorOpen(false)}
                className="p-1 text-room-muted hover:text-room-text"
              >
                <X size={18} />
              </button>
            </div>

            {formError && (
              <div className="p-3 rounded bg-rose-50 dark:bg-rose-950/40 text-rose-800 dark:text-rose-300 text-xs font-mono">
                {formError}
              </div>
            )}

            <div className="space-y-3 text-xs">
              <div>
                <label className="font-mono text-room-muted block mb-1">Title *</label>
                <input
                  type="text"
                  required
                  value={formTitle}
                  onChange={e => setFormTitle(e.target.value)}
                  placeholder="e.g. Navigating Public Criticism from Project Partner"
                  className="w-full p-2.5 rounded border border-room-border dark:border-room-darkBorder bg-room-bg dark:bg-room-darkBg text-room-text dark:text-room-darkText focus:outline-none"
                />
              </div>

              <div>
                <label className="font-mono text-room-muted block mb-1">Domain Category *</label>
                <select
                  value={formCategory}
                  onChange={e => setFormCategory(e.target.value as any)}
                  className="w-full p-2.5 rounded border border-room-border dark:border-room-darkBorder bg-room-bg dark:bg-room-darkBg text-room-text dark:text-room-darkText focus:outline-none font-mono"
                >
                  <option value="social-intelligence">Social Intelligence</option>
                  <option value="emotional-control">Emotional Control</option>
                  <option value="conversation-mastery">Conversation Mastery</option>
                  <option value="strategic-thinking">Strategic Thinking</option>
                  <option value="manipulation-defense">Manipulation Defense</option>
                  <option value="conflict-resolution">Conflict Resolution</option>
                  <option value="digital-social">Digital Social Intelligence</option>
                  <option value="leadership-teamwork">Leadership & Teamwork</option>
                  <option value="general-observation">General Observation</option>
                </select>
              </div>

              <div>
                <label className="font-mono text-room-muted block mb-1">
                  The Situation (What happened? Who was there?) *
                </label>
                <textarea
                  rows={3}
                  required
                  value={formSituation}
                  onChange={e => setFormSituation(e.target.value)}
                  placeholder="Describe the setting and the specific tension or prompt..."
                  className="w-full p-2.5 rounded border border-room-border dark:border-room-darkBorder bg-room-bg dark:bg-room-darkBg text-room-text dark:text-room-darkText focus:outline-none"
                />
              </div>

              <div>
                <label className="font-mono text-room-muted block mb-1">
                  Your Response (What did you do or say?) *
                </label>
                <textarea
                  rows={2}
                  required
                  value={formResponse}
                  onChange={e => setFormResponse(e.target.value)}
                  placeholder="Describe your exact words or behavioral choice..."
                  className="w-full p-2.5 rounded border border-room-border dark:border-room-darkBorder bg-room-bg dark:bg-room-darkBg text-room-text dark:text-room-darkText focus:outline-none"
                />
              </div>

              <div>
                <label className="font-mono text-room-muted block mb-1">
                  Learned Takeaway (What did you discover about human nature or yourself?) *
                </label>
                <textarea
                  rows={2}
                  required
                  value={formLearnedTakeaway}
                  onChange={e => setFormLearnedTakeaway(e.target.value)}
                  placeholder="What is the core psychological or strategic principle?"
                  className="w-full p-2.5 rounded border border-room-border dark:border-room-darkBorder bg-room-bg dark:bg-room-darkBg text-room-text dark:text-room-darkText focus:outline-none"
                />
              </div>

              <div>
                <label className="font-mono text-room-muted block mb-1">
                  Future Calibrated Action (How will you respond next time?)
                </label>
                <input
                  type="text"
                  value={formFutureAction}
                  onChange={e => setFormFutureAction(e.target.value)}
                  placeholder="e.g. Enforce a 3-second diagnostic pause before answering."
                  className="w-full p-2.5 rounded border border-room-border dark:border-room-darkBorder bg-room-bg dark:bg-room-darkBg text-room-text dark:text-room-darkText focus:outline-none"
                />
              </div>
            </div>

            <div className="pt-4 border-t border-room-border dark:border-room-darkBorder flex justify-end space-x-2">
              <button
                type="button"
                onClick={() => setIsEditorOpen(false)}
                className="px-4 py-2 text-xs font-mono rounded border border-room-border text-room-text"
              >
                Cancel
              </button>
              <button
                type="submit"
                className="px-6 py-2 text-xs font-mono rounded bg-room-text text-room-surface dark:bg-room-darkText dark:text-room-darkBg font-medium"
              >
                {editingId ? 'Update Entry' : 'Save Entry'}
              </button>
            </div>
          </form>
        </div>
      )}

      {/* Delete Confirmation Dialog */}
      {deleteTargetId && (
        <div className="fixed inset-0 z-50 bg-black/60 backdrop-blur-sm flex items-center justify-center p-4 animate-fade-in">
          <div className="w-full max-w-md bg-room-surface dark:bg-room-darkSurface rounded-xl border border-room-border dark:border-room-darkBorder p-6 space-y-4">
            <h4 className="text-base font-semibold text-room-text dark:text-room-darkText">
              Confirm Entry Deletion
            </h4>
            <p className="text-xs text-room-muted leading-relaxed">
              Are you sure you want to permanently delete this journal entry from your local
              browser storage? This action cannot be reversed.
            </p>
            <div className="flex justify-end space-x-2 pt-2">
              <button
                onClick={() => setDeleteTargetId(null)}
                className="px-4 py-2 text-xs font-mono rounded border border-room-border text-room-text"
              >
                Cancel
              </button>
              <button
                onClick={handleConfirmDelete}
                className="px-4 py-2 text-xs font-mono rounded bg-rose-600 text-white font-medium hover:bg-rose-700"
              >
                Confirm Delete
              </button>
            </div>
          </div>
        </div>
      )}
    </div>
  );
};
