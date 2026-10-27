import { Scenario } from '../../types';

export const SCENARIOS_9_16: Scenario[] = [
  // 009
  {
    id: 'sc-009',
    number: '009',
    title: 'The Backhanded Compliment',
    category: 'conversation-mastery',
    difficulty: 2,
    setting: 'Client Strategy Debrief',
    context: 'After you conclude a data-heavy presentation that went smoothly, a senior peer smiles warmly and drops a barbed remark in front of three other analysts.',
    characterDialogue: '"You did surprisingly well on the quantitative slides today, especially considering you don’t really have an analytical background."',
    dialogueSpeaker: 'Corinne (Senior Analyst)',
    estimatedDuration: '3 min',
    skillTags: ['Frame Control', 'Subtext Neutralization', 'Conversational Poise', 'Status Defense'],
    learningObjectives: [
      'Disarm backhanded compliments without appearing insecure.',
      'Accept the compliment while nullifying the insult.',
      'Reflect status smoothly in front of observing peers.'
    ],
    reflectionPrompt: 'When someone gives you a backhanded compliment, do you accept the insult or challenge the framing?',
    options: [
      {
        id: 'opt-9a',
        label: 'A',
        text: 'React defensively: "What do you mean? I studied advanced statistics for three years; I have plenty of analytical background!"',
        intent: 'Defensive self-justification',
        feedback: {
          situationAnalysis: 'Proving your pedigree in response to a passive-aggressive dig signals that their opinion wounded your self-worth.',
          decisionReview: {
            accomplished: 'Defended your resume.',
            strengths: ['Factual accuracy'],
            risks: ['Signals insecurity', 'Hands Corinne the psychological win because she made you scramble']
          },
          perspectiveCheck: {
            otherInterpretation: 'Corinne smiles internally because she successfully made you feel inadequate and defensive.',
            missingInformation: 'Whether Corinne feels threatened by your analytical performance.'
          },
          consequences: {
            shortTerm: 'You look flustered in front of the team.',
            longTerm: 'Corinne knows exactly which insecurity button to press in the future.',
            tradeoffs: 'Sacrifices poise to prove credentials.'
          },
          alternativeNaturalResponse: '"I appreciate the positive feedback on the slides. The models came together cleanly."'
        } as any
      },
      {
        id: 'opt-9b',
        label: 'B',
        text: 'Take only the compliment and ignore the barb: "Thanks Corinne. The models proved the strategy conclusively. Glad you found the data clear."',
        intent: 'Selective acceptance and high-status re-anchoring',
        feedback: {
          situationAnalysis: 'By selectively extracting only the positive validation and redirecting back to the objective value of the work, you starve the toxic barb of attention.',
          decisionReview: {
            accomplished: 'Absorbed the praise, discarded the insult, and projected unshakeable executive maturity.',
            strengths: ['Complete emotional composure', 'Leaves the barb hanging awkwardly in the air', 'Directs focus to results'],
            risks: ['None']
          },
          perspectiveCheck: {
            otherInterpretation: 'Corinne’s passive-aggressive effort lands with a dull thud. Observers see you as impervious to petty games.',
            missingInformation: 'None.'
          },
          consequences: {
            shortTerm: 'Corinne has no opening to escalate; conversation moves to project next steps.',
            longTerm: 'Colleagues recognize you operate on a higher professional plane.',
            tradeoffs: 'None.'
          },
          alternativeNaturalResponse: '"Thank you. We worked hard to make the quantitative data clear."',
          skillDevelopment: {
            skill: 'Selective Filtering',
            practicalExercise: 'Accept the praise, ignore the slight, and spotlight the result.'
          },
          scoreIndicator: {
            emotionalRegulation: 96,
            socialAwareness: 94,
            strategicThinking: 95,
            assertiveness: 90
          }
        }
      },
      {
        id: 'opt-9c',
        label: 'C',
        text: 'Fire back with a sarcastic insult about Corinne’s recent work.',
        intent: 'Retaliatory insult',
        feedback: {
          situationAnalysis: 'Escalating into a mud-slinging contest drags both of you down into petty office politics.',
          decisionReview: {
            accomplished: 'Exchanged verbal blows.',
            strengths: ['Immediate retaliation'],
            risks: ['Makes you look equally petty and unprofessional']
          },
          perspectiveCheck: {
            otherInterpretation: 'Observers see two squabbling analysts rather than leaders.',
            missingInformation: 'None.'
          },
          consequences: {
            shortTerm: 'Tense, toxic debrief.',
            longTerm: 'Reputational erosion.',
            tradeoffs: 'Temporary catharsis at severe professional expense.'
          },
          alternativeNaturalResponse: '"Stay above the mud; let results speak."'
        } as any
      },
      {
        id: 'opt-9d',
        label: 'D',
        text: 'Politely smile, say nothing, and privately wonder if you truly aren’t analytical enough.',
        intent: 'Internalization of toxic framing',
        feedback: {
          situationAnalysis: 'Internalizing someone else’s envious framing damages self-efficacy.',
          decisionReview: {
            accomplished: 'Avoided conflict.',
            strengths: ['No public friction'],
            risks: ['Eats away at internal confidence and creates imposter syndrome']
          },
          perspectiveCheck: {
            otherInterpretation: 'Corinne’s remark was about her own insecurity, not your capability.',
            missingInformation: 'How often Corinne uses subtle diminishing tactics with peers.'
          },
          consequences: {
            shortTerm: 'Self-doubt lingers for days.',
            longTerm: 'Hesitancy to volunteer for future quantitative presentations.',
            tradeoffs: 'Surrenders psychological well-being to an adversary.'
          },
          alternativeNaturalResponse: '"Audit your results objectively; reject toxic projections."'
        } as any
      }
    ]
  },

  // 010
  {
    id: 'sc-010',
    number: '010',
    title: 'The Coercive Collection',
    category: 'conversation-mastery',
    difficulty: 3,
    setting: 'Breakroom / Office Corridor',
    context: 'A coworker is collecting a mandatory-sounding \$100 cash contribution per person to buy an extravagant personal gift for the department director. You are on a strict budget and believe the gift is inappropriate.',
    characterDialogue: '"Everyone on the team has already chipped in their hundred dollars. We can count on you too, right? You wouldn’t want to be the only one missing from the card."',
    dialogueSpeaker: 'Becca (Social Organizer)',
    estimatedDuration: '4 min',
    skillTags: ['Social Pressure Resistance', 'Firm Boundaries', 'Tactful Refusal', 'Group Dynamics'],
    learningObjectives: [
      'Resist manufactured social conformity and guilt framing.',
      'Deliver an unshakeable refusal without apologizing or over-justifying.',
      'Hold personal financial and ethical boundaries under peer pressure.'
    ],
    reflectionPrompt: 'When hit with the "everyone is doing it" card, do you cave in out of fear of standing out?',
    options: [
      {
        id: 'opt-10a',
        label: 'A',
        text: 'Reluctantly hand over the \$100 while feeling resentful and stressing over your grocery budget.',
        intent: 'Compliance under coercive peer pressure',
        feedback: {
          situationAnalysis: 'Caving to social coercion reinforces the organizer’s belief that social shaming is an effective enforcement tool.',
          decisionReview: {
            accomplished: 'Avoided social friction today.',
            strengths: ['Short-term group conformity'],
            risks: ['Financial distress', 'Deep internal resentment', 'Guarantees you will be targeted again']
          },
          perspectiveCheck: {
            otherInterpretation: 'Becca marks you as someone who bends whenever group pressure is applied.',
            missingInformation: 'Whether other coworkers also secretly resented the contribution.'
          },
          consequences: {
            shortTerm: 'Your name goes on the card, but your bank account suffers.',
            longTerm: 'You become an easy mark for future coercive requests.',
            tradeoffs: 'Buys false social comfort by sacrificing personal boundaries.'
          },
          alternativeNaturalResponse: '"I won’t be contributing cash, but I will happily sign the card with a personal note."'
        } as any
      },
      {
        id: 'opt-10b',
        label: 'B',
        text: 'State a clear, polite, and unnegotiable boundary: "I won’t be participating in the group gift, but I’ll gladly sign the card to wish them well."',
        intent: 'Crisp refusal with alternative contribution',
        feedback: {
          situationAnalysis: 'Giving a concise refusal without over-explaining or apologizing eliminates negotiation levers while offering an agreeable token (signing the card).',
          decisionReview: {
            accomplished: 'Enforced personal financial boundary with zero drama or defensive guilt.',
            strengths: ['Firm assertiveness', 'No excuses for Becca to debate', 'Demonstrates high internal autonomy'],
            risks: ['Becca may be momentarily surprised because she expects compliance']
          },
          perspectiveCheck: {
            otherInterpretation: 'Becca realizes you are immune to social guilt and moves on to easier targets.',
            missingInformation: 'None.'
          },
          consequences: {
            shortTerm: 'Becca accepts it; your money stays in your account.',
            longTerm: 'Others respect your quiet independence and strength.',
            tradeoffs: 'Requires bearing a momentary 5-second awkward pause.'
          },
          alternativeNaturalResponse: '"I’m sitting this one out, but I appreciate you coordinating. I’ll write a message on the card."',
          skillDevelopment: {
            skill: 'The Unapologetic Refusal',
            practicalExercise: 'Never explain why your budget or principles dictate a refusal. "I won’t be participating" is a complete sentence.'
          },
          scoreIndicator: {
            emotionalRegulation: 95,
            socialAwareness: 92,
            strategicThinking: 94,
            assertiveness: 98
          }
        }
      },
      {
        id: 'opt-10c',
        label: 'C',
        text: 'Deliver a lecture on office gift ethics: "Giving \$100 to a manager violates company compliance rules and creates toxic favoritism!"',
        intent: 'Moralistic crusade',
        feedback: {
          situationAnalysis: 'Lecturing an organizer turns a personal boundary into an aggressive organizational controversy.',
          decisionReview: {
            accomplished: 'Refused to pay.',
            strengths: ['Valid compliance point'],
            risks: ['Paints you as self-righteous and preachy', 'Creates personal enmity with Becca']
          },
          perspectiveCheck: {
            otherInterpretation: 'Becca sees you as a bureaucratic buzzkill trying to ruin a nice gesture.',
            missingInformation: 'Company HR policies.'
          },
          consequences: {
            shortTerm: 'Heated argument in the breakroom.',
            longTerm: 'Colleagues exclude you from casual social activities.',
            tradeoffs: 'Enforces ethics through combat rather than calm detachment.'
          },
          alternativeNaturalResponse: '"A simple decline is more effective than an ethics lecture."'
        } as any
      },
      {
        id: 'opt-10d',
        label: 'D',
        text: 'Make up an elaborate lie: "I left my wallet in my other jacket, I’ll get it to you later," and then avoid Becca all week.',
        intent: 'Avoidant evasion',
        feedback: {
          situationAnalysis: 'Delaying the refusal through lies turns a simple boundary into a lingering, stressful cat-and-mouse game.',
          decisionReview: {
            accomplished: 'Escaped the moment.',
            strengths: ['None'],
            risks: ['She will ask you again tomorrow', 'Looks deceitful and evasive']
          },
          perspectiveCheck: {
            otherInterpretation: 'Becca keeps chasing you, finding you increasingly slippery.',
            missingInformation: 'None.'
          },
          consequences: {
            shortTerm: 'Constant anxiety dodging her in hallways.',
            longTerm: 'Loss of straightforward reputation.',
            tradeoffs: 'Trades 5 seconds of directness for days of stress.'
          },
          alternativeNaturalResponse: '"Always say no in the moment rather than putting off the inevitable."'
        } as any
      }
    ]
  },

  // 011
  {
    id: 'sc-011',
    number: '011',
    title: 'The Vague Critique',
    category: 'conversation-mastery',
    difficulty: 3,
    setting: 'Quarterly Performance Review Room',
    context: 'During your one-on-one review, your manager drops a sweeping, ambiguous critique about your soft skills without providing specific examples.',
    characterDialogue: '"Your technical output is fine, but you just lack executive presence and passion. You don’t seem like a natural leader."',
    dialogueSpeaker: 'Director Hansen',
    estimatedDuration: '4 min',
    skillTags: ['Diagnostic Inquiring', 'Vague Feedback Dissection', 'Non-defensiveness', 'Constructive Calibration'],
    learningObjectives: [
      'Transform vague, subjective impressions into concrete behavioral metrics.',
      'Remain completely unthreatened by sweeping labels.',
      'Extract actionable growth objectives from non-constructive feedback.'
    ],
    reflectionPrompt: 'When someone tells you that you lack "passion" or "presence", do you slump in shame or ask for operational definitions?',
    options: [
      {
        id: 'opt-11a',
        label: 'A',
        text: 'Get visibly offended: "That’s completely unfair! I care deeply about this company and I work harder than anyone here!"',
        intent: 'Emotional protest against labeling',
        feedback: {
          situationAnalysis: 'Protesting that you have passion by getting emotional ironically reinforces the manager’s perception of a lack of executive poise.',
          decisionReview: {
            accomplished: 'Showed you disagree.',
            strengths: ['Passion shown'],
            risks: ['Confirms lack of emotional control', 'Paints you as unreceptive to feedback']
          },
          perspectiveCheck: {
            otherInterpretation: 'Hansen notes: "See? Overly defensive when challenged; not ready for executive leadership."',
            missingInformation: 'What specific behaviors Hansen actually associates with executive presence.'
          },
          consequences: {
            shortTerm: 'The review goes poorly; defensive standoff.',
            longTerm: 'Stagnated promotion path.',
            tradeoffs: 'Sacrifices career advancement for emotional venting.'
          },
          alternativeNaturalResponse: '"I appreciate you sharing that perception. What specific behaviors would you like to see me demonstrate more consistently?"'
        } as any
      },
      {
        id: 'opt-11b',
        label: 'B',
        text: 'Neutralize the label and ask for behavioral specificity: "I appreciate you sharing that perspective, Hansen. Because ’executive presence’ can mean different things, could you share one or two specific moments where my approach didn’t align with what you expect to see?"',
        intent: 'Analytical diagnostic extraction',
        feedback: {
          situationAnalysis: 'This is the gold standard of executive presence: staying completely calm when told you lack presence, and dispassionately asking for objective evidentiary examples.',
          decisionReview: {
            accomplished: 'Demonstrated instant executive presence while demanding operational clarity.',
            strengths: ['Flawless emotional poise', 'Forces the manager to substantiate their critique', 'Converts vague bias into actionable targets'],
            risks: ['Requires the manager to think on their feet']
          },
          perspectiveCheck: {
            otherInterpretation: 'Hansen realizes you cannot be easily rattled and is forced to evaluate their own vague intuition.',
            missingInformation: 'Whether Hansen has real examples or is just repeating a vague impression.'
          },
          consequences: {
            shortTerm: 'Hansen either gives concrete feedback or realizes their critique was ungrounded.',
            longTerm: 'You earn immense respect for mature, coachable professionalism.',
            tradeoffs: 'Requires total suppression of internal ego defensiveness.'
          },
          alternativeNaturalResponse: '"What does ideal executive presence look like to you in our upcoming client meetings?"',
          skillDevelopment: {
            skill: 'Behavioral Calibration',
            practicalExercise: 'Whenever someone uses an abstract label, ask: "What does that look like in practice?"'
          },
          scoreIndicator: {
            emotionalRegulation: 98,
            socialAwareness: 95,
            strategicThinking: 96,
            assertiveness: 92
          }
        }
      },
      {
        id: 'opt-11c',
        label: 'C',
        text: 'Nod submissively, agree that you are inadequate, and apologize for existing.',
        intent: 'Defeatist surrender',
        feedback: {
          situationAnalysis: 'Accepting vague negative labels without diagnostic exploration damages your career standing.',
          decisionReview: {
            accomplished: 'Avoided disagreement.',
            strengths: ['None'],
            risks: ['Cements Hansen’s low opinion', 'Crushes personal morale']
          },
          perspectiveCheck: {
            otherInterpretation: 'Hansen thinks: "They clearly don’t believe in themselves either."',
            missingInformation: 'None.'
          },
          consequences: {
            shortTerm: 'Marked as a low-potential employee.',
            longTerm: 'Overlooked for every major leadership role.',
            tradeoffs: 'Trades your professional future for a conflict-free review.'
          },
          alternativeNaturalResponse: '"Seek clarity, never accept vague condemnation."'
        } as any
      },
      {
        id: 'opt-11d',
        label: 'D',
        text: 'Ask who said that about you so you can confront them.',
        intent: 'Paranoid witch-hunt',
        feedback: {
          situationAnalysis: 'Assuming someone secretly poisoned the manager’s mind looks conspiratorial and petty.',
          decisionReview: {
            accomplished: 'Inquired about sources.',
            strengths: ['None'],
            risks: ['Shows extreme paranoia', 'Distracts from your own growth']
          },
          perspectiveCheck: {
            otherInterpretation: 'Hansen sees someone unable to look in the mirror.',
            missingInformation: 'None.'
          },
          consequences: {
            shortTerm: 'Manager refuses to engage in gossip.',
            longTerm: 'Tagged as untrustworthy.',
            tradeoffs: 'Disastrous.'
          },
          alternativeNaturalResponse: '"Focus on the feedback itself, not imaginary conspirators."'
        } as any
      }
    ]
  },

  // 012
  {
    id: 'sc-012',
    number: '012',
    title: 'The Triangulation Trap',
    category: 'conversation-mastery',
    difficulty: 3,
    setting: 'Campus Coffee Shop / Informal Study Group',
    context: 'Two members of your study group had a falling out over romantic drama and project roles. One of them corners you and aggressively demands that you take a stand and condemn the other.',
    characterDialogue: '"After what Tyler pulled yesterday, you can’t possibly still be talking to him. You need to choose right now: are you on my side or his?"',
    dialogueSpeaker: 'Samantha (Group Member)',
    estimatedDuration: '4 min',
    skillTags: ['Triangulation Defense', 'Neutrality Maintenance', 'Boundary Integrity', 'Strategic Distance'],
    learningObjectives: [
      'Refuse forced false dichotomies.',
      'Resist becoming an emotional proxy in someone else’s conflict.',
      'Protect multi-party relationships without deception.'
    ],
    reflectionPrompt: 'When pressured to take sides in a personal feud, do you please the person in front of you or hold neutral ground?',
    options: [
      {
        id: 'opt-12a',
        label: 'A',
        text: 'Agree with Samantha to keep her happy, then talk normally to Tyler behind her back.',
        intent: 'Duplicitous appeasement',
        feedback: {
          situationAnalysis: 'Playing both sides guarantees a catastrophic explosion when Samantha and Tyler eventually discover your double talk.',
          decisionReview: {
            accomplished: 'Escaped the confrontation with Samantha.',
            strengths: ['Immediate de-escalation of Samantha’s wrath'],
            risks: ['Complete loss of integrity', 'Permanent destruction of trust with both parties']
          },
          perspectiveCheck: {
            otherInterpretation: 'When discovered, both will view you as untrustworthy and cowardly.',
            missingInformation: 'None.'
          },
          consequences: {
            shortTerm: 'Samantha leaves satisfied.',
            longTerm: 'Incurable reputational disaster.',
            tradeoffs: 'Borrows peace at 1000% interest.'
          },
          alternativeNaturalResponse: '"I care about both of you and will not participate in choosing sides."'
        } as any
      },
      {
        id: 'opt-12b',
        label: 'B',
        text: 'Reject the ultimatum with calm neutrality: "Samantha, I value my friendship with you, and I also value Tyler. I will not choose sides in a personal conflict between the two of you. I hope you two can resolve this, but my relationship with each of you is independent."',
        intent: 'Principled refusal of triangulation',
        feedback: {
          situationAnalysis: 'Firmly rejecting the forced binary while explicitly affirming your respect for both individuals establishes clear boundaries and high character.',
          decisionReview: {
            accomplished: 'Refused triangulation, maintained personal sovereignty, and communicated integrity.',
            strengths: ['Unshakeable ethical clarity', 'Eliminates false loyalty traps', 'Protects your neutrality'],
            risks: ['Samantha might be initially frustrated because she wanted a partisan ally']
          },
          perspectiveCheck: {
            otherInterpretation: 'Samantha realizes you cannot be weaponized against Tyler. After cooling off, she respects your consistency.',
            missingInformation: 'The intimate details of their dispute.'
          },
          consequences: {
            shortTerm: 'Samantha sighs and drops the demand.',
            longTerm: 'Both Tyler and Samantha know you are a principled person who does not gossip or backstab.',
            tradeoffs: 'Requires enduring Samantha’s initial disappointment.'
          },
          alternativeNaturalResponse: '"I don’t take sides between friends. I’m here to support you as an individual, but not to wage war on Tyler."',
          skillDevelopment: {
            skill: 'Triangulation Shield',
            practicalExercise: 'When asked to choose between two friends, state: "My connection with each of you is separate and not up for negotiation."'
          },
          scoreIndicator: {
            emotionalRegulation: 95,
            socialAwareness: 94,
            strategicThinking: 96,
            assertiveness: 98
          }
        }
      },
      {
        id: 'opt-12c',
        label: 'C',
        text: 'Pick Samantha’s side and send Tyler a nasty text cutting him off.',
        intent: 'Impulsive partisan alignment',
        feedback: {
          situationAnalysis: 'Becoming a soldier in someone else’s emotional war destroys relationships over issues you don’t even fully understand.',
          decisionReview: {
            accomplished: 'Joined Samantha’s camp.',
            strengths: ['Total loyalty to Samantha'],
            risks: ['Burned a bridge with Tyler based on one-sided hearsay', 'Samantha and Tyler might reconcile next week and leave you looking foolish!']
          },
          perspectiveCheck: {
            otherInterpretation: 'Tyler feels betrayed by someone he thought was a fair friend.',
            missingInformation: 'Tyler’s side of the story.'
          },
          consequences: {
            shortTerm: 'Samantha loves you today.',
            longTerm: 'High risk of looking foolish when they get back together.',
            tradeoffs: 'Sacrifices a valuable friendship for transient loyalty.'
          },
          alternativeNaturalResponse: '"Never wage another person’s war."'
        } as any
      },
      {
        id: 'opt-12d',
        label: 'D',
        text: 'Tell Samantha she is being childish and insane.',
        intent: 'Aggressive invalidation',
        feedback: {
          situationAnalysis: 'Attacking someone who is already hyper-emotional turns their rage directly onto you.',
          decisionReview: {
            accomplished: 'Expressed exasperation.',
            strengths: ['Honesty'],
            risks: ['Paints a giant target on your back', 'Samantha now considers you her primary enemy']
          },
          perspectiveCheck: {
            otherInterpretation: 'Samantha feels attacked and invalidated.',
            missingInformation: 'None.'
          },
          consequences: {
            shortTerm: 'Explosive shouting match.',
            longTerm: 'Permanent enmity.',
            tradeoffs: 'Zero benefit.'
          },
          alternativeNaturalResponse: '"Address the boundary, not their mental sanity."'
        } as any
      }
    ]
  },

  // 013
  {
    id: 'sc-013',
    number: '013',
    title: 'The Group Chat Escalation',
    category: 'strategic-thinking',
    difficulty: 3,
    setting: 'Discord / Slack Public Channel',
    context: 'A debate over project architecture in the main channel spirals out of control. Two contributors begin trading direct insults and capital-letter accusations in front of the entire 40-person team.',
    characterDialogue: '"YOU ARE DELIBERATELY DESTROYING THIS PROJECT BECAUSE YOU CAN’T CODE! GET OFF THE REPO!"',
    dialogueSpeaker: 'Public Channel Ping',
    estimatedDuration: '4 min',
    skillTags: ['Crisis De-escalation', 'Public Mediation', 'Temperature Lowering', 'Pacing Control'],
    learningObjectives: [
      'Stop infectious public group flame wars before they destroy team unity.',
      'Establish a cooling-off protocol without taking partisan sides.',
      'Shift explosive public debates into structured private channels.'
    ],
    reflectionPrompt: 'When a public chat goes nuclear, do you grab popcorn, join the fight, or step in to cool the room?',
    options: [
      {
        id: 'opt-13a',
        label: 'A',
        text: 'Post popcorn emojis and laugh along with the other onlookers.',
        intent: 'Entertainment at team expense',
        feedback: {
          situationAnalysis: 'Encouraging public humiliation degrades the professional environment and signals low team responsibility.',
          decisionReview: {
            accomplished: 'Entertained yourself.',
            strengths: ['None'],
            risks: ['Leadership notes who took pleasure in team destruction', 'Eats away at team psychological safety']
          },
          perspectiveCheck: {
            otherInterpretation: 'The feuding parties feel mocked and escalate further out of public shame.',
            missingInformation: 'None.'
          },
          consequences: {
            shortTerm: 'The flame war intensifies.',
            longTerm: 'Toxic team culture normalized.',
            tradeoffs: 'Sacrifices culture for cheap amusement.'
          },
          alternativeNaturalResponse: '"Pause the channel and move discussion to voice."'
        } as any
      },
      {
        id: 'opt-13b',
        label: 'B',
        text: 'Post an authoritative, neutral circuit-breaker in the channel: "Team, let’s pause comments in this thread immediately. Both of you care about the project’s success, but personal attacks violate our standards. Let’s take 30 minutes offline, then meet in a quick voice huddle to align on the technical specs."',
        intent: 'Cooling-off circuit breaker and channel redirection',
        feedback: {
          situationAnalysis: 'A calm, authoritative circuit-breaker gives both parties an honorable exit from public combat and transfers the issue to real-time speech.',
          decisionReview: {
            accomplished: 'Stopped public contagion, protected team standards, and created a constructive bridge to resolution.',
            strengths: ['Decisive leadership', 'High emotional intelligence', 'De-escalates public shame'],
            risks: ['Requires authority or peer respect to enforce']
          },
          perspectiveCheck: {
            otherInterpretation: 'Both parties are secretly relieved that someone intervened to stop the public spiral without punishing either one.',
            missingInformation: 'The root technical incompatibility.'
          },
          consequences: {
            shortTerm: 'Typing stops; adrenaline cools down.',
            longTerm: 'You are viewed by leadership and peers as an essential stabilizing presence.',
            tradeoffs: 'Requires taking responsibility to facilitate the follow-up voice call.'
          },
          alternativeNaturalResponse: '"Let’s hit pause on text. Voice huddle in 30 minutes to review the branch."',
          skillDevelopment: {
            skill: 'The Public Circuit-Breaker',
            practicalExercise: 'When text turns to fire, intervene to enforce a 30-minute cooling window and shift to voice.'
          },
          scoreIndicator: {
            emotionalRegulation: 96,
            socialAwareness: 98,
            strategicThinking: 97,
            assertiveness: 94
          }
        }
      },
      {
        id: 'opt-13c',
        label: 'C',
        text: 'Take sides publicly and tell the person who shouted that they should be kicked off the team.',
        intent: 'Partisan escalation',
        feedback: {
          situationAnalysis: 'Adding more aggression to a flame war guarantees an even greater explosion.',
          decisionReview: {
            accomplished: 'Chose a side.',
            strengths: ['Defended one person'],
            risks: ['Splits the entire channel into two hostile camps', 'Escalates hostility']
          },
          perspectiveCheck: {
            otherInterpretation: 'The accused person feels ganged up on and becomes even more reckless.',
            missingInformation: 'None.'
          },
          consequences: {
            shortTerm: 'Mass resignations or rage quits.',
            longTerm: 'Irreparable group fracture.',
            tradeoffs: 'Destructive.'
          },
          alternativeNaturalResponse: '"Never escalate an active flame war."'
        } as any
      },
      {
        id: 'opt-13d',
        label: 'D',
        text: 'Mute the channel and pretend you saw nothing.',
        intent: 'Bystander avoidance',
        feedback: {
          situationAnalysis: 'Bystander silence allows toxicity to fester and normalize within a group.',
          decisionReview: {
            accomplished: 'Protected personal peace.',
            strengths: ['Zero direct exposure'],
            risks: ['Missed leadership opportunity', 'Team project suffers damage']
          },
          perspectiveCheck: {
            otherInterpretation: 'Team members wonder why no one has the courage to step up.',
            missingInformation: 'None.'
          },
          consequences: {
            shortTerm: 'Toxicity runs its course.',
            longTerm: 'Project suffers.',
            tradeoffs: 'Safety at the cost of leadership.'
          },
          alternativeNaturalResponse: '"Step up when team health is threatened."'
        } as any
      }
    ]
  },

  // 014
  {
    id: 'sc-014',
    number: '014',
    title: 'The Misread Signal',
    category: 'strategic-thinking',
    difficulty: 2,
    setting: 'Campus Library / Evening Study Session',
    context: 'A peer you’ve been studying with touches your arm frequently, laughs at your mundane comments, and suggests staying late in a secluded study room. You aren’t sure if they are interested romantically or just being friendly, and you want to avoid making things awkward.',
    characterDialogue: '"It’s getting pretty late. We could go upstairs to the empty quiet rooms on the 4th floor to really focus..."',
    dialogueSpeaker: 'Rhea (Study Partner)',
    estimatedDuration: '3 min',
    skillTags: ['Ambiguity Navigation', 'Boundary Calibration', 'Social Grace', 'Clarification'],
    learningObjectives: [
      'Navigate ambiguous romantic/social signals without awkward presumptuousness.',
      'Set clear boundaries while preserving mutual comfort and dignity.',
      'Prevent embarrassing misunderstandings before they solidify.'
    ],
    reflectionPrompt: 'When you sense ambiguous intent, do you jump to conclusions or test the waters with gentle calibration?',
    options: [
      {
        id: 'opt-14a',
        label: 'A',
        text: 'Bluntly assume romantic interest and say: "Look Rhea, you’re nice, but I don’t think of you that way romantically."',
        intent: 'Premature blunt rejection',
        feedback: {
          situationAnalysis: 'Rejecting someone before they have made an explicit advance creates severe humiliation if they were genuinely just looking for a quiet study space.',
          decisionReview: {
            accomplished: 'Eliminated ambiguity with a sledgehammer.',
            strengths: ['Directness'],
            risks: ['If they were just studying, you look arrogant and delusional', 'Permanently ruins study partnership']
          },
          perspectiveCheck: {
            otherInterpretation: 'Rhea: "What?! I literally just wanted to study without noise! Wow, you have a huge ego."',
            missingInformation: 'Whether Rhea was flirting or merely friendly and studious.'
          },
          consequences: {
            shortTerm: 'Extreme, painful awkwardness.',
            longTerm: 'Study partnership ends abruptly.',
            tradeoffs: 'Sacrifices social grace for premature certainty.'
          },
          alternativeNaturalResponse: '"I’m actually wrapping up in twenty minutes to get some sleep. Let’s finish this chapter here down in the main lounge."'
        } as any
      },
      {
        id: 'opt-14b',
        label: 'B',
        text: 'Set a comfortable, neutral boundary on setting and time without making presumptions: "I’m actually running low on energy and need to pack up in twenty minutes. Let’s power through the final summary notes right here so we can both get some rest."',
        intent: 'Tactful environmental boundary setting',
        feedback: {
          situationAnalysis: 'By keeping the location public and anchoring an imminent departure time, you gently neutralize any potential intimate escalation while preserving total dignity if it was completely platonic.',
          decisionReview: {
            accomplished: 'Regulated the environment and pacing without making humiliating assumptions.',
            strengths: ['Graceful calibration', 'Zero embarrassment for either party', 'Maintains control of personal time'],
            risks: ['None']
          },
          perspectiveCheck: {
            otherInterpretation: 'If Rhea was testing romantic waters, she receives a gentle, painless signal that you are keeping it strictly professional. If platonic, no offense was caused.',
            missingInformation: 'None needed.'
          },
          consequences: {
            shortTerm: 'Work concludes smoothly in the main lounge.',
            longTerm: 'Healthy, respectful study partnership continues.',
            tradeoffs: 'None.'
          },
          alternativeNaturalResponse: '"Let’s wrap up here—I’m heading out shortly."',
          skillDevelopment: {
            skill: 'Painless Boundary Anchoring',
            practicalExercise: 'Control time and location rather than confronting ambiguous intentions head-on.'
          },
          scoreIndicator: {
            emotionalRegulation: 94,
            socialAwareness: 96,
            strategicThinking: 95,
            assertiveness: 90
          }
        }
      },
      {
        id: 'opt-14c',
        label: 'C',
        text: 'Follow them upstairs passively and panic the whole time about what might happen.',
        intent: 'Passive compliance out of fear of awkwardness',
        feedback: {
          situationAnalysis: 'Entering an uncomfortable environment because you are too timid to decline creates high vulnerability and distress.',
          decisionReview: {
            accomplished: 'Avoided setting a boundary.',
            strengths: ['None'],
            risks: ['High anxiety', 'Can lead to deeply uncomfortable misunderstandings in private spaces']
          },
          perspectiveCheck: {
            otherInterpretation: 'Rhea assumes total mutual enthusiasm.',
            missingInformation: 'None.'
          },
          consequences: {
            shortTerm: 'Acute discomfort and confusion upstairs.',
            longTerm: 'Erosion of your ability to trust your own instincts.',
            tradeoffs: 'Trades safety and comfort for avoiding momentary awkwardness.'
          },
          alternativeNaturalResponse: '"Never enter private settings when intuition sounds an alarm."'
        } as any
      },
      {
        id: 'opt-14d',
        label: 'D',
        text: 'Make an aggressive romantic pass immediately on the assumption that she wants you to.',
        intent: 'Reckless presumption',
        feedback: {
          situationAnalysis: 'Assuming sexual or romantic consent based on ambiguous cues is reckless and can lead to boundary violations.',
          decisionReview: {
            accomplished: 'Escalated blindly.',
            strengths: ['None'],
            risks: ['High risk of crossing boundaries without consent', 'Severe interpersonal and disciplinary consequences']
          },
          perspectiveCheck: {
            otherInterpretation: 'Rhea may feel frightened or violated if she only wanted to study.',
            missingInformation: 'Clear, affirmative verbal interest.'
          },
          consequences: {
            shortTerm: 'Potential complaint, ruined friendship.',
            longTerm: 'Severe disciplinary and ethical failure.',
            tradeoffs: 'Unacceptable risk.'
          },
          alternativeNaturalResponse: '"Always wait for explicit mutual clarity."'
        } as any
      }
    ]
  },

  // 015
  {
    id: 'sc-015',
    number: '015',
    title: 'The Malicious Rumor',
    category: 'strategic-thinking',
    difficulty: 3,
    setting: 'Campus Cafeteria / Lunch Table',
    context: 'A peer leans in close and shares an unverified, damaging rumor about your lab partner’s academic dishonesty, suggesting that you should immediately drop them before their reputation damages yours.',
    characterDialogue: '"Word on the street is that Maya copied her entire thesis methodology from an obscure German paper. You really shouldn’t co-author with her—if she goes down, you go down with her."',
    dialogueSpeaker: 'Owen (Peer)',
    estimatedDuration: '4 min',
    skillTags: ['Information Verification', 'Loyalty Under Fire', 'Gossip Neutralization', 'Source Evaluation'],
    learningObjectives: [
      'Distinguish between actionable verified evidence and predatory hearsay.',
      'Neutralize rumor propagation without attacking the messenger.',
      'Protect strategic partners while maintaining intellectual integrity.'
    ],
    reflectionPrompt: 'When you hear shocking gossip about a friend or partner, do you believe it instantly or demand primary evidence?',
    options: [
      {
        id: 'opt-15a',
        label: 'A',
        text: 'Immediately believe Owen, panic, and send Maya a text backing out of the paper.',
        intent: 'Impulsive abandonment based on hearsay',
        feedback: {
          situationAnalysis: 'Acting on second-hand unverified gossip destroys valuable alliances and displays profound disloyalty and gullibility.',
          decisionReview: {
            accomplished: 'Reacted in panic.',
            strengths: ['Precautionary reflex'],
            risks: ['Betrays a partner based on fiction', 'Owen may have fabricated the rumor to steal the co-authorship slot!']
          },
          perspectiveCheck: {
            otherInterpretation: 'Maya is heartbroken by your instant betrayal. Owen smirks as he steps into your place.',
            missingInformation: 'Whether Owen has any proof, or if Owen has competing academic incentives.'
          },
          consequences: {
            shortTerm: 'Severed partnership.',
            longTerm: 'When Maya is cleared, you are exposed as a fickle, disloyal opportunist.',
            tradeoffs: 'Sacrifices a proven partner for unsubstantiated rumors.'
          },
          alternativeNaturalResponse: '"I don’t make partnership decisions based on unverified rumors. If there’s documentation, that’s one thing, but until then I stand by my partner."'
        } as any
      },
      {
        id: 'opt-15b',
        label: 'B',
        text: 'Interrogate the evidence calmly and stop the rumor in its tracks: "That’s a severe allegation that could destroy someone’s career. What primary evidence do you have for that, Owen, or is this just speculation? Unless there’s verified proof, let’s not circulate that."',
        intent: 'Epistemic rigor and gossip shutdown',
        feedback: {
          situationAnalysis: 'Demanding primary evidence and establishing the gravity of the claim forces the gossiper to confront the ethical weight of their casual slander.',
          decisionReview: {
            accomplished: 'Stopped rumor propagation, stood up for an ally, and demanded rigorous proof.',
            strengths: ['High moral integrity', 'Intellectual discipline', 'Exposes gossipers quickly'],
            risks: ['Owen may feel defensive about being called out']
          },
          perspectiveCheck: {
            otherInterpretation: 'Owen realizes he cannot feed you loose gossip and backs pedal: "Oh, well, I just heard it from someone..."',
            missingInformation: 'The true origin of the rumor.'
          },
          consequences: {
            shortTerm: 'The rumor stops spreading at this table.',
            longTerm: 'You are respected as someone with fierce integrity who defends teammates against backbiting.',
            tradeoffs: 'None.'
          },
          alternativeNaturalResponse: '"What is the exact source of that claim? Because without proof, repeating it is reckless."',
          skillDevelopment: {
            skill: 'Epistemic Firewalls',
            practicalExercise: 'Treat unverified rumors like software viruses: quarantine them immediately and never execute them without verification.'
          },
          scoreIndicator: {
            emotionalRegulation: 95,
            socialAwareness: 92,
            strategicThinking: 98,
            assertiveness: 94
          }
        }
      },
      {
        id: 'opt-15c',
        label: 'C',
        text: 'Spread the rumor to three other classmates to see if they’ve heard it too.',
        intent: 'Active gossip amplification',
        feedback: {
          situationAnalysis: 'Spreading the rumor under the guise of "checking" multiplies the damage exponentially.',
          decisionReview: {
            accomplished: 'Spread slander.',
            strengths: ['None'],
            risks: ['Complicity in character assassination', 'Academic misconduct risk']
          },
          perspectiveCheck: {
            otherInterpretation: 'Everyone views you as an active gossip spreader.',
            missingInformation: 'Truth of the claim.'
          },
          consequences: {
            shortTerm: 'Maya’s reputation is destroyed.',
            longTerm: 'When proven false, you are held liable for spreading it.',
            tradeoffs: 'Severe.'
          },
          alternativeNaturalResponse: '"Never repeat unverified claims."'
        } as any
      },
      {
        id: 'opt-15d',
        label: 'D',
        text: 'Punch Owen in the face for insulting your partner.',
        intent: 'Violent overreaction',
        feedback: {
          situationAnalysis: 'Physical violence results in immediate disciplinary expulsion.',
          decisionReview: {
            accomplished: 'Physical assault.',
            strengths: ['None'],
            risks: ['Expulsion, criminal charges']
          },
          perspectiveCheck: {
            otherInterpretation: 'You are viewed as unhinged.',
            missingInformation: 'None.'
          },
          consequences: {
            shortTerm: 'Police / Dean’s office.',
            longTerm: 'Expulsion.',
            tradeoffs: 'Catastrophic.'
          },
          alternativeNaturalResponse: '"Always handle verbal matters with intellectual authority."'
        } as any
      }
    ]
  },

  // 016
  {
    id: 'sc-016',
    number: '016',
    title: 'The Non-Apology Apology',
    category: 'strategic-thinking',
    difficulty: 3,
    setting: 'Project Mediation Room',
    context: 'After a colleague publicly insulted your competence in an email thread last week, HR or your lead suggested they apologize. They offer a textbook non-apology that places the blame back on your sensitivity.',
    characterDialogue: '"I’m sorry if your feelings were hurt by my email, but I was just being radically honest and some people are more sensitive than others."',
    dialogueSpeaker: 'Cassian (Peer)',
    estimatedDuration: '4 min',
    skillTags: ['Frame Dissection', 'Non-Apology Rejection', 'Accountability Enforcement', 'Firm Dignity'],
    learningObjectives: [
      'Identify the anatomy of fake apologies that blame the victim.',
      'Refuse pseudo-accountability without escalating into shouting.',
      'Re-anchor the issue to professional protocol rather than personal feelings.'
    ],
    reflectionPrompt: 'When someone says "I am sorry if your feelings were hurt", do you accept it to move on, or clarify the true issue?',
    options: [
      {
        id: 'opt-16a',
        label: 'A',
        text: 'Accept it politely: "It’s fine, don’t worry about it, thanks for apologizing."',
        intent: 'Submissive conflict-avoidance',
        feedback: {
          situationAnalysis: 'Accepting a fake apology validates their narrative that you are merely "oversensitive" and absolves them of real accountability.',
          decisionReview: {
            accomplished: 'Closed the mediation.',
            strengths: ['Quick exit'],
            risks: ['Cassian gets away with toxic behavior', 'HR records the issue as resolved', 'Sets precedent for future disrespect']
          },
          perspectiveCheck: {
            otherInterpretation: 'Cassian smirks: his manipulative non-apology worked completely.',
            missingInformation: 'None.'
          },
          consequences: {
            shortTerm: 'Mediation ends.',
            longTerm: 'Cassian continues to belittle you whenever convenient.',
            tradeoffs: 'Trades your professional standing for false peace.'
          },
          alternativeNaturalResponse: '"I accept that you acknowledge the email was inappropriate. However, the issue wasn’t my feelings; it was professional protocol."'
        } as any
      },
      {
        id: 'opt-16b',
        label: 'B',
        text: 'Dismantle the framing with cold precision: "Cassian, this isn’t about my feelings or sensitivity; it’s about professional conduct on public client distribution lists. Radical honesty does not require violating team communication standards. I’m ready to collaborate going forward, but let’s agree that all future technical feedback remains focused strictly on code and deliverables."',
        intent: 'Objective re-anchoring of standards',
        feedback: {
          situationAnalysis: 'By explicitly refusing the "hurt feelings" framing and re-anchoring to professional standards and future protocol, you completely disarm their condescending posture.',
          decisionReview: {
            accomplished: 'Rejected the victim-blaming frame, held the professional standard, and established a clear forward working agreement.',
            strengths: ['Unassailable logic', 'Emotionally immovable', 'Highlights the difference between honesty and rudeness'],
            risks: ['Cassian cannot play the "you are oversensitive" card anymore']
          },
          perspectiveCheck: {
            otherInterpretation: 'The mediator and Cassian see that you cannot be outmaneuvered by cheap rhetorical tricks.',
            missingInformation: 'None.'
          },
          consequences: {
            shortTerm: 'Cassian is forced to agree to the professional boundary.',
            longTerm: 'He will never attempt public email attacks against you again.',
            tradeoffs: 'Requires refusing to accept a half-hearted apology.'
          },
          alternativeNaturalResponse: '"The issue is not personal sensitivity; it is adherence to company standards."',
          skillDevelopment: {
            skill: 'Frame Inversion',
            practicalExercise: 'When someone says "I’m sorry if you felt...", reply: "The issue is not how I felt; the issue is what was done."'
          },
          scoreIndicator: {
            emotionalRegulation: 97,
            socialAwareness: 96,
            strategicThinking: 98,
            assertiveness: 98
          }
        }
      },
      {
        id: 'opt-16c',
        label: 'C',
        text: 'Explode in rage: "You’re not sorry at all! You’re just a toxic jerk!"',
        intent: 'Emotional explosion',
        feedback: {
          situationAnalysis: 'Exploding gives Cassian the exact proof he wanted to prove you are "oversensitive" and volatile.',
          decisionReview: {
            accomplished: 'Confirmed his narrative.',
            strengths: ['None'],
            risks: ['Hands him the victory on a silver platter', 'Mediator reprimands you']
          },
          perspectiveCheck: {
            otherInterpretation: 'Cassian turns to the mediator: "See what I mean? Completely unhinged."',
            missingInformation: 'None.'
          },
          consequences: {
            shortTerm: 'Disciplinary marks on you.',
            longTerm: 'Cassian looks reasonable; you look unstable.',
            tradeoffs: 'Disastrous.'
          },
          alternativeNaturalResponse: '"Maintain complete icy composure when rejecting a false apology."'
        } as any
      },
      {
        id: 'opt-16d',
        label: 'D',
        text: 'Demand that Cassian get fired or you walk out.',
        intent: 'Extreme ultimatum',
        feedback: {
          situationAnalysis: 'Issuing extreme ultimatums over a single email incident makes management view you as unreasonable and unworkable.',
          decisionReview: {
            accomplished: 'Backed leadership into a corner.',
            strengths: ['None'],
            risks: ['Leadership may accept your resignation instead']
          },
          perspectiveCheck: {
            otherInterpretation: 'Leadership sees someone unable to handle ordinary workplace mediation.',
            missingInformation: 'None.'
          },
          consequences: {
            shortTerm: 'Loss of goodwill with management.',
            longTerm: 'Damaged career prospects.',
            tradeoffs: 'Severe.'
          },
          alternativeNaturalResponse: '"Save ultimatums for existential non-negotiables."'
        } as any
      }
    ]
  }
];
