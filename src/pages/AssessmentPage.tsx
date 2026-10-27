import React, { useState } from 'react';
import {
  CheckCircle2,
  ArrowRight,
  ArrowLeft,
  RotateCcw,
  Shield,
  Award,
  Sparkles,
  BarChart3,
  Calendar,
  AlertCircle,
} from 'lucide-react';
import { useApp } from '../state/AppContext';
import {
  ASSESSMENT_QUESTIONS,
  calculateAssessmentResult,
} from '../data/assessment';
import { SkillScores, AssessmentResult } from '../types';

type AssessmentFlowState = 'intro' | 'questionnaire' | 'review' | 'results';

export const AssessmentPage: React.FC = () => {
  const {
    saveAssessmentResult,
    progress,
    setDestination,
    setActiveScenarioId,
    latestAssessment,
  } = useApp();

  const [flowState, setFlowState] = useState<AssessmentFlowState>(
    latestAssessment ? 'results' : 'intro'
  );
  const [currentQuestionIndex, setCurrentQuestionIndex] = useState(0);
  const [answers, setAnswers] = useState<Record<string, number>>({});
  const [activeResult, setActiveResult] = useState<AssessmentResult | undefined>(
    latestAssessment
  );

  const totalQuestions = ASSESSMENT_QUESTIONS.length;
  const currentQuestion = ASSESSMENT_QUESTIONS[currentQuestionIndex];

  const handleSelectOption = (questionId: string, score: number) => {
    setAnswers(prev => ({
      ...prev,
      [questionId]: score,
    }));
  };

  const handleNext = () => {
    if (currentQuestionIndex < totalQuestions - 1) {
      setCurrentQuestionIndex(prev => prev + 1);
    } else {
      setFlowState('review');
    }
  };

  const handlePrevious = () => {
    if (currentQuestionIndex > 0) {
      setCurrentQuestionIndex(prev => prev - 1);
    }
  };

  const handleFinalSubmit = () => {
    const calculated = calculateAssessmentResult(answers);
    const newResult: Omit<AssessmentResult, 'id' | 'timestamp'> = {
      scores: calculated.scores,
      primaryStrengths: calculated.primaryStrengths,
      growthAreas: calculated.growthAreas,
      recommendedModuleIds: ['social-intelligence', 'emotional-control'],
      levelTitle: calculated.levelTitle,
      summaryAnalysis: calculated.summaryAnalysis,
    };

    saveAssessmentResult(newResult);
    setActiveResult({
      ...newResult,
      id: 'assessment-' + Date.now(),
      timestamp: Date.now(),
    });
    setFlowState('results');
  };

  const handleRetake = () => {
    setAnswers({});
    setCurrentQuestionIndex(0);
    setFlowState('questionnaire');
  };

  return (
    <div className="max-w-4xl mx-auto space-y-8 animate-fade-in pb-16">
      {/* Intro Screen */}
      {flowState === 'intro' && (
        <div className="space-y-6">
          <div className="border-b border-room-border dark:border-room-darkBorder pb-6">
            <span className="font-mono text-xs uppercase tracking-widest text-room-muted block mb-1">
              DIAGNOSTIC PROTOCOL
            </span>
            <h2 className="text-3xl sm:text-4xl font-light text-room-text dark:text-room-darkText tracking-tight">
              EQ & Strategic Baseline Assessment
            </h2>
            <p className="text-sm text-room-muted dark:text-room-darkMuted mt-1">
              Evaluate your cognitive reaction patterns across sixteen high-stakes social and
              strategic scenarios.
            </p>
          </div>

          <div className="p-6 sm:p-8 rounded-xl border border-room-border dark:border-room-darkBorder bg-room-surface dark:bg-room-darkSurface space-y-6">
            <div className="space-y-3">
              <h3 className="text-lg font-medium text-room-text dark:text-room-darkText">
                Protocol Architecture
              </h3>
              <p className="text-sm text-room-muted dark:text-room-darkMuted leading-relaxed">
                This evaluation tests your default physiological and tactical instincts when
                subjected to provocation, public challenge, ambiguous social cues, and ethical
                pressure.
              </p>
            </div>

            <div className="grid grid-cols-1 sm:grid-cols-3 gap-4 font-mono text-xs text-room-muted">
              <div className="p-4 rounded border border-room-border dark:border-room-darkBorder bg-room-bg dark:bg-room-darkBg">
                <span className="text-room-text dark:text-room-darkText font-semibold block mb-1">
                  16 Scenarios
                </span>
                Comprehensive testing matrix
              </div>
              <div className="p-4 rounded border border-room-border dark:border-room-darkBorder bg-room-bg dark:bg-room-darkBg">
                <span className="text-room-text dark:text-room-darkText font-semibold block mb-1">
                  ~8 Minutes
                </span>
                Untimed, deliberate pacing
              </div>
              <div className="p-4 rounded border border-room-border dark:border-room-darkBorder bg-room-bg dark:bg-room-darkBg">
                <span className="text-room-text dark:text-room-darkText font-semibold block mb-1">
                  6 Dimensions
                </span>
                Precision radar profile
              </div>
            </div>

            {/* Disclaimer box per Part 10 */}
            <div className="p-4 rounded-lg bg-room-subtle dark:bg-room-darkSubtle border border-room-border dark:border-room-darkBorder flex items-start space-x-3 text-xs text-room-muted">
              <AlertCircle size={16} className="text-room-text dark:text-room-darkText flex-shrink-0 mt-0.5" />
              <p className="leading-relaxed">
                <strong>Training Disclaimer:</strong> This diagnostic tool is designed strictly as a
                training-oriented personal development baseline. It does not constitute a clinical
                psychological diagnosis, medical evaluation, or definitive static measurement of
                human capability.
              </p>
            </div>

            <div className="pt-2">
              <button
                onClick={() => setFlowState('questionnaire')}
                className="px-8 py-4 rounded bg-room-text dark:bg-room-darkText text-room-surface dark:text-room-darkBg font-mono text-xs uppercase tracking-widest font-semibold hover:opacity-90 active:scale-[0.99] transition-all flex items-center space-x-2"
              >
                <span>INITIATE ASSESSMENT</span>
                <ArrowRight size={15} />
              </button>
            </div>
          </div>
        </div>
      )}

      {/* Questionnaire Screen (One Question at a Time) */}
      {flowState === 'questionnaire' && currentQuestion && (
        <div className="space-y-6">
          {/* Header & Progress Indicator */}
          <div className="flex items-center justify-between pb-4 border-b border-room-border dark:border-room-darkBorder font-mono text-xs text-room-muted">
            <span>
              QUESTION {currentQuestion.number} OF {totalQuestions}
            </span>
            <span>
              {Math.round(((currentQuestionIndex + 1) / totalQuestions) * 100)}% COMPLETE
            </span>
          </div>

          {/* Progress Bar */}
          <div className="w-full h-1.5 rounded-full bg-room-subtle dark:bg-room-darkSubtle overflow-hidden">
            <div
              className="h-full bg-room-text dark:bg-room-darkText transition-all duration-300"
              style={{
                width: `${((currentQuestionIndex + 1) / totalQuestions) * 100}%`,
              }}
            />
          </div>

          {/* Question Card */}
          <div className="p-6 sm:p-8 rounded-xl border border-room-border dark:border-room-darkBorder bg-room-surface dark:bg-room-darkSurface space-y-6">
            {currentQuestion.context && (
              <span className="font-mono text-xs text-room-muted uppercase tracking-wider block">
                Context: {currentQuestion.context}
              </span>
            )}

            <h3 className="text-lg sm:text-xl font-light text-room-text dark:text-room-darkText leading-relaxed">
              {currentQuestion.question}
            </h3>

            {/* Options */}
            <div className="space-y-3 pt-2">
              {currentQuestion.options.map((opt, idx) => {
                const isSelected = answers[currentQuestion.id] === opt.score;
                return (
                  <button
                    key={idx}
                    onClick={() => handleSelectOption(currentQuestion.id, opt.score)}
                    className={`w-full p-4 rounded-lg border text-left text-sm transition-all flex items-start space-x-3.5 ${
                      isSelected
                        ? 'border-room-text dark:border-room-darkText bg-room-subtle dark:bg-room-darkSubtle font-medium text-room-text dark:text-room-darkText shadow-sm'
                        : 'border-room-border dark:border-room-darkBorder bg-room-bg dark:bg-room-darkBg hover:border-neutral-400 dark:hover:border-neutral-600 text-room-muted hover:text-room-text dark:hover:text-room-darkText'
                    }`}
                  >
                    <span
                      className={`font-mono text-xs px-2 py-0.5 rounded flex-shrink-0 ${
                        isSelected
                          ? 'bg-room-text text-room-surface dark:bg-room-darkText dark:text-room-darkBg'
                          : 'bg-room-border/40 text-room-muted'
                      }`}
                    >
                      {String.fromCharCode(65 + idx)}
                    </span>
                    <span className="leading-relaxed flex-1">{opt.text}</span>
                  </button>
                );
              })}
            </div>

            {/* Controls */}
            <div className="pt-4 border-t border-room-border dark:border-room-darkBorder flex items-center justify-between">
              <button
                onClick={handlePrevious}
                disabled={currentQuestionIndex === 0}
                className={`px-4 py-2 text-xs font-mono rounded flex items-center space-x-1.5 ${
                  currentQuestionIndex === 0
                    ? 'text-room-border cursor-not-allowed'
                    : 'text-room-muted hover:text-room-text dark:hover:text-room-darkText'
                }`}
              >
                <ArrowLeft size={14} />
                <span>Previous</span>
              </button>

              <button
                onClick={handleNext}
                disabled={!answers[currentQuestion.id]}
                className={`px-6 py-2.5 rounded font-mono text-xs uppercase font-medium flex items-center space-x-1.5 transition-all ${
                  answers[currentQuestion.id]
                    ? 'bg-room-text dark:bg-room-darkText text-room-surface dark:text-room-darkBg hover:opacity-90'
                    : 'bg-room-border/40 text-room-muted cursor-not-allowed'
                }`}
              >
                <span>
                  {currentQuestionIndex === totalQuestions - 1 ? 'Review Answers' : 'Next'}
                </span>
                <ArrowRight size={14} />
              </button>
            </div>
          </div>
        </div>
      )}

      {/* Review Screen (Check all 16 before final calculation) */}
      {flowState === 'review' && (
        <div className="space-y-6">
          <div className="border-b border-room-border dark:border-room-darkBorder pb-4">
            <span className="font-mono text-xs uppercase tracking-widest text-room-muted block mb-1">
              CONFIRMATION GATEWAY
            </span>
            <h2 className="text-2xl sm:text-3xl font-light text-room-text dark:text-room-darkText">
              Review Responses Before Calculation
            </h2>
            <p className="text-xs text-room-muted mt-1">
              Verify your selected reactions. You may click any item to revise your response before
              submitting.
            </p>
          </div>

          <div className="space-y-3">
            {ASSESSMENT_QUESTIONS.map((q, idx) => {
              const selectedScore = answers[q.id];
              const selectedOption = q.options.find(o => o.score === selectedScore);
              return (
                <div
                  key={q.id}
                  onClick={() => {
                    setCurrentQuestionIndex(idx);
                    setFlowState('questionnaire');
                  }}
                  className="p-4 rounded-lg border border-room-border dark:border-room-darkBorder bg-room-surface dark:bg-room-darkSurface hover:border-room-text dark:hover:border-room-darkText transition-all cursor-pointer flex items-start justify-between gap-4"
                >
                  <div className="space-y-1 text-xs">
                    <span className="font-mono text-room-muted font-semibold block">
                      #{q.number} {q.context ? `— ${q.context}` : ''}
                    </span>
                    <p className="text-room-text dark:text-room-darkText font-medium">
                      {q.question}
                    </p>
                    <p className="text-room-muted italic pt-1">
                      Chosen: {selectedOption ? selectedOption.text : 'Unanswered'}
                    </p>
                  </div>
                  <span className="text-xs font-mono text-room-muted underline flex-shrink-0">
                    Revise
                  </span>
                </div>
              );
            })}
          </div>

          <div className="pt-4 flex items-center justify-between">
            <button
              onClick={() => {
                setCurrentQuestionIndex(totalQuestions - 1);
                setFlowState('questionnaire');
              }}
              className="px-4 py-2 text-xs font-mono text-room-muted hover:text-room-text"
            >
              ← Back to Questions
            </button>

            <button
              onClick={handleFinalSubmit}
              className="px-8 py-3.5 rounded bg-room-text dark:bg-room-darkText text-room-surface dark:text-room-darkBg font-mono text-xs uppercase tracking-widest font-semibold hover:opacity-90 active:scale-[0.99] transition-all"
            >
              GENERATE DIAGNOSTIC REPORT
            </button>
          </div>
        </div>
      )}

      {/* Results Screen */}
      {flowState === 'results' && activeResult && (
        <div className="space-y-8">
          <div className="border-b border-room-border dark:border-room-darkBorder pb-4 flex flex-col sm:flex-row sm:items-end justify-between gap-4">
            <div>
              <span className="font-mono text-xs uppercase tracking-widest text-room-muted block mb-1">
                EVALUATION REPORT
              </span>
              <h2 className="text-3xl font-light text-room-text dark:text-room-darkText">
                Baseline Diagnostic Results
              </h2>
              <span className="font-mono text-xs text-room-muted mt-1 block">
                Recorded: {new Date(activeResult.timestamp).toLocaleDateString()} • {activeResult.levelTitle}
              </span>
            </div>

            <button
              onClick={handleRetake}
              className="px-4 py-2 rounded border border-room-border dark:border-room-darkBorder text-xs font-mono text-room-text dark:text-room-darkText hover:bg-room-subtle dark:hover:bg-room-darkSubtle transition-colors flex items-center space-x-1.5"
            >
              <RotateCcw size={13} />
              <span>Retake Assessment</span>
            </button>
          </div>

          {/* Executive Summary Card */}
          <div className="p-6 rounded-xl border border-room-border dark:border-room-darkBorder bg-room-surface dark:bg-room-darkSurface space-y-3">
            <h3 className="text-xs font-mono uppercase tracking-widest text-room-muted">
              Summary Analysis
            </h3>
            <p className="text-sm sm:text-base text-room-text dark:text-room-darkText leading-relaxed">
              {activeResult.summaryAnalysis}
            </p>
          </div>

          {/* Skill Radar / Dimension Grid */}
          <div className="p-6 sm:p-8 rounded-xl border border-room-border dark:border-room-darkBorder bg-room-surface dark:bg-room-darkSurface space-y-6">
            <h3 className="text-xs font-mono uppercase tracking-widest text-room-muted">
              Tactical Dimension Breakdown
            </h3>

            <div className="space-y-4">
              {Object.entries(activeResult.scores).map(([key, val]) => {
                const labelMap: Record<string, string> = {
                  emotionalRegulation: 'Emotional Regulation',
                  perspectiveTaking: 'Perspective-Taking',
                  socialAwareness: 'Social Awareness',
                  communication: 'Precision Communication',
                  conflictResolution: 'Conflict De-escalation',
                  deliberateDecisionMaking: 'Strategic Decision-Making',
                };
                return (
                  <div key={key} className="space-y-1.5">
                    <div className="flex justify-between items-center text-xs">
                      <span className="font-medium text-room-text dark:text-room-darkText">
                        {labelMap[key] || key}
                      </span>
                      <span className="font-mono text-room-muted">{val}%</span>
                    </div>
                    <div className="w-full h-2 rounded-full bg-room-subtle dark:bg-room-darkSubtle overflow-hidden">
                      <div
                        className="h-full bg-room-text dark:bg-room-darkText rounded-full"
                        style={{ width: `${val}%` }}
                      />
                    </div>
                  </div>
                );
              })}
            </div>
          </div>

          {/* Strengths & Growth Areas Grid */}
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            {/* Strengths */}
            <div className="p-6 rounded-xl border border-room-border dark:border-room-darkBorder bg-room-surface dark:bg-room-darkSurface space-y-3">
              <span className="font-mono text-xs uppercase tracking-widest text-emerald-600 dark:text-emerald-400 font-semibold block">
                Primary Strengths
              </span>
              <ul className="space-y-2">
                {activeResult.primaryStrengths.map((str, i) => (
                  <li key={i} className="text-sm text-room-text dark:text-room-darkText flex items-center space-x-2">
                    <span className="w-1.5 h-1.5 rounded-full bg-emerald-500" />
                    <span>{str}</span>
                  </li>
                ))}
              </ul>
            </div>

            {/* Growth Areas */}
            <div className="p-6 rounded-xl border border-room-border dark:border-room-darkBorder bg-room-surface dark:bg-room-darkSurface space-y-3">
              <span className="font-mono text-xs uppercase tracking-widest text-room-muted font-semibold block">
                Areas for Deliberate Practice
              </span>
              <ul className="space-y-2">
                {activeResult.growthAreas.map((gro, i) => (
                  <li key={i} className="text-sm text-room-text dark:text-room-darkText flex items-center space-x-2">
                    <span className="w-1.5 h-1.5 rounded-full bg-room-text dark:bg-room-darkText" />
                    <span>{gro}</span>
                  </li>
                ))}
              </ul>
            </div>
          </div>

          {/* Recommended Practice Plan Action */}
          <div className="p-6 rounded-xl border border-room-border dark:border-room-darkBorder bg-room-subtle/50 dark:bg-room-darkSubtle/50 flex flex-col sm:flex-row items-start sm:items-center justify-between gap-4">
            <div>
              <h4 className="text-sm font-medium text-room-text dark:text-room-darkText">
                Begin Recommended Simulation Path
              </h4>
              <p className="text-xs text-room-muted mt-0.5">
                Target your lowest baseline scores with high-impact situational drills.
              </p>
            </div>
            <button
              onClick={() => {
                setActiveScenarioId('sc-001');
                setDestination('simulator');
              }}
              className="px-6 py-2.5 rounded bg-room-text dark:bg-room-darkText text-room-surface dark:text-room-darkBg font-mono text-xs uppercase font-semibold hover:opacity-90 flex items-center space-x-2"
            >
              <span>Launch Simulator</span>
              <ArrowRight size={14} />
            </button>
          </div>
        </div>
      )}
    </div>
  );
};
