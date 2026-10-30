import React, { useState, useEffect, useRef } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import confetti from 'canvas-confetti';
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
  Copy,
  Check,
  Zap,
  Activity,
  Heart,
  Wind,
  Timer,
  GitBranch,
  Volume2,
  VolumeX,
} from 'lucide-react';
import { useApp } from '../state/AppContext';
import { ALL_SCENARIOS, getScenarioById } from '../data/scenarios';
import { Scenario, ScenarioOption, ScenarioBranch } from '../types';
import { sounds } from '../utils/audio';

export const SimulatorPage: React.FC = () => {
  const {
    activeScenarioId,
    setActiveScenarioId,
    setDestination,
    recordScenarioAttempt,
    toggleSaveScenario,
    isScenarioSaved,
    addJournalEntry,
    preferences,
    updatePreferences,
    addXP,
    unlockAchievement,
    incrementPauseCount,
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
  const [copiedScript, setCopiedScript] = useState(false);
  const [showSchematic, setShowSchematic] = useState(false);

  // Typewriter effect state
  const [typedText, setTypedText] = useState('');
  const [isTyping, setIsTyping] = useState(true);

  // Biometrics & Tactical Pause
  const [pausedForBreath, setPausedForBreath] = useState(false);
  const [breathCountdown, setBreathCountdown] = useState(3);
  const [isBreathing, setIsBreathing] = useState(false);
  const [heartRate, setHeartRate] = useState(112);

  // Pressure Mode Countdown Timer (15 seconds)
  const [timeLeft, setTimeLeft] = useState(15);
  const [timerActive, setTimerActive] = useState(false);

  // Sync when activeScenarioId changes
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
    setCopiedScript(false);
    setShowSchematic(false);
    setPausedForBreath(false);
    setHeartRate(112);
    setTimeLeft(15);

    // Start typewriter effect
    const dialogue = currentScenario.characterDialogue;
    setTypedText('');
    setIsTyping(true);
    let i = 0;
    const interval = setInterval(() => {
      if (i < dialogue.length) {
        setTypedText(dialogue.slice(0, i + 1));
        if (i % 5 === 0) {
          sounds.playTypewriterTick(preferences.soundEnabled);
        }
        i++;
      } else {
        setIsTyping(false);
        clearInterval(interval);
      }
    }, 15);

    if (preferences.pressureMode) {
      setTimerActive(true);
    } else {
      setTimerActive(false);
    }

    return () => clearInterval(interval);
  };

  useEffect(() => {
    resetState();
  }, [currentScenario.id]);

  // Pressure mode timer
  useEffect(() => {
    if (!timerActive || isSubmitted || timeLeft <= 0) return;
    const interval = setInterval(() => {
      setTimeLeft(prev => {
        if (prev <= 1) {
          clearInterval(interval);
          setTimerActive(false);
          return 0;
        }
        return prev - 1;
      });
    }, 1000);
    return () => clearInterval(interval);
  }, [timerActive, isSubmitted, timeLeft]);

  const skipTyping = () => {
    setTypedText(activeDialogue);
    setIsTyping(false);
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

  // Calculate tactical performance grade (S, A, B, C)
  const calculateGrade = (scoreIndicator: ScenarioOption['feedback']['scoreIndicator']) => {
    const score =
      scoreIndicator.emotionalRegulation * 0.35 +
      scoreIndicator.strategicThinking * 0.35 +
      scoreIndicator.socialAwareness * 0.2 +
      scoreIndicator.assertiveness * 0.1;

    if (score >= 90) return { letter: 'S', label: 'ELITE MASTERCLASS', color: 'border-emerald-500 text-emerald-500 bg-emerald-500/10' };
    if (score >= 75) return { letter: 'A', label: 'TACTICALLY SOUND', color: 'border-blue-500 text-blue-500 bg-blue-500/10' };
    if (score >= 55) return { letter: 'B', label: 'COMPROMISED POSITION', color: 'border-amber-500 text-amber-500 bg-amber-500/10' };
    return { letter: 'C', label: 'EMOTIONALLY VULNERABLE', color: 'border-rose-500 text-rose-500 bg-rose-500/10' };
  };

  // 3-Second Breath & Diagnostic Pause Action
  const handleTacticalPause = () => {
    if (isBreathing || pausedForBreath || isSubmitted) return;
    setIsBreathing(true);
    sounds.playBreathIn(preferences.soundEnabled);
    setBreathCountdown(3);

    const countdown = setInterval(() => {
      setBreathCountdown(prev => {
        if (prev <= 1) {
          clearInterval(countdown);
          setIsBreathing(false);
          setPausedForBreath(true);
          setHeartRate(68); // Biometrics stabilize
          incrementPauseCount();
          addXP(30, 'TACTICAL PAUSE EXECUTED');
          return 0;
        }
        return prev - 1;
      });
    }, 1000);
  };

  const handleSubmitDecision = () => {
    if (!selectedOption) return;
    setIsSubmitted(true);
    setTimerActive(false);

    const grade = calculateGrade(selectedOption.feedback.scoreIndicator);
    sounds.playGradeStamp(grade.letter, preferences.soundEnabled);

    // If S or A rank, trigger confetti
    if (grade.letter === 'S' || grade.letter === 'A') {
      setTimeout(() => {
        try {
          confetti({
            particleCount: 55,
            spread: 65,
            origin: { y: 0.7 },
            colors: ['#171717', '#777777', '#c0c0c0', '#22c55e'],
          });
        } catch {
          // Ignore
        }
      }, 200);
    }

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

  const handleCopyScript = (text: string) => {
    try {
      navigator.clipboard.writeText(text);
      setCopiedScript(true);
      sounds.playClick(preferences.soundEnabled);
      setTimeout(() => setCopiedScript(false), 2500);
    } catch {
      // Ignore
    }
  };

  const handleBranchContinue = (nextBranchId: string) => {
    setActiveBranchId(nextBranchId);
    setSelectedOptionId(null);
    setIsSubmitted(false);
    setPausedForBreath(false);
    setHeartRate(112);
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
    sounds.playSuccess(preferences.soundEnabled);
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

  const currentGrade = selectedOption ? calculateGrade(selectedOption.feedback.scoreIndicator) : null;

  return (
    <div className="max-w-4xl mx-auto space-y-8 animate-fade-in pb-16">
      {/* Top Navigation & Status Bar */}
      <div className="flex items-center justify-between pb-4 border-b border-room-border dark:border-room-darkBorder font-mono text-xs text-room-muted">
        <button
          onClick={() => {
            sounds.playClick(preferences.soundEnabled);
            setDestination('modules');
          }}
          className="inline-flex items-center space-x-1.5 hover:text-room-text dark:hover:text-room-darkText transition-colors"
        >
          <ArrowLeft size={14} />
          <span>Exit Simulation</span>
        </button>

        <div className="flex items-center space-x-3 sm:space-x-4">
          <span>
            DRILL #{currentScenario.number} / {ALL_SCENARIOS.length}
          </span>
          <span className="hidden sm:inline">•</span>
          <span className="hidden sm:inline">LVL {currentScenario.difficulty}</span>

          {/* Pressure Mode Toggle */}
          <button
            onClick={() => {
              sounds.playClick(preferences.soundEnabled);
              updatePreferences({ pressureMode: !preferences.pressureMode });
            }}
            className={`flex items-center gap-1 px-2 py-1 rounded text-[11px] font-mono border transition-all ${
              preferences.pressureMode
                ? 'bg-rose-500/10 border-rose-500/40 text-rose-500'
                : 'border-room-border dark:border-room-darkBorder hover:text-room-text dark:hover:text-room-darkText'
            }`}
            title="15s Pressure Mode"
          >
            <Timer size={12} />
            <span className="hidden md:inline">PRESSURE: {preferences.pressureMode ? 'ON' : 'OFF'}</span>
          </button>

          {/* Decision Schematic Modal Trigger */}
          <button
            onClick={() => {
              sounds.playClick(preferences.soundEnabled);
              setShowSchematic(true);
            }}
            className="flex items-center gap-1 px-2 py-1 rounded text-[11px] font-mono border border-room-border dark:border-room-darkBorder hover:text-room-text dark:hover:text-room-darkText transition-all"
            title="View Decision Pathways"
          >
            <GitBranch size={12} />
            <span className="hidden sm:inline">SCHEMATIC</span>
          </button>

          <button
            onClick={() => {
              sounds.playClick(preferences.soundEnabled);
              toggleSaveScenario(currentScenario.id);
            }}
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

      {/* Biometrics Status & Tactical Strip */}
      <div className="grid grid-cols-1 sm:grid-cols-3 gap-3">
        {/* Heart Rate / Biometrics */}
        <div className="p-3.5 rounded-xl border border-room-border dark:border-room-darkBorder bg-room-surface dark:bg-room-darkSurface flex items-center justify-between">
          <div className="flex items-center gap-3">
            <div className={`p-2 rounded-full ${heartRate > 90 ? 'bg-rose-500/10 text-rose-500 animate-pulse' : 'bg-emerald-500/10 text-emerald-500'}`}>
              <Heart size={15} />
            </div>
            <div>
              <div className="text-[10px] font-mono uppercase tracking-widest text-room-muted">BIOMETRIC TENSION</div>
              <div className="font-mono text-sm font-semibold text-room-text dark:text-room-darkText flex items-baseline gap-1.5">
                <span>{heartRate} BPM</span>
                <span className="text-[10px] font-mono text-room-muted">[{heartRate > 90 ? 'ELEVATED' : 'EQUILIBRIUM'}]</span>
              </div>
            </div>
          </div>
          <Activity size={18} className={heartRate > 90 ? 'text-rose-500 animate-pulse' : 'text-emerald-500'} />
        </div>

        {/* 3-Second Breath & Diagnostic Pause Action */}
        <div className="p-3.5 rounded-xl border border-room-border dark:border-room-darkBorder bg-room-surface dark:bg-room-darkSurface flex items-center justify-between">
          <div>
            <div className="text-[10px] font-mono uppercase tracking-widest text-room-muted">DISCIPLINE PROTOCOL</div>
            <div className="text-xs font-mono font-medium text-room-text dark:text-room-darkText mt-0.5">
              {pausedForBreath ? 'CALIBRATED (+30 XP)' : '3-SEC TACTICAL PAUSE'}
            </div>
          </div>
          <button
            onClick={handleTacticalPause}
            disabled={isBreathing || pausedForBreath || isSubmitted}
            className={`flex items-center gap-1.5 px-3 py-1.5 rounded font-mono text-[11px] transition-all ${
              pausedForBreath
                ? 'bg-emerald-500/10 text-emerald-600 dark:text-emerald-400 border border-emerald-500/30'
                : isBreathing
                ? 'bg-room-text dark:bg-room-darkText text-room-surface dark:text-room-darkBg animate-pulse'
                : 'bg-room-text dark:bg-room-darkText text-room-surface dark:text-room-darkBg hover:opacity-90'
            }`}
          >
            <Wind size={13} />
            {isBreathing ? `INHALING... ${breathCountdown}s` : pausedForBreath ? 'ENGAGED' : 'PAUSE'}
          </button>
        </div>

        {/* Response Window Timer */}
        <div className="p-3.5 rounded-xl border border-room-border dark:border-room-darkBorder bg-room-surface dark:bg-room-darkSurface flex items-center justify-between">
          <div>
            <div className="text-[10px] font-mono uppercase tracking-widest text-room-muted">RESPONSE WINDOW</div>
            <div className="font-mono text-sm font-semibold text-room-text dark:text-room-darkText">
              {preferences.pressureMode ? (
                <span className={timeLeft <= 5 ? 'text-rose-500 font-bold animate-pulse' : ''}>
                  00:{timeLeft < 10 ? `0${timeLeft}` : timeLeft} SEC
                </span>
              ) : (
                <span className="text-xs text-room-muted">UNCONSTRAINED</span>
              )}
            </div>
          </div>
          <Timer size={18} className="text-room-muted" />
        </div>
      </div>

      {/* Main Scenario Header */}
      <div className="space-y-4">
        {/* Interactive 3-Step Guided Progress Tracker */}
        <div className="grid grid-cols-3 gap-2 p-1.5 rounded-lg border border-room-border/80 dark:border-room-darkBorder/80 bg-room-surface/60 dark:bg-room-darkSurface/60 text-center font-mono text-[10px]">
          <div className="py-1 px-2 rounded bg-room-text dark:bg-room-darkText text-room-surface dark:text-room-darkBg font-semibold">
            01 Observe & Context
          </div>
          <div
            className={`py-1 px-2 rounded transition-colors ${
              selectedOptionId
                ? 'bg-room-text/90 dark:bg-room-darkText/90 text-room-surface dark:text-room-darkBg font-semibold'
                : 'text-room-muted'
            }`}
          >
            02 Choose Tactical Response
          </div>
          <div
            className={`py-1 px-2 rounded transition-colors ${
              isSubmitted
                ? 'bg-room-text dark:bg-room-darkText text-room-surface dark:text-room-darkBg font-semibold'
                : 'text-room-muted'
            }`}
          >
            03 Deconstruct Strategy
          </div>
        </div>

        <div className="flex flex-wrap items-center gap-2 text-xs font-mono text-room-muted">
          <span className="px-2 py-0.5 rounded bg-room-subtle dark:bg-room-darkSubtle text-room-text dark:text-room-darkText uppercase font-semibold">
            {currentScenario.category.replace('-', ' ')}
          </span>
          <span>•</span>
          <span>SETTING: {currentScenario.setting}</span>
          <span>•</span>
          <span>EST. TIME: {currentScenario.estimatedDuration}</span>
          {activeBranchId && (
            <span className="px-2 py-0.5 rounded bg-amber-500/10 text-amber-600 dark:text-amber-400 font-semibold animate-pulse">
              STAGE 2: BRANCH REACTION
            </span>
          )}
        </div>

        <h1 className="text-2xl sm:text-3xl font-light text-room-text dark:text-room-darkText tracking-tight">
          {currentScenario.title}
        </h1>

        <p className="text-sm sm:text-base text-room-muted dark:text-room-darkMuted leading-relaxed">
          {currentScenario.context}
        </p>

        {/* Tactical Pause Unlocked Psychological Dossier */}
        {pausedForBreath && (
          <div className="p-4 rounded-xl border border-emerald-500/30 bg-emerald-500/5 flex items-start gap-3 animate-fade-in">
            <Sparkles size={16} className="text-emerald-500 shrink-0 mt-0.5" />
            <div>
              <div className="font-mono text-xs uppercase tracking-wider text-emerald-600 dark:text-emerald-400 font-medium">
                TACTICAL PAUSE REVEAL: HIDDEN INTENT DECODED
              </div>
              <p className="text-xs sm:text-sm text-room-text dark:text-room-darkText mt-1 font-sans">
                Notice the speaker's frame: they are attempting to induce urgent emotional compliance. When counter-interrogated with calm, dispassionate inquiry, the balance of power immediately resets in your favour.
              </p>
            </div>
          </div>
        )}
      </div>

      {/* Dialogue Chamber Card with Typewriter Effect */}
      <div className="p-6 sm:p-8 rounded-xl border border-room-border dark:border-room-darkBorder bg-room-surface dark:bg-room-darkSurface shadow-sm relative overflow-hidden">
        <div className="text-[11px] font-mono text-room-muted uppercase tracking-wider mb-3 flex items-center justify-between">
          <span>{activeSpeaker} initiates interaction:</span>
          <div className="flex items-center gap-3">
            {isTyping && (
              <button
                onClick={skipTyping}
                className="font-mono text-[10px] text-room-muted hover:text-room-text dark:hover:text-room-darkText underline underline-offset-4"
              >
                SKIP TYPEWRITER
              </button>
            )}
            <span className="flex h-2 w-2 relative">
              <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-neutral-400 opacity-75"></span>
              <span className="relative inline-flex rounded-full h-2 w-2 bg-neutral-500"></span>
            </span>
          </div>
        </div>

        <blockquote className="text-lg sm:text-2xl font-serif italic text-room-text dark:text-room-darkText pl-4 border-l-2 border-room-text dark:border-room-darkText my-2 leading-relaxed">
          {isTyping ? typedText : activeDialogue}
          {isTyping && <span className="inline-block w-1.5 h-5 ml-1 bg-room-text dark:bg-room-darkText animate-pulse" />}
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
                onClick={() => {
                  if (!isSubmitted) {
                    sounds.playSelect(preferences.soundEnabled);
                    setSelectedOptionId(opt.id);
                  }
                }}
                className={`p-4 sm:p-5 rounded-xl border text-left transition-all ${
                  isSubmitted
                    ? isSelected
                      ? 'border-room-text dark:border-room-darkText bg-room-subtle dark:bg-room-darkSubtle shadow-sm'
                      : 'border-room-border/50 dark:border-room-darkBorder/50 opacity-40 cursor-default'
                    : isSelected
                    ? 'border-room-text dark:border-room-darkText bg-room-surface dark:bg-room-darkSurface shadow-md cursor-pointer'
                    : 'border-room-border dark:border-room-darkBorder bg-room-surface dark:bg-room-darkSurface hover:border-room-text/40 dark:hover:border-room-darkText/40 cursor-pointer'
                }`}
              >
                <div className="flex items-start space-x-3">
                  <span
                    className={`inline-flex items-center justify-center w-6 h-6 rounded font-mono text-xs font-semibold shrink-0 mt-0.5 ${
                      isSelected
                        ? 'bg-room-text dark:bg-room-darkText text-room-surface dark:text-room-darkBg'
                        : 'border border-room-border dark:border-room-darkBorder text-room-muted'
                    }`}
                  >
                    {opt.label}
                  </span>

                  <div className="space-y-1.5 flex-1">
                    <p className="text-sm font-medium text-room-text dark:text-room-darkText leading-relaxed">
                      "{opt.text}"
                    </p>
                    <p className="text-xs font-mono text-room-muted">
                      Strategic Focus: {opt.intent}
                    </p>
                  </div>
                </div>
              </div>
            );
          })}
        </div>
      </div>

      {/* Commit Decision Button (Before Submit) */}
      {!isSubmitted && (
        <div className="flex justify-end pt-2">
          <button
            onClick={handleSubmitDecision}
            disabled={!selectedOptionId}
            className={`px-8 py-3.5 rounded-lg font-mono text-xs uppercase tracking-wider font-semibold transition-all flex items-center space-x-2 ${
              selectedOptionId
                ? 'bg-room-text dark:bg-room-darkText text-room-surface dark:text-room-darkBg hover:opacity-90 shadow-md cursor-pointer'
                : 'bg-room-border dark:bg-room-darkBorder text-room-muted cursor-not-allowed opacity-60'
            }`}
          >
            <span>Lock In Response</span>
            <ArrowRight size={14} />
          </button>
        </div>
      )}

      {/* Tactical Deconstruction / Debriefing Section (After Submit) */}
      {isSubmitted && selectedOption && currentGrade && (
        <section className="space-y-8 pt-6 border-t border-room-border dark:border-room-darkBorder animate-fade-in">
          {/* Top Grade Stamp & Debrief Header */}
          <div className="p-6 rounded-xl border border-room-border dark:border-room-darkBorder bg-room-surface dark:bg-room-darkSurface flex flex-col sm:flex-row items-start sm:items-center justify-between gap-4">
            <div>
              <div className="text-[11px] font-mono text-room-muted uppercase tracking-widest">
                STAGE 03 — STRATEGIC DEBRIEFING
              </div>
              <h2 className="text-xl font-medium text-room-text dark:text-room-darkText mt-1">
                Deconstructive Assessment
              </h2>
            </div>

            {/* Tactical Rank Stamp Badge */}
            <div className="flex items-center gap-3">
              <div className="text-right">
                <div className="text-[10px] font-mono uppercase tracking-widest text-room-muted">TACTICAL RANK</div>
                <div className="font-mono text-xs text-room-text dark:text-room-darkText font-medium">
                  {currentGrade.label}
                </div>
              </div>
              <div className={`w-14 h-14 rounded-lg border-2 flex items-center justify-center font-mono text-3xl font-bold shadow-sm ${currentGrade.color}`}>
                {currentGrade.letter}
              </div>
            </div>
          </div>

          {/* 01. Immediate Situation Analysis */}
          <div className="p-6 rounded-xl border border-room-border dark:border-room-darkBorder bg-room-surface dark:bg-room-darkSurface space-y-3">
            <div className="flex items-center space-x-2 text-xs font-mono uppercase tracking-wider text-room-muted">
              <Eye size={15} />
              <span>01 — Psychological Situation Analysis</span>
            </div>
            <p className="text-sm text-room-text dark:text-room-darkText leading-relaxed">
              {selectedOption.feedback.situationAnalysis}
            </p>
          </div>

          {/* 02. Decision Review (Strengths vs Strategic Risks) */}
          <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
            <div className="p-5 rounded-xl border border-room-border dark:border-room-darkBorder bg-room-surface dark:bg-room-darkSurface space-y-3">
              <div className="flex items-center space-x-2 text-xs font-mono uppercase tracking-wider text-emerald-600 dark:text-emerald-400">
                <CheckCircle2 size={15} />
                <span>Strategic Strengths</span>
              </div>
              <p className="text-xs font-mono text-room-muted mb-2">
                Primary accomplishment: {selectedOption.feedback.decisionReview.accomplished}
              </p>
              <ul className="space-y-1.5 text-xs text-room-text dark:text-room-darkText">
                {selectedOption.feedback.decisionReview.strengths.map((str, i) => (
                  <li key={i} className="flex items-start space-x-2">
                    <span className="text-emerald-500">•</span>
                    <span>{str}</span>
                  </li>
                ))}
              </ul>
            </div>

            <div className="p-5 rounded-xl border border-room-border dark:border-room-darkBorder bg-room-surface dark:bg-room-darkSurface space-y-3">
              <div className="flex items-center space-x-2 text-xs font-mono uppercase tracking-wider text-amber-600 dark:text-amber-400">
                <AlertCircle size={15} />
                <span>Tactical Vulnerabilities & Risks</span>
              </div>
              <ul className="space-y-1.5 text-xs text-room-text dark:text-room-darkText">
                {selectedOption.feedback.decisionReview.risks.map((risk, i) => (
                  <li key={i} className="flex items-start space-x-2">
                    <span className="text-amber-500">•</span>
                    <span>{risk}</span>
                  </li>
                ))}
              </ul>
            </div>
          </div>

          {/* 03. Perspective Calibration */}
          <div className="p-6 rounded-xl border border-room-border dark:border-room-darkBorder bg-room-surface dark:bg-room-darkSurface space-y-4">
            <div className="flex items-center space-x-2 text-xs font-mono uppercase tracking-wider text-room-muted">
              <Brain size={15} />
              <span>03 — Counterparty Perspective Calibration</span>
            </div>

            <div className="space-y-3 text-xs">
              <div>
                <span className="font-mono text-room-muted block mb-1">
                  How the counterparty genuinely interpreted your words:
                </span>
                <p className="text-room-text dark:text-room-darkText italic pl-3 border-l border-room-border dark:border-room-darkBorder">
                  "{selectedOption.feedback.perspectiveCheck.otherInterpretation}"
                </p>
              </div>

              <div>
                <span className="font-mono text-room-muted block mb-1">
                  Psychological Blindspot / Missing Information:
                </span>
                <p className="text-room-text dark:text-room-darkText">
                  {selectedOption.feedback.perspectiveCheck.missingInformation}
                </p>
              </div>
            </div>
          </div>

          {/* 04. Consequence Projection */}
          <div className="p-6 rounded-xl border border-room-border dark:border-room-darkBorder bg-room-surface dark:bg-room-darkSurface space-y-4">
            <div className="flex items-center space-x-2 text-xs font-mono uppercase tracking-wider text-room-muted">
              <Shield size={15} />
              <span>04 — Consequence Trajectory</span>
            </div>

            <div className="grid grid-cols-1 sm:grid-cols-3 gap-4 text-xs">
              <div className="p-3 rounded-lg bg-room-subtle dark:bg-room-darkSubtle space-y-1">
                <div className="font-mono text-[10px] uppercase text-room-muted">Short-Term (24h)</div>
                <p className="text-room-text dark:text-room-darkText leading-relaxed">
                  {selectedOption.feedback.consequences.shortTerm}
                </p>
              </div>

              <div className="p-3 rounded-lg bg-room-subtle dark:bg-room-darkSubtle space-y-1">
                <div className="font-mono text-[10px] uppercase text-room-muted">Long-Term (6-12m)</div>
                <p className="text-room-text dark:text-room-darkText leading-relaxed">
                  {selectedOption.feedback.consequences.longTerm}
                </p>
              </div>

              <div className="p-3 rounded-lg bg-room-subtle dark:bg-room-darkSubtle space-y-1">
                <div className="font-mono text-[10px] uppercase text-room-muted">Net Strategic Tradeoff</div>
                <p className="text-room-text dark:text-room-darkText leading-relaxed">
                  {selectedOption.feedback.consequences.tradeoffs}
                </p>
              </div>
            </div>
          </div>

          {/* 05. Model Response Phrasing Script */}
          <div className="p-6 rounded-xl border border-room-border dark:border-room-darkBorder bg-room-surface dark:bg-room-darkSurface space-y-3">
            <div className="flex items-center justify-between text-xs font-mono uppercase tracking-wider text-room-muted">
              <div className="flex items-center space-x-2">
                <Sparkles size={15} />
                <span>05 — Model Tactical Phrasing (Verbatim Script)</span>
              </div>
              <button
                onClick={() => handleCopyScript(selectedOption.feedback.alternativeNaturalResponse)}
                className="flex items-center space-x-1 hover:text-room-text dark:hover:text-room-darkText transition-colors font-mono text-[11px] border border-room-border dark:border-room-darkBorder px-2.5 py-1 rounded bg-room-subtle dark:bg-room-darkSubtle"
              >
                {copiedScript ? <Check size={12} className="text-emerald-500" /> : <Copy size={12} />}
                <span>{copiedScript ? 'Copied' : 'Copy Script'}</span>
              </button>
            </div>

            <blockquote className="p-4 rounded-lg bg-room-subtle dark:bg-room-darkSubtle text-xs sm:text-sm font-sans italic text-room-text dark:text-room-darkText leading-relaxed border-l-2 border-room-text dark:border-room-darkText">
              "{selectedOption.feedback.alternativeNaturalResponse}"
            </blockquote>
          </div>

          {/* 06. Skill Calibration & Exercise */}
          <div className="p-6 rounded-xl border border-room-border dark:border-room-darkBorder bg-room-surface dark:bg-room-darkSurface space-y-3">
            <div className="flex items-center space-x-2 text-xs font-mono uppercase tracking-wider text-room-muted">
              <Zap size={15} />
              <span>06 — Cognitive Skill Anchor: {selectedOption.feedback.skillDevelopment.skill}</span>
            </div>
            <p className="text-xs text-room-text dark:text-room-darkText leading-relaxed">
              <span className="font-mono text-room-muted block mb-1">Practical Mental Protocol:</span>
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
              placeholder="Record your psychological reaction: What did you feel first? What outcome did you prioritize?"
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

          {/* Next Steps: Branching or Next Drill */}
          <div className="flex flex-col sm:flex-row items-center justify-between gap-4 pt-4 border-t border-room-border dark:border-room-darkBorder">
            <button
              onClick={() => {
                sounds.playClick(preferences.soundEnabled);
                resetState();
              }}
              className="w-full sm:w-auto px-4 py-2.5 rounded border border-room-border dark:border-room-darkBorder text-xs font-mono uppercase text-room-muted hover:text-room-text dark:hover:text-room-darkText transition-colors flex items-center justify-center space-x-2"
            >
              <RotateCcw size={13} />
              <span>Replay Scenario</span>
            </button>

            <div className="flex items-center space-x-3 w-full sm:w-auto">
              {selectedOption.nextBranchId && currentScenario.branches && (
                <button
                  onClick={() => {
                    sounds.playClick(preferences.soundEnabled);
                    handleBranchContinue(selectedOption.nextBranchId!);
                  }}
                  className="flex-1 sm:flex-initial px-5 py-2.5 rounded bg-room-text dark:bg-room-darkText text-room-surface dark:text-room-darkBg font-mono text-xs uppercase font-semibold flex items-center justify-center space-x-2 hover:opacity-90 shadow-sm"
                >
                  <span>Continue Stage 2</span>
                  <ChevronRight size={14} />
                </button>
              )}

              <button
                onClick={() => {
                  sounds.playClick(preferences.soundEnabled);
                  handleGoNext();
                }}
                className="flex-1 sm:flex-initial px-6 py-2.5 rounded bg-room-text dark:bg-room-darkText text-room-surface dark:text-room-darkBg font-mono text-xs uppercase font-semibold flex items-center justify-center space-x-2 hover:opacity-90 shadow-sm"
              >
                <span>{nextScenario ? 'Next Simulation' : 'Finish All'}</span>
                <ArrowRight size={14} />
              </button>
            </div>
          </div>
        </section>
      )}

      {/* Decision Schematic Modal */}
      {showSchematic && (
        <div className="fixed inset-0 z-50 flex items-center justify-center p-4 bg-black/60 backdrop-blur-sm animate-fade-in">
          <div className="bg-room-surface dark:bg-room-darkSurface border border-room-border dark:border-room-darkBorder max-w-2xl w-full p-6 sm:p-8 rounded-xl shadow-2xl space-y-6">
            <div className="flex items-center justify-between border-b border-room-border dark:border-room-darkBorder pb-4">
              <div className="flex items-center gap-2">
                <GitBranch size={18} className="text-room-text dark:text-room-darkText" />
                <h3 className="font-mono text-base uppercase tracking-wider text-room-text dark:text-room-darkText">
                  Decision Schematic Tree
                </h3>
              </div>
              <button
                onClick={() => setShowSchematic(false)}
                className="font-mono text-xs text-room-muted hover:text-room-text dark:hover:text-room-darkText"
              >
                CLOSE [ESC]
              </button>
            </div>

            <p className="text-xs text-room-muted font-mono uppercase">
              STRATEGIC BRANCHING MATRIX FOR: {currentScenario.title}
            </p>

            <div className="space-y-3 max-h-[60vh] overflow-y-auto pr-1">
              {activeOptions.map((opt) => {
                const grade = calculateGrade(opt.feedback.scoreIndicator);
                return (
                  <div key={opt.id} className="p-4 border border-room-border dark:border-room-darkBorder rounded-lg bg-room-subtle dark:bg-room-darkSubtle space-y-2">
                    <div className="flex items-center justify-between">
                      <span className="font-mono text-xs font-semibold text-room-text dark:text-room-darkText">
                        BRANCH {opt.label}: {opt.intent}
                      </span>
                      <span className={`text-[10px] font-mono px-2 py-0.5 rounded border ${grade.color}`}>
                        RANK {grade.letter}
                      </span>
                    </div>
                    <p className="text-xs text-room-muted">
                      "{opt.text}"
                    </p>
                    <p className="text-xs text-room-text dark:text-room-darkText pt-1 border-t border-room-border/40 dark:border-room-darkBorder">
                      <strong className="font-mono text-[10px] uppercase text-room-muted">Consequence:</strong> {opt.feedback.consequences.shortTerm}
                    </p>
                  </div>
                );
              })}
            </div>

            <div className="pt-2 flex justify-end">
              <button
                onClick={() => setShowSchematic(false)}
                className="px-6 py-2 bg-room-text dark:bg-room-darkText text-room-surface dark:text-room-darkBg font-mono text-xs tracking-wider rounded uppercase hover:opacity-90"
              >
                Return to Simulator
              </button>
            </div>
          </div>
        </div>
      )}
    </div>
  );
};
