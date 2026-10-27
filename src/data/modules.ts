import { TrainingModule } from '../types';

export const TRAINING_MODULES: TrainingModule[] = [
  {
    id: 'social-intelligence',
    number: '01',
    title: 'Social Intelligence',
    shortDescription: 'Decipher subtext, environmental cues, conversational dynamics, and unspoken motives.',
    fullDescription: 'Social dynamics operate on multiple layers simultaneously. Master the discipline of reading body language, understanding situational context, detecting group alliances, and recognizing alternative interpretations before forming conclusions.',
    difficulty: 1,
    scenariosCount: 4,
    relevantSkills: ['Contextual Awareness', 'Subtext Reading', 'Social Cue Interpretation', 'Non-verbal Observation'],
    learningObjectives: [
      'Differentiate between literal statements and underlying emotional stakes.',
      'Identify shifting room dynamics and group consensus in real time.',
      'Anticipate how third-party observers interpret exchanges.',
      'Prevent cognitive bias from distorting neutral observations.'
    ],
    corePrinciples: [
      'Observe before categorizing.',
      'Assume ambiguity before malice.',
      'The loudest reaction is rarely the most informative one.'
    ]
  },
  {
    id: 'emotional-control',
    number: '02',
    title: 'Emotional Control',
    shortDescription: 'Regulate internal reactivity when provoked, criticized, embarrassed, or surprised.',
    fullDescription: 'High stress triggers impulsive responses that surrender leverage and escalate friction. Develop cold composure, internal pacing, deliberate physiological pausing, and psychological detachment to remain clear-headed under pressure.',
    difficulty: 2,
    scenariosCount: 4,
    relevantSkills: ['Physiological Regulation', 'Impulse Inhibition', 'Detached Observation', 'Stress Equilibrium'],
    learningObjectives: [
      'Identify acute physiological indicators of emotional hijack.',
      'Master the deliberate 3-second diagnostic pause.',
      'Decouple personal self-worth from external criticism.',
      'Neutralize reactive defensive postures without conceding ground.'
    ],
    corePrinciples: [
      'He who angers you controls you.',
      'Silence is an active, structured response.',
      'Clarity precedes effective action.'
    ]
  },
  {
    id: 'conversation-mastery',
    number: '03',
    title: 'Conversation Mastery',
    shortDescription: 'Direct dialogue flow, manage awkward silences, assert boundaries, and navigate friction.',
    fullDescription: 'Effective communication is not about dominating airtime; it is about calibrating precision, active diagnostic listening, steering focus, asking revelatory questions, and articulating boundaries without antagonism.',
    difficulty: 2,
    scenariosCount: 4,
    relevantSkills: ['Diagnostic Inquiring', 'Boundary Articulation', 'Rhythm Control', 'Conversational Reframing'],
    learningObjectives: [
      'Use tactical questions to prompt conversational transparency.',
      'Tolerate and utilize deliberate pauses to shift conversational balance.',
      'Deliver firm boundaries with neutral, unshakeable tonality.',
      'Exit stalled or unproductive exchanges with dignity and precision.'
    ],
    corePrinciples: [
      'Questions direct attention; statements invite debate.',
      'Never defend where you need only clarify.',
      'Brevity signals confidence; over-explaining signals insecurity.'
    ]
  },
  {
    id: 'strategic-thinking',
    number: '04',
    title: 'Strategic Thinking',
    shortDescription: 'Anticipate second-order effects, incentive structures, power dynamics, and hidden leverage.',
    fullDescription: 'Tactics win moments; strategy wins outcomes. Learn to map competing participant motivations, calculate long-term second-order fallout, operate under incomplete data, and make calculated trade-offs under pressure.',
    difficulty: 3,
    scenariosCount: 4,
    relevantSkills: ['Incentive Analysis', 'Second-Order Forecasting', 'Leverage Identification', 'Risk Evaluation'],
    learningObjectives: [
      'Map underlying personal and institutional incentives behind human actions.',
      'Forecast consequences at T+1 day, T+1 month, and T+1 year.',
      'Recognize pyrrhic social victories that damage long-term standing.',
      'Maintain strategic patience while others react impulsively.'
    ],
    corePrinciples: [
      'Distinguish the immediate gratification from the durable outcome.',
      'Every action creates incentives; anticipate the response.',
      'Never sacrifice enduring leverage for transient vindication.'
    ]
  },
  {
    id: 'manipulation-defense',
    number: '05',
    title: 'Manipulation Defense',
    shortDescription: 'Neutralize guilt-tripping, bad-faith framing, coercive pressure, and gaslighting tactics.',
    fullDescription: 'Manipulative patterns rely on exploiting empathy, ambiguity, rushed urgency, and social pressure. Train to identify deceptive framing, withstand manufactured guilt, and respond with surgical objectivity.',
    difficulty: 4,
    scenariosCount: 4,
    relevantSkills: ['Frame Recognition', 'Guilt Neutralization', 'Coercion Resistance', 'Boundary Enforcement'],
    learningObjectives: [
      'Detect covert emotional extortion and false dilemmas.',
      'Break artificially manufactured urgency and force reflective pacing.',
      'Separate genuine accountability from manufactured guilt projection.',
      'Hold baseline boundaries without engaging in bad-faith circular arguments.'
    ],
    corePrinciples: [
      'Refuse to answer an invalid premise.',
      'Do not absorb an emotional burden manufactured by someone else.',
      'A boundary explained ten times is not a boundary; it is an invitation to negotiate.'
    ]
  },
  {
    id: 'conflict-resolution',
    number: '06',
    title: 'Conflict Resolution',
    shortDescription: 'De-escalate hostility, isolate core incompatibilities, and engineer sustainable solutions.',
    fullDescription: 'Conflict is unavoidable in high-stakes environments. The disciplined practitioner de-escalates emotional volatility, separates personal grievance from practical issues, and architects workable compromises.',
    difficulty: 3,
    scenariosCount: 4,
    relevantSkills: ['De-escalation', 'Core Dispute Isolation', 'Ego Preservation', 'Iterative Agreement'],
    learningObjectives: [
      'Lower emotional temperature without conceding critical positions.',
      'Preserve the other party’s social dignity to avoid cornered hostility.',
      'Isolate the objective logistical dispute from relational baggage.',
      'Draft verifiable agreements with clear, reciprocal commitments.'
    ],
    corePrinciples: [
      'When you corner an adversary, leave them an honorable bridge of retreat.',
      'Focus relentlessly on forward commitments rather than retrospective blame.',
      'Calmness is communicable.'
    ]
  },
  {
    id: 'digital-social',
    number: '07',
    title: 'Digital Social Intelligence',
    shortDescription: 'Navigate asynchronous misinterpretations, toxic group chats, ghosting, and online friction.',
    fullDescription: 'Text communication strips vocal inflections and micro-expressions, creating fertile ground for paranoia and false assumptions. Master digital pacing, tone calibration, boundary maintenance, and group thread management.',
    difficulty: 3,
    scenariosCount: 4,
    relevantSkills: ['Digital Tone Calibration', 'Asynchronous Pacing', 'Thread De-escalation', 'Digital Boundary Setting'],
    learningObjectives: [
      'Resist reactive digital replies triggered by ambiguous phrasing.',
      'Identify when an online exchange must transition to real-time speech.',
      'Maintain composure in hostile public channels and group forums.',
      'Set healthy response-latency boundaries without guilt.'
    ],
    corePrinciples: [
      'Text carries no inflection; the reader supplies their own insecurities.',
      'Never litigate complex relational disputes over asynchronous text.',
      'Delaying a reply is an act of calibration, not negligence.'
    ]
  },
  {
    id: 'leadership-teamwork',
    number: '08',
    title: 'Leadership & Teamwork',
    shortDescription: 'Command respect, delegate accountability, deliver rigorous feedback, and resolve credit friction.',
    fullDescription: 'True leadership requires strategic empathy combined with unwavering standards. Learn to address underperformance, resolve credit disputes, align mismatched personalities, and guide groups through high-stakes uncertainty.',
    difficulty: 4,
    scenariosCount: 4,
    relevantSkills: ['Constructive Candor', 'Credit Calibration', 'Team Alignment', 'Autonomous Delegation'],
    learningObjectives: [
      'Deliver direct, actionable criticism without provoking defensive paralysis.',
      'Address credit misallocations objectively and firmly.',
      'Align divergent team incentives toward unified milestones.',
      'Exercise authority through competence and composure rather than coercive rank.'
    ],
    corePrinciples: [
      'Praise publicly; diagnose privately.',
      'Clarity is the highest form of professional respect.',
      'Lead by maintaining emotional stability when others become disoriented.'
    ]
  }
];
