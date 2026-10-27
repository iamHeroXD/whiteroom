import React from 'react';
import {
  TrendingUp,
  Shield,
  Activity,
  CheckCircle2,
  Calendar,
  Layers,
  ArrowRight,
  Sparkles,
  BookMarked,
  Award,
} from 'lucide-react';
import { useApp } from '../state/AppContext';
import { ALL_SCENARIOS } from '../data/scenarios';
import { TRAINING_MODULES } from '../data/modules';
import { TrainingStage } from '../types';

export const ProgressPage: React.FC = () => {
  const { progress, overallStage, completedScenarioCount, setDestination } = useApp();

  const stages: { stage: TrainingStage; number: string; title: string; desc: string }[] = [
    {
      stage: 'Observer',
      number: '01',
      title: 'OBSERVER',
      desc: 'Notice emotions, context, subtext, and unspoken room cues before forming premature conclusions.',
    },
    {
      stage: 'Analyst',
      number: '02',
      title: 'ANALYST',
      desc: 'Form multiple competing hypotheses, evaluate trade-offs, and dissect bad-faith framing.',
    },
    {
      stage: 'Strategist',
      number: '03',
      title: 'STRATEGIST',
      desc: 'Calculate second-order consequences, leverage structures, and unassailable ethical boundaries.',
    },
    {
      stage: 'Self-Mastered',
      number: '04',
      title: 'SELF-MASTERED',
      desc: 'Consistent, unshakeable composure and surgical precision across complex high-stakes environments.',
    },
  ];

  const stageOrder: Record<TrainingStage, number> = {
    Observer: 1,
    Analyst: 2,
    Strategist: 3,
    'Self-Mastered': 4,
  };

  const currentLevelNumber = stageOrder[overallStage];

  // Category completion distribution
  const categoryCounts: Record<string, number> = {};
  progress.attempts.forEach(a => {
    categoryCounts[a.category] = (categoryCounts[a.category] || 0) + 1;
  });

  return (
    <div className="space-y-10 animate-fade-in max-w-5xl mx-auto pb-16">
      {/* Header */}
      <div className="border-b border-room-border dark:border-room-darkBorder pb-6 flex flex-col md:flex-row md:items-end justify-between gap-4">
        <div>
          <span className="font-mono text-xs uppercase tracking-widest text-room-muted block mb-1">
            ANALYTICS & LONGITUDINAL TRAJECTORY
          </span>
          <h2 className="text-3xl sm:text-4xl font-light text-room-text dark:text-room-darkText tracking-tight">
            Progress Report
          </h2>
          <p className="text-sm text-room-muted dark:text-room-darkMuted mt-1 max-w-xl">
            Objective performance indicators calculated directly from recorded decision history,
            diagnostic assessments, and reflection logs.
          </p>
        </div>

        <div className="flex items-center space-x-2 font-mono text-xs text-room-muted">
          <Shield size={15} />
          <span>Level: {overallStage}</span>
        </div>
      </div>

      {/* 4-Stage Progression Visual */}
      <section className="p-6 sm:p-8 rounded-xl border border-room-border dark:border-room-darkBorder bg-room-surface dark:bg-room-darkSurface space-y-6 shadow-sm">
        <div className="flex items-center justify-between">
          <span className="font-mono text-xs uppercase tracking-widest text-room-muted">
            OPERATIONAL PROGRESSION SYSTEM
          </span>
          <span className="font-mono text-xs text-room-text dark:text-room-darkText font-medium">
            Stage {currentLevelNumber} of 4 Active
          </span>
        </div>

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4">
          {stages.map((st, idx) => {
            const isUnlocked = stageOrder[st.stage] <= currentLevelNumber;
            const isCurrent = st.stage === overallStage;

            return (
              <div
                key={st.stage}
                className={`p-5 rounded-lg border flex flex-col justify-between transition-all ${
                  isCurrent
                    ? 'border-room-text dark:border-room-darkText bg-room-subtle dark:bg-room-darkSubtle shadow-sm'
                    : isUnlocked
                    ? 'border-room-border dark:border-room-darkBorder bg-room-surface dark:bg-room-darkSurface opacity-90'
                    : 'border-room-border/40 dark:border-room-darkBorder/40 opacity-40 bg-room-bg dark:bg-room-darkBg'
                }`}
              >
                <div>
                  <div className="flex items-center justify-between font-mono text-xs mb-3">
                    <span className="font-semibold">{st.number}</span>
                    {isCurrent ? (
                      <span className="text-[10px] font-semibold uppercase px-2 py-0.5 rounded bg-room-text text-room-surface dark:bg-room-darkText dark:text-room-darkBg">
                        Active
                      </span>
                    ) : isUnlocked ? (
                      <CheckCircle2 size={14} className="text-emerald-500" />
                    ) : (
                      <span className="text-[10px] font-mono text-room-muted">Locked</span>
                    )}
                  </div>

                  <h4 className="text-sm font-semibold tracking-wide text-room-text dark:text-room-darkText mb-2">
                    {st.title}
                  </h4>

                  <p className="text-xs text-room-muted dark:text-room-darkMuted leading-relaxed">
                    {st.desc}
                  </p>
                </div>

                <div className="mt-4 pt-3 border-t border-room-border/60 dark:border-room-darkBorder font-mono text-[10px] text-room-muted">
                  {st.stage === 'Observer' && 'Baseline threshold'}
                  {st.stage === 'Analyst' && 'Requires 3 drills + 1 journal'}
                  {st.stage === 'Strategist' && 'Requires 8 drills + 3 journals'}
                  {st.stage === 'Self-Mastered' && 'Requires 16 drills + 5 journals'}
                </div>
              </div>
            );
          })}
        </div>
      </section>

      {/* SVG Analytics Chart: Domain Practice Distribution */}
      <section className="grid grid-cols-1 lg:grid-cols-12 gap-8">
        {/* Left Column (7 Cols): SVG Practice Distribution Visual */}
        <div className="lg:col-span-7 space-y-4">
          <div className="flex items-center justify-between">
            <span className="font-mono text-xs uppercase tracking-widest text-room-muted">
              CURRICULUM COVERAGE BY DOMAIN
            </span>
            <span className="font-mono text-xs text-room-muted">
              {progress.attempts.length} Total Drills Logged
            </span>
          </div>

          <div className="p-6 rounded-xl border border-room-border dark:border-room-darkBorder bg-room-surface dark:bg-room-darkSurface space-y-4">
            {TRAINING_MODULES.map(mod => {
              const count = categoryCounts[mod.id] || 0;
              const maxPossible = 4;
              const pct = Math.min(100, Math.round((count / maxPossible) * 100));

              return (
                <div key={mod.id} className="space-y-1.5">
                  <div className="flex justify-between items-center text-xs">
                    <span className="text-room-text dark:text-room-darkText font-medium">
                      Mod {mod.number} — {mod.title}
                    </span>
                    <span className="font-mono text-room-muted">
                      {count} / {maxPossible} drills ({pct}%)
                    </span>
                  </div>
                  <div className="w-full h-2 rounded-full bg-room-subtle dark:bg-room-darkSubtle overflow-hidden">
                    <div
                      className="h-full bg-room-text dark:bg-room-darkText rounded-full transition-all duration-300"
                      style={{ width: `${pct}%` }}
                    />
                  </div>
                </div>
              );
            })}
          </div>
        </div>

        {/* Right Column (5 Cols): Assessment Records History */}
        <div className="lg:col-span-5 space-y-4">
          <div className="flex items-center justify-between">
            <span className="font-mono text-xs uppercase tracking-widest text-room-muted">
              ASSESSMENT TIMELINE
            </span>
            <button
              onClick={() => setDestination('assessment')}
              className="text-xs font-mono text-room-text dark:text-room-darkText underline hover:no-underline"
            >
              New Assessment →
            </button>
          </div>

          <div className="space-y-3">
            {progress.assessmentResults.length === 0 ? (
              <div className="p-6 rounded-xl border border-room-border dark:border-room-darkBorder bg-room-surface dark:bg-room-darkSurface text-center text-room-muted text-xs font-mono">
                No formal assessments recorded yet. Take the 16-point assessment to establish your
                first timeline milestone.
              </div>
            ) : (
              progress.assessmentResults.map((result, idx) => {
                const overallAvg = Math.round(
                  Object.values(result.scores).reduce((a, b) => a + b, 0) /
                    Object.values(result.scores).length
                );
                return (
                  <div
                    key={result.id}
                    className="p-4 rounded-xl border border-room-border dark:border-room-darkBorder bg-room-surface dark:bg-room-darkSurface space-y-2"
                  >
                    <div className="flex items-center justify-between text-xs">
                      <span className="font-semibold text-room-text dark:text-room-darkText">
                        {result.levelTitle}
                      </span>
                      <span className="font-mono text-room-muted">
                        Index: {overallAvg}%
                      </span>
                    </div>
                    <div className="text-[11px] font-mono text-room-muted">
                      Recorded {new Date(result.timestamp).toLocaleDateString()}
                    </div>
                    <p className="text-xs text-room-muted line-clamp-2">
                      {result.summaryAnalysis}
                    </p>
                  </div>
                );
              })
            )}
          </div>
        </div>
      </section>

      {/* Decision Reflection History */}
      <section className="space-y-4 pt-4 border-t border-room-border dark:border-room-darkBorder">
        <div className="flex items-center justify-between">
          <div>
            <span className="font-mono text-xs uppercase tracking-widest text-room-muted block">
              QUALITATIVE METRICS
            </span>
            <h3 className="text-lg font-medium text-room-text dark:text-room-darkText mt-0.5">
              Candidate Reflections History ({progress.attempts.filter(a => !!a.userReflection).length})
            </h3>
          </div>
          <button
            onClick={() => setDestination('journal')}
            className="text-xs font-mono text-room-text dark:text-room-darkText underline hover:no-underline"
          >
            Open Decision Journal →
          </button>
        </div>

        <div className="space-y-3">
          {progress.attempts.filter(a => !!a.userReflection).length === 0 ? (
            <div className="p-8 rounded-xl border border-room-border dark:border-room-darkBorder bg-room-surface dark:bg-room-darkSurface text-center text-xs font-mono text-room-muted">
              Complete a scenario and enter your reflection prompt to populate the qualitative practice ledger.
            </div>
          ) : (
            progress.attempts
              .filter(a => !!a.userReflection)
              .slice(0, 4)
              .map(attempt => (
                <div
                  key={attempt.id}
                  className="p-4 rounded-lg border border-room-border dark:border-room-darkBorder bg-room-surface dark:bg-room-darkSurface space-y-2 text-xs"
                >
                  <div className="flex items-center justify-between font-mono text-room-muted">
                    <span className="font-medium text-room-text dark:text-room-darkText">
                      {attempt.scenarioTitle}
                    </span>
                    <span>{new Date(attempt.timestamp).toLocaleDateString()}</span>
                  </div>
                  <blockquote className="italic text-room-text dark:text-room-darkText pl-3 border-l-2 border-room-border">
                    "{attempt.userReflection}"
                  </blockquote>
                </div>
              ))
          )}
        </div>
      </section>
    </div>
  );
};
