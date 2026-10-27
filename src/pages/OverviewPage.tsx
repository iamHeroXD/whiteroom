import React from 'react';
import {
  PlaySquare,
  ArrowRight,
  TrendingUp,
  Shield,
  Activity,
  CheckCircle2,
  BookMarked,
  Sparkles,
  Award,
  ChevronRight,
  Calendar,
} from 'lucide-react';
import { useApp } from '../state/AppContext';
import { ALL_SCENARIOS, getScenarioById } from '../data/scenarios';
import { TRAINING_MODULES } from '../data/modules';
import { SkillScores } from '../types';

export const OverviewPage: React.FC = () => {
  const {
    progress,
    overallStage,
    completedScenarioCount,
    setDestination,
    setActiveScenarioId,
    latestAssessment,
  } = useApp();

  // Find next recommended scenario: find first scenario not yet completed
  const completedIds = new Set(progress.attempts.map(a => a.scenarioId));
  const nextScenario =
    ALL_SCENARIOS.find(s => !completedIds.has(s.id)) || ALL_SCENARIOS[0];

  // Last active or last completed scenario
  const lastActiveScenario = progress.lastActiveScenarioId
    ? getScenarioById(progress.lastActiveScenarioId)
    : ALL_SCENARIOS[0];

  // Distinct modules explored
  const exploredModuleCategories = new Set(
    progress.attempts.map(a => a.category)
  );

  // Skill scores from latest assessment or calculated average from scenario attempts
  const defaultSkills: SkillScores = {
    emotionalRegulation: 75,
    perspectiveTaking: 70,
    socialAwareness: 80,
    communication: 72,
    conflictResolution: 78,
    deliberateDecisionMaking: 82,
  };

  const skills: SkillScores = latestAssessment
    ? latestAssessment.scores
    : defaultSkills;

  const skillList: { key: keyof SkillScores; label: string; score: number }[] = [
    { key: 'emotionalRegulation', label: 'Emotional Regulation', score: skills.emotionalRegulation },
    { key: 'perspectiveTaking', label: 'Perspective-Taking', score: skills.perspectiveTaking },
    { key: 'socialAwareness', label: 'Social Awareness', score: skills.socialAwareness },
    { key: 'communication', label: 'Precision Communication', score: skills.communication },
    { key: 'conflictResolution', label: 'Conflict De-escalation', score: skills.conflictResolution },
    { key: 'deliberateDecisionMaking', label: 'Strategic Decision-Making', score: skills.deliberateDecisionMaking },
  ];

  return (
    <div className="space-y-10 animate-fade-in">
      {/* Top Welcome Greeting Header */}
      <div className="border-b border-room-border dark:border-room-darkBorder pb-6 flex flex-col md:flex-row md:items-end justify-between gap-4">
        <div>
          <span className="font-mono text-xs uppercase tracking-widest text-room-muted block mb-1">
            CANDIDATE DOSSIER / STAGE: {overallStage.toUpperCase()}
          </span>
          <h2 className="text-3xl sm:text-4xl font-light text-room-text dark:text-room-darkText tracking-tight">
            Your training continues.
          </h2>
          <p className="text-sm text-room-muted dark:text-room-darkMuted mt-1 max-w-xl">
            Every situation is an opportunity to practise deliberate judgment. Observe the context,
            inhibit reactive impulses, and select calculated responses.
          </p>
        </div>

        <div className="flex items-center space-x-3">
          <button
            onClick={() => {
              setActiveScenarioId(nextScenario.id);
              setDestination('simulator');
            }}
            className="px-5 py-2.5 rounded bg-room-text dark:bg-room-darkText text-room-surface dark:text-room-darkBg font-mono text-xs uppercase tracking-wider font-semibold hover:opacity-90 transition-all flex items-center space-x-2 shadow-sm"
          >
            <PlaySquare size={14} />
            <span>Resume Drill #{nextScenario.number}</span>
          </button>
        </div>
      </div>

      {/* Metric Tiles Bar */}
      <div className="grid grid-cols-2 lg:grid-cols-4 gap-4">
        {/* Stage Status */}
        <div className="p-5 rounded-lg border border-room-border dark:border-room-darkBorder bg-room-surface dark:bg-room-darkSurface">
          <div className="flex items-center justify-between text-room-muted mb-2">
            <span className="text-xs font-mono uppercase tracking-wider">Operational Stage</span>
            <Shield size={16} />
          </div>
          <div className="text-xl sm:text-2xl font-semibold text-room-text dark:text-room-darkText">
            {overallStage}
          </div>
          <div className="text-[11px] font-mono text-room-muted mt-1">
            Level {overallStage === 'Observer' ? '1' : overallStage === 'Analyst' ? '2' : overallStage === 'Strategist' ? '3' : '4'} of 4
          </div>
        </div>

        {/* Scenarios Completed */}
        <div className="p-5 rounded-lg border border-room-border dark:border-room-darkBorder bg-room-surface dark:bg-room-darkSurface">
          <div className="flex items-center justify-between text-room-muted mb-2">
            <span className="text-xs font-mono uppercase tracking-wider">Completed Drills</span>
            <CheckCircle2 size={16} />
          </div>
          <div className="text-xl sm:text-2xl font-semibold text-room-text dark:text-room-darkText">
            {completedScenarioCount}{' '}
            <span className="text-xs font-mono text-room-muted font-normal">/ 32</span>
          </div>
          <div className="text-[11px] font-mono text-room-muted mt-1">
            {Math.round((completedScenarioCount / 32) * 100)}% Curriculum Covered
          </div>
        </div>

        {/* Modules Explored */}
        <div className="p-5 rounded-lg border border-room-border dark:border-room-darkBorder bg-room-surface dark:bg-room-darkSurface">
          <div className="flex items-center justify-between text-room-muted mb-2">
            <span className="text-xs font-mono uppercase tracking-wider">Active Modules</span>
            <Activity size={16} />
          </div>
          <div className="text-xl sm:text-2xl font-semibold text-room-text dark:text-room-darkText">
            {exploredModuleCategories.size}{' '}
            <span className="text-xs font-mono text-room-muted font-normal">/ 8</span>
          </div>
          <div className="text-[11px] font-mono text-room-muted mt-1">
            Tactical Domains Practiced
          </div>
        </div>

        {/* Journal Entries */}
        <div className="p-5 rounded-lg border border-room-border dark:border-room-darkBorder bg-room-surface dark:bg-room-darkSurface">
          <div className="flex items-center justify-between text-room-muted mb-2">
            <span className="text-xs font-mono uppercase tracking-wider">Reflections</span>
            <BookMarked size={16} />
          </div>
          <div className="text-xl sm:text-2xl font-semibold text-room-text dark:text-room-darkText">
            {progress.journalEntries.length}
          </div>
          <div className="text-[11px] font-mono text-room-muted mt-1">
            Decision Journal Entries
          </div>
        </div>
      </div>

      {/* Prominent Continue Training Section */}
      <section className="p-6 sm:p-8 rounded-xl border border-room-border dark:border-room-darkBorder bg-room-surface dark:bg-room-darkSurface/60 relative overflow-hidden">
        <div className="flex flex-col lg:flex-row items-start lg:items-center justify-between gap-6">
          <div className="space-y-2 max-w-2xl">
            <div className="inline-flex items-center space-x-2 text-xs font-mono text-room-muted uppercase">
              <span className="w-2 h-2 rounded-full bg-emerald-500 animate-pulse" />
              <span>RECOMMENDED PRACTICE DRILL</span>
              <span>•</span>
              <span>Lvl {nextScenario.difficulty}</span>
            </div>
            <h3 className="text-xl sm:text-2xl font-medium text-room-text dark:text-room-darkText">
              Scenario #{nextScenario.number}: {nextScenario.title}
            </h3>
            <p className="text-sm text-room-muted dark:text-room-darkMuted leading-relaxed">
              Setting: <span className="text-room-text dark:text-room-darkText">{nextScenario.setting}</span>. {nextScenario.context}
            </p>
            <div className="flex flex-wrap gap-2 pt-2">
              {nextScenario.skillTags.map(tag => (
                <span
                  key={tag}
                  className="px-2 py-0.5 rounded text-[11px] font-mono bg-room-subtle dark:bg-room-darkSubtle text-room-text dark:text-room-darkText border border-room-border/60 dark:border-room-darkBorder"
                >
                  {tag}
                </span>
              ))}
            </div>
          </div>

          <button
            onClick={() => {
              setActiveScenarioId(nextScenario.id);
              setDestination('simulator');
            }}
            className="px-6 py-3 rounded bg-room-text dark:bg-room-darkText text-room-surface dark:text-room-darkBg font-mono text-xs uppercase tracking-widest font-semibold hover:opacity-90 active:scale-[0.99] transition-all flex items-center space-x-2 flex-shrink-0"
          >
            <span>START SCENARIO</span>
            <ArrowRight size={15} />
          </button>
        </div>
      </section>

      {/* Two Column Layout: Skill Profile vs Recent Decisions */}
      <div className="grid grid-cols-1 lg:grid-cols-12 gap-8">
        {/* Left Column: Skill Profile (7 Cols) */}
        <div className="lg:col-span-7 space-y-6">
          <div className="flex items-center justify-between">
            <div>
              <span className="font-mono text-xs uppercase tracking-widest text-room-muted block">
                DIAGNOSTIC MATRIX
              </span>
              <h3 className="text-lg font-medium text-room-text dark:text-room-darkText mt-0.5">
                Current Skill Profile
              </h3>
            </div>
            <button
              onClick={() => setDestination('assessment')}
              className="text-xs font-mono text-room-text dark:text-room-darkText underline hover:no-underline"
            >
              {latestAssessment ? 'Retake Assessment' : 'Take Baseline Assessment'}
            </button>
          </div>

          <div className="p-6 rounded-xl border border-room-border dark:border-room-darkBorder bg-room-surface dark:bg-room-darkSurface space-y-5">
            {skillList.map(item => (
              <div key={item.key} className="space-y-1.5">
                <div className="flex justify-between items-center text-xs">
                  <span className="font-medium text-room-text dark:text-room-darkText">
                    {item.label}
                  </span>
                  <span className="font-mono text-room-muted">{item.score}%</span>
                </div>
                {/* Visual Bar Indicator */}
                <div className="w-full h-2 rounded-full bg-room-subtle dark:bg-room-darkSubtle overflow-hidden">
                  <div
                    className="h-full bg-room-text dark:bg-room-darkText rounded-full transition-all duration-500 ease-out"
                    style={{ width: `${item.score}%` }}
                  />
                </div>
              </div>
            ))}

            <div className="pt-4 border-t border-room-border dark:border-room-darkBorder flex items-center justify-between text-[11px] font-mono text-room-muted">
              <span>
                Source:{' '}
                {latestAssessment
                  ? `Assessment dated ${new Date(latestAssessment.timestamp).toLocaleDateString()}`
                  : 'Demonstration baseline protocol'}
              </span>
              <span className="text-room-text dark:text-room-darkText font-medium">
                Overall Index: {Math.round(skillList.reduce((a, b) => a + b.score, 0) / skillList.length)}%
              </span>
            </div>
          </div>
        </div>

        {/* Right Column: Recent Decisions / Activity (5 Cols) */}
        <div className="lg:col-span-5 space-y-6">
          <div className="flex items-center justify-between">
            <div>
              <span className="font-mono text-xs uppercase tracking-widest text-room-muted block">
                PRACTICE LEDGER
              </span>
              <h3 className="text-lg font-medium text-room-text dark:text-room-darkText mt-0.5">
                Recent Decisions
              </h3>
            </div>
            <button
              onClick={() => setDestination('progress')}
              className="text-xs font-mono text-room-text dark:text-room-darkText underline hover:no-underline"
            >
              Full Ledger →
            </button>
          </div>

          <div className="space-y-3">
            {progress.attempts.length === 0 ? (
              <div className="p-8 rounded-xl border border-room-border dark:border-room-darkBorder bg-room-surface dark:bg-room-darkSurface text-center">
                <p className="text-xs font-mono text-room-muted">
                  No decision records logged yet. Enter the Training Room to record your first simulation drill.
                </p>
                <button
                  onClick={() => setDestination('simulator')}
                  className="mt-4 px-4 py-2 text-xs font-mono rounded bg-room-text dark:bg-room-darkText text-room-surface dark:text-room-darkBg font-medium"
                >
                  Enter Training Room
                </button>
              </div>
            ) : (
              progress.attempts.slice(0, 3).map((attempt, idx) => (
                <div
                  key={attempt.id}
                  onClick={() => {
                    setActiveScenarioId(attempt.scenarioId);
                    setDestination('simulator');
                  }}
                  className="p-4 rounded-lg border border-room-border dark:border-room-darkBorder bg-room-surface dark:bg-room-darkSurface hover:border-room-text dark:hover:border-room-darkText transition-all cursor-pointer group"
                >
                  <div className="flex items-center justify-between text-xs mb-1">
                    <span className="font-medium text-room-text dark:text-room-darkText group-hover:underline">
                      {attempt.scenarioTitle}
                    </span>
                    <span className="font-mono text-[10px] text-room-muted">
                      Option {attempt.selectedOptionLabel}
                    </span>
                  </div>
                  <p className="text-xs text-room-muted line-clamp-2">
                    {attempt.userReflection || 'Decision executed and recorded in candidate telemetry.'}
                  </p>
                  <div className="mt-2.5 pt-2 border-t border-room-border/60 dark:border-room-darkBorder flex items-center justify-between text-[10px] font-mono text-room-muted">
                    <span className="capitalize">{attempt.category.replace('-', ' ')}</span>
                    <span>{new Date(attempt.timestamp).toLocaleDateString()}</span>
                  </div>
                </div>
              ))
            )}
          </div>
        </div>
      </div>

      {/* Curriculum Module Quick Grid */}
      <section className="space-y-4 pt-4">
        <div className="flex items-center justify-between">
          <div>
            <span className="font-mono text-xs uppercase tracking-widest text-room-muted block">
              SYLLABUS STATUS
            </span>
            <h3 className="text-lg font-medium text-room-text dark:text-room-darkText mt-0.5">
              Curriculum Domains
            </h3>
          </div>
          <button
            onClick={() => setDestination('modules')}
            className="text-xs font-mono text-room-text dark:text-room-darkText underline hover:no-underline"
          >
            Browse All 8 Modules →
          </button>
        </div>

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4">
          {TRAINING_MODULES.slice(0, 4).map(mod => {
            const modScenarios = ALL_SCENARIOS.filter(s => s.category === mod.id);
            const modCompleted = modScenarios.filter(s => completedIds.has(s.id)).length;
            return (
              <div
                key={mod.id}
                onClick={() => setDestination('modules')}
                className="p-5 rounded-lg border border-room-border dark:border-room-darkBorder bg-room-surface dark:bg-room-darkSurface hover:border-room-text dark:hover:border-room-darkText transition-all cursor-pointer group"
              >
                <div className="flex items-center justify-between font-mono text-xs text-room-muted mb-2">
                  <span>MOD {mod.number}</span>
                  <span>{modCompleted}/{modScenarios.length} Done</span>
                </div>
                <h4 className="font-medium text-sm text-room-text dark:text-room-darkText group-hover:underline mb-1">
                  {mod.title}
                </h4>
                <p className="text-xs text-room-muted line-clamp-2">
                  {mod.shortDescription}
                </p>
              </div>
            );
          })}
        </div>
      </section>
    </div>
  );
};
