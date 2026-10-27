import { Scenario } from '../../types';

export const SCENARIOS_1_8: Scenario[] = [
  // 001
  {
    id: 'sc-001',
    number: '001',
    title: 'The Public Challenge',
    category: 'social-intelligence',
    difficulty: 1,
    setting: 'University Lecture Hall / Seminar Room',
    context: 'During an open seminar discussion, a vocal classmate abruptly turns in your direction after you share a project proposal. Multiple students turn to look at you, waiting for your response.',
    characterDialogue: '"You always act like you know better than everyone else here. Are you really that arrogant, or just desperate for attention?"',
    dialogueSpeaker: 'Julian (Classmate)',
    estimatedDuration: '4 min',
    skillTags: ['Public Composure', 'De-escalation', 'Frame Control', 'Observation'],
    learningObjectives: [
      'Neutralize a public ad-hominem without becoming defensive.',
      'Maintain status and calmness under peer scrutiny.',
      'Differentiate between private insecurity and public provocation.'
    ],
    reflectionPrompt: 'When attacked in front of others, what internal feeling surfaced first—defensiveness, anger, or an urge to prove yourself?',
    branches: {
      'branch-clarify': {
        id: 'branch-clarify',
        stageTitle: 'Stage 2: Deeper Clarification',
        dialogueSpeaker: 'Julian',
        contextNote: 'Julian blinks, unsettled by your relaxed, unthreatened demeanor. The room is quiet.',
        characterDialogue: '"Well... you didn’t consider the workload on the rest of us when you suggested adding the analytics phase."',
        options: [
          {
            id: 'opt-b1',
            label: 'A',
            text: 'Acknowledge the workload concern directly: "That’s a legitimate constraint. Let’s calibrate the scope so no one is overburdened."',
            intent: 'Validate the real problem beneath the hostile tone',
            feedback: {
              situationAnalysis: 'Julian’s initial personal attack was an inarticulate mask for anxiety about personal workload and competence.',
              decisionReview: {
                accomplished: 'Addressed the underlying logistical friction while maintaining complete composure.',
                strengths: ['Converts hostility into collaborative problem-solving', 'Preserves Julian’s dignity in front of peers'],
                risks: ['None significant; cements your position as a mature leader.']
              },
              perspectiveCheck: {
                otherInterpretation: 'Julian felt intimidated by the ambitious proposal and feared looking inadequate.',
                missingInformation: 'What external deadlines Julian is currently juggling.'
              },
              consequences: {
                shortTerm: 'The group shifts focus immediately to practical workload division.',
                longTerm: 'Julian views you as fair and non-vindictive, reducing future sabotage.',
                tradeoffs: 'Requires ignoring the personal insult completely in the moment.'
              },
              alternativeNaturalResponse: '"That is a valid point on capacity. How would you recommend we stage the rollout?"',
              skillDevelopment: {
                skill: 'Subtext Extraction',
                practicalExercise: 'When someone attacks your character, immediately ask: "What practical anxiety might be causing them pain?"'
              },
              scoreIndicator: {
                emotionalRegulation: 95,
                socialAwareness: 90,
                strategicThinking: 92,
                assertiveness: 88
              }
            }
          },
          {
            id: 'opt-b2',
            label: 'B',
            text: 'Call him out for changing arguments: "So you threw a personal insult just because you were worried about the workload?"',
            intent: 'Expose the inconsistency',
            feedback: {
              situationAnalysis: 'While logically correct, rubbing Julian’s face in his communicative failure backs him into a corner.',
              decisionReview: {
                accomplished: 'Pointed out the logical inconsistency.',
                strengths: ['Accurate diagnosis of the shift'],
                risks: ['Forces Julian to defend his ego with more hostility', 'Makes you look vindictive']
              },
              perspectiveCheck: {
                otherInterpretation: 'Julian will feel cornered and ashamed in public, breeding resentment.',
                missingInformation: 'Whether others in the room shared Julian’s workload fear.'
              },
              consequences: {
                shortTerm: 'Tense silence; Julian retreats sullenly.',
                longTerm: 'Creates an enduring enemy who will look for future opportunities to derail you.',
                tradeoffs: 'Temporary intellectual satisfaction at the expense of team cohesion.'
              },
              alternativeNaturalResponse: '"I hear the concern on time. Let’s review the calendar together."',
              skillDevelopment: {
                skill: 'Ego Preservation',
                practicalExercise: 'Never force someone to admit they were irrational in front of a live audience.'
              },
              scoreIndicator: {
                emotionalRegulation: 60,
                socialAwareness: 55,
                strategicThinking: 50,
                assertiveness: 75
              }
            }
          }
        ]
      }
    },
    options: [
      {
        id: 'opt-1a',
        label: 'A',
        text: 'Respond aggressively: "If being prepared looks like arrogance to you, maybe you should raise your own standards."',
        intent: 'Counter-attack and dominate',
        feedback: {
          situationAnalysis: 'The public setting magnifies interpersonal friction. Counter-attacking escalates a petty remark into an entertaining spectacle for onlookers.',
          decisionReview: {
            accomplished: 'Demonstrated you will not tolerate insults quietly.',
            strengths: ['Immediate assertion of dominance'],
            risks: ['Confirms Julian’s premise that you are arrogant', 'Alienates unaligned observers', 'Draws reprimand from facilitators']
          },
          perspectiveCheck: {
            otherInterpretation: 'Julian felt insecure or eclipsed by your contribution and reacted out of territorial anxiety.',
            missingInformation: 'Whether Julian has existing personal grievances or felt belittled earlier.'
          },
          consequences: {
            shortTerm: 'The room divides into factions; the topic of the seminar is derailed.',
            longTerm: 'Peers perceive you as volatile and high-maintenance, avoiding you for future collaborations.',
            tradeoffs: 'Sacrifices long-term leadership credibility for immediate emotional gratification.'
          },
          alternativeNaturalResponse: '"I’m focused on solving the case study. If there’s a flaw in my reasoning, point it out specifically."',
          skillDevelopment: {
            skill: 'Impulse Invalidation',
            practicalExercise: 'Notice when an insult is designed to bait you into defending yourself. Decline the bait.'
          },
          scoreIndicator: {
            emotionalRegulation: 25,
            socialAwareness: 35,
            strategicThinking: 30,
            assertiveness: 65
          }
        }
      },
      {
        id: 'opt-1b',
        label: 'B',
        text: 'Calmly ask what prompted that impression: "That’s a strong statement, Julian. What specific part of my proposal gave you that impression?"',
        intent: 'Inquire with cold precision and shift burden of proof',
        nextBranchId: 'branch-clarify',
        feedback: {
          situationAnalysis: 'By responding with calm curiosity, you shift the burden of proof back to Julian in front of the entire audience.',
          decisionReview: {
            accomplished: 'Diffused personal attack and demanded objective evidentiary backing without raising your voice.',
            strengths: ['High emotional control', 'Exposes the emptiness of ad-hominem claims', 'Leaves room for constructive follow-up'],
            risks: ['Requires emotional patience to not react immediately']
          },
          perspectiveCheck: {
            otherInterpretation: 'Julian likely expected an angry retort or intimidated silence. Your calm inquiry destabilizes his premise.',
            missingInformation: 'Whether there is an underlying valid objection to the proposal obscured by hostility.'
          },
          consequences: {
            shortTerm: 'Julian must either articulate a substantive critique or look foolish to the entire room.',
            longTerm: 'You establish a reputation for immovable composure under fire.',
            tradeoffs: 'Takes 10 seconds of steady nerves.'
          },
          alternativeNaturalResponse: '"What specifically in the numbers seemed off to you?"',
          skillDevelopment: {
            skill: 'Diagnostic Redirection',
            practicalExercise: 'When someone attacks your personality, invite them to criticize the work instead.'
          },
          scoreIndicator: {
            emotionalRegulation: 92,
            socialAwareness: 90,
            strategicThinking: 95,
            assertiveness: 88
          }
        }
      },
      {
        id: 'opt-1c',
        label: 'C',
        text: 'Pause, maintain neutral eye contact for three seconds, and simply say: "I’m here to discuss the project."',
        intent: 'Minimalist boundary dismissal',
        feedback: {
          situationAnalysis: 'A disciplined, minimalist response that starves the provocation of oxygen.',
          decisionReview: {
            accomplished: 'Signaled that Julian’s personal comment is beneath the threshold of serious engagement.',
            strengths: ['Refuses to play Julian’s drama game', 'Saves time and avoids escalation'],
            risks: ['Some peers might interpret the briefness as cold aloofness']
          },
          perspectiveCheck: {
            otherInterpretation: 'Julian wanted an argument; being ignored makes his provocation fall flat.',
            missingInformation: 'Whether Julian has legitimate allies in the room supporting his attitude.'
          },
          consequences: {
            shortTerm: 'Awkward pause, followed by the professor or peer shifting back to the slide.',
            longTerm: 'People learn that baiting you achieves zero emotional reaction.',
            tradeoffs: 'Misses the opportunity to uncover any underlying structural friction.'
          },
          alternativeNaturalResponse: '"Let’s keep our focus on the deliverable."',
          skillDevelopment: {
            skill: 'The 3-Second Silent Pause',
            practicalExercise: 'Count three internal beats before speaking when someone drops a provocative remark.'
          },
          scoreIndicator: {
            emotionalRegulation: 88,
            socialAwareness: 82,
            strategicThinking: 85,
            assertiveness: 80
          }
        }
      },
      {
        id: 'opt-1d',
        label: 'D',
        text: 'Use light self-deprecating humor: "Believe me, if I knew everything, I wouldn’t be waking up for an 8 AM seminar."',
        intent: 'Defuse tension with social charm',
        feedback: {
          situationAnalysis: 'Humor breaks immediate room tension and makes the speaker look approachable.',
          decisionReview: {
            accomplished: 'Lightened the atmosphere and got a chuckle from peers.',
            strengths: ['High likability', 'Quickly relieves group anxiety'],
            risks: ['Can diminish personal authority if used repeatedly', 'May be seen as dodging Julian’s hostility']
          },
          perspectiveCheck: {
            otherInterpretation: 'Julian may feel disarmed, but might also interpret humor as evasion.',
            missingInformation: 'Whether the audience values gravitas or levity more in this setting.'
          },
          consequences: {
            shortTerm: 'Laughter dispels the tension; conversation continues smoothly.',
            longTerm: 'Solidifies you as socially agile, though perhaps less commanding.',
            tradeoffs: 'Avoids deep diagnostic resolution in favor of quick social harmony.'
          },
          alternativeNaturalResponse: '"I wish I had all the answers—let’s see what the data actually says."',
          skillDevelopment: {
            skill: 'Tension Dissolution',
            practicalExercise: 'Use humor to disarm tension, but follow immediately with a serious analytical point.'
          },
          scoreIndicator: {
            emotionalRegulation: 80,
            socialAwareness: 85,
            strategicThinking: 75,
            assertiveness: 70
          }
        }
      }
    ]
  },

  // 002
  {
    id: 'sc-002',
    number: '002',
    title: 'The Chronic Interrupter',
    category: 'social-intelligence',
    difficulty: 2,
    setting: 'Cross-functional Planning Call',
    context: 'Every time you begin outlining the rollout timeline, Marcus talks over you, cutting off your sentences midway. This has happened three times in the first ten minutes.',
    characterDialogue: '"—Wait, yeah, but let’s just skip to the marketing budget because that’s what really matters here."',
    dialogueSpeaker: 'Marcus (Product Lead)',
    estimatedDuration: '4 min',
    skillTags: ['Conversational Flow', 'Boundary Enforcement', 'Assertiveness', 'Vocal Pacing'],
    learningObjectives: [
      'Reclaim speaking space smoothly without sounding flustered.',
      'Establish conversational boundaries in real-time group settings.',
      'Distinguish between enthusiastic momentum and territorial dominance.'
    ],
    reflectionPrompt: 'When someone repeatedly cuts you off, do you typically yield passively or interrupt back aggressively?',
    options: [
      {
        id: 'opt-2a',
        label: 'A',
        text: 'Continue speaking at the exact same pace and volume without stopping, talking directly through his interruption.',
        intent: 'Maintain acoustic territory',
        feedback: {
          situationAnalysis: 'Talking over someone creates an acoustic collision that forces listeners to choose whom to focus on.',
          decisionReview: {
            accomplished: 'Demonstrated refusal to surrender the floor.',
            strengths: ['Physical enforcement of speaking rights'],
            risks: ['Sounds messy and chaotic on an audio call', 'Can appear stubborn or socially clumsy']
          },
          perspectiveCheck: {
            otherInterpretation: 'Marcus may think you didn’t notice him or are competing for airtime.',
            missingInformation: 'Whether Marcus interrupts everyone or specifically targets your updates.'
          },
          consequences: {
            shortTerm: 'Marcus eventually stops talking, but listeners miss both of your points.',
            longTerm: 'Meetings become stressful auditory endurance contests.',
            tradeoffs: 'Sacrifices auditory clarity for dominance.'
          },
          alternativeNaturalResponse: '"Marcus, give me thirty seconds to finish the timeline, then we will transition straight to budget."',
          skillDevelopment: {
            skill: 'Vocal Floor Maintenance',
            practicalExercise: 'Use structured verbal signaling rather than sheer acoustic volume.'
          },
          scoreIndicator: {
            emotionalRegulation: 65,
            socialAwareness: 60,
            strategicThinking: 65,
            assertiveness: 75
          }
        }
      },
      {
        id: 'opt-2b',
        label: 'B',
        text: 'Stop immediately, wait until he finishes, then pause for two seconds and say: "Now that Marcus has shared that, I will finish the timeline point I was making."',
        intent: 'Mark the interruption cleanly without hostility',
        feedback: {
          situationAnalysis: 'Yielding briefly to let the interruption hang, then explicitly framing your resumption highlights the rudeness without throwing a tantrum.',
          decisionReview: {
            accomplished: 'Politely surfaced Marcus’s pattern for the entire call to notice.',
            strengths: ['Controlled demeanor', 'Zero auditory clutter', 'Establishes clear conversational order'],
            risks: ['Requires holding firm without sounding passive-aggressive']
          },
          perspectiveCheck: {
            otherInterpretation: 'Marcus will realize his interjection was explicitly tracked and spotlighted.',
            missingInformation: 'Whether Marcus is under extreme pressure from executives on budget.'
          },
          consequences: {
            shortTerm: 'Marcus is less likely to interrupt a fourth time.',
            longTerm: 'The group appreciates your orderly cadence and self-control.',
            tradeoffs: 'Allows him to speak out of turn for a brief moment.'
          },
          alternativeNaturalResponse: '"Hold on Marcus, I’m wrapping up the final timeline milestone, then the floor is yours."',
          skillDevelopment: {
            skill: 'Conversational Bookmarking',
            practicalExercise: 'Explicitly label when you are returning to your unfinished thought.'
          },
          scoreIndicator: {
            emotionalRegulation: 90,
            socialAwareness: 88,
            strategicThinking: 88,
            assertiveness: 85
          }
        }
      },
      {
        id: 'opt-2c',
        label: 'C',
        text: 'Shut down and let him drive the entire meeting: "Fine, go ahead."',
        intent: 'Passive withdrawal',
        feedback: {
          situationAnalysis: 'Total surrender trains the interrupter that cutting you off yields immediate total compliance.',
          decisionReview: {
            accomplished: 'Avoided an immediate confrontation.',
            strengths: ['Avoided conflict'],
            risks: ['Surrenders project control', 'Loss of respect from team', 'Simmering internal resentment']
          },
          perspectiveCheck: {
            otherInterpretation: 'Marcus assumes your timeline was unimportant and that you lack convictions.',
            missingInformation: 'None; withdrawal is universally perceived as submission.'
          },
          consequences: {
            shortTerm: 'Timeline details remain unexplained, causing downstream errors.',
            longTerm: 'You become sidelined in future strategic meetings.',
            tradeoffs: 'Temporary relief from tension at the expense of your professional efficacy.'
          },
          alternativeNaturalResponse: '"I have two sentences left on the schedule, then we will dive into budget."',
          skillDevelopment: {
            skill: 'Refusal of Submission',
            practicalExercise: 'Notice the urge to withdraw when trampled. Replace it with an assertive bridge.'
          },
          scoreIndicator: {
            emotionalRegulation: 35,
            socialAwareness: 40,
            strategicThinking: 25,
            assertiveness: 20
          }
        }
      },
      {
        id: 'opt-2d',
        label: 'D',
        text: 'Snap at him: "Marcus, stop interrupting me. You’ve done this three times now. Let me speak."',
        intent: 'Direct public confrontation',
        feedback: {
          situationAnalysis: 'A direct call-out stops the behavior but spikes adrenaline in the virtual room.',
          decisionReview: {
            accomplished: 'Halted the interruption instantly.',
            strengths: ['Crystal clear boundary'],
            risks: ['Creates defensiveness and awkwardness for other attendees', 'Can be framed as overly combative']
          },
          perspectiveCheck: {
            otherInterpretation: 'Marcus feels attacked in front of colleagues and may double down out of embarrassment.',
            missingInformation: 'Marcus’s default conversational style with others.'
          },
          consequences: {
            shortTerm: 'Meeting tone turns icy and uncomfortable.',
            longTerm: 'Working relationship with Marcus will require repair.',
            tradeoffs: 'Enforces the boundary but damages relational warmth.'
          },
          alternativeNaturalResponse: '"Marcus, let me finish this sentence first."',
          skillDevelopment: {
            skill: 'Calibrated Escalation',
            practicalExercise: 'Save public behavioral call-outs for private 1-on-1s unless gentle boundary markers fail repeatedly.'
          },
          scoreIndicator: {
            emotionalRegulation: 55,
            socialAwareness: 50,
            strategicThinking: 60,
            assertiveness: 80
          }
        }
      }
    ]
  },

  // 003
  {
    id: 'sc-003',
    number: '003',
    title: 'The Distant Friend',
    category: 'social-intelligence',
    difficulty: 2,
    setting: 'Campus Courtyard / Coffee Lounge',
    context: 'A close peer who usually texts daily and shares lunch has given short, flat one-word answers for four days and avoided eye contact when walking past you.',
    characterDialogue: '"Yeah. I’m fine."',
    dialogueSpeaker: 'Kael (Close Peer)',
    estimatedDuration: '3 min',
    skillTags: ['Empathy', 'Perspective-Taking', 'Non-intrusive Support', 'Ego Detachment'],
    learningObjectives: [
      'Avoid personalizing behavioral withdrawal in others.',
      'Create safe conversational space without demanding confessions.',
      'Differentiate between interpersonal conflict and external exhaustion.'
    ],
    reflectionPrompt: 'When someone pulls away, is your instinctive reaction to feel guilty, feel abandoned, or assume they are being rude?',
    options: [
      {
        id: 'opt-3a',
        label: 'A',
        text: 'Demand an explanation: "You’ve been acting weird and ignoring me all week. If I did something, just tell me already."',
        intent: 'Pressure for immediate emotional resolution',
        feedback: {
          situationAnalysis: 'Accusing someone who is withdrawing puts them on defense and centers your comfort over their struggle.',
          decisionReview: {
            accomplished: 'Expressed your frustration.',
            strengths: ['Honest expression of feeling'],
            risks: ['Guilt-trips someone who may be in crisis', 'Forces them to withdraw even further']
          },
          perspectiveCheck: {
            otherInterpretation: 'Kael feels pressured to manage your feelings while dealing with their own overwhelm.',
            missingInformation: 'Family issues, academic burnout, health, or financial strain.'
          },
          consequences: {
            shortTerm: 'Kael shuts down further or snaps back in anger.',
            longTerm: 'Damages emotional safety in the friendship.',
            tradeoffs: 'Satisfies your urge to know at the cost of the friend’s well-being.'
          },
          alternativeNaturalResponse: '"No pressure at all, but I noticed you seem drained. I’m here whenever you want to talk."',
          skillDevelopment: {
            skill: 'Decentering the Ego',
            practicalExercise: 'Remind yourself: someone else’s silence is usually about their storm, not your fault.'
          },
          scoreIndicator: {
            emotionalRegulation: 45,
            socialAwareness: 40,
            strategicThinking: 45,
            assertiveness: 60
          }
        }
      },
      {
        id: 'opt-3b',
        label: 'B',
        text: 'Mirror their distance: give them the silent treatment until they reach out first.',
        intent: 'Retaliatory passive-aggression',
        feedback: {
          situationAnalysis: 'Tit-for-tat emotional withdrawal transforms temporary personal struggles into permanent relational fractures.',
          decisionReview: {
            accomplished: 'Protected your ego from feeling rejected.',
            strengths: ['Avoids appearing needy'],
            risks: ['Escalates alienation', 'Destroys trust and goodwill']
          },
          perspectiveCheck: {
            otherInterpretation: 'Kael concludes that you don’t actually care about them when things get hard.',
            missingInformation: 'Whether Kael is silently hoping someone notices without judging.'
          },
          consequences: {
            shortTerm: 'Prolonged cold silence.',
            longTerm: 'Friendship slowly dies of mutual stubbornness.',
            tradeoffs: 'Saves face today; loses a valuable ally tomorrow.'
          },
          alternativeNaturalResponse: '"Take all the space you need. Door is always open."',
          skillDevelopment: {
            skill: 'Withholding Spiteful Symmetry',
            practicalExercise: 'Never use someone’s vulnerability or depression as an excuse for your own spite.'
          },
          scoreIndicator: {
            emotionalRegulation: 30,
            socialAwareness: 35,
            strategicThinking: 30,
            assertiveness: 30
          }
        }
      },
      {
        id: 'opt-3c',
        label: 'C',
        text: 'Offer low-pressure presence: "You don’t have to talk about anything right now. Just wanted you to know I’m around if you need an ear or a quiet distraction."',
        intent: 'Supportive non-demanding availability',
        feedback: {
          situationAnalysis: 'Providing open-door support without requiring emotional disclosure removes the burden of performance while reaffirming safety.',
          decisionReview: {
            accomplished: 'Communicated care, respect for boundaries, and steadfast reliability.',
            strengths: ['High emotional intelligence', 'Zero guilt induction', 'Respects autonomy'],
            risks: ['You must be comfortable waiting patiently for them to open up']
          },
          perspectiveCheck: {
            otherInterpretation: 'Kael feels seen and relieved that they don’t have to fake enthusiasm or defend their withdrawal.',
            missingInformation: 'What external stressor is burdening them.'
          },
          consequences: {
            shortTerm: 'Kael’s shoulders drop; tension dissolves.',
            longTerm: 'When Kael is ready, you will be the first person they trust with the truth.',
            tradeoffs: 'Requires tolerating temporary uncertainty.'
          },
          alternativeNaturalResponse: '"All good. I’m grabbing lunch later—if you want to join, cool; if you want quiet, totally understand."',
          skillDevelopment: {
            skill: 'Safe Harbour Presence',
            practicalExercise: 'Communicate loyalty without conditioning it on instant accessibility.'
          },
          scoreIndicator: {
            emotionalRegulation: 95,
            socialAwareness: 95,
            strategicThinking: 92,
            assertiveness: 85
          }
        }
      },
      {
        id: 'opt-3d',
        label: 'D',
        text: 'Ask mutual friends if Kael is mad at you.',
        intent: 'Backchannel gossip',
        feedback: {
          situationAnalysis: 'Triangulating through third parties risks spreading rumors and signals insecurity.',
          decisionReview: {
            accomplished: 'Gathered third-party perspectives.',
            strengths: ['Might uncover objective context'],
            risks: ['Looks immature', 'Can be reported back to Kael as gossiping']
          },
          perspectiveCheck: {
            otherInterpretation: 'Kael may feel violated that their mood is being analyzed by a committee.',
            missingInformation: 'Whether mutual friends have accurate information.'
          },
          consequences: {
            shortTerm: 'Rumor mill stirs around Kael’s behavior.',
            longTerm: 'Kael distrusts you when they hear you’ve been inquiring behind their back.',
            tradeoffs: 'Avoids direct engagement at the expense of direct trust.'
          },
          alternativeNaturalResponse: '"Checking in directly is always cleaner than asking mutual peers."',
          skillDevelopment: {
            skill: 'Direct Channel Hygiene',
            practicalExercise: 'Always treat relational questions as two-party matters unless safety is at risk.'
          },
          scoreIndicator: {
            emotionalRegulation: 50,
            socialAwareness: 55,
            strategicThinking: 45,
            assertiveness: 40
          }
        }
      }
    ]
  },

  // 004
  {
    id: 'sc-004',
    number: '004',
    title: 'The Credit Hijack',
    category: 'social-intelligence',
    difficulty: 3,
    setting: 'Department Executive Review',
    context: 'You spent the entire weekend building the automated financial projection model. During the team presentation, your co-presenter Liam introduces the tool as his own innovation, neglecting to mention your work.',
    characterDialogue: '"Over the weekend, I realized our pipeline had flaws, so I personally architected this forecasting algorithm to resolve it."',
    dialogueSpeaker: 'Liam (Co-presenter)',
    estimatedDuration: '4 min',
    skillTags: ['Credit Reclamation', 'Professional Tact', 'Strategic Intervention', 'Reputation Defense'],
    learningObjectives: [
      'Reclaim intellectual property without creating an unprofessional public brawl.',
      'Anchor collaborative reality in front of leadership.',
      'Protect future leverage and professional standing.'
    ],
    reflectionPrompt: 'When someone steals your thunder, do you choke in shock or explode with anger?',
    options: [
      {
        id: 'opt-4a',
        label: 'A',
        text: 'Interject immediately and call him a liar: "That is false. Liam didn’t write a single line of that code; I built the entire thing."',
        intent: 'Blunt public correction',
        feedback: {
          situationAnalysis: 'Accusing a colleague of lying during an executive presentation forces leadership to manage interpersonal drama rather than evaluate the work.',
          decisionReview: {
            accomplished: 'Set the record straight with raw brute force.',
            strengths: ['Unmistakable factual truth'],
            risks: ['Executives view both of you as immature and difficult to manage', 'Derailed presentation atmosphere']
          },
          perspectiveCheck: {
            otherInterpretation: 'Liam will become desperately defensive; leadership will feel secondhand embarrassment.',
            missingInformation: 'How leadership reacts to team infighting.'
          },
          consequences: {
            shortTerm: 'Meeting grinds to an uncomfortable halt; credibility of the tool is undermined.',
            longTerm: 'You are tagged as combative in presentations.',
            tradeoffs: 'Proves your technical authorship at severe relational cost.'
          },
          alternativeNaturalResponse: '"Building on what Liam noted regarding our pipeline, I focused the core algorithm logic on three specific edge cases—let’s look at slide 4."',
          skillDevelopment: {
            skill: 'Tactical Reclamation',
            practicalExercise: 'Reclaim authorship by demonstrating deep technical mastery of the details that only the true builder knows.'
          },
          scoreIndicator: {
            emotionalRegulation: 40,
            socialAwareness: 45,
            strategicThinking: 40,
            assertiveness: 75
          }
        }
      },
      {
        id: 'opt-4b',
        label: 'B',
        text: 'Smoothly step in with deep technical ownership: "Yes, Liam and I aligned on that scope Friday. I took that brief and engineered the logic over the weekend to handle three critical edge cases—let me walk everyone through the calculation engine."',
        intent: 'Seamless professional re-anchoring',
        feedback: {
          situationAnalysis: 'By smoothly referencing the collaborative scope while immediately owning the engineering and calculation walkthrough, you make your primary authorship obvious to everyone without a single bitter word.',
          decisionReview: {
            accomplished: 'Restored credit attribution, displayed leadership grace, and demonstrated technical authority.',
            strengths: ['Flawless executive presence', 'Exposes Liam’s superficial knowledge naturally when you explain the complex math', 'No drama'],
            risks: ['Requires high impromptu fluency']
          },
          perspectiveCheck: {
            otherInterpretation: 'Leadership instantly notices who understands the engine; Liam realizes he cannot fake deeper answers and backs off.',
            missingInformation: 'Whether Liam premeditated the theft or acted out of nervous ego.'
          },
          consequences: {
            shortTerm: 'The executive directs all technical questions to you.',
            longTerm: 'Leadership identifies you as the real builder and a consummate professional.',
            tradeoffs: 'Allows Liam to save face on his initial phrasing while nullifying its effect.'
          },
          alternativeNaturalResponse: '"As the architect of this specific model, I ensured the stress tests held up under high volatility."',
          skillDevelopment: {
            skill: 'Authorship Demonstration',
            practicalExercise: 'Don’t claim the trophy—demonstrate you know how every gear was forged.'
          },
          scoreIndicator: {
            emotionalRegulation: 95,
            socialAwareness: 98,
            strategicThinking: 96,
            assertiveness: 92
          }
        }
      },
      {
        id: 'opt-4c',
        label: 'C',
        text: 'Stay silent during the meeting and complain bitterly to the department manager in an email afterward.',
        intent: 'Retrospective grievance filing',
        feedback: {
          situationAnalysis: 'Staying passive in the moment forfeits the initial narrative, and subsequent complaining sounds like sour grapes.',
          decisionReview: {
            accomplished: 'Documented a complaint in writing.',
            strengths: ['Creates an audit trail'],
            risks: ['Manager wonders why you did not speak up during the live session', 'Liam consolidates first-mover credit']
          },
          perspectiveCheck: {
            otherInterpretation: 'Management views you as passive and reliant on authorities to fight your battles.',
            missingInformation: 'The manager’s tolerance for peer credit disputes.'
          },
          consequences: {
            shortTerm: 'Liam gets the initial accolades from the director.',
            longTerm: 'Manager feels burdened by mediation.',
            tradeoffs: 'Avoids present tension at the cost of being permanently shadowed.'
          },
          alternativeNaturalResponse: '"Speak up in real-time with technical specificity."'
        } as any
      },
      {
        id: 'opt-4d',
        label: 'D',
        text: 'Smile, nod, and decide to quietly sabotage Liam on the next joint assignment.',
        intent: 'Covert sabotage',
        feedback: {
          situationAnalysis: 'Underhanded revenge destroys your own character and leaves the organizational problem unsolved.',
          decisionReview: {
            accomplished: 'Fostered a toxic internal feud.',
            strengths: ['None'],
            risks: ['High risk of discovery', 'Professional misconduct', 'Distracts from real goals']
          },
          perspectiveCheck: {
            otherInterpretation: 'Everyone will see the quality drop and wonder why your team is failing.',
            missingInformation: 'None.'
          },
          consequences: {
            shortTerm: 'Corrosive workplace atmosphere.',
            longTerm: 'Reputational suicide when games are uncovered.',
            tradeoffs: 'Destructive with zero upside.'
          },
          alternativeNaturalResponse: '"Address credit discrepancies directly, immediately, and professionally."',
          skillDevelopment: {
            skill: 'Principled Action',
            practicalExercise: 'Never descend to clandestine retaliation.'
          },
          scoreIndicator: {
            emotionalRegulation: 20,
            socialAwareness: 30,
            strategicThinking: 20,
            assertiveness: 30
          }
        }
      }
    ]
  },

  // 005
  {
    id: 'sc-005',
    number: '005',
    title: 'The Silent Exclusion',
    category: 'emotional-control',
    difficulty: 2,
    setting: 'Company Social Kitchen / Breakout Area',
    context: 'You walk into the common kitchen and discover your entire project cohort discussing dinner plans at a high-end bistro tonight. It becomes obvious that reservations were made for everyone except you.',
    characterDialogue: '"Oh hey... yeah, we were just talking about getting food later. It kind of came together last minute..."',
    dialogueSpeaker: 'Chloe (Cohort Member)',
    estimatedDuration: '3 min',
    skillTags: ['Rejection Resilience', 'Composure', 'Social Equilibrium', 'Dignity Preservation'],
    learningObjectives: [
      'Maintain complete internal dignity when facing social exclusion.',
      'Prevent needy or pathetic reactions from reinforcing marginalization.',
      'Evaluate whether exclusion is personal malice or logistical coincidence.'
    ],
    reflectionPrompt: 'When you realize you were left out, is your first instinct to plead for inclusion, isolate yourself, or show that you are unbothered?',
    options: [
      {
        id: 'opt-5a',
        label: 'A',
        text: 'Act wounded and ask: "Why didn’t anyone invite me? Did I do something wrong?"',
        intent: 'Plea for inclusion and emotional validation',
        feedback: {
          situationAnalysis: 'Exhibiting acute hurt in front of a casual group shifts their guilt into awkward resentment and marks you as emotionally fragile.',
          decisionReview: {
            accomplished: 'Forced them to acknowledge the exclusion.',
            strengths: ['Vulnerable honesty'],
            risks: ['Deepens social awkwardness', 'Signals low self-worth', 'Forces a pity invite which feels worse']
          },
          perspectiveCheck: {
            otherInterpretation: 'The group feels cornered and guilty, viewing you as high-maintenance.',
            missingInformation: 'Was it truly intentional exclusion or an oversight by a single organizer?'
          },
          consequences: {
            shortTerm: 'Someone offers a hollow pity invite: "You can come if you want..."',
            longTerm: 'Future gatherings are kept even more secretive to avoid emotional scenes.',
            tradeoffs: 'Trades self-respect for an uncomfortable seat at dinner.'
          },
          alternativeNaturalResponse: '"Sounds like fun! Enjoy the bistro—see you guys tomorrow for standup."',
          skillDevelopment: {
            skill: 'Dignified Detachment',
            practicalExercise: 'When excluded, show complete self-sufficiency. Never beg for a chair.'
          },
          scoreIndicator: {
            emotionalRegulation: 35,
            socialAwareness: 45,
            strategicThinking: 30,
            assertiveness: 40
          }
        }
      },
      {
        id: 'opt-5b',
        label: 'B',
        text: 'Respond with easy, genuine warmth: "Nice, that bistro has great pasta. Enjoy the evening! I’ve got plans tonight anyway."',
        intent: 'Graceful composure and high social status',
        feedback: {
          situationAnalysis: 'By reacting with warmth and non-needy independence, you eliminate all awkwardness and maintain complete personal dignity.',
          decisionReview: {
            accomplished: 'Refused to show distress; signaled abundance and social autonomy.',
            strengths: ['Unshakeable composure', 'Relieves group tension without being subservient', 'Leaves them wondering if you even cared'],
            risks: ['None; preserves absolute self-respect']
          },
          perspectiveCheck: {
            otherInterpretation: 'If it was malicious, their attempt to hurt you completely failed. If it was an accident, they admire your graciousness.',
            missingInformation: 'Who organized the booking.'
          },
          consequences: {
            shortTerm: 'The conversation flows naturally; no pity or drama.',
            longTerm: 'You maintain high social status and avoid becoming an emotional liability.',
            tradeoffs: 'Requires suppressing the brief sting of exclusion.'
          },
          alternativeNaturalResponse: '"Have a great dinner, everyone!"',
          skillDevelopment: {
            skill: 'Status Preservation',
            practicalExercise: 'Never let anyone see that their social coldness can disturb your internal peace.'
          },
          scoreIndicator: {
            emotionalRegulation: 96,
            socialAwareness: 92,
            strategicThinking: 94,
            assertiveness: 90
          }
        }
      },
      {
        id: 'opt-5c',
        label: 'C',
        text: 'Give an icy glare, grab your coffee in total silence, and slam the kitchen door on your way out.',
        intent: 'Dramatic petulance',
        feedback: {
          situationAnalysis: 'Throwing a silent tantrum validates any negative stereotypes they had and guarantees permanent exclusion.',
          decisionReview: {
            accomplished: 'Signaled intense offense.',
            strengths: ['None'],
            risks: ['Confirms that you are volatile and difficult to be around', 'Provides gossip fodder']
          },
          perspectiveCheck: {
            otherInterpretation: 'The group turns to each other and says: "See? That’s exactly why we didn’t invite them."',
            missingInformation: 'None.'
          },
          consequences: {
            shortTerm: 'Derisive laughter or relief once you leave the room.',
            longTerm: 'Complete social ostracization.',
            tradeoffs: 'Childish behavior with catastrophic social penalty.'
          },
          alternativeNaturalResponse: '"Keep your posture relaxed and your words polite."'
        } as any
      },
      {
        id: 'opt-5d',
        label: 'D',
        text: 'Immediately post a passive-aggressive quote on social media about "fake friends".',
        intent: 'Digital venting',
        feedback: {
          situationAnalysis: 'Broadcasting passive-aggressive grievance signals emotional immaturity and desperation.',
          decisionReview: {
            accomplished: 'Vented emotion into the ether.',
            strengths: ['None'],
            risks: ['Exposes insecurity to a wide network', 'Looked down upon by peers and superiors']
          },
          perspectiveCheck: {
            otherInterpretation: 'Onlookers see a fragile individual unable to process ordinary social boundaries.',
            missingInformation: 'None.'
          },
          consequences: {
            shortTerm: 'Loss of professional respect.',
            longTerm: 'Damaged digital reputation.',
            tradeoffs: 'Zero upside.'
          },
          alternativeNaturalResponse: '"Journal your feelings privately, not on public feeds."'
        } as any
      }
    ]
  },

  // 006
  {
    id: 'sc-006',
    number: '006',
    title: 'The Slacking Partner',
    category: 'emotional-control',
    difficulty: 3,
    setting: 'Shared Project Workspace (24h before deadline)',
    context: 'Your partner for a high-stakes client report promised their section by 9 AM. It is now 8 PM, twenty-four hours before final submission. They finally send a draft that is three paragraphs of unformatted bullet points copied straight from Wikipedia.',
    characterDialogue: '"Hey, I’m totally swamped with other stuff, so this is the best I could do. Can you just polish it up and add the charts? Thanks!"',
    dialogueSpeaker: 'Devon (Project Partner)',
    estimatedDuration: '4 min',
    skillTags: ['Boundaries', 'Accountability', 'Anger Regulation', 'Negotiation Under Pressure'],
    learningObjectives: [
      'Resist rage when subjected to egregious unprofessionalism.',
      'Enforce accountability without doing someone else’s job for free.',
      'Protect project delivery and grade/client standing.'
    ],
    reflectionPrompt: 'When someone dumps their work on you, do you silently absorb the burden out of fear of failure, or blow up in anger?',
    options: [
      {
        id: 'opt-6a',
        label: 'A',
        text: 'Blow up over text: "Are you insane? This is lazy garbage! I’m reporting you to the lead right now!"',
        intent: 'Explosion of righteous indignation',
        feedback: {
          situationAnalysis: 'While emotionally understandable, an explosive meltdown gives Devon an excuse to play the victim and avoid the work.',
          decisionReview: {
            accomplished: 'Vented fury.',
            strengths: ['Honest assessment of the poor quality'],
            risks: ['Devon shuts down or complains about your hostility', 'Work remains unfinished at the deadline']
          },
          perspectiveCheck: {
            otherInterpretation: 'Devon feels attacked and disengages completely, leaving you with 100% of the work anyway.',
            missingInformation: 'Whether the project manager will intervene within 24 hours.'
          },
          consequences: {
            shortTerm: 'Hostile deadlock with 24 hours on the clock.',
            longTerm: 'Management sees two feuding team members instead of one slacker.',
            tradeoffs: 'Surrenders tactical focus during a critical countdown.'
          },
          alternativeNaturalResponse: '"Devon, this draft is missing the core analysis and does not meet our required rubric. Let’s jump on a 5-minute call right now to delineate who completes what by midnight."',
          skillDevelopment: {
            skill: 'Operational Discipline Under Betrayal',
            practicalExercise: 'Focus on deliverables first, punitive action second.'
          },
          scoreIndicator: {
            emotionalRegulation: 30,
            socialAwareness: 40,
            strategicThinking: 35,
            assertiveness: 65
          }
        }
      },
      {
        id: 'opt-6b',
        label: 'B',
        text: 'Quietly sigh, spend all night rewriting the entire section yourself, and say nothing to Devon.',
        intent: 'Resentful martyrdom',
        feedback: {
          situationAnalysis: 'Doing the slacker’s work rewards their delinquency and guarantees they will exploit you again.',
          decisionReview: {
            accomplished: 'Ensured project quality at great personal cost.',
            strengths: ['Project succeeds'],
            risks: ['Severe burnout', 'Enables a parasite', 'Builds deep internal bitterness']
          },
          perspectiveCheck: {
            otherInterpretation: 'Devon learns that dumping sub-par work onto you works like a charm.',
            missingInformation: 'None.'
          },
          consequences: {
            shortTerm: 'You don’t sleep; Devon gets full equal credit.',
            longTerm: 'You become the designated doormat for slackers.',
            tradeoffs: 'Sacrifices self-respect and health to avoid setting a boundary.'
          },
          alternativeNaturalResponse: '"I cannot rewrite your section. The current draft lacks sections 2 and 4. What time tonight will you have those added?"'
        } as any
      },
      {
        id: 'opt-6c',
        label: 'C',
        text: 'Deliver a calm, binary standard: "Devon, this draft does not meet the rubric or the requirements we agreed to. I will handle my half—the financial modeling and charts. I cannot write your narrative. If your sections aren’t completed by 10 AM tomorrow, I will submit my component independently and inform the lead."',
        intent: 'Unflinching contractual boundary',
        feedback: {
          situationAnalysis: 'A calm, explicit boundary clearly delineates responsibility, eliminates false hope of being carried, and establishes clean accountability.',
          decisionReview: {
            accomplished: 'Refused to be exploited while giving Devon a clear, urgent choice.',
            strengths: ['Zero emotional hysteria', 'Crystal clear expectations', 'Audit-ready professional paper trail'],
            risks: ['Devon may still fail, requiring escalation to leadership']
          },
          perspectiveCheck: {
            otherInterpretation: 'Devon realizes his bluff has failed and that his academic/professional standing is directly on the line.',
            missingInformation: 'Whether Devon has the ability to write it if forced.'
          },
          consequences: {
            shortTerm: 'Devon either scrambles to write it or you escalate with clean hands.',
            longTerm: 'Establishes that you cannot be manipulated or exploited.',
            tradeoffs: 'Carries risk that the final joint grade may require instructor arbitration.'
          },
          alternativeNaturalResponse: '"The standard is non-negotiable. I can help review, but the writing is your deliverable."',
          skillDevelopment: {
            skill: 'The Binary Boundary',
            practicalExercise: 'Give slackers a clear fork in the road: produce the work or own the public failure.'
          },
          scoreIndicator: {
            emotionalRegulation: 94,
            socialAwareness: 90,
            strategicThinking: 95,
            assertiveness: 98
          }
        }
      },
      {
        id: 'opt-6d',
        label: 'D',
        text: 'Forward the draft directly to the professor/boss right now without telling Devon.',
        intent: 'Immediate administrative escalation',
        feedback: {
          situationAnalysis: 'Escalating to authority without first confronting the peer often makes leadership view you as incapable of peer resolution.',
          decisionReview: {
            accomplished: 'Alerted management.',
            strengths: ['Early notification of failure'],
            risks: ['Manager asks: "Did you speak with Devon first?" and marks you down for poor communication']
          },
          perspectiveCheck: {
            otherInterpretation: 'Management dislikes managing kindergarten disputes when no peer conversation occurred.',
            missingInformation: 'Management policy on peer disputes.'
          },
          consequences: {
            shortTerm: 'Leadership demands a joint meeting, wasting time 24h before deadline.',
            longTerm: 'Reputation as someone who cannot negotiate with peers directly.',
            tradeoffs: 'Bypasses direct peer confrontation.'
          },
          alternativeNaturalResponse: '"Always issue the direct peer boundary first before escalating."'
        } as any
      }
    ]
  },

  // 007
  {
    id: 'sc-007',
    number: '007',
    title: 'The Rude Public Jibe',
    category: 'emotional-control',
    difficulty: 1,
    setting: 'Casual Team Lunch',
    context: 'While everyone is ordering food, an outspoken colleague remarks on your physical appearance or personal habits with a smirk.',
    characterDialogue: '"Do you ever wear anything that isn’t depressing black, or is your entire personality just trying to look mysterious?"',
    dialogueSpeaker: 'Gareth (Colleague)',
    estimatedDuration: '3 min',
    skillTags: ['Wit', 'Composure', 'Status Defense', 'Light De-escalation'],
    learningObjectives: [
      'Neutralize petty personal digs without appearing thin-skinned.',
      'Control personal reactivity in casual social groups.',
      'Preserve lighthearted group atmosphere while defending boundaries.'
    ],
    reflectionPrompt: 'When someone makes fun of your style or habits, do you get insecure or smile through it?',
    options: [
      {
        id: 'opt-7a',
        label: 'A',
        text: 'Attack his style in retaliation: "At least I don’t wear a faded polo from 2012 like you do every day."',
        intent: 'Clumsy counter-roast',
        feedback: {
          situationAnalysis: 'Trading insults in a casual setting makes you look easily provoked and touchy.',
          decisionReview: {
            accomplished: 'Fought back.',
            strengths: ['Quick reaction'],
            risks: ['Looks defensive', 'Can make the lunch awkward for everyone else']
          },
          perspectiveCheck: {
            otherInterpretation: 'Gareth knows he got under your skin because your reaction was defensive.',
            missingInformation: 'Was Gareth just attempting friendly banter?'
          },
          consequences: {
            shortTerm: 'Awkward pause at the table; people look down at their menus.',
            longTerm: 'Tagged as someone who cannot take a mild ribbing.',
            tradeoffs: 'Sacrifices poise for a cheap insult.'
          },
          alternativeNaturalResponse: '"Black saves me five minutes of decision-making every morning. Efficiency Gareth, you should try it."'
        } as any
      },
      {
        id: 'opt-7b',
        label: 'B',
        text: 'Own it with deadpan confidence: "Black reduces my morning decision fatigue by 80%. But if you want to be my personal stylist, submit your portfolio."',
        intent: 'Deadpan humor with effortless frame control',
        feedback: {
          situationAnalysis: 'Agreeing with the premise while reframing it as deliberate efficiency neutralizes the jibe and turns the laugh back on the speaker.',
          decisionReview: {
            accomplished: 'Earned the group’s laughter and maintained total self-possession.',
            strengths: ['Effortless charisma', 'Zero defensiveness', 'Subtle witty reversal'],
            risks: ['None']
          },
          perspectiveCheck: {
            otherInterpretation: 'Gareth realizes his jab had zero impact and that you are thoroughly comfortable in your own skin.',
            missingInformation: 'None.'
          },
          consequences: {
            shortTerm: 'The group chuckles and orders food; Gareth smiles sheepishly.',
            longTerm: 'Solidifies your image as grounded, witty, and unflappable.',
            tradeoffs: 'None.'
          },
          alternativeNaturalResponse: '"I like keeping it simple. What are you having to eat?"',
          skillDevelopment: {
            skill: 'Agree and Refocus',
            practicalExercise: 'Embrace the premise of a petty insult with deadpan confidence, then pivot.'
          },
          scoreIndicator: {
            emotionalRegulation: 92,
            socialAwareness: 94,
            strategicThinking: 90,
            assertiveness: 88
          }
        }
      },
      {
        id: 'opt-7c',
        label: 'C',
        text: 'Look down in embarrassment and murmur an apology about your clothes.',
        intent: 'Submissive apology',
        feedback: {
          situationAnalysis: 'Apologizing for your own harmless personal preferences invites bullies to target you more frequently.',
          decisionReview: {
            accomplished: 'Absorbed the blow.',
            strengths: ['None'],
            risks: ['Surrenders status instantly', 'Invites repeated mockery']
          },
          perspectiveCheck: {
            otherInterpretation: 'Gareth sees that you are easily cowed and intimidated.',
            missingInformation: 'None.'
          },
          consequences: {
            shortTerm: 'Uncomfortable silence.',
            longTerm: 'You become the regular target for cheap jokes.',
            tradeoffs: 'Surrenders self-respect.'
          },
          alternativeNaturalResponse: '"Never apologize for your personal style."'
        } as any
      },
      {
        id: 'opt-7d',
        label: 'D',
        text: 'Deliver a cold psychological lecture about toxic masculinity and clothing stereotypes.',
        intent: 'Over-intellectualized moralizing',
        feedback: {
          situationAnalysis: 'Bringing heavy academic dogma to a casual lunch joke kills all rapport and makes you seem socially tone-deaf.',
          decisionReview: {
            accomplished: 'Delivered a moral reprimand.',
            strengths: ['Ethical consistency'],
            risks: ['Alienates the entire lunch table', 'Seen as humorless and exhausting']
          },
          perspectiveCheck: {
            otherInterpretation: 'Colleagues mentally make a note never to invite you to casual lunches again.',
            missingInformation: 'Whether anyone actually intended malice.'
          },
          consequences: {
            shortTerm: 'Chilled silence; colleagues exchange tired glances.',
            longTerm: 'Social isolation in informal network circles.',
            tradeoffs: 'Moral posturing at the cost of basic social agility.'
          },
          alternativeNaturalResponse: '"Keep the banter light unless a real boundary is crossed."'
        } as any
      }
    ]
  },

  // 008
  {
    id: 'sc-008',
    number: '008',
    title: 'The Ambiguous Ping',
    category: 'emotional-control',
    difficulty: 2,
    setting: 'Slack / Microsoft Teams (Friday 6:30 PM)',
    context: 'Just as you log off for the weekend, your supervisor drops a message with zero context or punctuation.',
    characterDialogue: '"We need to talk on Monday morning."',
    dialogueSpeaker: 'Vance (Direct Supervisor)',
    estimatedDuration: '3 min',
    skillTags: ['Anxiety Regulation', 'Professional Communication', 'Catastrophizing Defense', 'Clarification'],
    learningObjectives: [
      'Stop catastrophic runaway thoughts triggered by ambiguous messages.',
      'Calibrate an inquiry that seeks context without signaling panic.',
      'Protect psychological peace during non-work hours.'
    ],
    reflectionPrompt: 'When you get an ominous message, do you assume you are getting fired, or do you stay grounded in what is known?',
    options: [
      {
        id: 'opt-8a',
        label: 'A',
        text: 'Spend the entire weekend in an agonizing panic loop, scouring all past work emails to guess what you did wrong.',
        intent: 'Internal catastrophic collapse',
        feedback: {
          situationAnalysis: 'Catastrophizing fills the void of ambiguous information with your deepest personal insecurities.',
          decisionReview: {
            accomplished: 'Exhausted yourself over a blank screen.',
            strengths: ['None'],
            risks: ['Ruins your weekend health and rest', 'Leaves you exhausted and defensive on Monday morning']
          },
          perspectiveCheck: {
            otherInterpretation: 'Vance probably typed it on the train while distracted, unaware of how ominous it sounded.',
            missingInformation: 'Is it about a new project, a promotion, an administrative form, or a client question?'
          },
          consequences: {
            shortTerm: '48 hours of pure dread.',
            longTerm: 'Chronic work anxiety and early burnout.',
            tradeoffs: 'Suffering imaginary pain in advance.'
          },
          alternativeNaturalResponse: '"Send a prompt, neutral clarification or deliberately park it until Monday."'
        } as any
      },
      {
        id: 'opt-8b',
        label: 'B',
        text: 'Reply immediately with a composed, neutral request for the agenda: "Understood Vance. Could you share a quick bullet on the topic so I can have the relevant files ready for us?"',
        intent: 'Professional boundary and context extraction',
        feedback: {
          situationAnalysis: 'Asking for the agenda framed as professional preparation is completely reasonable and usually extracts the context needed to defuse panic.',
          decisionReview: {
            accomplished: 'Attempted to extract context while presenting as organized and proactive.',
            strengths: ['Professional framing', 'Signals preparation rather than fear', 'Resolves ambiguity'],
            risks: ['If Vance doesn’t reply until Monday, you must still practice detachment']
          },
          perspectiveCheck: {
            otherInterpretation: 'Vance will either give the topic ("Just want to walk through the Q3 roadmap") or realize he was too cryptic.',
            missingInformation: 'Vance’s communication habits.'
          },
          consequences: {
            shortTerm: 'High probability of an immediate clarifying reply that saves your weekend.',
            longTerm: 'Trains your manager to provide context with meeting requests.',
            tradeoffs: 'None.'
          },
          alternativeNaturalResponse: '"Got it. Looking forward to it. If there’s anything specific you want me to review beforehand, let me know."',
          skillDevelopment: {
            skill: 'Context Extraction',
            practicalExercise: 'Never suffer an ambiguous mystery in silence; politely ask for the agenda.'
          },
          scoreIndicator: {
            emotionalRegulation: 92,
            socialAwareness: 90,
            strategicThinking: 94,
            assertiveness: 88
          }
        }
      },
      {
        id: 'opt-8c',
        label: 'C',
        text: 'Send a frantic wall of text defending yourself: "Is this about the report? Because Sarah sent those numbers late and I told her—"',
        intent: 'Preemptive self-incrimination',
        feedback: {
          situationAnalysis: 'Confessing unprompted anxieties reveals your vulnerabilities and can alert a manager to problems they didn’t even know existed.',
          decisionReview: {
            accomplished: 'Revealed internal panic and threw a colleague under the bus.',
            strengths: ['None'],
            risks: ['Makes you look guilty of something even if the meeting was about a promotion!']
          },
          perspectiveCheck: {
            otherInterpretation: 'Vance thinks: "Wait, what did Sarah and you do wrong on the report?"',
            missingInformation: 'The true topic of the meeting.'
          },
          consequences: {
            shortTerm: 'Creates real problems out of an imaginary one.',
            longTerm: 'Demonstrates extreme lack of executive poise.',
            tradeoffs: 'Disastrous.'
          },
          alternativeNaturalResponse: '"Never offer excuses before an accusation is made."'
        } as any
      },
      {
        id: 'opt-8d',
        label: 'D',
        text: 'Leave it on read, shut your laptop, and choose not to think about it until 8:55 AM Monday.',
        intent: 'Strict cognitive boundary',
        feedback: {
          situationAnalysis: 'If you have the psychological strength to genuinely detach, this protects your weekend boundaries completely.',
          decisionReview: {
            accomplished: 'Enforced work-life separation.',
            strengths: ['Total refusal to let off-hours messages disturb personal life'],
            risks: ['Can require significant mental discipline to not ruminate']
          },
          perspectiveCheck: {
            otherInterpretation: 'Vance sees you logged off at end-of-day like a normal professional.',
            missingInformation: 'The agenda.'
          },
          consequences: {
            shortTerm: 'Uninterrupted weekend.',
            longTerm: 'Healthy boundary maintenance.',
            tradeoffs: 'Requires strong emotional discipline to avoid subconscious worry.'
          },
          alternativeNaturalResponse: '"Acknowledged Vance. See you at 9 AM Monday."',
          skillDevelopment: {
            skill: 'Compartmentalization',
            practicalExercise: 'Remind yourself: what you cannot change between Friday night and Monday morning is not worth 5 minutes of worry.'
          },
          scoreIndicator: {
            emotionalRegulation: 88,
            socialAwareness: 75,
            strategicThinking: 82,
            assertiveness: 85
          }
        }
      }
    ]
  }
];
