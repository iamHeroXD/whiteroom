import { Scenario } from '../../types';

export const SCENARIOS_25_32: Scenario[] = [
  // 025
  {
    id: 'sc-025',
    number: '025',
    title: 'The Uncomfortable Truth',
    category: 'digital-social',
    difficulty: 3,
    setting: 'Private 1-on-1 Mentorship Room',
    context: 'A junior engineer whose work you oversee has consistently missed test coverage requirements, leading to broken builds. When you sit down to give feedback, they look nervous and visibly guarded.',
    characterDialogue: '"Are you going to tell me I’m doing a terrible job? Because I’ve been working 12 hours a day and doing the best I can."',
    dialogueSpeaker: 'Samir (Junior Developer)',
    estimatedDuration: '4 min',
    skillTags: ['Constructive Candor', 'Diagnostic Feedback', 'Psychological Safety', 'Standard Enforcement'],
    learningObjectives: [
      'Deliver rigorous, non-negotiable performance feedback without breaking morale.',
      'Separate effort/intent from technical outcome.',
      'Establish a clear, supportive path to mastery.'
    ],
    reflectionPrompt: 'When someone says they are working 12 hours a day, do you withhold criticism out of pity, or help them work effectively?',
    options: [
      {
        id: 'opt-25a',
        label: 'A',
        text: 'Pity them and withhold the critique: "No, no, you’re doing great! Don’t worry about test coverage, just keep doing what you’re doing."',
        intent: 'Cowardly false reassurance',
        feedback: {
          situationAnalysis: 'Lying about performance to avoid hurting feelings sets the junior up for catastrophic failure when senior leadership eventually fires them.',
          decisionReview: {
            accomplished: 'Avoided tears in the room.',
            strengths: ['Short-term emotional comfort'],
            risks: ['Builds keep breaking', 'Samir learns nothing', 'Betrays your duty as a mentor']
          },
          perspectiveCheck: {
            otherInterpretation: 'Samir thinks his current broken output is acceptable and will be blindsided later.',
            missingInformation: 'None.'
          },
          consequences: {
            shortTerm: 'Relief today.',
            longTerm: 'Samir is put on a performance improvement plan or fired.',
            tradeoffs: 'Sacrifices their career growth for your temporary comfort.'
          },
          alternativeNaturalResponse: '"I see your dedication and effort. Let’s channel that energy into test automation so you aren’t burning out."'
        } as any
      },
      {
        id: 'opt-25b',
        label: 'B',
        text: 'Acknowledge the effort, validate their dedication, and reframe the standard as protection against burnout: "Samir, I see how hard you’re working, and I appreciate your dedication. Working 12 hours a day isn’t sustainable, and that exhaustion is actually why the test coverage is slipping. I’m not here to reprimand you; I’m here to help you hit our engineering standards in 8 hours so you don’t burn out. Let’s look at your testing workflow and automate the redundant parts together."',
        intent: 'Empathetic candor aligned with mutual growth',
        feedback: {
          situationAnalysis: 'By decoupling personal dedication from process efficiency and framing test coverage as a tool to reduce his grueling hours, you transform potential defensiveness into partnership.',
          decisionReview: {
            accomplished: 'Preserved morale, upheld the engineering standard, and established actionable coaching.',
            strengths: ['High emotional intelligence', 'Relieves burnout anxiety', 'Maintains team standards without compromise'],
            risks: ['Requires spending time pairing on automation']
          },
          perspectiveCheck: {
            otherInterpretation: 'Samir feels seen, relieved that you aren’t attacking him, and eager to learn better tools.',
            missingInformation: 'What specific tools Samir struggles with.'
          },
          consequences: {
            shortTerm: 'Defensiveness evaporates; Samir opens up about where he gets stuck.',
            longTerm: 'Samir becomes an autonomous, high-performing engineer who credits you for his growth.',
            tradeoffs: 'Invests upfront mentoring time.'
          },
          alternativeNaturalResponse: '"I respect your effort. Let’s fix the workflow so you don’t have to work 12 hours to hit the standard."',
          skillDevelopment: {
            skill: 'Effort Validation & Outcome Calibration',
            practicalExercise: 'Praise dedication first, then diagnose the operational bottleneck that causes failure.'
          },
          scoreIndicator: {
            emotionalRegulation: 97,
            socialAwareness: 98,
            strategicThinking: 96,
            assertiveness: 94
          }
        }
      },
      {
        id: 'opt-25c',
        label: 'C',
        text: 'Bluntly tell them: "Effort doesn’t matter, only results matter. Fix your tests or we will find someone who can."',
        intent: 'Brutal, heartless intimidation',
        feedback: {
          situationAnalysis: 'Crushing an already exhausted junior who is putting in 12 hours destroys morale and guarantees they will make more errors or quit.',
          decisionReview: {
            accomplished: 'Delivered an ultimatum.',
            strengths: ['Directness'],
            risks: ['Triggers panic, burnout, and immediate resignation', 'Paints you as a toxic manager']
          },
          perspectiveCheck: {
            otherInterpretation: 'Samir feels exploited and hopeless.',
            missingInformation: 'None.'
          },
          consequences: {
            shortTerm: 'Samir breaks down in tears or disengages.',
            longTerm: 'High team turnover and toxic culture.',
            tradeoffs: 'Cruel and inefficient.'
          },
          alternativeNaturalResponse: '"True leadership coaches people to high standards; it does not simply threaten them."'
        } as any
      },
      {
        id: 'opt-25d',
        label: 'D',
        text: 'Reassign all of Samir’s tickets to yourself without explaining why.',
        intent: 'Passive aggressive exclusion',
        feedback: {
          situationAnalysis: 'Taking away work without coaching leaves the employee confused, isolated, and resentful.',
          decisionReview: {
            accomplished: 'Secured the code.',
            strengths: ['None'],
            risks: ['Increases your workload', 'Stunts junior engineer development']
          },
          perspectiveCheck: {
            otherInterpretation: 'Samir realizes he is being pushed out quietly.',
            missingInformation: 'None.'
          },
          consequences: {
            shortTerm: 'You are overworked.',
            longTerm: 'Failed management.',
            tradeoffs: 'Terrible.'
          },
          alternativeNaturalResponse: '"Coach first; redistribute only if coaching fails over time."'
        } as any
      }
    ]
  },

  // 026
  {
    id: 'sc-026',
    number: '026',
    title: 'The Emotional Safe Harbor',
    category: 'digital-social',
    difficulty: 2,
    setting: 'Campus Courtyard Bench / Quiet Park',
    context: 'A peer who is usually cheerful sits beside you in tears, overwhelmed by a family illness and academic deadlines. They are sobbing and struggling to breathe.',
    characterDialogue: '"Everything is falling apart all at once and I don’t know what to do..."',
    dialogueSpeaker: 'Avery (Peer)',
    estimatedDuration: '3 min',
    skillTags: ['Empathetic Listening', 'Space Holding', 'Fix-It Impulse Inhibition', 'Grounding Presence'],
    learningObjectives: [
      'Inhibit the masculine/analytical urge to offer immediate 5-step rational solutions.',
      'Provide grounded, patient physiological presence for emotional co-regulation.',
      'Allow the person to stabilize before introducing logistical problem-solving.'
    ],
    reflectionPrompt: 'When someone cries in front of you, is your first instinct to hand them a spreadsheet of solutions, or sit quietly beside them?',
    options: [
      {
        id: 'opt-26a',
        label: 'A',
        text: 'Immediately start listing logistical tasks: "Okay, stop crying. First, write an email to the Dean. Second, drop Chem 101. Third, make a calendar checklist."',
        intent: 'Analytical premature solutionizing',
        feedback: {
          situationAnalysis: 'When someone is in acute emotional distress, their prefrontal cortex is offline. Demanding that they execute analytical checklists makes them feel unheard and overwhelmed.',
          decisionReview: {
            accomplished: 'Offered logical tasks.',
            strengths: ['Logical advice'],
            risks: ['Invalidates acute grief', 'Causes them to feel defective for feeling overwhelmed']
          },
          perspectiveCheck: {
            otherInterpretation: 'Avery: "They don’t care about my pain; they just want me to stop being messy and inconvenient."',
            missingInformation: 'What Avery actually needs right now (emotional safety).'
          },
          consequences: {
            shortTerm: 'Avery wipes their eyes and pulls away, feeling isolated.',
            longTerm: 'They stop coming to you when they are vulnerable.',
            tradeoffs: 'Sacrifices connection for premature efficiency.'
          },
          alternativeNaturalResponse: '"I’m right here. Take a breath. You don’t have to figure anything out this second."'
        } as any
      },
      {
        id: 'opt-26b',
        label: 'B',
        text: 'Offer quiet, grounded presence without rushing: Hand them a tissue, sit beside them in supportive silence, take a slow grounding breath, and say gently: "Take all the time you need. I’m right here with you. You don’t have to solve anything right this minute."',
        intent: 'Grounded physiological holding and presence',
        feedback: {
          situationAnalysis: 'Allowing the emotional storm to crest while offering safe, calm presence helps their nervous system down-regulate naturally. Solutions come after biological stabilization.',
          decisionReview: {
            accomplished: 'Provided psychological safety, regulated emotional temperature, and built profound trust.',
            strengths: ['High emotional empathy', 'No pressure', 'Patient somatic grounding'],
            risks: ['Requires being comfortable with someone else’s tears']
          },
          perspectiveCheck: {
            otherInterpretation: 'Avery feels deeply comforted: "I am safe here; I don’t have to pretend to be strong."',
            missingInformation: 'None.'
          },
          consequences: {
            shortTerm: 'Avery’s breathing slows down; emotional release occurs.',
            longTerm: 'An unbreakable bond of trust is forged.',
            tradeoffs: 'Takes 10 minutes of patient stillness.'
          },
          alternativeNaturalResponse: '"I’m here. Breathe. We will handle the logistics together once you feel ready."',
          skillDevelopment: {
            skill: 'The Holding Pause',
            practicalExercise: 'When someone is crying, never give advice until their breathing has slowed and they ask: "What should I do?"'
          },
          scoreIndicator: {
            emotionalRegulation: 99,
            socialAwareness: 99,
            strategicThinking: 95,
            assertiveness: 90
          }
        }
      },
      {
        id: 'opt-26c',
        label: 'C',
        text: 'Tell them: "Look on the bright side, at least you have your health! Things could be way worse!"',
        intent: 'Toxic positivity',
        feedback: {
          situationAnalysis: 'Toxic positivity minimizes genuine suffering and makes the grieving person feel guilty for experiencing sadness.',
          decisionReview: {
            accomplished: 'Attempted cheerleading.',
            strengths: ['None'],
            risks: ['Deeply invalidating', 'Shames the sufferer']
          },
          perspectiveCheck: {
            otherInterpretation: 'Avery feels misunderstood and belittled.',
            missingInformation: 'None.'
          },
          consequences: {
            shortTerm: 'Avery shuts down.',
            longTerm: 'Damages friendship.',
            tradeoffs: 'Avoids discomfort by inflicting platitudes.'
          },
          alternativeNaturalResponse: '"Never use ’at least’ with someone in acute pain."'
        } as any
      },
      {
        id: 'opt-26d',
        label: 'D',
        text: 'Get awkward, say you forgot an appointment, and walk away quickly.',
        intent: 'Emotional panic and escape',
        feedback: {
          situationAnalysis: 'Fleeing someone’s tears communicates that their vulnerability is repulsive or terrifying to you.',
          decisionReview: {
            accomplished: 'Escaped the situation.',
            strengths: ['None'],
            risks: ['Abandons a peer in crisis', 'Leaves them feeling worthless']
          },
          perspectiveCheck: {
            otherInterpretation: 'Avery concludes that you are a fair-weather friend.',
            missingInformation: 'None.'
          },
          consequences: {
            shortTerm: 'Avery cries alone.',
            longTerm: 'Friendship irreparably broken.',
            tradeoffs: 'Cowardice.'
          },
          alternativeNaturalResponse: '"Learn to tolerate the discomfort of someone else’s emotions."'
        } as any
      }
    ]
  },

  // 027
  {
    id: 'sc-027',
    number: '027',
    title: 'The Budget Showdown',
    category: 'digital-social',
    difficulty: 4,
    setting: 'Resource Allocation Boardroom',
    context: 'The engineering division has \$100k in unallocated GPU computing credits. Both your machine learning pipeline and a rival squad’s recommendation engine desperately need the full quota to hit quarterly milestones.',
    characterDialogue: '"Our recommendation engine drives direct revenue today. Your model is just research speculation. The budget should come 100% to my team."',
    dialogueSpeaker: 'Karim (Rival Lead)',
    estimatedDuration: '4 min',
    skillTags: ['Principled Negotiation', 'Incentive Alignment', 'Value Creation', 'Win-Win Framing'],
    learningObjectives: [
      'Resist zero-sum tug-of-war framing in resource negotiations.',
      'Architect a shared allocation model that ties both squads to mutual metrics.',
      'Secure essential resources without creating a permanent organizational enemy.'
    ],
    reflectionPrompt: 'When resources are scarce, do you try to take 100% of the pie or find a creative way to expand and share it?',
    options: [
      {
        id: 'opt-27a',
        label: 'A',
        text: 'Attack his team’s credibility: "Your recommendation engine is full of legacy bugs and your churn rate is awful. Giving you credits is throwing money in the trash!"',
        intent: 'Mud-slinging zero-sum attack',
        feedback: {
          situationAnalysis: 'Attacking a colleague’s revenue-generating product turns a technical negotiation into a blood feud in front of executive sponsors.',
          decisionReview: {
            accomplished: 'Made aggressive claims.',
            strengths: ['None'],
            risks: ['Karim fights to the death', 'Executives are disgusted by infighting', 'Both teams may lose the budget']
          },
          perspectiveCheck: {
            otherInterpretation: 'Executives think: "Neither of these leads has the maturity to steward budget responsibly."',
            missingInformation: 'Executive priorities.'
          },
          consequences: {
            shortTerm: 'Tense deadlock.',
            longTerm: 'Karim will block every initiative your team ever launches in the future.',
            tradeoffs: 'Sacrifices cross-squad collaboration for ego.'
          },
          alternativeNaturalResponse: '"Propose a phased allocation tied to milestone verification."'
        } as any
      },
      {
        id: 'opt-27b',
        label: 'B',
        text: 'Propose a structured, phased co-utilization model: "Karim, your team drives current revenue and our model unlocks next-quarter margin—leadership needs both. A 100-0 split leaves one critical vector crippled. Let’s do 60k to your team for immediate production scaling, and 40k to our pipeline for the Phase 1 training run. If our benchmark boosts conversion by 15% in week 6, we integrate the model into your engine and share the revenue credit jointly. That way both teams win and executive targets are met."',
        intent: 'Strategic value creation and aligned incentives',
        feedback: {
          situationAnalysis: 'By recognizing his legitimate current revenue needs while tying your model directly to boosting his team’s metrics with shared credit, you transform a rival into a joint beneficiary.',
          decisionReview: {
            accomplished: 'Secured critical computing resources, aligned mutual incentives, and preserved organizational harmony.',
            strengths: ['Mastery of negotiation', 'Creates value out of a false dilemma', 'Executive-ready compromise'],
            risks: ['Requires hitting the 15% conversion milestone']
          },
          perspectiveCheck: {
            otherInterpretation: 'Karim realizes he gets immediate resources PLUS an upside model upgrade that makes his department look brilliant.',
            missingInformation: 'None.'
          },
          consequences: {
            shortTerm: 'Karim signs off on the split with a handshake; board approves.',
            longTerm: 'You build a powerful cross-functional alliance across divisions.',
            tradeoffs: 'Settles for 40k credits now to secure a durable future pipeline.'
          },
          alternativeNaturalResponse: '"Let’s split the allocation dynamically based on verifiable milestone velocity."',
          skillDevelopment: {
            skill: 'Incentive Synthesis',
            practicalExercise: 'Never ask a rival to sacrifice for your goal; show how your goal supercharges their bonus.'
          },
          scoreIndicator: {
            emotionalRegulation: 98,
            socialAwareness: 99,
            strategicThinking: 99,
            assertiveness: 95
          }
        }
      },
      {
        id: 'opt-27c',
        label: 'C',
        text: 'Surrender completely: "You’re right, Karim. Take all \$100k. My team will just cancel our project."',
        intent: 'Martyred capitulation',
        feedback: {
          situationAnalysis: 'Surrendering resources without a fight demotivates your own team and signals that you cannot advocate for your people.',
          decisionReview: {
            accomplished: 'Avoided debate.',
            strengths: ['None'],
            risks: ['Your team loses morale', 'Your project gets canceled', 'Karim views you as weak']
          },
          perspectiveCheck: {
            otherInterpretation: 'Your engineers wonder why their lead won’t fight for their work.',
            missingInformation: 'None.'
          },
          consequences: {
            shortTerm: 'Your team is demoralized.',
            longTerm: 'Loss of leadership standing.',
            tradeoffs: 'Complete failure of leadership responsibility.'
          },
          alternativeNaturalResponse: '"Always advocate vigorously and creatively for your team’s critical assets."'
        } as any
      },
      {
        id: 'opt-27d',
        label: 'D',
        text: 'Flip a coin in front of everyone to decide who gets the \$100k.',
        intent: 'Abdication of judgment',
        feedback: {
          situationAnalysis: 'Treating a six-figure capital allocation like a gambling game destroys your credibility with executive management.',
          decisionReview: {
            accomplished: 'Treated serious budget like a game.',
            strengths: ['None'],
            risks: ['Executives view you as unserious and incompetent']
          },
          perspectiveCheck: {
            otherInterpretation: 'Board members are appalled.',
            missingInformation: 'None.'
          },
          consequences: {
            shortTerm: 'Loss of budget authority.',
            longTerm: 'Removed from strategic councils.',
            tradeoffs: 'Absurd.'
          },
          alternativeNaturalResponse: '"Make data-driven allocation proposals."'
        } as any
      }
    ]
  },

  // 028
  {
    id: 'sc-028',
    number: '028',
    title: 'The Graceful Correction',
    category: 'digital-social',
    difficulty: 3,
    setting: 'Company Town Hall / Q&A',
    context: 'During an all-company presentation, an influential lead researcher cites a legal compliance statute incorrectly, which, if enacted, could expose the company to significant regulatory penalties. Correcting them in front of 200 people could humiliate them.',
    characterDialogue: '"And under the new GDPR amendments, we are legally required to retain user geolocation logs for a minimum of five years."',
    dialogueSpeaker: 'Dr. Aris (Lead Researcher)',
    estimatedDuration: '4 min',
    skillTags: ['Public Tact', 'Dignity Preservation', 'Corrective Framing', 'Compliance Safeguarding'],
    learningObjectives: [
      'Correct critical misinformation without publicly shaming an expert.',
      'Use "we" and updated regulatory framing to preserve their social status.',
      'Protect the organization from legal and factual hazards.'
    ],
    reflectionPrompt: 'When an expert makes an objective error in public, do you jump to prove them wrong or protect their dignity while fixing the fact?',
    options: [
      {
        id: 'opt-28a',
        label: 'A',
        text: 'Shout from the audience: "Wrong! That’s completely false, Dr. Aris! GDPR bans retaining geolocation for five years! Don’t listen to him!"',
        intent: 'Public intellectual ambush',
        feedback: {
          situationAnalysis: 'Publicly humiliating an influential researcher destroys their dignity and triggers intense interpersonal hostility.',
          decisionReview: {
            accomplished: 'Corrected the law with maximum social violence.',
            strengths: ['Factual truth'],
            risks: ['Creates a lifelong enemy of Dr. Aris', 'Makes you look arrogant and disruptive']
          },
          perspectiveCheck: {
            otherInterpretation: 'Dr. Aris is humiliated and furious; the audience cringes at your rudeness.',
            missingInformation: 'None.'
          },
          consequences: {
            shortTerm: 'Town hall turns into an awkward spectacle.',
            longTerm: 'Dr. Aris actively opposes your career at every opportunity.',
            tradeoffs: 'Sacrifices relational capital to show off knowledge.'
          },
          alternativeNaturalResponse: '"Frame the update as a recent statutory change that arrived after the slides were finalized."'
        } as any
      },
      {
        id: 'opt-28b',
        label: 'B',
        text: 'Raise your hand during Q&A and frame the correction as a very recent regulatory update: "Dr. Aris, thank you for the comprehensive overview. Building on that data point—the European privacy board actually issued an emergency clarification last Tuesday stating that geolocation falls under the 90-day purge requirement rather than the 5-year retention window. I know the legal team just reviewed it yesterday. How does that updated timeline impact our storage roadmap?"',
        intent: 'Preserves expert dignity while correcting critical facts',
        feedback: {
          situationAnalysis: 'Framing the correction as an "updated emergency clarification from last Tuesday that just arrived" allows Dr. Aris to save face completely—it implies his knowledge was accurate until yesterday! The correct law is shared, and the company is protected.',
          decisionReview: {
            accomplished: 'Corrected critical legal compliance, protected the company, and elevated Dr. Aris’s dignity.',
            strengths: ['Peak diplomatic tact', 'Zero embarrassment', 'Protects legal compliance effortlessly'],
            risks: ['None']
          },
          perspectiveCheck: {
            otherInterpretation: 'Dr. Aris is grateful you framed it as an update rather than an error: "Thank you for sharing that recent update! Let’s adjust our roadmap accordingly."',
            missingInformation: 'None.'
          },
          consequences: {
            shortTerm: 'Roadmap is safely adjusted without drama.',
            longTerm: 'Dr. Aris appreciates your brilliance and respectful tact.',
            tradeoffs: 'None.'
          },
          alternativeNaturalResponse: '"A recent regulatory bulletin just updated that clause last week."',
          skillDevelopment: {
            skill: 'The "Recent Update" Shield',
            practicalExercise: 'When correcting an authority in public, frame the truth as fresh data that arrived after their preparation.'
          },
          scoreIndicator: {
            emotionalRegulation: 98,
            socialAwareness: 99,
            strategicThinking: 99,
            assertiveness: 94
          }
        }
      },
      {
        id: 'opt-28c',
        label: 'C',
        text: 'Say nothing and let the company store user locations illegally for 5 years.',
        intent: 'Avoidant negligence',
        feedback: {
          situationAnalysis: 'Staying silent when millions of dollars in regulatory fines are on the line is an abdication of professional duty.',
          decisionReview: {
            accomplished: 'Avoided speaking in public.',
            strengths: ['None'],
            risks: ['Severe legal fines for the company', 'Eventual scandal']
          },
          perspectiveCheck: {
            otherInterpretation: 'Company will suffer catastrophic penalties later.',
            missingInformation: 'None.'
          },
          consequences: {
            shortTerm: 'Quiet town hall.',
            longTerm: 'Regulatory audit disaster.',
            tradeoffs: 'Cowardice.'
          },
          alternativeNaturalResponse: '"Always ensure legal compliance is accurate."'
        } as any
      },
      {
        id: 'opt-28d',
        label: 'D',
        text: 'Snicker loudly to your neighbor and whisper that Aris is an idiot.',
        intent: 'Petty mockery',
        feedback: {
          situationAnalysis: 'Whispering insults during a town hall marks you as a juvenile backbiter.',
          decisionReview: {
            accomplished: 'Gossiped.',
            strengths: ['None'],
            risks: ['Colleagues find your behavior childish and untrustworthy']
          },
          perspectiveCheck: {
            otherInterpretation: 'Your neighbor feels uncomfortable being dragged into your gossip.',
            missingInformation: 'None.'
          },
          consequences: {
            shortTerm: 'Loss of respect.',
            longTerm: 'Low reputation.',
            tradeoffs: 'Cheap malice.'
          },
          alternativeNaturalResponse: '"Speak with diplomatic integrity in the open."'
        } as any
      }
    ]
  },

  // 029
  {
    id: 'sc-029',
    number: '029',
    title: 'The Misconstrued Humor',
    category: 'leadership-teamwork',
    difficulty: 2,
    setting: 'Team Slack Channel / General Chat',
    context: 'You posted a deadpan, sarcastic joke about automated unit tests. A newly hired developer took it as a personal insult against their first pull request and is now quiet and demoralized.',
    characterDialogue: '"Sorry my pull request was so bad. I didn’t realize my code was considered a joke here."',
    dialogueSpeaker: 'Leila (New Junior Dev)',
    estimatedDuration: '3 min',
    skillTags: ['Prompt Clarification', 'Humility', 'Psychological Repair', 'Clear Communication'],
    learningObjectives: [
      'Recognize how sarcastic text humor can alienate newcomers.',
      'Step forward immediately to clarify intent and apologize for the misunderstanding.',
      'Rebuild safety and confidence for vulnerable junior team members.'
    ],
    reflectionPrompt: 'When someone misunderstands your dry humor, do you tell them to "get a sense of humor" or take responsibility for the ambiguity?',
    options: [
      {
        id: 'opt-29a',
        label: 'A',
        text: 'Tell them they need thicker skin: "Relax Leila, it was a joke. You need to develop a thicker skin if you’re going to survive in tech."',
        intent: 'Callous victim-blaming',
        feedback: {
          situationAnalysis: 'Telling a new hire to "get thicker skin" when your ambiguous joke hurt them cements an unwelcoming, hostile environment and guarantees they will stay isolated.',
          decisionReview: {
            accomplished: 'Defended your joke.',
            strengths: ['None'],
            risks: ['Leila feels alienated and intimidated', 'Senior management reprimands you for poor onboarding empathy']
          },
          perspectiveCheck: {
            otherInterpretation: 'Leila thinks: "This company is full of toxic bullies. I made a mistake coming here."',
            missingInformation: 'Leila’s background and previous workplace culture.'
          },
          consequences: {
            shortTerm: 'Leila checks out mentally.',
            longTerm: 'Leila resigns within 3 months; team loses talent.',
            tradeoffs: 'Defends pride at the cost of human retention.'
          },
          alternativeNaturalResponse: '"I apologize Leila, that was a general joke about unit tests and absolutely not about your PR. Your PR was great."'
        } as any
      },
      {
        id: 'opt-29b',
        label: 'B',
        text: 'Take immediate responsibility and clear the record publicly and privately: "Leila, I am so glad you mentioned this. My comment was a generic joke about the library itself, but reading it back, I see how it sounded like it was about your work. That was completely my fault for poor phrasing. Your pull request was clean, thoughtful, and approved. I’m really glad you’re on the team, and I apologize for the poor timing of my comment."',
        intent: 'Generous, humble clarification and affirmation',
        feedback: {
          situationAnalysis: 'Taking full ownership of the communicative ambiguity without being defensive, validating her contribution, and affirming her place on the team instantly repairs the psychological injury.',
          decisionReview: {
            accomplished: 'Restored psychological safety, took accountability for ambiguous communication, and affirmed a new teammate.',
            strengths: ['Elite emotional leadership', 'Humility and grace', 'Prevents toxic misunderstandings'],
            risks: ['None']
          },
          perspectiveCheck: {
            otherInterpretation: 'Leila feels a massive wave of relief: "They weren’t making fun of me after all! And they actually apologized like a true leader."',
            missingInformation: 'None.'
          },
          consequences: {
            shortTerm: 'Tension dissolves; Leila resumes active contributions.',
            longTerm: 'Leila views you as a trusted mentor and loyal teammate.',
            tradeoffs: 'Swallows a tiny bit of comedic ego.'
          },
          alternativeNaturalResponse: '"That was my poor phrasing. Your PR was solid and I’m sorry for the ambiguity."',
          skillDevelopment: {
            skill: 'Ambiguity Stewardship',
            practicalExercise: 'The speaker is always responsible for the listener’s reception in asynchronous text.'
          },
          scoreIndicator: {
            emotionalRegulation: 98,
            socialAwareness: 99,
            strategicThinking: 97,
            assertiveness: 92
          }
        }
      },
      {
        id: 'opt-29c',
        label: 'C',
        text: 'Delete your joke quietly and never talk to Leila again to avoid awkwardness.',
        intent: 'Avoidant deletion',
        feedback: {
          situationAnalysis: 'Deleting the joke without an explanation leaves Leila assuming that you were indeed making fun of her and are now hiding the evidence.',
          decisionReview: {
            accomplished: 'Removed the message.',
            strengths: ['None'],
            risks: ['Leaves the relational wound unhealed and festering']
          },
          perspectiveCheck: {
            otherInterpretation: 'Leila is certain you hate her code.',
            missingInformation: 'None.'
          },
          consequences: {
            shortTerm: 'Lingering awkwardness.',
            longTerm: 'Permanent distance between teammates.',
            tradeoffs: 'Avoids 30 seconds of typing an apology.'
          },
          alternativeNaturalResponse: '"Always follow up with explicit reassurance."'
        } as any
      },
      {
        id: 'opt-29d',
        label: 'D',
        text: 'Make another sarcastic joke about people being overly sensitive.',
        intent: 'Malicious doubling down',
        feedback: {
          situationAnalysis: 'Doubling down on cruelty is active harassment.',
          decisionReview: {
            accomplished: 'Deepened hostility.',
            strengths: ['None'],
            risks: ['HR complaint and formal warning']
          },
          perspectiveCheck: {
            otherInterpretation: 'Team views you as a workplace hazard.',
            missingInformation: 'None.'
          },
          consequences: {
            shortTerm: 'HR investigation.',
            longTerm: 'Disciplinary probation.',
            tradeoffs: 'Destructive.'
          },
          alternativeNaturalResponse: '"Show basic human empathy."'
        } as any
      }
    ]
  },

  // 030
  {
    id: 'sc-030',
    number: '030',
    title: 'The Bridge Rebuilder',
    category: 'leadership-teamwork',
    difficulty: 4,
    setting: 'Campus Coffee Commons',
    context: 'Six months ago, you and a talented collaborator had a bitter fallout over author order and stopped speaking. A new major research grant requires both of your distinct skillsets to win. You want to initiate reconciliation.',
    characterDialogue: '"I see you’re here. If this is about the NSF grant, don’t bother—I remember exactly what happened in October."',
    dialogueSpeaker: 'Evelyn (Former Collaborator)',
    estimatedDuration: '4 min',
    skillTags: ['Relational Repair', 'Ego Disarmament', 'Forward-Facing Negotiation', 'Reconciliation'],
    learningObjectives: [
      'Reopen dialogue after a bitter fallout without rehashing past grievance loops.',
      'Acknowledge personal past mistakes while preserving dignity.',
      'Structure new partnerships with explicit safeguards against previous friction.'
    ],
    reflectionPrompt: 'When you need to repair a damaged bridge, do you insist on proving who was right, or focus on future collaboration?',
    options: [
      {
        id: 'opt-30a',
        label: 'A',
        text: 'Rehash the old argument: "October was 100% your fault because you didn’t finish the bibliography! But let’s put that aside for money."',
        intent: 'Relitigating old wounds',
        feedback: {
          situationAnalysis: 'Re-igniting the past grievance immediately closes any possibility of reconciliation.',
          decisionReview: {
            accomplished: 'Reminded her of why she disliked you.',
            strengths: ['None'],
            risks: ['Evelyn walks away immediately; grant opportunity lost']
          },
          perspectiveCheck: {
            otherInterpretation: 'Evelyn thinks: "They haven’t changed a bit. Still arrogant and accusatory."',
            missingInformation: 'None.'
          },
          consequences: {
            shortTerm: 'Evelyn walks out.',
            longTerm: 'Grant is lost to another university.',
            tradeoffs: 'Sacrifices a career-defining grant to argue about old bibliographies.'
          },
          alternativeNaturalResponse: '"October didn’t go the way either of us wanted, and I own my part in that breakdown."'
        } as any
      },
      {
        id: 'opt-30b',
        label: 'B',
        text: 'Acknowledge your share of the breakdown, focus on forward alignment, and offer structured guardrails: "Evelyn, you’re right to remember October. The way our communication broke down back then was on both of us, and I personally regret not addressing the author order with more transparency early on. I respect your work too much to pretend that didn’t happen. If we touch this grant, we write down explicit, legally binding author agreements and milestones before submitting a single page. If you aren’t open to it, I respect that completely. But if you are, I believe our combined research can win this."',
        intent: 'Radical accountability and structural safeguard presentation',
        feedback: {
          situationAnalysis: 'Acknowledging your share of the past breakdown without excuses, showing respect for her boundary, and proposing objective upfront contractual safeguards to prevent past friction creates a realistic, dignified bridge to reconciliation.',
          decisionReview: {
            accomplished: 'Lowered emotional guard, validated legitimate caution, and proposed verifiable structural protections.',
            strengths: ['High psychological maturity', 'Replaces vague trust with written protocols', 'Restores professional respect'],
            risks: ['Evelyn may still need a few days to decide']
          },
          perspectiveCheck: {
            otherInterpretation: 'Evelyn sees real growth and realizes: "They aren’t trying to trick me; they are offering upfront written terms. The grant is huge for my career too."',
            missingInformation: 'Evelyn’s current grant pipeline.'
          },
          consequences: {
            shortTerm: 'Evelyn pauses, sits down, and agrees to review the initial proposal.',
            longTerm: 'You win the \$500k research grant together; a mature professional alliance is rebuilt.',
            tradeoffs: 'Requires humility and conceding upfront guarantees.'
          },
          alternativeNaturalResponse: '"I own my part in our previous breakdown. Let’s establish written terms so neither of us is exposed."',
          skillDevelopment: {
            skill: 'Contractual Reconciliation',
            practicalExercise: 'Don’t ask for emotional forgiveness; offer institutional guardrails that make repeat failures impossible.'
          },
          scoreIndicator: {
            emotionalRegulation: 99,
            socialAwareness: 98,
            strategicThinking: 99,
            assertiveness: 95
          }
        }
      },
      {
        id: 'opt-30c',
        label: 'C',
        text: 'Beg and grovel, saying you were evil and she was an angel.',
        intent: 'Dishonest groveling',
        feedback: {
          situationAnalysis: 'Groveling looks insincere, manipulative, and desperate.',
          decisionReview: {
            accomplished: 'Debased yourself.',
            strengths: ['None'],
            risks: ['Signals dishonesty; people distrust extreme groveling']
          },
          perspectiveCheck: {
            otherInterpretation: 'Evelyn finds the desperation suspicious.',
            missingInformation: 'None.'
          },
          consequences: {
            shortTerm: 'Rejection.',
            longTerm: 'Loss of self-respect.',
            tradeoffs: 'Zero.'
          },
          alternativeNaturalResponse: '"Speak with calm, grounded accountability."'
        } as any
      },
      {
        id: 'opt-30d',
        label: 'D',
        text: 'Threaten to tell the Dean she refuses to collaborate on institutional grants.',
        intent: 'Coercive institutional blackmail',
        feedback: {
          situationAnalysis: 'Attempting to force collaboration via administrative threats creates an adversary who will actively sabotage the grant.',
          decisionReview: {
            accomplished: 'Threatened a peer.',
            strengths: ['None'],
            risks: ['Academic conduct complaint', 'Guaranteed collaboration failure']
          },
          perspectiveCheck: {
            otherInterpretation: 'Evelyn will fight you through institutional tribunals.',
            missingInformation: 'None.'
          },
          consequences: {
            shortTerm: 'Formal dispute.',
            longTerm: 'Disrepute.',
            tradeoffs: 'Madness.'
          },
          alternativeNaturalResponse: '"Partnerships cannot be enforced at gunpoint."'
        } as any
      }
    ]
  },

  // 031
  {
    id: 'sc-031',
    number: '031',
    title: 'The 24-Hour Rule',
    category: 'leadership-teamwork',
    difficulty: 3,
    setting: 'Personal Inbox / Saturday Morning',
    context: 'You open your email to find a scathing, bad-faith attack from an insecure project rival, copying five department managers, accusing you of "undermining team cohesion". Adrenaline surges into your chest and your fingers are already hovering over the keyboard to write a blistering 10-paragraph reply.',
    characterDialogue: '"Subject: Formal Concern regarding unprofessional conduct and sabotage..."',
    dialogueSpeaker: 'Inbound Executive Email',
    estimatedDuration: '4 min',
    skillTags: ['Adrenaline Regulation', 'The 24-Hour Rule', 'Draft Incineration', 'Strategic Timing'],
    learningObjectives: [
      'Resist the acute neurological adrenaline surge that demands instant counter-strikes.',
      'Implement the mandatory 24-hour cooling protocol on incendiary communications.',
      'Craft surgical, audit-proof replies that turn the attacker’s aggression against them.'
    ],
    reflectionPrompt: 'When you are furious over an email, can you step away for 24 hours, or must you hit send right now?',
    options: [
      {
        id: 'opt-31a',
        label: 'A',
        text: 'Type out the blistering rebuttal right now and hit "Reply All" while your pulse is pounding.',
        intent: 'Acute adrenaline discharge',
        feedback: {
          situationAnalysis: 'Hitting Reply All in a state of autonomic nervous arousal guarantees you will include emotional phrasing that leadership will use to declare "both sides are at fault".',
          decisionReview: {
            accomplished: 'Discharged adrenaline.',
            strengths: ['Felt good for 30 seconds'],
            risks: ['Leadership sees two volatile children bickering on their weekend', 'Leaves permanent written evidence of emotional reactivity']
          },
          perspectiveCheck: {
            otherInterpretation: 'Management mutters: "Why are these two blowing up our inboxes on Saturday morning? Both of them are exhausting."',
            missingInformation: 'How managers read Saturday flame wars.'
          },
          consequences: {
            shortTerm: 'Weekend ruined for 7 people.',
            longTerm: 'You forfeit the moral and executive high ground.',
            tradeoffs: 'Exchanges executive credibility for momentary catharsis.'
          },
          alternativeNaturalResponse: '"Draft it in a blank text document. Close it. Wait 24 hours. Edit with cold surgical logic."'
        } as any
      },
      {
        id: 'opt-31b',
        label: 'B',
        text: 'Enforce the strict 24-Hour Rule: Close the email app, go for a rigorous run or workout to burn off cortisol, draft the response in a local offline notes file without recipient fields, and wait until Sunday afternoon to review with cold detachment.',
        intent: 'Disciplined neurological quarantine and surgical response preparation',
        feedback: {
          situationAnalysis: 'Quarantining incendiary emails for 24 hours allows autonomic adrenaline and cortisol levels to clear, restoring prefrontal executive function. The resulting response will be concise, fact-based, and lethal to the attacker’s bad-faith premise.',
          decisionReview: {
            accomplished: 'Protected executive poise, prevented reckless mistakes, and prepared an unassailable evidentiary response.',
            strengths: ['Elite emotional regulation', 'Refuses to let an adversary dictate your weekend tempo', 'Audit-proof professionalism'],
            risks: ['Requires immense internal discipline to bear the physical agitation for a few hours']
          },
          perspectiveCheck: {
            otherInterpretation: 'The attacker sits anxiously refreshing their inbox waiting for an angry reply that never comes. By Sunday, they are doubting their own aggressive move.',
            missingInformation: 'None.'
          },
          consequences: {
            shortTerm: 'Your heart rate normalizes; your weekend is preserved.',
            longTerm: 'Your Monday reply is so clean and factual that leadership formally reprimands the attacker for wasting executive time.',
            tradeoffs: 'Requires swallowing immediate anger.'
          },
          alternativeNaturalResponse: '"Never send an email when your heart rate exceeds 90 BPM."',
          skillDevelopment: {
            skill: 'The 24-Hour Neurological Quarantine',
            practicalExercise: 'When an email spikes your adrenaline, remove the recipient addresses immediately and lock the file for 24 hours.'
          },
          scoreIndicator: {
            emotionalRegulation: 99,
            socialAwareness: 97,
            strategicThinking: 99,
            assertiveness: 96
          }
        }
      },
      {
        id: 'opt-31c',
        label: 'C',
        text: 'Call the rival on their personal phone and scream at them.',
        intent: 'Direct verbal assault',
        feedback: {
          situationAnalysis: 'Calling someone to scream at them can be recorded and used as grounds for immediate HR termination.',
          decisionReview: {
            accomplished: 'Escalated to verbal harassment.',
            strengths: ['None'],
            risks: ['Call is recorded; immediate firing for harassment']
          },
          perspectiveCheck: {
            otherInterpretation: 'The rival records the audio and presents it to HR on Monday morning.',
            missingInformation: 'State recording consent laws.'
          },
          consequences: {
            shortTerm: 'Adrenaline crash.',
            longTerm: 'Termination for workplace harassment.',
            tradeoffs: 'Complete self-destruction.'
          },
          alternativeNaturalResponse: '"Never initiate telephone calls while in an explosive emotional state."'
        } as any
      },
      {
        id: 'opt-31d',
        label: 'D',
        text: 'Forward the email to your personal attorney.',
        intent: 'Premature legal escalation',
        feedback: {
          situationAnalysis: 'Hiring lawyers over a typical workplace political email wastes thousands of dollars and marks you as litigious.',
          decisionReview: {
            accomplished: 'Spent legal fees.',
            strengths: ['None'],
            risks: ['Lawyer tells you there is no legal case here; wasted money']
          },
          perspectiveCheck: {
            otherInterpretation: 'Company views you as a legal liability.',
            missingInformation: 'None.'
          },
          consequences: {
            shortTerm: 'Legal bills.',
            longTerm: 'Ostracization.',
            tradeoffs: 'Excessive.'
          },
          alternativeNaturalResponse: '"Manage workplace political friction with executive operational mastery."'
        } as any
      }
    ]
  },

  // 032
  {
    id: 'sc-032',
    number: '032',
    title: 'The Pattern Audit',
    category: 'leadership-teamwork',
    difficulty: 5,
    setting: 'Sprint Retrospective & Team Review',
    context: 'A critical collaborator fails to deliver their milestone for the third time in two months, each time offering an elaborate personal emergency excuse (first a car breakdown, then a sick pet, now a broken router). You must determine whether this is tragic misfortune or a systemic pattern of exploitation.',
    characterDialogue: '"I swear, my internet cable was cut by city construction this morning! I know it looks bad, but you know I’d never let the team down on purpose!"',
    dialogueSpeaker: 'Julian (Sprint Contributor)',
    estimatedDuration: '5 min',
    skillTags: ['Pattern Recognition', 'Empathetic Accountability', 'Objective Baselining', 'Structural Consequences'],
    learningObjectives: [
      'Differentiate between an isolated emergency fluke and an entrenched behavioral pattern.',
      'Hold compassionate boundaries that refuse to accept repeated excuses as valid operational strategy.',
      'Transition a collaborator from discretionary trust to strict milestone verification.'
    ],
    reflectionPrompt: 'When someone repeatedly has emergencies that derail your projects, how many chances do you give before changing the system?',
    options: [
      {
        id: 'opt-32a',
        label: 'A',
        text: 'Accept the third excuse completely and tell them: "Oh no, poor you! Don’t worry, take all the time you need, we will cover for you again!"',
        intent: 'Chronic enabling and codependency',
        feedback: {
          situationAnalysis: 'Continuing to accept endless novel emergencies signals that deadlines are optional and trains the contributor to treat your team as an infinite safety net.',
          decisionReview: {
            accomplished: 'Avoided setting a boundary.',
            strengths: ['Appears endlessly kind'],
            risks: ['Sprint fails repeatedly', 'High-performing teammates burn out covering their slack', 'Julian never changes']
          },
          perspectiveCheck: {
            otherInterpretation: 'Julian learns that inventing dramatic emergencies guarantees total absolution from work responsibilities.',
            missingInformation: 'Whether the router was actually cut.'
          },
          consequences: {
            shortTerm: 'Team shoulders the extra burden again.',
            longTerm: 'High-performers leave the team in frustration.',
            tradeoffs: 'Enables incompetence at the expense of your best workers.'
          },
          alternativeNaturalResponse: '"Regardless of the cause, we cannot have single-point-of-failure dependencies on these milestones."'
        } as any
      },
      {
        id: 'opt-32b',
        label: 'B',
        text: 'Separate sympathy from operational structure: "Julian, I’m sorry about the internet issues, and I hope the city repairs it quickly. However, looking at the data, this is the third sprint in a row where critical deliverables missed their window due to unexpected personal events. Whether it’s bad luck or capacity, our sprint commitments cannot rely on single-point dependencies anymore. Starting today, we are reassigning critical-path architecture tickets off your plate and scoping your role to non-blocking modular tasks with daily check-ins. If you need personal leave to stabilize your life, take it; but if you stay on the sprint, this is the new operating baseline."',
        intent: 'Compassionate pattern recognition with rigorous structural de-risking',
        feedback: {
          situationAnalysis: 'The master move: you do not need to prove whether his excuses are true or lies! It does not matter! The objective operational reality is that his reliability variance is too high for critical-path dependencies. Shifting him to non-blocking tasks protects the team without requiring you to call him a liar.',
          decisionReview: {
            accomplished: 'Protected team deliverables, removed subjective debate over truthfulness, and established objective risk controls.',
            strengths: ['Eliminates endless debates over excuse validity', 'Compassionate yet unbendingly practical', 'Protects other team members from burnout'],
            risks: ['Julian will be unhappy about losing high-visibility tickets']
          },
          perspectiveCheck: {
            otherInterpretation: 'Julian realizes that his excuses can no longer purchase deadline extensions; the structural reality has shifted.',
            missingInformation: 'None.'
          },
          consequences: {
            shortTerm: 'Sprint risks are neutralized; project stays on track.',
            longTerm: 'Julian either shapes up under daily check-ins or voluntarily transitions out.',
            tradeoffs: 'Requires having a difficult, firm managerial conversation.'
          },
          alternativeNaturalResponse: '"I don’t debate the reasons; I must manage the variance. We are restructuring the task dependencies."',
          skillDevelopment: {
            skill: 'Variance-Based De-risking',
            practicalExercise: 'Never debate whether someone’s emergency is genuine. Say: "Regardless of cause, our system cannot absorb this variance."'
          },
          scoreIndicator: {
            emotionalRegulation: 99,
            socialAwareness: 99,
            strategicThinking: 100,
            assertiveness: 99
          }
        }
      },
      {
        id: 'opt-32c',
        label: 'C',
        text: 'Call him a chronic liar in front of the whole sprint retrospective.',
        intent: 'Public humiliation',
        feedback: {
          situationAnalysis: 'Accusing someone of lying when you have no forensic proof creates unnecessary drama and HR liabilities.',
          decisionReview: {
            accomplished: 'Vented suspicion.',
            strengths: ['None'],
            risks: ['Julian files a harassment complaint', 'Team retro becomes toxic']
          },
          perspectiveCheck: {
            otherInterpretation: 'Team feels uncomfortable with public shaming.',
            missingInformation: 'Forensic ISP proof.'
          },
          consequences: {
            shortTerm: 'Hostility in retro.',
            longTerm: 'Damaged team cohesion.',
            tradeoffs: 'Ineffective.'
          },
          alternativeNaturalResponse: '"Focus on the operational pattern, not character assassination."'
        } as any
      },
      {
        id: 'opt-32d',
        label: 'D',
        text: 'Secretly log into his computer to inspect his browser history.',
        intent: 'Illegal surveillance',
        feedback: {
          situationAnalysis: 'Breaching an employee’s machine or privacy is illegal and an immediate firing offense.',
          decisionReview: {
            accomplished: 'Committed privacy violation.',
            strengths: ['None'],
            risks: ['Termination, criminal liability']
          },
          perspectiveCheck: {
            otherInterpretation: 'You are viewed as a reckless rogue.',
            missingInformation: 'None.'
          },
          consequences: {
            shortTerm: 'Fired.',
            longTerm: 'Blacklisted.',
            tradeoffs: 'Catastrophic.'
          },
          alternativeNaturalResponse: '"Always use objective performance management."'
        } as any
      }
    ]
  }
];
