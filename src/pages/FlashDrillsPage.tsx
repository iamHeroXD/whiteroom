import React, { useState, useEffect, useRef } from 'react';
import confetti from 'canvas-confetti';
import {
  Zap,
  RotateCcw,
  Timer,
  Award,
  ArrowRight,
  Shield,
  Sparkles,
  HelpCircle,
  CheckCircle2,
  XCircle,
  PlaySquare,
  Flame,
} from 'lucide-react';
import { useApp } from '../state/AppContext';
import { FLASH_DRILL_QUESTIONS, FlashDrillQuestion } from '../data/flashDrills';
import { sounds } from '../utils/audio';

export const FlashDrillsPage: React.FC = () => {
  const { progress, addXP, recordFlashDrillScore, setDestination, preferences } = useApp();

  const [gameState, setGameState] = useState<'idle' | 'playing' | 'answered' | 'finished'>('idle');
  const [questionIndex, setQuestionIndex] = useState(0);
  const [score, setScore] = useState(0);
  const [streak, setStreak] = useState(0);
  const [maxStreak, setMaxStreak] = useState(0);
  const [selectedOptionId, setSelectedOptionId] = useState<string | null>(null);
  const [timeLeft, setTimeLeft] = useState(8);
  const timerRef = useRef<NodeJS.Timeout | null>(null);

  const currentQ: FlashDrillQuestion = FLASH_DRILL_QUESTIONS[questionIndex];

  // Timer loop during 'playing' state
  useEffect(() => {
    if (gameState === 'playing') {
      setTimeLeft(8);
      timerRef.current = setInterval(() => {
        setTimeLeft(prev => {
          if (prev <= 1) {
            handleTimeOut();
            return 0;
          }
          if (prev <= 3) {
            sounds.playHeartbeat(preferences.soundEnabled);
          }
          return prev - 1;
        });
      }, 1000);
    }
    return () => {
      if (timerRef.current) clearInterval(timerRef.current);
    };
  }, [gameState, questionIndex]);

  const handleTimeOut = () => {
    if (timerRef.current) clearInterval(timerRef.current);
    setSelectedOptionId('timeout');
    setGameState('answered');
    setStreak(0);
    sounds.playWrong(preferences.soundEnabled);
  };

  const handleStartGame = () => {
    sounds.playSubmit(preferences.soundEnabled);
    setGameState('playing');
    setQuestionIndex(0);
    setScore(0);
    setStreak(0);
    setMaxStreak(0);
    setSelectedOptionId(null);
  };

  const handleSelectOption = (optId: string) => {
    if (gameState !== 'playing') return;
    if (timerRef.current) clearInterval(timerRef.current);

    setSelectedOptionId(optId);
    setGameState('answered');

    const chosen = currentQ.options.find(o => o.id === optId);
    if (chosen?.isCorrect) {
      const newStreak = streak + 1;
      setStreak(newStreak);
      setMaxStreak(prev => Math.max(prev, newStreak));

      // Multiplier scoring
      const multiplier = newStreak >= 5 ? 2.5 : newStreak >= 3 ? 1.75 : 1.0;
      const pointsGained = Math.round(100 * multiplier + timeLeft * 10);
      setScore(prev => prev + pointsGained);
      addXP(pointsGained, 'Flash Reaction Drill');

      sounds.playCombo(newStreak, preferences.soundEnabled);

      if (newStreak >= 5) {
        try {
          confetti({
            particleCount: 30,
            spread: 50,
            origin: { y: 0.7 },
            colors: ['#22c55e', '#ffffff', '#171717'],
          });
        } catch {
          // Ignore
        }
      }
    } else {
      setStreak(0);
      sounds.playWrong(preferences.soundEnabled);
    }
  };

  const handleNextQuestion = () => {
    sounds.playClick(preferences.soundEnabled);
    if (questionIndex < FLASH_DRILL_QUESTIONS.length - 1) {
      setQuestionIndex(prev => prev + 1);
      setSelectedOptionId(null);
      setGameState('playing');
    } else {
      setGameState('finished');
      recordFlashDrillScore(maxStreak);
      sounds.playSuccess(preferences.soundEnabled);
      try {
        confetti({
          particleCount: 70,
          spread: 80,
          origin: { y: 0.6 },
          colors: ['#171717', '#c0c0c0', '#22c55e', '#f59e0b'],
        });
      } catch {
        // Ignore
      }
    }
  };

  return (
    <div className="max-w-4xl mx-auto space-y-8 animate-fade-in pb-16">
      {/* Top Breadcrumb & Status */}
      <div className="border-b border-room-border dark:border-room-darkBorder pb-6 flex flex-col md:flex-row md:items-end justify-between gap-4">
        <div>
          <span className="font-mono text-xs uppercase tracking-widest text-room-muted block mb-1">
            RAPID INTUITION TRAINER
          </span>
          <h2 className="text-3xl sm:text-4xl font-light text-room-text dark:text-room-darkText tracking-tight flex items-center space-x-3">
            <span>Flash Reaction Drills</span>
            <span className="px-2.5 py-0.5 rounded-full text-xs font-mono bg-amber-500/10 text-amber-600 dark:text-amber-400 border border-amber-500/20 font-semibold">
              Live Decoder
            </span>
          </h2>
          <p className="text-sm text-room-muted dark:text-room-darkMuted mt-1 max-w-xl">
            Social predators and manipulators count on speed and guilt. Decode the true underlying
            subtext before your involuntary emotional reflex kicks in.
          </p>
        </div>

        {/* High Score & Best Streak Display */}
        <div className="flex items-center space-x-3 font-mono text-xs">
          <div className="p-2.5 rounded-lg border border-room-border dark:border-room-darkBorder bg-room-surface dark:bg-room-darkSurface text-center">
            <span className="text-[10px] text-room-muted block">BEST STREAK</span>
            <span className="text-base font-bold text-room-text dark:text-room-darkText">
              {progress.flashDrillHighScore || 0}
            </span>
          </div>
          <div className="p-2.5 rounded-lg border border-room-border dark:border-room-darkBorder bg-room-surface dark:bg-room-darkSurface text-center">
            <span className="text-[10px] text-room-muted block">CURRENT SCORE</span>
            <span className="text-base font-bold text-emerald-600 dark:text-emerald-400">
              {score}
            </span>
          </div>
        </div>
      </div>

      {/* IDLE STATE: Game Intro & Launch Deck */}
      {gameState === 'idle' && (
        <div className="p-8 sm:p-12 rounded-2xl border border-room-border dark:border-room-darkBorder bg-room-surface dark:bg-room-darkSurface text-center space-y-6 shadow-md">
          <div className="w-16 h-16 rounded-2xl border-2 border-room-text dark:border-room-darkText bg-room-subtle dark:bg-room-darkSubtle flex items-center justify-center mx-auto text-room-text dark:text-room-darkText">
            <Zap size={32} />
          </div>

          <div className="space-y-2 max-w-lg mx-auto">
            <h3 className="text-2xl font-light text-room-text dark:text-room-darkText">
              Social Cue Micro-Decoder
            </h3>
            <p className="text-xs sm:text-sm text-room-muted leading-relaxed">
              You will face 10 rapid situational statements with an <strong>8-second countdown timer</strong>.
              Diagnose the true underlying intent (Status Insecurity, Guilt Extortion, Boundary Probe, or Vulnerability).
            </p>
          </div>

          <div className="grid grid-cols-1 sm:grid-cols-3 gap-3 max-w-xl mx-auto font-mono text-xs text-room-muted pt-2">
            <div className="p-3 rounded-lg border border-room-border dark:border-room-darkBorder bg-room-bg dark:bg-room-darkBg">
              <span className="text-room-text dark:text-room-darkText font-bold block">8s Per Prompt</span>
              Inhibits overthinking
            </div>
            <div className="p-3 rounded-lg border border-room-border dark:border-room-darkBorder bg-room-bg dark:bg-room-darkBg">
              <span className="text-room-text dark:text-room-darkText font-bold block">Streak Combos</span>
              Up to 2.5x Multiplier
            </div>
            <div className="p-3 rounded-lg border border-room-border dark:border-room-darkBorder bg-room-bg dark:bg-room-darkBg">
              <span className="text-room-text dark:text-room-darkText font-bold block">Instant Feedback</span>
              Deconstructs the trap
            </div>
          </div>

          <div className="pt-4">
            <button
              onClick={handleStartGame}
              className="px-10 py-4 rounded bg-room-text dark:bg-room-darkText text-room-surface dark:text-room-darkBg font-mono text-xs uppercase tracking-widest font-semibold hover:opacity-90 active:scale-[0.99] transition-all shadow-lg flex items-center space-x-2 mx-auto"
            >
              <Zap size={16} />
              <span>START FLASH GAUNTLET</span>
            </button>
          </div>
        </div>
      )}

      {/* PLAYING / ANSWERED STATE */}
      {(gameState === 'playing' || gameState === 'answered') && currentQ && (
        <div className="space-y-6">
          {/* Top Live Progress Bar & Stats */}
          <div className="flex items-center justify-between font-mono text-xs text-room-muted">
            <div className="flex items-center space-x-2">
              <span className="font-semibold text-room-text dark:text-room-darkText">
                QUESTION {questionIndex + 1} / {FLASH_DRILL_QUESTIONS.length}
              </span>
              <span>•</span>
              <span className="capitalize">{currentQ.category.replace('-', ' ')}</span>
            </div>

            {/* Streak Counter Pill */}
            {streak > 1 && (
              <div className="flex items-center space-x-1.5 px-2.5 py-0.5 rounded-full bg-amber-500/10 text-amber-600 dark:text-amber-400 border border-amber-500/30 font-bold animate-pulse">
                <Flame size={13} />
                <span>{streak}x COMBO! ({streak >= 5 ? '2.5x' : streak >= 3 ? '1.75x' : '1.2x'})</span>
              </div>
            )}

            {/* Timer Gauge */}
            <div className="flex items-center space-x-2 font-mono">
              <Timer size={15} className={timeLeft <= 3 ? 'text-rose-500 animate-ping' : ''} />
              <span className={`text-base font-bold ${timeLeft <= 3 ? 'text-rose-600 dark:text-rose-400 font-mono' : 'text-room-text dark:text-room-darkText'}`}>
                {timeLeft}s
              </span>
            </div>
          </div>

          {/* Countdown Bar */}
          <div className="w-full h-2 rounded-full bg-room-subtle dark:bg-room-darkSubtle overflow-hidden">
            <div
              className={`h-full transition-all duration-1000 linear ${
                timeLeft <= 3 ? 'bg-rose-500' : 'bg-room-text dark:bg-room-darkText'
              }`}
              style={{ width: `${(timeLeft / 8) * 100}%` }}
            />
          </div>

          {/* Statement Prompt Card */}
          <div className="p-6 sm:p-8 rounded-xl border border-room-border dark:border-room-darkBorder bg-room-surface dark:bg-room-darkSurface shadow-sm space-y-4">
            <div className="flex items-center justify-between text-xs font-mono text-room-muted">
              <span>{currentQ.speaker}</span>
              <span className="italic">{currentQ.context}</span>
            </div>

            <blockquote className="text-xl sm:text-2xl font-serif italic text-room-text dark:text-room-darkText pl-4 border-l-2 border-room-text dark:border-room-darkText leading-relaxed">
              {currentQ.dialogue}
            </blockquote>
          </div>

          {/* Options Grid */}
          <div className="grid grid-cols-1 sm:grid-cols-2 gap-3">
            {currentQ.options.map(opt => {
              const isSelected = selectedOptionId === opt.id;
              let btnStyle = 'border-room-border dark:border-room-darkBorder bg-room-surface dark:bg-room-darkSurface hover:border-room-text dark:hover:border-room-darkText';

              if (gameState === 'answered') {
                if (opt.isCorrect) {
                  btnStyle = 'border-emerald-500 bg-emerald-50/60 dark:bg-emerald-950/30 text-emerald-900 dark:text-emerald-300 font-semibold';
                } else if (isSelected) {
                  btnStyle = 'border-rose-500 bg-rose-50/60 dark:bg-rose-950/30 text-rose-900 dark:text-rose-300 font-semibold';
                } else {
                  btnStyle = 'opacity-40 border-room-border dark:border-room-darkBorder';
                }
              }

              return (
                <button
                  key={opt.id}
                  disabled={gameState === 'answered'}
                  onClick={() => handleSelectOption(opt.id)}
                  className={`p-4 rounded-xl border text-left transition-all flex items-start space-x-3 ${btnStyle}`}
                >
                  <span className="font-mono text-xs font-bold px-2 py-0.5 rounded bg-room-border/40 dark:bg-room-darkBorder">
                    {opt.label}
                  </span>
                  <div className="flex-1 text-xs sm:text-sm">
                    <span>{opt.intent}</span>
                  </div>
                </button>
              );
            })}
          </div>

          {/* Post-Answer Deconstruction Card */}
          {gameState === 'answered' && (
            <div className="p-6 rounded-xl border border-room-border dark:border-room-darkBorder bg-room-surface dark:bg-room-darkSurface space-y-4 animate-slide-up shadow-sm">
              <div className="flex items-center justify-between">
                <div className="flex items-center space-x-2">
                  {currentQ.options.find(o => o.id === selectedOptionId)?.isCorrect ? (
                    <>
                      <CheckCircle2 size={18} className="text-emerald-500" />
                      <span className="font-mono text-xs font-bold text-emerald-600 dark:text-emerald-400 uppercase">
                        Accurate Diagnosis (+{streak >= 3 ? 'Combo Bonus' : 'Score'})
                      </span>
                    </>
                  ) : (
                    <>
                      <XCircle size={18} className="text-rose-500" />
                      <span className="font-mono text-xs font-bold text-rose-600 dark:text-rose-400 uppercase">
                        {selectedOptionId === 'timeout' ? 'Time Expired!' : 'Bait Taken!'}
                      </span>
                    </>
                  )}
                </div>

                <button
                  onClick={handleNextQuestion}
                  className="px-5 py-2 rounded bg-room-text dark:bg-room-darkText text-room-surface dark:text-room-darkBg font-mono text-xs uppercase font-medium hover:opacity-90 flex items-center space-x-1.5 shadow-sm"
                >
                  <span>{questionIndex < FLASH_DRILL_QUESTIONS.length - 1 ? 'Next Statement' : 'View Debrief'}</span>
                  <ArrowRight size={14} />
                </button>
              </div>

              {/* Rationale */}
              <p className="text-xs sm:text-sm text-room-text dark:text-room-darkText leading-relaxed">
                {currentQ.options.find(o => o.isCorrect)?.explanation}
              </p>

              {/* Tactical Countermove */}
              <div className="pt-3 border-t border-room-border/60 dark:border-room-darkBorder flex items-start space-x-2 text-xs font-mono text-room-muted">
                <Shield size={14} className="text-room-text dark:text-room-darkText flex-shrink-0 mt-0.5" />
                <span>
                  <strong className="text-room-text dark:text-room-darkText">Tactical Countermove: </strong>
                  {currentQ.trapExplanation}
                </span>
              </div>
            </div>
          )}
        </div>
      )}

      {/* FINISHED STATE */}
      {gameState === 'finished' && (
        <div className="p-8 sm:p-12 rounded-2xl border border-room-border dark:border-room-darkBorder bg-room-surface dark:bg-room-darkSurface text-center space-y-6 shadow-xl animate-fade-in">
          <div className="w-16 h-16 rounded-full border-2 border-emerald-500 bg-emerald-50 dark:bg-emerald-950/40 flex items-center justify-center mx-auto text-emerald-600 dark:text-emerald-400">
            <Award size={32} />
          </div>

          <div className="space-y-1">
            <span className="font-mono text-xs uppercase tracking-widest text-room-muted">
              FLASH PROTOCOL COMPLETE
            </span>
            <h3 className="text-3xl font-light text-room-text dark:text-room-darkText">
              Gauntlet Concluded
            </h3>
          </div>

          <div className="grid grid-cols-2 sm:grid-cols-3 gap-4 max-w-md mx-auto font-mono text-xs">
            <div className="p-4 rounded-xl border border-room-border dark:border-room-darkBorder bg-room-bg dark:bg-room-darkBg">
              <span className="text-room-muted block mb-1">TOTAL SCORE</span>
              <span className="text-2xl font-bold text-room-text dark:text-room-darkText">
                {score}
              </span>
            </div>
            <div className="p-4 rounded-xl border border-room-border dark:border-room-darkBorder bg-room-bg dark:bg-room-darkBg">
              <span className="text-room-muted block mb-1">MAX STREAK</span>
              <span className="text-2xl font-bold text-amber-600 dark:text-amber-400">
                {maxStreak}
              </span>
            </div>
            <div className="p-4 rounded-xl border border-room-border dark:border-room-darkBorder bg-room-bg dark:bg-room-darkBg col-span-2 sm:col-span-1">
              <span className="text-room-muted block mb-1">XP EARNED</span>
              <span className="text-2xl font-bold text-emerald-600 dark:text-emerald-400">
                +{score}
              </span>
            </div>
          </div>

          <div className="pt-4 flex flex-col sm:flex-row items-center justify-center gap-3">
            <button
              onClick={handleStartGame}
              className="w-full sm:w-auto px-6 py-3 rounded border border-room-border text-room-text dark:text-room-darkText font-mono text-xs uppercase font-medium hover:bg-room-subtle flex items-center justify-center space-x-2"
            >
              <RotateCcw size={14} />
              <span>Retry Gauntlet</span>
            </button>
            <button
              onClick={() => setDestination('simulator')}
              className="w-full sm:w-auto px-8 py-3 rounded bg-room-text dark:bg-room-darkText text-room-surface dark:text-room-darkBg font-mono text-xs uppercase font-semibold hover:opacity-90 flex items-center justify-center space-x-2"
            >
              <PlaySquare size={14} />
              <span>Full Simulation Drills</span>
            </button>
          </div>
        </div>
      )}
    </div>
  );
};
