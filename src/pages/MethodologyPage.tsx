import React from 'react';
import {
  Shield,
  Eye,
  Brain,
  Compass,
  ArrowRight,
  Sparkles,
  BookOpen,
  CheckCircle2,
} from 'lucide-react';
import { useApp } from '../state/AppContext';

export const MethodologyPage: React.FC = () => {
  const { setDestination } = useApp();

  return (
    <div className="space-y-12 animate-fade-in max-w-4xl mx-auto pb-16">
      {/* Header */}
      <div className="border-b border-room-border dark:border-room-darkBorder pb-6">
        <span className="font-mono text-xs uppercase tracking-widest text-room-muted block mb-1">
          PHILOSOPHICAL & COGNITIVE FOUNDATION
        </span>
        <h2 className="text-3xl sm:text-4xl font-light text-room-text dark:text-room-darkText tracking-tight">
          The White Room Method
        </h2>
        <p className="text-sm text-room-muted dark:text-room-darkMuted mt-1 max-w-2xl leading-relaxed">
          Emotional intelligence is not sentimentality; it is the discipline of cold perception,
          internal physiological regulation, and strategic clarity under pressure.
        </p>
      </div>

      {/* Origin & Core Philosophy */}
      <section className="space-y-4">
        <h3 className="text-xs font-mono uppercase tracking-widest text-room-muted">
          01 — THE CORE THESIS
        </h3>
        <div className="p-6 sm:p-8 rounded-xl border border-room-border dark:border-room-darkBorder bg-room-surface dark:bg-room-darkSurface space-y-4">
          <blockquote className="text-lg sm:text-xl font-light text-room-text dark:text-room-darkText leading-relaxed">
            "He who angers you controls you. He who rushes you dictates your moves. To master the
            room, you must first master your own reactivity."
          </blockquote>
          <p className="text-xs sm:text-sm text-room-muted dark:text-room-darkMuted leading-relaxed">
            In everyday life, humans react impulsively to social stimuli—insults trigger anger,
            exclusion triggers shame, pressure triggers compliance. These autonomic responses surrender
            leverage and escalate friction. The White Room methodology replaces involuntary reflex
            with deliberate calculation.
          </p>
        </div>
      </section>

      {/* The 5 Axioms of Emotional Precision */}
      <section className="space-y-4">
        <h3 className="text-xs font-mono uppercase tracking-widest text-room-muted">
          02 — FIVE AXIOMS OF STRATEGIC COMPOSURE
        </h3>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
          <div className="p-5 rounded-lg border border-room-border dark:border-room-darkBorder bg-room-surface dark:bg-room-darkSurface space-y-2">
            <span className="font-mono text-xs text-room-muted block">AXIOM 01</span>
            <h4 className="text-sm font-semibold text-room-text dark:text-room-darkText">
              The 3-Second Diagnostic Pause
            </h4>
            <p className="text-xs text-room-muted dark:text-room-darkMuted leading-relaxed">
              When provoked or surprised, maintain absolute silence for three seconds. Allow the
              initial adrenaline surge to dissipate so prefrontal executive calculation can resume.
            </p>
          </div>

          <div className="p-5 rounded-lg border border-room-border dark:border-room-darkBorder bg-room-surface dark:bg-room-darkSurface space-y-2">
            <span className="font-mono text-xs text-room-muted block">AXIOM 02</span>
            <h4 className="text-sm font-semibold text-room-text dark:text-room-darkText">
              Separate Intent from Effect
            </h4>
            <p className="text-xs text-room-muted dark:text-room-darkMuted leading-relaxed">
              Never attribute to malicious strategy what is adequately explained by fatigue,
              carelessness, or personal anxiety. Evaluate data, not paranoia.
            </p>
          </div>

          <div className="p-5 rounded-lg border border-room-border dark:border-room-darkBorder bg-room-surface dark:bg-room-darkSurface space-y-2">
            <span className="font-mono text-xs text-room-muted block">AXIOM 03</span>
            <h4 className="text-sm font-semibold text-room-text dark:text-room-darkText">
              Refuse the False Premise
            </h4>
            <p className="text-xs text-room-muted dark:text-room-darkMuted leading-relaxed">
              When an adversary hands you a poisoned question or a forced dichotomy, never choose
              between their two options. Invert the framing or reject the underlying premise.
            </p>
          </div>

          <div className="p-5 rounded-lg border border-room-border dark:border-room-darkBorder bg-room-surface dark:bg-room-darkSurface space-y-2">
            <span className="font-mono text-xs text-room-muted block">AXIOM 04</span>
            <h4 className="text-sm font-semibold text-room-text dark:text-room-darkText">
              Preserve the Adversary’s Bridge
            </h4>
            <p className="text-xs text-room-muted dark:text-room-darkMuted leading-relaxed">
              When you corner an opponent with unassailable facts, leave them an honorable bridge of
              retreat. A humiliated adversary fights with desperate, permanent hostility.
            </p>
          </div>

          <div className="p-5 rounded-lg border border-room-border dark:border-room-darkBorder bg-room-surface dark:bg-room-darkSurface space-y-2 md:col-span-2">
            <span className="font-mono text-xs text-room-muted block">AXIOM 05</span>
            <h4 className="text-sm font-semibold text-room-text dark:text-room-darkText">
              Boundaries Require No Apology
            </h4>
            <p className="text-xs text-room-muted dark:text-room-darkMuted leading-relaxed">
              A boundary justified ten times ceases to be a boundary and becomes an invitation to
              negotiate. Deliver standards with calm, unembellished brevity.
            </p>
          </div>
        </div>
      </section>

      {/* Ethical Safeguards */}
      <section className="space-y-4">
        <h3 className="text-xs font-mono uppercase tracking-widest text-room-muted">
          03 — ETHICAL BOUNDARIES & COGNITIVE INTEGRITY
        </h3>

        <div className="p-6 rounded-xl border border-room-border dark:border-room-darkBorder bg-room-surface dark:bg-room-darkSurface space-y-3">
          <p className="text-xs sm:text-sm text-room-muted dark:text-room-darkMuted leading-relaxed">
            Strategic acumen without ethical restraint degenerates into manipulative sociopathy. In
            the White Room, psychological perception is trained strictly for self-regulation,
            protection against coercion, peaceful de-escalation, and constructive leadership.
          </p>
          <div className="pt-2 border-t border-room-border/60 dark:border-room-darkBorder font-mono text-xs text-room-text dark:text-room-darkText">
            "The strongest individual in any room is the one who cannot be baited into an unnecessary fight."
          </div>
        </div>
      </section>

      {/* CTA */}
      <div className="pt-4 flex items-center justify-between">
        <button
          onClick={() => setDestination('overview')}
          className="text-xs font-mono text-room-muted hover:text-room-text"
        >
          ← Return to Dashboard
        </button>

        <button
          onClick={() => {
            setDestination('simulator');
          }}
          className="px-6 py-3 rounded bg-room-text dark:bg-room-darkText text-room-surface dark:text-room-darkBg font-mono text-xs uppercase font-semibold hover:opacity-90 flex items-center space-x-2"
        >
          <span>Enter Simulator Drills</span>
          <ArrowRight size={14} />
        </button>
      </div>
    </div>
  );
};
