import React, { useState } from 'react';
import {
  X,
  ArrowRight,
  ArrowLeft,
  Check,
  Eye,
  Brain,
  Shield,
  Compass,
  PlaySquare,
  BookMarked,
  Sparkles,
} from 'lucide-react';
import { useApp } from '../../state/AppContext';

interface OnboardingModalProps {
  isOpen: boolean;
  onClose: () => void;
}

export const OnboardingModal: React.FC<OnboardingModalProps> = ({ isOpen, onClose }) => {
  const { setDestination, setActiveScenarioId } = useApp();
  const [currentStep, setCurrentStep] = useState(0);

  if (!isOpen) return null;

  const steps = [
    {
      badge: '01 / THE PHILOSOPHY',
      title: 'Welcome to the White Room',
      subtitle: 'Where emotional reflexes are replaced with strategic clarity.',
      icon: Eye,
      content: (
        <div className="space-y-4 text-xs sm:text-sm text-room-muted leading-relaxed">
          <p>
            Most people navigate life through involuntary emotional reflexes: insults trigger defensiveness,
            exclusion triggers shame, and authority triggers panic.
          </p>
          <div className="p-4 rounded-lg bg-room-bg dark:bg-room-darkBg border border-room-border dark:border-room-darkBorder font-mono text-xs text-room-text dark:text-room-darkText">
            "He who angers you controls you. He who rushes you dictates your moves."
          </div>
          <p>
            The White Room is an analytical simulation chamber designed to decouple your ego from external
            provocations, master the 3-second diagnostic pause, and formulate unshakeable strategic responses.
          </p>
        </div>
      ),
    },
    {
      badge: '02 / THE SIMULATION LOOP',
      title: 'How Each Drill Works',
      subtitle: 'Realistic situations with immediate, surgical feedback.',
      icon: Brain,
      content: (
        <div className="space-y-3 text-xs sm:text-sm">
          <div className="p-3 rounded-lg border border-room-border dark:border-room-darkBorder bg-room-bg dark:bg-room-darkBg flex items-start space-x-3">
            <span className="font-mono text-xs font-bold text-room-text dark:text-room-darkText">STEP 1</span>
            <div className="text-xs">
              <strong className="text-room-text dark:text-room-darkText block">Read the Context & Dialogue</strong>
              <span className="text-room-muted">Observe setting, who is watching, and what unstated motives exist.</span>
            </div>
          </div>

          <div className="p-3 rounded-lg border border-room-border dark:border-room-darkBorder bg-room-bg dark:bg-room-darkBg flex items-start space-x-3">
            <span className="font-mono text-xs font-bold text-room-text dark:text-room-darkText">STEP 2</span>
            <div className="text-xs">
              <strong className="text-room-text dark:text-room-darkText block">Choose Your Strategic Tactic</strong>
              <span className="text-room-muted">Compare 4 distinct options: aggressive counter, boundary setting, or calm inquiry.</span>
            </div>
          </div>

          <div className="p-3 rounded-lg border border-room-border dark:border-room-darkBorder bg-room-bg dark:bg-room-darkBg flex items-start space-x-3">
            <span className="font-mono text-xs font-bold text-room-text dark:text-room-darkText">STEP 3</span>
            <div className="text-xs">
              <strong className="text-room-text dark:text-room-darkText block">Receive 7-Part Cognitive Deconstruction</strong>
              <span className="text-room-muted">Unpack the other person's mindset, long-term trade-offs, and an exact spoken script.</span>
            </div>
          </div>
        </div>
      ),
    },
    {
      badge: '03 / CANDIDATE RANKS',
      title: 'The 4 Progression Stages',
      subtitle: 'Your rank evolves based on actual completed drills and reflections.',
      icon: Shield,
      content: (
        <div className="grid grid-cols-2 gap-2.5 text-xs">
          <div className="p-3 rounded border border-room-border dark:border-room-darkBorder bg-room-bg dark:bg-room-darkBg">
            <span className="font-mono text-[10px] text-room-muted block">STAGE 01</span>
            <strong className="text-room-text dark:text-room-darkText block mb-1">OBSERVER</strong>
            <p className="text-[11px] text-room-muted">Notice emotions and context before categorizing.</p>
          </div>
          <div className="p-3 rounded border border-room-border dark:border-room-darkBorder bg-room-bg dark:bg-room-darkBg">
            <span className="font-mono text-[10px] text-room-muted block">STAGE 02</span>
            <strong className="text-room-text dark:text-room-darkText block mb-1">ANALYST</strong>
            <p className="text-[11px] text-room-muted">Hold competing hypotheses and dissect manipulation.</p>
          </div>
          <div className="p-3 rounded border border-room-border dark:border-room-darkBorder bg-room-bg dark:bg-room-darkBg">
            <span className="font-mono text-[10px] text-room-muted block">STAGE 03</span>
            <strong className="text-room-text dark:text-room-darkText block mb-1">STRATEGIST</strong>
            <p className="text-[11px] text-room-muted">Anticipate second-order fallout and preserve leverage.</p>
          </div>
          <div className="p-3 rounded border border-room-border dark:border-room-darkBorder bg-room-bg dark:bg-room-darkBg">
            <span className="font-mono text-[10px] text-room-muted block">STAGE 04</span>
            <strong className="text-room-text dark:text-room-darkText block mb-1">SELF-MASTERED</strong>
            <p className="text-[11px] text-room-muted">Consistent, unshakeable composure under extreme pressure.</p>
          </div>
        </div>
      ),
    },
    {
      badge: '04 / YOUR ARSENAL',
      title: 'Tools Built For Deliberate Practice',
      subtitle: 'Everything saves locally in your browser with zero external tracking.',
      icon: Sparkles,
      content: (
        <div className="space-y-3 text-xs sm:text-sm text-room-muted">
          <div className="flex items-center space-x-3 p-2 rounded bg-room-bg dark:bg-room-darkBg">
            <BookMarked size={16} className="text-room-text dark:text-room-darkText flex-shrink-0" />
            <div>
              <strong className="text-room-text dark:text-room-darkText block text-xs">Decision Journal:</strong>
              <span className="text-[11px]">Log real-world conflicts and calibrate future responses.</span>
            </div>
          </div>

          <div className="flex items-center space-x-3 p-2 rounded bg-room-bg dark:bg-room-darkBg">
            <Compass size={16} className="text-room-text dark:text-room-darkText flex-shrink-0" />
            <div>
              <strong className="text-room-text dark:text-room-darkText block text-xs">16-Point Baseline Assessment:</strong>
              <span className="text-[11px]">Generate your personalized multi-axis radar skill matrix.</span>
            </div>
          </div>

          <div className="flex items-center space-x-3 p-2 rounded bg-room-bg dark:bg-room-darkBg">
            <span className="px-1.5 py-0.5 rounded border border-room-border font-mono text-[10px] text-room-text dark:text-room-darkText">⌘K</span>
            <div>
              <strong className="text-room-text dark:text-room-darkText block text-xs">Command Palette:</strong>
              <span className="text-[11px]">Press Ctrl+K or Cmd+K anywhere to jump directly to any drill.</span>
            </div>
          </div>
        </div>
      ),
    },
  ];

  const currentStepData = steps[currentStep];
  const Icon = currentStepData.icon;

  const handleNext = () => {
    if (currentStep < steps.length - 1) {
      setCurrentStep(prev => prev + 1);
    } else {
      onClose();
    }
  };

  const handlePrevious = () => {
    if (currentStep > 0) {
      setCurrentStep(prev => prev - 1);
    }
  };

  const handleStartDrill = () => {
    onClose();
    setActiveScenarioId('sc-001');
    setDestination('simulator');
  };

  return (
    <div className="fixed inset-0 z-50 bg-black/70 backdrop-blur-sm flex items-center justify-center p-4 animate-fade-in">
      <div className="w-full max-w-xl bg-room-surface dark:bg-room-darkSurface rounded-2xl border border-room-border dark:border-room-darkBorder shadow-2xl overflow-hidden flex flex-col">
        {/* Top Header */}
        <div className="p-6 pb-4 border-b border-room-border dark:border-room-darkBorder flex items-center justify-between">
          <div className="flex items-center space-x-3">
            <div className="w-8 h-8 rounded-lg border border-room-border dark:border-room-darkBorder bg-room-subtle dark:bg-room-darkSubtle flex items-center justify-center">
              <Icon size={16} className="text-room-text dark:text-room-darkText" />
            </div>
            <div>
              <span className="font-mono text-[10px] uppercase tracking-widest text-room-muted block">
                {currentStepData.badge}
              </span>
              <h3 className="text-base font-semibold text-room-text dark:text-room-darkText">
                {currentStepData.title}
              </h3>
            </div>
          </div>

          <button
            onClick={onClose}
            className="p-1 rounded text-room-muted hover:text-room-text transition-colors"
          >
            <X size={18} />
          </button>
        </div>

        {/* Step Body */}
        <div className="p-6 sm:p-8 space-y-4 min-h-[220px]">
          <p className="text-xs font-mono text-room-muted">
            {currentStepData.subtitle}
          </p>
          {currentStepData.content}
        </div>

        {/* Step Progress Dots & Bottom Footer */}
        <div className="p-6 pt-4 border-t border-room-border dark:border-room-darkBorder bg-room-bg/50 dark:bg-room-darkBg/50 flex items-center justify-between">
          {/* Step dots */}
          <div className="flex items-center space-x-1.5">
            {steps.map((_, i) => (
              <button
                key={i}
                onClick={() => setCurrentStep(i)}
                className={`h-1.5 rounded-full transition-all ${
                  currentStep === i
                    ? 'w-6 bg-room-text dark:bg-room-darkText'
                    : 'w-2 bg-room-border dark:bg-room-darkBorder hover:bg-room-muted'
                }`}
                aria-label={`Go to step ${i + 1}`}
              />
            ))}
          </div>

          {/* Controls */}
          <div className="flex items-center space-x-2">
            {currentStep > 0 && (
              <button
                onClick={handlePrevious}
                className="px-3 py-1.5 text-xs font-mono rounded border border-room-border text-room-muted hover:text-room-text"
              >
                Back
              </button>
            )}

            {currentStep === steps.length - 1 ? (
              <button
                onClick={handleStartDrill}
                className="px-5 py-2 text-xs font-mono rounded bg-room-text text-room-surface dark:bg-room-darkText dark:text-room-darkBg font-semibold flex items-center space-x-1.5 hover:opacity-90 shadow-sm"
              >
                <span>Launch First Drill</span>
                <ArrowRight size={13} />
              </button>
            ) : (
              <button
                onClick={handleNext}
                className="px-4 py-2 text-xs font-mono rounded bg-room-text text-room-surface dark:bg-room-darkText dark:text-room-darkBg font-medium flex items-center space-x-1.5 hover:opacity-90"
              >
                <span>Continue</span>
                <ArrowRight size={13} />
              </button>
            )}
          </div>
        </div>
      </div>
    </div>
  );
};
