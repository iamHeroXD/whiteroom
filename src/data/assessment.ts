import { AssessmentQuestion, SkillScores } from '../types';

export const ASSESSMENT_QUESTIONS: AssessmentQuestion[] = [
  {
    id: 'q1',
    number: 1,
    category: 'emotionalRegulation',
    question: 'When an unexpected piece of hostile feedback is delivered in a group setting, what is your initial physiological and behavioral reaction?',
    context: 'Group critique meeting',
    options: [
      {
        text: 'I instantly counter the critique to ensure nobody in the room thinks I agree with the criticism.',
        score: 1,
        rationale: 'Reactivity surrenders composure and signals emotional destabilization to onlookers.'
      },
      {
        text: 'I feel an intense internal spike of anger or humiliation, but force a tight smile and say nothing.',
        score: 2,
        rationale: 'Suppression conceals the reaction but leaves cognitive resources drained and unresolved.'
      },
      {
        text: 'I feel the initial defensive impulse, take a quiet breath, and make a written note before deciding if it warrants a response.',
        score: 4,
        rationale: 'Demonstrates awareness of internal physiological triggers and enforces a deliberate pause.'
      },
      {
        text: 'I detach my personal ego from the statement, neutrally observe the speaker’s delivery, and isolate whatever 10% of the feedback might be objectively accurate.',
        score: 5,
        rationale: 'Exemplifies high emotional regulation: psychological detachment paired with analytical utility.'
      }
    ]
  },
  {
    id: 'q2',
    number: 2,
    category: 'socialAwareness',
    question: 'You join an ongoing project meeting where two key stakeholders have fallen completely silent while a third talks rapidly. How do you assess the room?',
    context: 'Observing subtle tension',
    options: [
      {
        text: 'Assume the two silent stakeholders have nothing to add and let the active speaker finish their agenda.',
        score: 1,
        rationale: 'Fails to detect the communicative significance of sudden silence in collaborative settings.'
      },
      {
        text: 'Wait for someone to complain explicitly; unless spoken, emotional undercurrents are not my concern.',
        score: 2,
        rationale: 'Passively relies on overt verbalization rather than reading unspoken social signals.'
      },
      {
        text: 'Recognize the sudden silence as disengagement or suppressed dissent, and pay close attention to their non-verbal cues.',
        score: 4,
        rationale: 'Correctly identifies that silence is an active communicative behavior indicative of friction.'
      },
      {
        text: 'Assess the power balance, note micro-expressions and posture, and tactfully open a neutral door for the silent parties without putting them on the spot.',
        score: 5,
        rationale: 'Combines acute contextual awareness with calculated, non-threatening group mediation.'
      }
    ]
  },
  {
    id: 'q3',
    number: 3,
    category: 'perspectiveTaking',
    question: 'A close peer who is usually responsive and cooperative begins giving abrupt, monosyllabic replies to your inquiries. How do you interpret this?',
    context: 'Behavioral variance analysis',
    options: [
      {
        text: 'They are being rude and disrespectful toward me; I should give them the cold shoulder in return.',
        score: 1,
        rationale: 'Personalizes neutral variance and instinctively escalates through retaliatory passive aggression.'
      },
      {
        text: 'They must be deeply angry with me about something I did, so I repeatedly press them to confess what is wrong.',
        score: 2,
        rationale: 'Assumes egocentric causality and risks suffocating someone who may be managing independent stressors.'
      },
      {
        text: 'I consider that their behavior might stem from personal pressure, fatigue, or circumstances having nothing to do with me.',
        score: 4,
        rationale: 'Applies Hanlon’s razor and resists self-referential cognitive distortion.'
      },
      {
        text: 'I review our recent interactions for legitimate friction points while holding multiple hypotheses, giving them space before inquiring with gentle curiosity.',
        score: 5,
        rationale: 'Thorough perspective-taking: evaluates one’s own conduct while acknowledging situational external factors.'
      }
    ]
  },
  {
    id: 'q4',
    number: 4,
    category: 'communication',
    question: 'You discover that a colleague has presented a slide deck containing several significant factual errors that affect your shared project. How do you address it?',
    context: 'Delivering corrective information',
    options: [
      {
        text: 'Immediately call out the errors during the meeting so everyone knows the facts are wrong.',
        score: 1,
        rationale: 'Prioritizes immediate correctness over social preservation, triggering intense public defensiveness.'
      },
      {
        text: 'Say nothing to avoid awkwardness, hoping someone else notices or the fallout will fix itself.',
        score: 1,
        rationale: 'Conflict-avoidant surrender of professional standards.'
      },
      {
        text: 'Send them a private note highlighting the specific discrepancies and offering corrected figures before the next review.',
        score: 4,
        rationale: 'Preserves their social dignity in private while rectifying the technical error.'
      },
      {
        text: 'Pull them aside privately, validate their work on the presentation, frame the corrections as updated data that will protect the team’s credibility, and assist with the fix.',
        score: 5,
        rationale: 'Strategic communication: aligns corrections with mutual incentives and shields team standing.'
      }
    ]
  },
  {
    id: 'q5',
    number: 5,
    category: 'conflictResolution',
    question: 'In a heated discussion, the other person raises their voice and makes a sarcastic, personal remark. What is your reaction?',
    context: 'Direct de-escalation',
    options: [
      {
        text: 'Hit back with a sharper, more devastating insult to establish dominance.',
        score: 1,
        rationale: 'Ego escalation guarantees total breakdown of constructive discourse.'
      },
      {
        text: 'Shut down completely, walk away without a word, and hold a grudge for weeks.',
        score: 2,
        rationale: 'Avoidant withdrawal creates unresolved relational rot.'
      },
      {
        text: 'Maintain an even vocal tone, pause for two seconds, and acknowledge their frustration while declining to engage with the insult.',
        score: 4,
        rationale: 'Controls the emotional temperature and isolates the issue from the provocation.'
      },
      {
        text: 'Lower vocal pitch and pacing, state: "I want to hear your point, but we cannot solve this with personal digs. Let’s reset," providing an honorable path back to reason.',
        score: 5,
        rationale: 'Exemplary conflict architecture: provides boundary firmness and an explicit face-saving bridge.'
      }
    ]
  },
  {
    id: 'q6',
    number: 6,
    category: 'deliberateDecisionMaking',
    question: 'You are presented with an urgent proposal that requires an immediate signature, but some terms feel ambiguous. What do you do?',
    context: 'Pressure resistance',
    options: [
      {
        text: 'Sign it right away to avoid disappointing the team and keeping the momentum going.',
        score: 1,
        rationale: 'Caves to manufactured urgency, surrendering long-term security for short-term comfort.'
      },
      {
        text: 'Become suspicious, accuse the counterparty of trying to trick you, and terminate the deal.',
        score: 2,
        rationale: 'Paranoid overreaction that damages relationships prematurely.'
      },
      {
        text: 'State that you never make binding commitments under artificial time pressure, requesting 24 hours to review.',
        score: 4,
        rationale: 'Enforces deliberate pacing and establishes an inviolable personal protocol.'
      },
      {
        text: 'Firmly slow the tempo: "If this must be signed right this minute, the answer is no. If we can review the ambiguous clauses together for 15 minutes, we can move forward."',
        score: 5,
        rationale: 'Mastery of leverage: counters false urgency with clear conditional framing.'
      }
    ]
  },
  {
    id: 'q7',
    number: 7,
    category: 'emotionalRegulation',
    question: 'You poured weeks into a project, but leadership unexpectedly cancels it due to shifting executive priorities. How do you process this?',
    context: 'Sunk cost & disappointment',
    options: [
      {
        text: 'Complain bitterly to teammates and mentally check out of all future company initiatives.',
        score: 1,
        rationale: 'Toxicity and resentment that corrodes personal reputation.'
      },
      {
        text: 'Pretend you never cared about the project anyway and try to ignore the empty feeling.',
        score: 2,
        rationale: 'Cynical defense mechanism that inhibits authentic professional learning.'
      },
      {
        text: 'Acknowledge the genuine sting of wasted effort, take an evening to decompress, and archive the reusable assets.',
        score: 4,
        rationale: 'Accepts emotional reality while pivoting constructively toward asset preservation.'
      },
      {
        text: 'Dispassionately audit the strategic shift that caused the cancellation, catalog personal competencies sharpened during the build, and ask for the post-mortem review.',
        score: 5,
        rationale: 'Transformative resilience: views external setbacks as objective data points and skills accrual.'
      }
    ]
  },
  {
    id: 'q8',
    number: 8,
    category: 'socialAwareness',
    question: 'At a dinner with influential colleagues, someone makes a subtly inappropriate joke at a junior peer’s expense. The junior laughs nervously. What do you observe?',
    context: 'Subtextual power dynamics',
    options: [
      {
        text: 'The junior person laughed, so obviously everyone found it humorous and harmless.',
        score: 1,
        rationale: 'Takes appeasement laughter at face value, completely missing the power imbalance.'
      },
      {
        text: 'Feel uncomfortable, but conclude that intervening in any way would only cause social friction for me.',
        score: 2,
        rationale: 'Recognizes the discomfort but defaults to passive self-preservation.'
      },
      {
        text: 'Recognize the junior’s laugh as appeasement signaling under social vulnerability, and decline to validate the joke with your own laughter.',
        score: 4,
        rationale: 'Accurately deciphers subtext and withholds social reinforcement.'
      },
      {
        text: 'Refuse to laugh, smoothly redirect the topic to highlight the junior colleague’s recent achievement, subtly dismantling the punchline’s premise without causing a scene.',
        score: 5,
        rationale: 'Sophisticated social calibration: resets the social balance without triggering defensive drama.'
      }
    ]
  },
  {
    id: 'q9',
    number: 9,
    category: 'perspectiveTaking',
    question: 'A direct report or partner fails to deliver a promised commitment for the second time. What is your primary mental frame when initiating the follow-up?',
    context: 'Accountability vs empathy',
    options: [
      {
        text: '"They are simply lazy and do not respect my time or authority."',
        score: 1,
        rationale: 'Fundamental attribution error; treats situational breakdown as an intrinsic moral defect.'
      },
      {
        text: '"I must have overburdened them, so I should just do the task myself without bothering them."',
        score: 2,
        rationale: 'Self-sacrificing codependency that destroys accountability.'
      },
      {
        text: '"Something in their process, workload, or understanding broke down; I need to diagnose the systemic cause."',
        score: 4,
        rationale: 'Constructive diagnostic orientation separating personal intent from operational friction.'
      },
      {
        text: '"I need to understand what obstacles or competing incentives derailed them, while holding clear mutual standards: empathetic curiosity regarding causes, firm clarity regarding consequences."',
        score: 5,
        rationale: 'Equilibrium of strategic empathy and rigorous accountability.'
      }
    ]
  },
  {
    id: 'q10',
    number: 10,
    category: 'communication',
    question: 'When you need to deliver a firm "No" to a demanding request from a friend or colleague, how do you phrase it?',
    context: 'Boundary articulation',
    options: [
      {
        text: 'Make up an elaborate false excuse about a family emergency or dentist appointment so they don’t get mad.',
        score: 1,
        rationale: 'Deceptive weakness; leaves open the expectation that you would comply under other circumstances.'
      },
      {
        text: 'Reluctantly agree, and then deliberately do a poor job or procrastinate until they give up.',
        score: 1,
        rationale: 'Passive-aggressive breach of integrity.'
      },
      {
        text: 'Provide a concise, direct refusal: "I cannot commit to this right now, as my capacity is fully allocated."',
        score: 4,
        rationale: 'Clean, professional boundary with no unnecessary justifications.'
      },
      {
        text: 'Deliver an unembellished, courteous boundary: "I’m not able to take that on. I wanted to tell you right away so you can arrange an alternative," offering zero room for negotiation.',
        score: 5,
        rationale: 'Decisive, respectful, and eliminates ambiguity without inviting emotional bargaining.'
      }
    ]
  },
  {
    id: 'q11',
    number: 11,
    category: 'conflictResolution',
    question: 'Two close team members are locked in a mutual feud and both come to you individually trying to enlist you on their side. How do you navigate this?',
    context: 'Triangulation defense',
    options: [
      {
        text: 'Validate whichever person is speaking to me in the moment so both feel I am on their side.',
        score: 1,
        rationale: 'Double-dealing; guarantees catastrophic loss of trust when the parties compare notes.'
      },
      {
        text: 'Pick the person I personally like more and help them defeat the other person’s argument.',
        score: 1,
        rationale: 'Tribal bias that exacerbates structural conflict.'
      },
      {
        text: 'Refuse to listen to back-channel complaints: "If this involves Alex, I will only discuss it with both of you present."',
        score: 4,
        rationale: 'Shuts down toxic triangulation immediately.'
      },
      {
        text: 'Listen once for objective data without validating personal slights, refuse taking sides, and insist on facilitating a structured, outcome-focused joint conversation centered on shared goals.',
        score: 5,
        rationale: 'Neutral, principled leadership that converts back-channel gossip into productive joint resolution.'
      }
    ]
  },
  {
    id: 'q12',
    number: 12,
    category: 'deliberateDecisionMaking',
    question: 'You notice an opportunity to win a minor dispute in front of your peers by humiliating a rival using their private secret. What do you do?',
    context: 'Tactical temptation vs strategic integrity',
    options: [
      {
        text: 'Expose the secret instantly; winning in public establishes fear and respect.',
        score: 1,
        rationale: 'Catastrophic miscalculation: creates permanent blood enemies and destroys peer trust.'
      },
      {
        text: 'Hint at the secret subtly to make them squirm without fully saying it.',
        score: 2,
        rationale: 'Petty intimidation that signals low maturity.'
      },
      {
        text: 'Hold back completely; personal leverage should never be wasted on transient arguments.',
        score: 4,
        rationale: 'Strategic discipline; recognizes that cheap victories carry immense second-order costs.'
      },
      {
        text: 'Win on the merits of the objective facts alone, leaving their personal dignity intact, recognizing that true long-term influence requires that even your rivals perceive you as fair and bound by rules.',
        score: 5,
        rationale: 'High strategic mastery: builds unassailable moral and professional authority.'
      }
    ]
  },
  {
    id: 'q13',
    number: 13,
    category: 'emotionalRegulation',
    question: 'You realize in the middle of a speech or high-stakes presentation that you gave an incorrect critical figure. What do you do?',
    context: 'Composure under exposure',
    options: [
      {
        text: 'Panic, fumble your words, rush through the remainder of the slides, and leave immediately.',
        score: 1,
        rationale: 'Complete cognitive collapse under sudden vulnerability.'
      },
      {
        text: 'Hope nobody caught it, double down on the point, and argue if someone points it out later.',
        score: 1,
        rationale: 'Defensive dishonesty that invites severe reputational penalties.'
      },
      {
        text: 'Pause, take a breath, correct the number aloud with a neutral tone, and smoothly continue.',
        score: 4,
        rationale: 'Demonstrates psychological poise and transparency.'
      },
      {
        text: 'Pause seamlessly: "Let me correct that metric immediately—it is 12%, not 21%. Precision matters here," turning an error into a display of rigorous integrity.',
        score: 5,
        rationale: 'Reframes a momentary mistake into an authoritative demonstration of competence and honesty.'
      }
    ]
  },
  {
    id: 'q14',
    number: 14,
    category: 'socialAwareness',
    question: 'You are introducing two acquaintances from different backgrounds who share mutual interests. How do you facilitate their initial rapport?',
    context: 'Social bridging',
    options: [
      {
        text: 'Say "You two should talk," and walk away immediately.',
        score: 1,
        rationale: 'Neglects the social friction of cold introductions.'
      },
      {
        text: 'Dominate the conversation talking about your own experiences with both of them.',
        score: 2,
        rationale: 'Self-centered intervention that blocks organic connection between them.'
      },
      {
        text: 'Briefly mention what each person does and identify the specific topic they both care about.',
        score: 4,
        rationale: 'Provides a clean conversational hook for both parties.'
      },
      {
        text: 'Anchor a compelling shared theme, highlight an impressive insight of each party, pose an open diagnostic question to both, and tactfully step back as they engage.',
        score: 5,
        rationale: 'Catalytic social engineering: creates high-value connection while preserving conversational space.'
      }
    ]
  },
  {
    id: 'q15',
    number: 15,
    category: 'perspectiveTaking',
    question: 'Someone delivers an opinion that contradicts your fundamental worldview or core methodology. What is your immediate mental operation?',
    context: 'Cognitive flexibility',
    options: [
      {
        text: 'Dismiss them as ignorant or ill-informed without further thought.',
        score: 1,
        rationale: 'Dogmatic cognitive closure.'
      },
      {
        text: 'Prepare your rebuttal internally while pretending to listen to their words.',
        score: 2,
        rationale: 'Performative listening; zero epistemic curiosity.'
      },
      {
        text: 'Ask yourself: "What set of life experiences or underlying premises would make this view completely rational to them?"',
        score: 4,
        rationale: 'Active cognitive perspective-taking.'
      },
      {
        text: 'Steel-man their argument: formulate the strongest possible defense of their position before testing where your respective fundamental premises diverge.',
        score: 5,
        rationale: 'Peak intellectual and emotional maturity: tests truth rather than ego victory.'
      }
    ]
  },
  {
    id: 'q16',
    number: 16,
    category: 'deliberateDecisionMaking',
    question: 'You receive praise and recognition for an accomplishment that was actually 80% achieved by a quiet team member who isn’t in the room. What is your response?',
    context: 'Credit ethics & long-term reputation',
    options: [
      {
        text: 'Accept the praise enthusiastically; in this world you take credit whenever it comes.',
        score: 1,
        rationale: 'Parasitic opportunism; breeds deep betrayal and permanent internal sabotage.'
      },
      {
        text: 'Accept the praise now, and later tell the quiet team member "good job" in private.',
        score: 2,
        rationale: 'Hypocritical tokenism that leaves the public injustice intact.'
      },
      {
        text: 'Immediately clarify: "Thank you, but Elena did the heavy lifting on this build; she deserves the credit."',
        score: 4,
        rationale: 'Principled honesty that protects team loyalty.'
      },
      {
        text: 'Publicly elevate Elena’s specific architectural breakthroughs, explain how your role was merely supporting her vision, and ensure executive leadership personally thanks her.',
        score: 5,
        rationale: 'Highest strategic leadership: builds fierce, unbreakable loyalty while gaining reputation as an exceptional talent incubator.'
      }
    ]
  }
];

export function calculateAssessmentResult(answers: Record<string, number>): {
  scores: SkillScores;
  primaryStrengths: string[];
  growthAreas: string[];
  levelTitle: string;
  summaryAnalysis: string;
} {
  const categoryScores: Record<keyof SkillScores, number[]> = {
    emotionalRegulation: [],
    perspectiveTaking: [],
    socialAwareness: [],
    communication: [],
    conflictResolution: [],
    deliberateDecisionMaking: []
  };

  ASSESSMENT_QUESTIONS.forEach(q => {
    const selectedScore = answers[q.id] || 3;
    categoryScores[q.category].push(selectedScore);
  });

  const scores: SkillScores = {
    emotionalRegulation: 0,
    perspectiveTaking: 0,
    socialAwareness: 0,
    communication: 0,
    conflictResolution: 0,
    deliberateDecisionMaking: 0
  };

  (Object.keys(categoryScores) as (keyof SkillScores)[]).forEach(cat => {
    const arr = categoryScores[cat];
    const avg = arr.reduce((a, b) => a + b, 0) / (arr.length || 1);
    // Convert 1-5 scale to 20-100%
    scores[cat] = Math.round((avg / 5) * 100);
  });

  // Calculate strengths & growth areas
  const sortedCategories = (Object.keys(scores) as (keyof SkillScores)[]).sort(
    (a, b) => scores[b] - scores[a]
  );

  const categoryNames: Record<keyof SkillScores, string> = {
    emotionalRegulation: 'Emotional Regulation',
    perspectiveTaking: 'Perspective-Taking',
    socialAwareness: 'Social Awareness',
    communication: 'Precision Communication',
    conflictResolution: 'Conflict De-escalation',
    deliberateDecisionMaking: 'Strategic Decision-Making'
  };

  const primaryStrengths = sortedCategories.slice(0, 2).map(c => categoryNames[c]);
  const growthAreas = sortedCategories.slice(-2).reverse().map(c => categoryNames[c]);

  const overallAvg =
    Object.values(scores).reduce((a, b) => a + b, 0) / Object.values(scores).length;

  let levelTitle = 'Observer (Foundational)';
  let summaryAnalysis =
    'Your baseline demonstrates emerging awareness with opportunities to convert reactive reflexes into disciplined pauses.';

  if (overallAvg >= 85) {
    levelTitle = 'Self-Mastered (Advanced Strategic)';
    summaryAnalysis =
      'You exhibit exceptional psychological poise, high diagnostic empathy, and strategic long-horizon decision-making. Your challenge is sustaining this consistency during extreme fatigue.';
  } else if (overallAvg >= 70) {
    levelTitle = 'Strategist (Proficient Operator)';
    summaryAnalysis =
      'You reliably decouple ego from provocation and anticipate second-order consequences. Deepening your diagnostic questioning under pressure will elevate you to complete mastery.';
  } else if (overallAvg >= 50) {
    levelTitle = 'Analyst (Developing Precision)';
    summaryAnalysis =
      'You possess solid intellectual grasp of social dynamics, but acute emotional triggers or social pressure occasionally override your deliberate judgment.';
  }

  return {
    scores,
    primaryStrengths,
    growthAreas,
    levelTitle,
    summaryAnalysis
  };
}
