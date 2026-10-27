import React, { useState } from 'react';
import {
  ArrowRight,
  Shield,
  Eye,
  Brain,
  Sparkles,
  BookOpen,
  PlaySquare,
  CheckCircle2,
  ChevronRight,
  Sun,
  Moon,
} from 'lucide-react';
import { useApp } from '../state/AppContext';
import { TRAINING_MODULES } from '../data/modules';
import { ALL_SCENARIOS } from '../data/scenarios';

export const IntroPage: React.FC = () => {
  const { setDestination, setActiveScenarioId, preferences, updatePreferences } = useApp();
  const [selectedPreviewChoice, setSelectedPreviewChoice] = useState<string | null>(null);

  const previewScenario = ALL_SCENARIOS[0]; // Scenario 001: The Public Challenge

  return (
    <div className="relative min-h-screen bg-room-bg text-room-text dark:bg-room-darkBg dark:text-room-darkText overflow-x-hidden">
      {/* Background Architectural Grid Pattern */}
      <div className="absolute inset-0 architectural-grid opacity-70 pointer-events-none" />

      {/* Top Minimalist Header */}
      <header className="relative z-10 max-w-7xl mx-auto px-6 py-6 flex items-center justify-between">
        <div className="flex items-center space-x-3">
          <div className="w-8 h-8 border-2 border-room-text dark:border-room-darkText flex items-center justify-center">
            <div className="w-2.5 h-2.5 bg-room-text dark:bg-room-darkText" />
          </div>
          <div>
            <span className="font-mono text-sm font-bold tracking-widest block leading-none">
              WHITE ROOM
            </span>
            <span className="font-mono text-[10px] text-room-muted dark:text-room-darkMuted uppercase tracking-wider">
              System v1.0
            </span>
          </div>
        </div>

        <div className="flex items-center space-x-3 sm:space-x-4">
          <button
            onClick={() =>
              updatePreferences({
                theme: preferences.theme === 'dark' ? 'light' : 'dark',
              })
            }
            className="p-2 rounded border border-room-border dark:border-room-darkBorder text-room-text dark:text-room-darkText hover:bg-room-subtle dark:hover:bg-room-darkSubtle transition-colors"
            title="Toggle Theme"
          >
            {preferences.theme === 'dark' ? <Sun size={16} /> : <Moon size={16} />}
          </button>

          <button
            onClick={() => setDestination('methodology')}
            className="text-xs font-mono uppercase tracking-wider text-room-muted hover:text-room-text dark:hover:text-room-darkText transition-colors hidden sm:inline-block"
          >
            Methodology
          </button>

          <button
            onClick={() => setDestination('overview')}
            className="px-4 py-2 text-xs font-mono font-medium rounded border border-room-text dark:border-room-darkText text-room-text dark:text-room-darkText hover:bg-room-text hover:text-white dark:hover:bg-room-darkText dark:hover:text-room-darkBg transition-all"
          >
            Guest Access →
          </button>
        </div>
      </header>

      {/* Hero Section */}
      <section className="relative z-10 max-w-5xl mx-auto px-6 pt-16 pb-20 sm:pt-24 sm:pb-28 text-center sm:text-left">
        <div className="inline-flex items-center space-x-2 px-3 py-1 rounded border border-room-border dark:border-room-darkBorder bg-room-surface/80 dark:bg-room-darkSurface/80 text-[11px] font-mono tracking-widest text-room-muted dark:text-room-darkMuted uppercase mb-8">
          <span className="w-1.5 h-1.5 rounded-full bg-room-text dark:bg-room-darkText" />
          <span>WHITE ROOM / PERSONAL DEVELOPMENT SYSTEM</span>
        </div>

        <h1 className="text-4xl sm:text-6xl lg:text-7xl font-light tracking-tight text-room-text dark:text-room-darkText max-w-4xl leading-[1.1] mb-8 font-sans">
          Understand the situation.{' '}
          <span className="font-semibold block text-neutral-900 dark:text-white mt-1">
            Choose your response.
          </span>
        </h1>

        <p className="text-lg sm:text-xl text-room-muted dark:text-room-darkMuted max-w-2xl font-normal leading-relaxed mb-10">
          A disciplined psychological training environment for emotional regulation, social
          awareness, and strategic decision-making. No platitudes. Real situational mastery.
        </p>

        {/* Hero CTAs */}
        <div className="flex flex-col sm:flex-row items-center gap-4">
          <button
            onClick={() => setDestination('overview')}
            className="w-full sm:w-auto px-8 py-4 rounded bg-room-text dark:bg-room-darkText text-room-surface dark:text-room-darkBg font-mono text-xs uppercase tracking-widest font-semibold hover:opacity-90 active:scale-[0.99] transition-all flex items-center justify-center space-x-3 shadow-lg"
          >
            <span>ENTER THE WHITE ROOM</span>
            <ArrowRight size={16} />
          </button>

          <button
            onClick={() => setDestination('methodology')}
            className="w-full sm:w-auto px-8 py-4 rounded border border-room-border dark:border-room-darkBorder bg-room-surface/60 dark:bg-room-darkSurface/60 text-room-text dark:text-room-darkText font-mono text-xs uppercase tracking-widest font-medium hover:bg-room-subtle dark:hover:bg-room-darkSubtle transition-all"
          >
            EXPLORE THE METHOD
          </button>
        </div>

        {/* Architectural Room Framing Visual */}
        <div className="mt-16 sm:mt-20 p-6 sm:p-10 rounded-xl border border-room-border dark:border-room-darkBorder bg-room-surface dark:bg-room-darkSurface/40 relative overflow-hidden shadow-sm">
          <div className="absolute top-0 right-0 p-4 font-mono text-[10px] text-room-muted dark:text-room-darkMuted uppercase tracking-widest">
            SIMULATION CHAMBER / AMBIENT: 0.00
          </div>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6 pt-4">
            <div className="border-l-2 border-room-border dark:border-room-darkBorder pl-4">
              <span className="font-mono text-xs text-room-muted block mb-1">01 — OBSERVATION</span>
              <p className="text-sm text-room-text dark:text-room-darkText">
                Deconstruct subtext, environmental leverage, and power dynamics before taking action.
              </p>
            </div>
            <div className="border-l-2 border-room-border dark:border-room-darkBorder pl-4">
              <span className="font-mono text-xs text-room-muted block mb-1">02 — CALCULATION</span>
              <p className="text-sm text-room-text dark:text-room-darkText">
                Forecast second-order fallout, participant incentives, and reputational risk.
              </p>
            </div>
            <div className="border-l-2 border-room-border dark:border-room-darkBorder pl-4">
              <span className="font-mono text-xs text-room-muted block mb-1">03 — EXECUTION</span>
              <p className="text-sm text-room-text dark:text-room-darkText">
                Deliver calibrated responses with surgical poise, zero defensiveness, and clean boundaries.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* The 3 Core Stages Section */}
      <section className="relative z-10 border-y border-room-border dark:border-room-darkBorder bg-room-surface/50 dark:bg-room-darkSurface/50 py-16 sm:py-24">
        <div className="max-w-6xl mx-auto px-6">
          <div className="mb-12">
            <span className="font-mono text-xs uppercase tracking-widest text-room-muted">
              TRAINING DISCIPLINE
            </span>
            <h2 className="text-2xl sm:text-4xl font-light text-room-text dark:text-room-darkText mt-2">
              The Three Operational Phases
            </h2>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {/* 01 OBSERVE */}
            <div className="p-8 rounded-lg border border-room-border dark:border-room-darkBorder bg-room-surface dark:bg-room-darkSurface flex flex-col justify-between hover:border-neutral-400 dark:hover:border-neutral-600 transition-colors">
              <div>
                <div className="flex items-center justify-between mb-6">
                  <span className="font-mono text-2xl font-light text-room-muted">01</span>
                  <Eye size={20} className="text-room-text dark:text-room-darkText" />
                </div>
                <h3 className="font-mono text-sm uppercase tracking-widest font-semibold mb-3">
                  OBSERVE
                </h3>
                <p className="text-sm text-room-muted dark:text-room-darkMuted leading-relaxed">
                  Understand the situation before reacting. Isolate emotional provocation from
                  factual content. Identify unstated motives, power balance, and audience incentives.
                </p>
              </div>
              <div className="mt-6 pt-4 border-t border-room-border dark:border-room-darkBorder font-mono text-[11px] text-room-muted">
                Key Skill: Cognitive Detachment
              </div>
            </div>

            {/* 02 DECIDE */}
            <div className="p-8 rounded-lg border border-room-border dark:border-room-darkBorder bg-room-surface dark:bg-room-darkSurface flex flex-col justify-between hover:border-neutral-400 dark:hover:border-neutral-600 transition-colors">
              <div>
                <div className="flex items-center justify-between mb-6">
                  <span className="font-mono text-2xl font-light text-room-muted">02</span>
                  <Brain size={20} className="text-room-text dark:text-room-darkText" />
                </div>
                <h3 className="font-mono text-sm uppercase tracking-widest font-semibold mb-3">
                  DECIDE
                </h3>
                <p className="text-sm text-room-muted dark:text-room-darkMuted leading-relaxed">
                  Compare responses and anticipate consequences. Reject false dilemmas and emotional
                  urgency. Choose between tactical compliance, firm boundaries, or diagnostic inquiry.
                </p>
              </div>
              <div className="mt-6 pt-4 border-t border-room-border dark:border-room-darkBorder font-mono text-[11px] text-room-muted">
                Key Skill: Strategic Pacing
              </div>
            </div>

            {/* 03 REFLECT */}
            <div className="p-8 rounded-lg border border-room-border dark:border-room-darkBorder bg-room-surface dark:bg-room-darkSurface flex flex-col justify-between hover:border-neutral-400 dark:hover:border-neutral-600 transition-colors">
              <div>
                <div className="flex items-center justify-between mb-6">
                  <span className="font-mono text-2xl font-light text-room-muted">03</span>
                  <Shield size={20} className="text-room-text dark:text-room-darkText" />
                </div>
                <h3 className="font-mono text-sm uppercase tracking-widest font-semibold mb-3">
                  REFLECT
                </h3>
                <p className="text-sm text-room-muted dark:text-room-darkMuted leading-relaxed">
                  Learn from your choices and practise again. Deconstruct what worked, identify blind
                  spots, and record enduring lessons in your private Decision Journal.
                </p>
              </div>
              <div className="mt-6 pt-4 border-t border-room-border dark:border-room-darkBorder font-mono text-[11px] text-room-muted">
                Key Skill: Deliberate Metacognition
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Interactive Scenario Live Preview */}
      <section className="relative z-10 max-w-5xl mx-auto px-6 py-20 sm:py-28">
        <div className="text-center max-w-2xl mx-auto mb-12">
          <span className="font-mono text-xs uppercase tracking-widest text-room-muted">
            SAMPLE DRILL PREVIEW
          </span>
          <h2 className="text-2xl sm:text-3xl font-light text-room-text dark:text-room-darkText mt-2">
            Experience a Scenario in Action
          </h2>
          <p className="text-sm text-room-muted mt-2">
            Try a real scenario interaction right now before entering the system.
          </p>
        </div>

        <div className="p-6 sm:p-10 rounded-xl border border-room-border dark:border-room-darkBorder bg-room-surface dark:bg-room-darkSurface shadow-md">
          {/* Header */}
          <div className="flex flex-wrap items-center justify-between gap-2 pb-6 border-b border-room-border dark:border-room-darkBorder font-mono text-xs text-room-muted">
            <span>SCENARIO #001 — THE PUBLIC CHALLENGE</span>
            <span className="px-2 py-0.5 rounded bg-room-subtle dark:bg-room-darkSubtle text-room-text dark:text-room-darkText">
              SETTING: UNIVERSITY SEMINAR
            </span>
          </div>

          {/* Dialogue Box */}
          <div className="py-6">
            <p className="text-xs font-mono text-room-muted mb-2">
              Julian (Classmate) in front of 25 onlookers:
            </p>
            <blockquote className="text-lg sm:text-xl font-serif italic text-room-text dark:text-room-darkText pl-4 border-l-2 border-room-text dark:border-room-darkText">
              {previewScenario.characterDialogue}
            </blockquote>
          </div>

          {/* Response Choices */}
          <div className="space-y-3 pt-2">
            <p className="text-xs font-mono text-room-muted uppercase tracking-wider">
              Select Your Response:
            </p>
            {previewScenario.options.map(opt => (
              <button
                key={opt.id}
                onClick={() => setSelectedPreviewChoice(opt.id)}
                className={`w-full p-4 rounded text-left border text-sm transition-all flex items-start space-x-3 ${
                  selectedPreviewChoice === opt.id
                    ? 'border-room-text dark:border-room-darkText bg-room-subtle dark:bg-room-darkSubtle font-medium text-room-text dark:text-room-darkText shadow-sm'
                    : 'border-room-border dark:border-room-darkBorder hover:border-neutral-400 text-room-muted dark:text-room-darkMuted hover:text-room-text dark:hover:text-room-darkText'
                }`}
              >
                <span className="font-mono text-xs font-semibold px-2 py-0.5 rounded bg-room-border/40 dark:bg-room-darkBorder">
                  {opt.label}
                </span>
                <span className="flex-1">{opt.text}</span>
              </button>
            ))}
          </div>

          {/* Analysis Reveal if chosen */}
          {selectedPreviewChoice && (
            <div className="mt-6 p-5 rounded-lg border border-room-border dark:border-room-darkBorder bg-room-bg dark:bg-room-darkBg animate-slide-up">
              <div className="flex items-center space-x-2 text-xs font-mono font-semibold text-room-text dark:text-room-darkText mb-2">
                <Sparkles size={14} />
                <span>COACHING ANALYSIS:</span>
              </div>
              <p className="text-sm text-room-text dark:text-room-darkText leading-relaxed">
                {
                  previewScenario.options.find(o => o.id === selectedPreviewChoice)?.feedback
                    .situationAnalysis
                }
              </p>
              <div className="mt-4 pt-3 border-t border-room-border dark:border-room-darkBorder flex items-center justify-between">
                <span className="text-xs text-room-muted font-mono">
                  Recommended Natural Phrase: "What specific numbers seemed off to you?"
                </span>
                <button
                  onClick={() => {
                    setActiveScenarioId('sc-001');
                    setDestination('simulator');
                  }}
                  className="text-xs font-mono font-medium text-room-text dark:text-room-darkText underline hover:no-underline"
                >
                  Solve Full Scenario →
                </button>
              </div>
            </div>
          )}
        </div>
      </section>

      {/* Module Curriculum Preview Section */}
      <section className="relative z-10 max-w-6xl mx-auto px-6 py-16 sm:py-24 border-t border-room-border dark:border-room-darkBorder">
        <div className="flex flex-col sm:flex-row items-start sm:items-end justify-between mb-12 gap-4">
          <div>
            <span className="font-mono text-xs uppercase tracking-widest text-room-muted">
              CURRICULUM ARCHITECTURE
            </span>
            <h2 className="text-2xl sm:text-4xl font-light text-room-text dark:text-room-darkText mt-2">
              Eight Specialized Training Modules
            </h2>
          </div>
          <button
            onClick={() => setDestination('modules')}
            className="text-xs font-mono uppercase tracking-wider text-room-text dark:text-room-darkText hover:underline flex items-center space-x-1"
          >
            <span>View All Modules</span>
            <ChevronRight size={14} />
          </button>
        </div>

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4">
          {TRAINING_MODULES.map(mod => (
            <div
              key={mod.id}
              onClick={() => {
                setDestination('modules');
              }}
              className="p-5 rounded-lg border border-room-border dark:border-room-darkBorder bg-room-surface dark:bg-room-darkSurface hover:border-room-text dark:hover:border-room-darkText transition-all cursor-pointer group flex flex-col justify-between"
            >
              <div>
                <span className="font-mono text-xs text-room-muted block mb-3">
                  MODULE {mod.number}
                </span>
                <h3 className="font-medium text-sm text-room-text dark:text-room-darkText group-hover:underline mb-2">
                  {mod.title}
                </h3>
                <p className="text-xs text-room-muted dark:text-room-darkMuted leading-relaxed line-clamp-3">
                  {mod.shortDescription}
                </p>
              </div>
              <div className="mt-4 pt-3 border-t border-room-border dark:border-room-darkBorder flex items-center justify-between text-[11px] font-mono text-room-muted">
                <span>{mod.scenariosCount} Scenarios</span>
                <span>Lvl {mod.difficulty}</span>
              </div>
            </div>
          ))}
        </div>
      </section>

      {/* Final Entry Banner */}
      <section className="relative z-10 max-w-4xl mx-auto px-6 py-20 text-center">
        <div className="p-8 sm:p-12 rounded-2xl border border-room-border dark:border-room-darkBorder bg-room-surface dark:bg-room-darkSurface shadow-lg">
          <h2 className="text-3xl sm:text-4xl font-light text-room-text dark:text-room-darkText mb-4">
            Step Into The White Room.
          </h2>
          <p className="text-sm sm:text-base text-room-muted dark:text-room-darkMuted max-w-xl mx-auto mb-8">
            Complete local execution. No paywalls. No external accounts required. Begin with the
            baseline assessment or enter the simulation drills immediately.
          </p>

          <div className="flex flex-col sm:flex-row items-center justify-center gap-4">
            <button
              onClick={() => setDestination('overview')}
              className="w-full sm:w-auto px-8 py-4 rounded bg-room-text dark:bg-room-darkText text-room-surface dark:text-room-darkBg font-mono text-xs uppercase tracking-widest font-semibold hover:opacity-90 active:scale-[0.99] transition-all flex items-center justify-center space-x-2"
            >
              <span>ENTER APPLICATION</span>
              <ArrowRight size={16} />
            </button>
            <button
              onClick={() => setDestination('assessment')}
              className="w-full sm:w-auto px-8 py-4 rounded border border-room-border dark:border-room-darkBorder bg-room-surface/80 dark:bg-room-darkSurface/80 text-room-text dark:text-room-darkText font-mono text-xs uppercase tracking-widest font-medium hover:bg-room-subtle dark:hover:bg-room-darkSubtle transition-all"
            >
              TAKE 16-POINT ASSESSMENT
            </button>
          </div>
        </div>
      </section>

      {/* Minimal Footer */}
      <footer className="relative z-10 border-t border-room-border dark:border-room-darkBorder py-8 px-6 text-center text-xs font-mono text-room-muted">
        <p>WHITE ROOM — Emotional Intelligence & Strategic Decision System</p>
        <p className="mt-1 text-[11px]">
          Client-side local execution • Privacy preserved • No external API tracking
        </p>
      </footer>
    </div>
  );
};
