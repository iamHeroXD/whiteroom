import React, { useState } from 'react';
import {
  PlaySquare,
  ArrowRight,
  Shield,
  Activity,
  CheckCircle2,
  BookMarked,
  Sparkles,
  Download,
  Info,
  Quote,
} from 'lucide-react';
import { useApp } from '../state/AppContext';
import { ALL_SCENARIOS, getScenarioById } from '../data/scenarios';
import { TRAINING_MODULES } from '../data/modules';
import { SkillScores } from '../types';
import { RadarChart } from '../components/ui/RadarChart';
import { sounds } from '../utils/audio';

export const OverviewPage: React.FC = () => {
  const {
    progress,
    overallStage,
    completedScenarioCount,
    setDestination,
    setActiveScenarioId,
    latestAssessment,
    setIsOnboardingOpen,
    preferences,
  } = useApp();

  const [activeAxiomIndex, setActiveAxiomIndex] = useState(0);

  const axioms = [
    { quote: "He who angers you controls you.", context: "Operational Axiom 01 — Impulse Decoupling" },
    { quote: "Silence is an active, structured response.", context: "Operational Axiom 02 — Conversational Pacing" },
    { quote: "Never defend where you need only clarify.", context: "Operational Axiom 03 — Frame Preservation" },
    { quote: "When you corner an adversary, leave an honorable bridge of retreat.", context: "Operational Axiom 04 — Tactical De-escalation" },
    { quote: "A boundary explained ten times is an invitation to negotiate.", context: "Operational Axiom 05 — Boundary Precision" },
  ];

  const handleExportDossier = () => {
    sounds.playClick(preferences.soundEnabled);
    const dossier = {
      system: 'WHITE ROOM CANDIDATE DOSSIER',
      exportDate: new Date().toISOString(),
      candidateId: '048',
      operationalStage: overallStage,
      completedScenarios: completedScenarioCount,
      journalEntriesCount: progress.journalEntries.length,
      latestAssessmentScores: latestAssessment?.scores || 'Not yet generated',
      recentAttempts: progress.attempts.slice(0, 10).map(a => ({
        scenarioTitle: a.scenarioTitle,
        category: a.category,
        optionChosen: a.selectedOptionLabel,
        reflection: a.userReflection || 'None',
        date: new Date(a.timestamp).toLocaleDateString(),
      })),
    };

    const blob = new Blob([JSON.stringify(dossier, null, 2)], { type: 'application/json' });
    const url = URL.createObjectURL(blob);
    const a = document.createElement('a');
    a.href = url;
    a.download = `white-room-dossier-stage-${overallStage.toLowerCase()}.json`;
    a.click();
    URL.revokeObjectURL(url);
  };

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

        <div className="flex flex-wrap items-center gap-3">
          <button
            onClick={() => {
              sounds.playClick(preferences.soundEnabled);
              setIsOnboardingOpen(true);
            }}
            className="px-3.5 py-2 rounded border border-room-border dark:border-room-darkBorder bg-room-surface dark:bg-room-darkSurface text-xs font-mono text-room-muted hover:text-room-text dark:hover:text-room-darkText flex items-center space-x-1.5 transition-colors"
          >
            <Info size={14} className="text-amber-500" />
            <span>How White Room Works</span>
          </button>

          <button
            onClick={handleExportDossier}
            className="px-3.5 py-2 rounded border border-room-border dark:border-room-darkBorder bg-room-surface dark:bg-room-darkSurface text-xs font-mono text-room-muted hover:text-room-text dark:hover:text-room-darkText flex items-center space-x-1.5 transition-colors"
            title="Download Candidate Telemetry JSON"
          >
            <Download size={14} />
            <span>Export Dossier</span>
          </button>

          <button
            onClick={() => {
              sounds.playClick(preferences.soundEnabled);
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

      {/* Daily Tactical Axiom Banner */}
      <div className="p-4 sm:p-5 rounded-xl border border-room-border dark:border-room-darkBorder bg-room-surface/80 dark:bg-room-darkSurface/80 flex flex-col sm:flex-row sm:items-center justify-between gap-3 text-xs">
        <div className="flex items-center space-x-3">
          <div className="w-8 h-8 rounded border border-room-border dark:border-room-darkBorder bg-room-bg dark:bg-room-darkBg flex items-center justify-center flex-shrink-0">
            <Quote size={15} className="text-room-text dark:text-room-darkText" />
          </div>
          <div>
            <span className="font-mono text-[10px] text-room-muted uppercase tracking-wider block">
              {axioms[activeAxiomIndex].context}
            </span>
            <p className="font-medium text-room-text dark:text-room-darkText italic text-sm">
              "{axioms[activeAxiomIndex].quote}"
            </p>
          </div>
        </div>

        <button
          onClick={() => setActiveAxiomIndex(prev => (prev + 1) % axioms.length)}
          className="text-[11px] font-mono text-room-muted hover:text-room-text dark:hover:text-room-darkText underline self-end sm:self-center flex-shrink-0"
        >
          Next Axiom →
        </button>
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
        {/* Left Column: Interactive Multi-Axis Radar Matrix (7 Cols) */}
        <div className="lg:col-span-7 space-y-4">
          <div className="flex items-center justify-between">
            <div>
              <span className="font-mono text-xs uppercase tracking-widest text-room-muted block">
                DIAGNOSTIC MATRIX
              </span>
              <h3 className="text-lg font-medium text-room-text dark:text-room-darkText mt-0.5">
                Multi-Axis Skill Profile
              </h3>
            </div>
            <button
              onClick={() => setDestination('assessment')}
              className="text-xs font-mono text-room-text dark:text-room-darkText underline hover:no-underline"
            >
              {latestAssessment ? 'Retake Assessment' : 'Take Baseline Assessment'}
            </button>
          </div>

          <div className="p-6 rounded-xl border border-room-border dark:border-room-darkBorder bg-room-surface dark:bg-room-darkSurface flex flex-col items-center">
            {/* Interactive SVG Radar Chart */}
            <RadarChart scores={skills} size={300} className="my-2" />

            <div className="w-full mt-4 pt-3 border-t border-room-border dark:border-room-darkBorder flex items-center justify-between text-[11px] font-mono text-room-muted">
              <span>
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
