import React, { useState, useEffect } from 'react';
import {
  ArrowLeft,
  ArrowRight,
  RotateCcw,
  Bookmark,
  CheckCircle2,
  Sparkles,
  Shield,
  Eye,
  Brain,
  MessageSquare,
  AlertCircle,
  HelpCircle,
  Save,
  ChevronRight,
  Share2,
} from 'lucide-react';
import { useApp } from '../state/AppContext';
import { ALL_SCENARIOS, getScenarioById } from '../data/scenarios';
import { Scenario, ScenarioOption, ScenarioBranch } from '../types';

export const SimulatorPage: React.FC = () => {
  const {
    activeScenarioId,
    setActiveScenarioId,
    setDestination,
    recordScenarioAttempt,
    toggleSaveScenario,
    isScenarioSaved,
    addJournalEntry,
    completedScenarioCount,
  } = useApp();

  const [currentScenario, setCurrentScenario] = useState<Scenario>(() => {
    return (activeScenarioId && getScenarioById(activeScenarioId)) || ALL_SCENARIOS[0];
  });

  // Simulator stage tracking
  const [activeBranchId, setActiveBranchId] = useState<string | null>(null);
  const [selectedOptionId, setSelectedOptionId] = useState<string | null>(null);
  const [isSubmitted, setIsSubmitted] = useState(false);
  const [userReflection, setUserReflection] = useState('');
  const [reflectionSavedToast, setReflectionSavedToast] = useState(false);

  // Sync when activeScenarioId changes from sidebar or command palette
  useEffect(() => {
    if (activeScenarioId) {
      const found = getScenarioById(activeScenarioId);
      if (found && found.id !== currentScenario.id) {
        setCurrentScenario(found);
        resetState();
      }
    }
  }, [activeScenarioId]);

  const resetState = () => {
    setActiveBranchId(null);
    setSelectedOptionId(null);
    setIsSubmitted(false);
    setUserReflection('');
    setReflectionSavedToast(false);
  };

  const isSaved = isScenarioSaved(currentScenario.id);

  // Current stage options & dialogue (handles branching)
  const currentBranch: ScenarioBranch | undefined =
    activeBranchId && currentScenario.branches
      ? currentScenario.branches[activeBranchId]
      : undefined;

  const activeDialogue = currentBranch
    ? currentBranch.characterDialogue
    : currentScenario.characterDialogue;
  const activeSpeaker = currentBranch
    ? currentBranch.dialogueSpeaker
    : currentScenario.dialogueSpeaker;
  const activeOptions: ScenarioOption[] = currentBranch
    ? currentBranch.options
    : currentScenario.options;

  const selectedOption = activeOptions.find(o => o.id === selectedOptionId);

  const handleSubmitDecision = () => {
    if (!selectedOption) return;
    setIsSubmitted(true);

    // Record the attempt in local state
    recordScenarioAttempt({
      scenarioId: currentScenario.id,
      scenarioTitle: currentScenario.title,
      category: currentScenario.category,
      selectedOptionId: selectedOption.id,
      selectedOptionLabel: selectedOption.label,
      userReflection: userReflection.trim() || undefined,
      scoreIndicators: selectedOption.feedback.scoreIndicator,
    });
  };

  const handleBranchContinue = (nextBranchId: string) => {
    setActiveBranchId(nextBranchId);
    setSelectedOptionId(null);
    setIsSubmitted(false);
  };

  const handleSaveReflectionToJournal = () => {
    if (!userReflection.trim() || !selectedOption) return;

    addJournalEntry({
      title: `Reflection: ${currentScenario.title}`,
      category: currentScenario.category,
      situation: `${currentScenario.setting}. ${currentScenario.context}`,
      response: `Chose Option ${selectedOption.label}: ${selectedOption.text}`,
      learnedTakeaway: selectedOption.feedback.decisionReview.accomplished,
      futureAction: userReflection.trim(),
    });

    setReflectionSavedToast(true);
    setTimeout(() => setReflectionSavedToast(false), 3000);
  };

  // Next Scenario
  const currentIndex = ALL_SCENARIOS.findIndex(s => s.id === currentScenario.id);
  const nextScenario = ALL_SCENARIOS[currentIndex + 1];

  const handleGoNext = () => {
    if (nextScenario) {
      setActiveScenarioId(nextScenario.id);
      setCurrentScenario(nextScenario);
      resetState();
    } else {
      setDestination('overview');
    }
  };

  return (
    <div className="max-w-4xl mx-auto space-y-8 animate-fade-in pb-16">
      {/* Top Navigation & Status Bar */}
      <div className="flex items-center justify-between pb-4 border-b border-room-border dark:border-room-darkBorder font-mono text-xs text-room-muted">
        <button
          onClick={() => setDestination('modules')}
          className="inline-flex items-center space-x-1.5 hover:text-room-text dark:hover:text-room-darkText transition-colors"
        >
          <ArrowLeft size={14} />
          <span>Exit Simulation</span>
        </button>

        <div className="flex items-center space-x-4">
          <span>
            DRILL #{currentScenario.number} / {ALL_SCENARIOS.length}
          </span>
          <span className="hidden sm:inline">•</span>
          <span className="hidden sm:inline">LVL {currentScenario.difficulty}</span>

          <button
            onClick={() => toggleSaveScenario(currentScenario.id)}
            className={`p-1.5 rounded transition-colors ${
              isSaved
                ? 'text-room-text dark:text-room-darkText'
                : 'text-room-muted hover:text-room-text dark:hover:text-room-darkText'
            }`}
            title={isSaved ? 'Remove Bookmark' : 'Bookmark Drill'}
          >
            <Bookmark size={16} fill={isSaved ? 'currentColor' : 'none'} />
          </button>
        </div>
      </div>

      {/* Main Scenario Header */}
      <div className="space-y-3">
        <div className="flex flex-wrap items-center gap-2 text-xs font-mono text-room-muted">
          <span className="px-2 py-0.5 rounded bg-room-subtle dark:bg-room-darkSubtle text-room-text dark:text-room-darkText uppercase">
            {currentScenario.category.replace('-', ' ')}
          </span>
          <span>•</span>
          <span>SETTING: {currentScenario.setting}</span>
          <span>•</span>
          <span>DURATION: {currentScenario.estimatedDuration}</span>
          {activeBranchId && (
            <span className="px-2 py-0.5 rounded bg-amber-500/10 text-amber-600 dark:text-amber-400 font-semibold">
              STAGE 2: BRANCH EXPANSION
            </span>
          )}
        </div>

        <h1 className="text-2xl sm:text-3xl font-light text-room-text dark:text-room-darkText tracking-tight">
          {currentScenario.title}
        </h1>

        <p className="text-sm sm:text-base text-room-muted dark:text-room-darkMuted leading-relaxed">
          {currentScenario.context}
        </p>
      </div>

      {/* Dialogue Chamber Card */}
      <div className="p-6 sm:p-8 rounded-xl border border-room-border dark:border-room-darkBorder bg-room-surface dark:bg-room-darkSurface shadow-sm relative overflow-hidden">
        <div className="text-[11px] font-mono text-room-muted uppercase tracking-wider mb-3 flex items-center justify-between">
          <span>{activeSpeaker} initiates interaction:</span>
          <span className="flex h-2 w-2 relative">
            <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-neutral-400 opacity-75"></span>
            <span className="relative inline-flex rounded-full h-2 w-2 bg-neutral-500"></span>
          </span>
        </div>

        <blockquote className="text-lg sm:text-2xl font-serif italic text-room-text dark:text-room-darkText pl-4 border-l-2 border-room-text dark:border-room-darkText my-2 leading-relaxed">
          {activeDialogue}
        </blockquote>

        {currentBranch?.contextNote && (
          <div className="mt-4 pt-3 border-t border-room-border/60 dark:border-room-darkBorder text-xs text-room-muted font-mono italic">
            Observed Reaction: {currentBranch.contextNote}
          </div>
        )}
      </div>

      {/* Response Options Selection Section */}
      <div className="space-y-4">
        <div className="flex items-center justify-between">
          <h3 className="text-xs font-mono uppercase tracking-widest text-room-muted">
            {isSubmitted ? 'Your Chosen Response:' : 'Select Your Tactical Response:'}
          </h3>
          {!isSubmitted && (
            <span className="text-xs font-mono text-room-muted">
              Select one option to analyze
            </span>
          )}
        </div>

        <div className="space-y-3">
          {activeOptions.map(opt => {
            const isSelected = selectedOptionId === opt.id;
            return (
              <div
                key={opt.id}
                onClick={() => !isSubmitted && setSelectedOptionId(opt.id)}
                className={`p-4 sm:p-5 rounded-xl border text-left transition-all ${
                  isSubmitted
                    ? isSelected
                      ? 'border-room-text dark:border-room-darkText bg-room-subtle dark:bg-room-darkSubtle shadow-sm'
                      : 'opacity-40 border-room-border dark:border-room-darkBorder cursor-default'
                    : isSelected
                    ? 'border-room-text dark:border-room-darkText bg-room-subtle dark:bg-room-darkSubtle shadow-sm cursor-pointer'
                    : 'border-room-border dark:border-room-darkBorder hover:border-neutral-400 dark:hover:border-neutral-600 bg-room-surface dark:bg-room-darkSurface cursor-pointer'
                }`}
              >
                <div className="flex items-start space-x-3.5">
                  <div
                    className={`w-6 h-6 rounded flex items-center justify-center font-mono text-xs font-semibold flex-shrink-0 transition-colors ${
                      isSelected
                        ? 'bg-room-text text-room-surface dark:bg-room-darkText dark:text-room-darkBg'
                        : 'bg-room-border/50 dark:bg-room-darkBorder text-room-muted'
                    }`}
                  >
                    {opt.label}
                  </div>

                  <div className="flex-1 min-w-0">
                    <p className="text-sm sm:text-base font-normal text-room-text dark:text-room-darkText leading-relaxed">
                      {opt.text}
                    </p>
                    <span className="text-[11px] font-mono text-room-muted block mt-1">
                      Intent: {opt.intent}
                    </span>
                  </div>
                </div>
              </div>
            );
          })}
        </div>

        {/* Submit or Replay Controls */}
        <div className="pt-2 flex flex-wrap items-center justify-between gap-4">
          {!isSubmitted ? (
            <button
              onClick={handleSubmitDecision}
              disabled={!selectedOptionId}
              className={`px-8 py-3.5 rounded font-mono text-xs uppercase tracking-widest font-semibold transition-all ${
                selectedOptionId
                  ? 'bg-room-text dark:bg-room-darkText text-room-surface dark:text-room-darkBg hover:opacity-90 active:scale-[0.99] shadow-md'
                  : 'bg-room-border dark:bg-room-darkBorder text-room-muted cursor-not-allowed'
              }`}
            >
              EXECUTE DECISION & REVEAL ANALYSIS
            </button>
          ) : (
            <div className="flex items-center space-x-3">
              <button
                onClick={resetState}
                className="px-4 py-2.5 rounded border border-room-border dark:border-room-darkBorder bg-room-surface dark:bg-room-darkSurface text-xs font-mono text-room-muted hover:text-room-text dark:hover:text-room-darkText flex items-center space-x-2 transition-colors"
              >
                <RotateCcw size={14} />
                <span>Replay Drill</span>
              </button>

              {/* If option has branch */}
              {selectedOption?.nextBranchId && (
                <button
                  onClick={() => handleBranchContinue(selectedOption.nextBranchId!)}
                  className="px-5 py-2.5 rounded bg-room-text dark:bg-room-darkText text-room-surface dark:text-room-darkBg font-mono text-xs font-semibold hover:opacity-90 flex items-center space-x-1.5"
                >
                  <span>Continue Into Follow-Up Branch</span>
                  <ChevronRight size={14} />
                </button>
              )}
            </div>
          )}

          {isSubmitted && nextScenario && (
            <button
              onClick={handleGoNext}
              className="px-6 py-2.5 rounded border border-room-border dark:border-room-darkBorder bg-room-surface dark:bg-room-darkSurface hover:bg-room-subtle dark:hover:bg-room-darkSubtle text-room-text dark:text-room-darkText font-mono text-xs uppercase font-medium flex items-center space-x-2 transition-colors"
            >
              <span>Next Drill (#{nextScenario.number})</span>
              <ArrowRight size={14} />
            </button>
          )}
        </div>
      </div>

      {/* Section 9: Complete 7-Part Coaching & Decision Analysis Interface */}
      {isSubmitted && selectedOption && (
        <section className="mt-12 space-y-8 animate-slide-up pt-8 border-t border-room-border dark:border-room-darkBorder">
          <div className="flex items-center justify-between">
            <div>
              <span className="font-mono text-xs uppercase tracking-widest text-room-muted block">
                COGNITIVE DECONSTRUCTION
              </span>
              <h2 className="text-2xl font-light text-room-text dark:text-room-darkText mt-0.5">
                Coaching & Decision Analysis
              </h2>
            </div>
            <div className="flex items-center space-x-2 text-xs font-mono text-room-muted">
              <Shield size={14} />
              <span>Deterministic Local Evaluator</span>
            </div>
          </div>

          {/* Metric Indicators */}
          <div className="grid grid-cols-2 sm:grid-cols-4 gap-3">
            <div className="p-3 rounded-lg border border-room-border dark:border-room-darkBorder bg-room-surface dark:bg-room-darkSurface text-center">
              <span className="text-[10px] font-mono text-room-muted block uppercase">Emotional Regulation</span>
              <span className="text-lg font-semibold font-mono text-room-text dark:text-room-darkText">
                {selectedOption.feedback.scoreIndicator.emotionalRegulation}%
              </span>
            </div>
            <div className="p-3 rounded-lg border border-room-border dark:border-room-darkBorder bg-room-surface dark:bg-room-darkSurface text-center">
              <span className="text-[10px] font-mono text-room-muted block uppercase">Social Awareness</span>
              <span className="text-lg font-semibold font-mono text-room-text dark:text-room-darkText">
                {selectedOption.feedback.scoreIndicator.socialAwareness}%
              </span>
            </div>
            <div className="p-3 rounded-lg border border-room-border dark:border-room-darkBorder bg-room-surface dark:bg-room-darkSurface text-center">
              <span className="text-[10px] font-mono text-room-muted block uppercase">Strategic Thinking</span>
              <span className="text-lg font-semibold font-mono text-room-text dark:text-room-darkText">
                {selectedOption.feedback.scoreIndicator.strategicThinking}%
              </span>
            </div>
            <div className="p-3 rounded-lg border border-room-border dark:border-room-darkBorder bg-room-surface dark:bg-room-darkSurface text-center">
              <span className="text-[10px] font-mono text-room-muted block uppercase">Assertiveness</span>
              <span className="text-lg font-semibold font-mono text-room-text dark:text-room-darkText">
                {selectedOption.feedback.scoreIndicator.assertiveness}%
              </span>
            </div>
          </div>

          {/* 01. Situation Analysis */}
          <div className="p-6 rounded-xl border border-room-border dark:border-room-darkBorder bg-room-surface dark:bg-room-darkSurface space-y-2">
            <div className="flex items-center space-x-2 text-xs font-mono uppercase tracking-wider text-room-muted">
              <Eye size={15} />
              <span>01 — Situation Analysis</span>
            </div>
            <p className="text-sm text-room-text dark:text-room-darkText leading-relaxed">
              {selectedOption.feedback.situationAnalysis}
            </p>
          </div>

          {/* 02. Decision Review */}
          <div className="p-6 rounded-xl border border-room-border dark:border-room-darkBorder bg-room-surface dark:bg-room-darkSurface space-y-4">
            <div className="flex items-center space-x-2 text-xs font-mono uppercase tracking-wider text-room-muted">
              <Brain size={15} />
              <span>02 — Decision Review</span>
            </div>

            <p className="text-sm text-room-text dark:text-room-darkText font-medium">
              Accomplished: {selectedOption.feedback.decisionReview.accomplished}
            </p>

            <div className="grid grid-cols-1 md:grid-cols-2 gap-4 pt-2">
              <div className="p-3 rounded bg-room-bg dark:bg-room-darkBg border border-room-border/60 dark:border-room-darkBorder">
                <span className="text-xs font-mono text-emerald-600 dark:text-emerald-400 font-semibold block mb-1.5">
                  Core Strengths:
                </span>
                <ul className="space-y-1">
                  {selectedOption.feedback.decisionReview.strengths.map((str, i) => (
                    <li key={i} className="text-xs text-room-text dark:text-room-darkText flex items-start space-x-1.5">
                      <span className="text-emerald-500 font-mono">•</span>
                      <span>{str}</span>
                    </li>
                  ))}
                </ul>
              </div>

              <div className="p-3 rounded bg-room-bg dark:bg-room-darkBg border border-room-border/60 dark:border-room-darkBorder">
                <span className="text-xs font-mono text-rose-600 dark:text-rose-400 font-semibold block mb-1.5">
                  Associated Risks:
                </span>
                <ul className="space-y-1">
                  {selectedOption.feedback.decisionReview.risks.map((rsk, i) => (
                    <li key={i} className="text-xs text-room-text dark:text-room-darkText flex items-start space-x-1.5">
                      <span className="text-rose-500 font-mono">•</span>
                      <span>{rsk}</span>
                    </li>
                  ))}
                </ul>
              </div>
            </div>
          </div>

          {/* 03. Perspective Check */}
          <div className="p-6 rounded-xl border border-room-border dark:border-room-darkBorder bg-room-surface dark:bg-room-darkSurface space-y-3">
            <div className="flex items-center space-x-2 text-xs font-mono uppercase tracking-wider text-room-muted">
              <AlertCircle size={15} />
              <span>03 — Perspective Check (Other Party Mindset)</span>
            </div>
            <p className="text-sm text-room-text dark:text-room-darkText leading-relaxed">
              {selectedOption.feedback.perspectiveCheck.otherInterpretation}
            </p>
            <div className="text-xs font-mono text-room-muted pt-2 border-t border-room-border/60 dark:border-room-darkBorder">
              Missing Context To Verify: {selectedOption.feedback.perspectiveCheck.missingInformation}
            </div>
          </div>

          {/* 04. Consequence Analysis */}
          <div className="p-6 rounded-xl border border-room-border dark:border-room-darkBorder bg-room-surface dark:bg-room-darkSurface space-y-3">
            <div className="flex items-center space-x-2 text-xs font-mono uppercase tracking-wider text-room-muted">
              <Shield size={15} />
              <span>04 — Consequence Trajectory</span>
            </div>
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 text-xs">
              <div>
                <span className="font-mono text-room-muted block mb-1">T+0 Short-Term Fallout:</span>
                <p className="text-room-text dark:text-room-darkText">
                  {selectedOption.feedback.consequences.shortTerm}
                </p>
              </div>
              <div>
                <span className="font-mono text-room-muted block mb-1">T+1 Long-Term Standing:</span>
                <p className="text-room-text dark:text-room-darkText">
                  {selectedOption.feedback.consequences.longTerm}
                </p>
              </div>
            </div>
            {selectedOption.feedback.consequences.tradeoffs && (
              <div className="pt-2 border-t border-room-border/60 dark:border-room-darkBorder text-xs text-room-muted font-mono">
                Trade-off: {selectedOption.feedback.consequences.tradeoffs}
              </div>
            )}
          </div>

          {/* 05. Alternative Natural Response */}
          <div className="p-6 rounded-xl border-2 border-dashed border-room-border dark:border-room-darkBorder bg-room-subtle/40 dark:bg-room-darkSubtle/40 space-y-2">
            <div className="flex items-center space-x-2 text-xs font-mono uppercase tracking-wider text-room-muted">
              <MessageSquare size={15} />
              <span>05 — Alternative Natural Spoken Response</span>
            </div>
            <blockquote className="text-base sm:text-lg font-serif italic text-room-text dark:text-room-darkText pl-4 border-l-2 border-room-text dark:border-room-darkText">
              "{selectedOption.feedback.alternativeNaturalResponse}"
            </blockquote>
          </div>

          {/* 06. Skill Development */}
          <div className="p-6 rounded-xl border border-room-border dark:border-room-darkBorder bg-room-surface dark:bg-room-darkSurface space-y-2">
            <div className="flex items-center space-x-2 text-xs font-mono uppercase tracking-wider text-room-muted">
              <Sparkles size={15} />
              <span>06 — Targeted Skill Development: {selectedOption.feedback.skillDevelopment.skill}</span>
            </div>
            <p className="text-sm text-room-text dark:text-room-darkText leading-relaxed">
              <span className="font-mono text-xs text-room-muted block mb-1">Practical Mental Protocol:</span>
              {selectedOption.feedback.skillDevelopment.practicalExercise}
            </p>
          </div>

          {/* 07. Reflection Prompt & Write-in Journal */}
          <div className="p-6 rounded-xl border border-room-border dark:border-room-darkBorder bg-room-surface dark:bg-room-darkSurface space-y-4">
            <div className="flex items-center space-x-2 text-xs font-mono uppercase tracking-wider text-room-muted">
              <HelpCircle size={15} />
              <span>07 — Candidate Reflection</span>
            </div>

            <p className="text-sm font-medium text-room-text dark:text-room-darkText">
              {currentScenario.reflectionPrompt}
            </p>

            <textarea
              rows={3}
              value={userReflection}
              onChange={e => setUserReflection(e.target.value)}
              placeholder="Record your honest psychological reaction: What did you feel first? What outcome did you prioritize?"
              className="w-full p-3 rounded-lg border border-room-border dark:border-room-darkBorder bg-room-bg dark:bg-room-darkBg text-room-text dark:text-room-darkText text-xs font-sans placeholder-room-muted focus:outline-none focus:border-room-text dark:focus:border-room-darkText leading-relaxed"
            />

            <div className="flex items-center justify-between">
              <span className="text-[11px] font-mono text-room-muted">
                Reflections are stored in your local browser profile.
              </span>

              <button
                onClick={handleSaveReflectionToJournal}
                disabled={!userReflection.trim()}
                className={`px-4 py-2 rounded font-mono text-xs uppercase font-medium flex items-center space-x-1.5 transition-all ${
                  userReflection.trim()
                    ? 'bg-room-text dark:bg-room-darkText text-room-surface dark:text-room-darkBg hover:opacity-90'
                    : 'bg-room-border/40 text-room-muted cursor-not-allowed'
                }`}
              >
                <Save size={13} />
                <span>Save to Journal</span>
              </button>
            </div>

            {reflectionSavedToast && (
              <div className="p-3 rounded bg-emerald-50 dark:bg-emerald-950/40 text-emerald-800 dark:text-emerald-300 text-xs font-mono animate-fade-in">
                ✓ Reflection successfully logged to your personal Decision Journal.
              </div>
            )}
          </div>
        </section>
      )}
    </div>
  );
};
