import { Scenario } from '../../types';

export const SCENARIOS_17_24: Scenario[] = [
  // 017
  {
    id: 'sc-017',
    number: '017',
    title: 'The Proactive Confession',
    category: 'manipulation-defense',
    difficulty: 3,
    setting: 'Lead Architect’s Office',
    context: 'While testing a database migration script on Friday afternoon, you accidentally wiped a staging cache that caused three internal development teams to lose their session state. Nobody has traced the commit to you yet.',
    characterDialogue: '"Someone pushed a migration that crashed the dev environment. Do you know anything about what happened?"',
    dialogueSpeaker: 'Tariq (DevOps Lead)',
    estimatedDuration: '4 min',
    skillTags: ['Radical Accountability', 'Integrity Under Fire', 'Calculated Disclosure', 'Reputation Defense'],
    learningObjectives: [
      'Take immediate, unembellished ownership of an error before being discovered.',
      'Present the mistake alongside the immediate fix and preventive protocol.',
      'Transform an operational blunder into an exhibition of high integrity.'
    ],
    reflectionPrompt: 'When you make a serious mistake, is your first instinct to hide it and hope it passes, or step forward immediately?',
    options: [
      {
        id: 'opt-17a',
        label: 'A',
        text: 'Pretend you know nothing: "I have no idea, maybe it was a bad cloud sync?"',
        intent: 'Deceptive cover-up',
        feedback: {
          situationAnalysis: 'Git logs and server audits will inevitably trace the commit to you within 20 minutes, turning an honest mistake into a career-ending integrity failure.',
          decisionReview: {
            accomplished: 'Bought 15 minutes of false safety.',
            strengths: ['None'],
            risks: ['When caught in a lie, trust is permanently destroyed', 'Immediate termination risk']
          },
          perspectiveCheck: {
            otherInterpretation: 'Tariq: "They lied directly to my face. I can never trust their code or words again."',
            missingInformation: 'How easily server logs can be queried (spoiler: trivial).'
          },
          consequences: {
            shortTerm: 'Panic while they inspect the commit logs.',
            longTerm: 'Reputation as deceitful and untrustworthy.',
            tradeoffs: 'Fatal.'
          },
          alternativeNaturalResponse: '"It was my commit. Here is the rollback PR and what caused the gap."'
        } as any
      },
      {
        id: 'opt-17b',
        label: 'B',
        text: 'Own it instantly with remediation: "Yes Tariq, that was my commit. I executed the staging cache migration without setting the preserve flag. I’ve already drafted the restore script, and I’m ready to push it right now. I’ve also added a dry-run check so this cannot recur."',
        intent: 'Flawless radical ownership with immediate solution',
        feedback: {
          situationAnalysis: 'Taking prompt ownership, explaining the technical cause without emotional whining, and immediately presenting both the fix and preventive safeguard converts an error into a demonstration of elite reliability.',
          decisionReview: {
            accomplished: 'Protected trust, restored the environment, and established high professional character.',
            strengths: ['Zero defensiveness', 'Solution-first orientation', 'Prevents future systemic failures'],
            risks: ['None; mistakes happen in engineering, but integrity is rare']
          },
          perspectiveCheck: {
            otherInterpretation: 'Tariq respects the speed and honesty of the confession: "Mistake happened, but they owned it and fixed it before I even finished asking."',
            missingInformation: 'None.'
          },
          consequences: {
            shortTerm: 'Dev environment restored in minutes.',
            longTerm: 'Tariq trusts you with greater architectural responsibility because you don’t hide failures.',
            tradeoffs: 'Temporary humility.'
          },
          alternativeNaturalResponse: '"That was my script. Here is the fix and the post-mortem safeguard."',
          skillDevelopment: {
            skill: 'Solution-Coupled Confession',
            practicalExercise: 'Never report a mistake without simultaneously handing the supervisor the drafted fix.'
          },
          scoreIndicator: {
            emotionalRegulation: 98,
            socialAwareness: 95,
            strategicThinking: 97,
            assertiveness: 92
          }
        }
      },
      {
        id: 'opt-17c',
        label: 'C',
        text: 'Confess, but blame the documentation: "It was my script, but the docs were completely misleading and outdated, so it’s really the infrastructure team’s fault."',
        intent: 'Deflective excuse-making',
        feedback: {
          situationAnalysis: 'Pairing an admission with finger-pointing negates the admission and makes you sound petty.',
          decisionReview: {
            accomplished: 'Admitted action, but shed blame.',
            strengths: ['Might highlight bad docs'],
            risks: ['Makes you look allergic to accountability', 'Fosters inter-team resentment']
          },
          perspectiveCheck: {
            otherInterpretation: 'Tariq hears: "I made a mistake, but I refuse to take responsibility."',
            missingInformation: 'Docs clarity.'
          },
          consequences: {
            shortTerm: 'Argument over docs quality.',
            longTerm: 'Viewed as someone who constantly passes the buck.',
            tradeoffs: 'Damages accountability.'
          },
          alternativeNaturalResponse: '"Take total ownership of the execution; suggest docs improvements in the debrief later."'
        } as any
      },
      {
        id: 'opt-17d',
        label: 'D',
        text: 'Break down in tears and apologize repeatedly, pleading not to get fired.',
        intent: 'Hysterical self-deprecation',
        feedback: {
          situationAnalysis: 'Excessive emotional displays force colleagues to manage your psychological breakdown rather than fix the technical problem.',
          decisionReview: {
            accomplished: 'Expresses guilt.',
            strengths: ['None'],
            risks: ['Signals lack of emotional resilience for senior roles']
          },
          perspectiveCheck: {
            otherInterpretation: 'Colleagues feel awkward and view you as emotionally fragile.',
            missingInformation: 'None.'
          },
          consequences: {
            shortTerm: 'Awkwardness; delays the technical restore.',
            longTerm: 'Passed over for high-stakes projects.',
            tradeoffs: 'Poor.'
          },
          alternativeNaturalResponse: '"Keep tone clinical and solution-focused."'
        } as any
      }
    ]
  },

  // 018
  {
    id: 'sc-018',
    number: '018',
    title: 'The Strategic Ask for Help',
    category: 'manipulation-defense',
    difficulty: 2,
    setting: 'Senior Engineer’s Desk',
    context: 'You have been stuck on a complex distributed systems bug for four hours. You need guidance from a senior staff engineer who is known for being extremely busy and impatient with junior inquiries.',
    characterDialogue: '"Yeah? What do you need? Make it fast, I’ve got a product review in ten minutes."',
    dialogueSpeaker: 'Victor (Staff Engineer)',
    estimatedDuration: '3 min',
    skillTags: ['Efficient Communication', 'Prepared Inquiring', 'Time Respect', 'Cognitive Framing'],
    learningObjectives: [
      'Structure an ask for help that demonstrates thorough prior effort.',
      'Isolate the exact decision fork to respect senior colleagues’ time.',
      'Avoid sounding helpless or intellectually dependent.'
    ],
    reflectionPrompt: 'When you ask for help, do you dump the whole problem on someone, or frame the specific impasse?',
    options: [
      {
        id: 'opt-18a',
        label: 'A',
        text: 'Say: "I’m completely stuck and nothing is working, can you just look at my code and tell me what’s wrong?"',
        intent: 'Helpless dumping',
        feedback: {
          situationAnalysis: 'Dumping an unstructured problem on a busy senior signals laziness and lack of diagnostic effort.',
          decisionReview: {
            accomplished: 'Asked for help.',
            strengths: ['None'],
            risks: ['Victor gets irritated, shooes you away, and forms a low opinion of your competence']
          },
          perspectiveCheck: {
            otherInterpretation: 'Victor thinks: "They want me to do their thinking for them. I don’t have time for this."',
            missingInformation: 'What you’ve already tried.'
          },
          consequences: {
            shortTerm: 'Victor snaps: "Read the docs and try again."',
            longTerm: 'Hesitancy to ask questions in the future.',
            tradeoffs: 'Destroys senior mentorship opportunities.'
          },
          alternativeNaturalResponse: '"I isolated the bug to two hypotheses. Here is the 60-second summary."'
        } as any
      },
      {
        id: 'opt-18b',
        label: 'B',
        text: 'Deliver a structured 45-second brief: "Victor, I’ve isolated the deadlock to the thread pool handoff. I tested hypothesis A (lock contention) and ruled it out. I’m down to a choice between bumping the buffer size or refactoring the async queue. What trade-off would you evaluate first?"',
        intent: 'High-leverage decision fork presentation',
        feedback: {
          situationAnalysis: 'This shows you did the hard diagnostic work yourself, narrowed the problem to two viable options, and only ask for high-level architectural calibration.',
          decisionReview: {
            accomplished: 'Respects his time, showcases your competence, and makes it easy for him to answer in 30 seconds.',
            strengths: ['Precision communication', 'Demonstrates high agency', 'Extracts exact expert insight'],
            risks: ['Requires thorough preparation before approaching']
          },
          perspectiveCheck: {
            otherInterpretation: 'Victor thinks: "This person is sharp. They did their homework and asked a real engineering question."',
            missingInformation: 'None.'
          },
          consequences: {
            shortTerm: 'Victor gives a 20-second definitive answer that unblocks you instantly.',
            longTerm: 'Victor enjoys helping you and becomes a strong internal advocate.',
            tradeoffs: 'Takes 5 minutes of prep before knocking.'
          },
          alternativeNaturalResponse: '"Here is the problem, the 2 things I ruled out, and the specific trade-off decision I need your eye on."',
          skillDevelopment: {
            skill: 'The 3-Part Help Framework',
            practicalExercise: 'Always present: 1) What is broken, 2) What you already ruled out, 3) The specific decision fork.'
          },
          scoreIndicator: {
            emotionalRegulation: 95,
            socialAwareness: 98,
            strategicThinking: 97,
            assertiveness: 92
          }
        }
      },
      {
        id: 'opt-18c',
        label: 'C',
        text: 'Decide not to bother him, spend the next three days suffering in silence, and miss the sprint deadline.',
        intent: 'Paralyzed self-reliance',
        feedback: {
          situationAnalysis: 'Wasting days in silent pride because you fear asking for help is an irresponsible waste of team time.',
          decisionReview: {
            accomplished: 'Avoided disturbing Victor.',
            strengths: ['None'],
            risks: ['Missed deadlines', 'Severe sprint failure', 'Seen as unproductive']
          },
          perspectiveCheck: {
            otherInterpretation: 'Team wonders why you didn’t speak up after 2 hours of being blocked.',
            missingInformation: 'Team standard for blocking issues.'
          },
          consequences: {
            shortTerm: 'Deadlines missed.',
            longTerm: 'Reputation for slow delivery.',
            tradeoffs: 'Pride over productivity.'
          },
          alternativeNaturalResponse: '"Ask for help once you exceed a reasonable time threshold."'
        } as any
      },
      {
        id: 'opt-18d',
        label: 'D',
        text: 'Complain to your manager that Victor is unapproachable and mean.',
        intent: 'Immature escalation',
        feedback: {
          situationAnalysis: 'Complaining about a senior peer without ever attempting a professional conversation reflects poorly on you.',
          decisionReview: {
            accomplished: 'Complained.',
            strengths: ['None'],
            risks: ['Manager wonders why you can’t navigate basic office interactions']
          },
          perspectiveCheck: {
            otherInterpretation: 'Leadership sees you as brittle and difficult.',
            missingInformation: 'None.'
          },
          consequences: {
            shortTerm: 'Tension with Victor.',
            longTerm: 'Alienation from the engineering team.',
            tradeoffs: 'Disastrous.'
          },
          alternativeNaturalResponse: '"Learn how to speak the senior engineer’s language."'
        } as any
      }
    ]
  },

  // 019
  {
    id: 'sc-019',
    number: '019',
    title: 'The Emotional Extortionist',
    category: 'manipulation-defense',
    difficulty: 4,
    setting: 'Campus Dorm / Shared Apartment',
    context: 'A close friend skipped mandatory lab exams to go to a party. They now pressure you to forge their signature on the attendance roster, using your past friendship as emotional leverage.',
    characterDialogue: '"If you were really my friend, you’d do this for me. After everything I’ve done for you, you’re just going to let me fail the class? That’s cold."',
    dialogueSpeaker: 'Brett (Friend)',
    estimatedDuration: '4 min',
    skillTags: ['Guilt Neutralization', 'Ethical Boundaries', 'False-Equivalence Defense', 'Frame Control'],
    learningObjectives: [
      'Dissect emotional extortion that weaponizes loyalty to force complicity in wrongdoing.',
      'Separate genuine friendship from manipulative leverage.',
      'Deliver an unshakeable moral boundary without accepting manufactured guilt.'
    ],
    reflectionPrompt: 'When someone says "if you were really my friend...", do you feel guilty or recognize it as manipulation?',
    options: [
      {
        id: 'opt-19a',
        label: 'A',
        text: 'Cave in and forge the signature because you can’t bear the thought of them being mad at you.',
        intent: 'Compliance under emotional extortion',
        feedback: {
          situationAnalysis: 'Committing academic fraud under emotional blackmail risks expulsion and trains the manipulator that guilt guarantees your obedience.',
          decisionReview: {
            accomplished: 'Kept Brett happy today.',
            strengths: ['Avoided immediate conflict'],
            risks: ['Expulsion/disciplinary record', 'Brett will demand greater crimes in the future']
          },
          perspectiveCheck: {
            otherInterpretation: 'Brett sees that guilt is a master key to your obedience.',
            missingInformation: 'The university’s zero-tolerance policy on forgery.'
          },
          consequences: {
            shortTerm: 'High anxiety awaiting audit.',
            longTerm: 'Loss of self-respect; entangled in dishonest schemes.',
            tradeoffs: 'Risks your entire degree for someone else’s hangover.'
          },
          alternativeNaturalResponse: '"I care about you, but I will not falsify academic documents. I’ll help you study for the makeup, but that’s where the line is."'
        } as any
      },
      {
        id: 'opt-19b',
        label: 'B',
        text: 'Expose the manipulative weaponization of friendship: "Brett, a real friend doesn’t ask me to risk academic expulsion to cover for a party. I value our friendship and I’ll help you talk to the professor or study for the makeup, but I will not forge signatures. Don’t confuse loyalty with complicity."',
        intent: 'Inversion of the loyalty frame and unshakeable ethical boundary',
        feedback: {
          situationAnalysis: 'Inverting the "real friend" weapon turns the moral mirror directly back onto Brett, exposing his selfish exploitation while offering legitimate, safe assistance.',
          decisionReview: {
            accomplished: 'Neutralized the guilt-trip, protected your academic standing, and held high ethical standards.',
            strengths: ['Mastery of boundary framing', 'Refuses false guilt', 'Provides constructive alternative support'],
            risks: ['Brett may throw a tantrum because his manipulation failed']
          },
          perspectiveCheck: {
            otherInterpretation: 'Brett realizes his extortion tactic was completely exposed and that you are morally unbribeable.',
            missingInformation: 'None.'
          },
          consequences: {
            shortTerm: 'Brett sulks, but realizes he must face his own consequences.',
            longTerm: 'He respects your integrity; never asks you to commit crimes again.',
            tradeoffs: 'Requires withstanding emotional guilt in the moment.'
          },
          alternativeNaturalResponse: '"I will never commit fraud for anyone. Let’s figure out how you talk to the instructor."',
          skillDevelopment: {
            skill: 'The Loyalty Inversion',
            practicalExercise: 'When someone says "if you were a friend, you would do X bad thing", answer: "A real friend would never ask me to do X."'
          },
          scoreIndicator: {
            emotionalRegulation: 98,
            socialAwareness: 97,
            strategicThinking: 99,
            assertiveness: 99
          }
        }
      },
      {
        id: 'opt-19c',
        label: 'C',
        text: 'Report Brett to the Dean immediately for asking.',
        intent: 'Aggressive nuclear escalation',
        feedback: {
          situationAnalysis: 'Reporting a friend to authorities when no crime has yet occurred destroys the relationship permanently when a simple "No" would have sufficed.',
          decisionReview: {
            accomplished: 'Scorched earth policy.',
            strengths: ['Ethical vigilance'],
            risks: ['Extreme overreaction', 'Mutual social circle will view you as radioactive']
          },
          perspectiveCheck: {
            otherInterpretation: 'Brett and mutual peers view you as vengeful and dangerous.',
            missingInformation: 'None.'
          },
          consequences: {
            shortTerm: 'Dorm drama explosion.',
            longTerm: 'Social isolation.',
            tradeoffs: 'Overkill.'
          },
          alternativeNaturalResponse: '"Reserve administrative reporting for actual uncorrected harms."'
        } as any
      },
      {
        id: 'opt-19d',
        label: 'D',
        text: 'Say yes, but then "forget" to do it and lie that you tried.',
        intent: 'Passive-aggressive deception',
        feedback: {
          situationAnalysis: 'Lying about an agreement creates double betrayal and reveals a cowardly inability to say no.',
          decisionReview: {
            accomplished: 'Avoided saying no.',
            strengths: ['None'],
            risks: ['Brett discovers you lied, losing all respect for your honesty']
          },
          perspectiveCheck: {
            otherInterpretation: 'Brett feels betrayed and deceived.',
            missingInformation: 'None.'
          },
          consequences: {
            shortTerm: 'Messy argument later.',
            longTerm: 'Loss of straightforward character.',
            tradeoffs: 'Cowardice.'
          },
          alternativeNaturalResponse: '"Be direct and truthful in the moment."'
        } as any
      }
    ]
  },

  // 020
  {
    id: 'sc-020',
    number: '020',
    title: 'The Authority Dispute',
    category: 'manipulation-defense',
    difficulty: 4,
    setting: 'Department Strategy Council',
    context: 'The department head proposes an architectural initiative that overlooks a massive security vulnerability that could expose user records. Challenging the authority figure in front of the department is dangerous for your standing.',
    characterDialogue: '"This architecture is final. We don’t have time for second-guessing from junior members."',
    dialogueSpeaker: 'Professor Thorne (Department Head)',
    estimatedDuration: '4 min',
    skillTags: ['Tactful Dissent', 'Authority Calibration', 'Objective Risk Framing', 'De-personalization'],
    learningObjectives: [
      'Dissent against hierarchical authority without triggering status defense.',
      'Frame critical risks as protective of the leader’s own reputation.',
      'Use objective regulatory and technical benchmarks to depersonalize the issue.'
    ],
    reflectionPrompt: 'When an authority figure is steering toward disaster, do you keep quiet to protect yourself, or speak up with strategic tact?',
    options: [
      {
        id: 'opt-20a',
        label: 'A',
        text: 'Challenge him bluntly: "You’re completely wrong, Professor Thorne. If you deploy this, our security will be breached and it’ll be your fault."',
        intent: 'Blunt defiance of hierarchy',
        feedback: {
          situationAnalysis: 'Directly attacking a leader’s competence in public triggers their survival instincts to crush you to maintain institutional authority.',
          decisionReview: {
            accomplished: 'Voiced the risk.',
            strengths: ['Bravery'],
            risks: ['Thorne digs in his heels out of pride', 'Retaliation against your career and grades']
          },
          perspectiveCheck: {
            otherInterpretation: 'Thorne hears an insubordinate junior trying to publicly humiliate him.',
            missingInformation: 'Thorne’s sensitivity to public challenge.'
          },
          consequences: {
            shortTerm: 'Thorne shuts you down and forces the plan through anyway.',
            longTerm: 'You are blacklisted from research labs.',
            tradeoffs: 'Sacrifices influence to make a point.'
          },
          alternativeNaturalResponse: '"Framing the risk as protecting Thorne is far more persuasive than public defiance."'
        } as any
      },
      {
        id: 'opt-20b',
        label: 'B',
        text: 'Align with his goals and introduce the risk as a compliance shield: "Understood Professor Thorne. I completely agree we must keep momentum. My only concern is protecting the department from the revised ISO-27001 audit standards next month. If external auditors flag this specific endpoint, it could stall your launch timeline. Could I draft a quick 2-page mitigation patch for that single vector so your rollout proceeds without regulatory hurdles?"',
        intent: 'Strategic alignment and protective framing',
        feedback: {
          situationAnalysis: 'Framing your dissent as a protective measure to ensure HIS vision succeeds and shields HIM from external regulatory audits eliminates ego defensiveness and aligns incentives.',
          decisionReview: {
            accomplished: 'Fixed the security vulnerability while respecting hierarchy and safeguarding the leader’s ego.',
            strengths: ['Peak strategic persuasion', 'Zero insubordination', 'Positions you as a high-value indispensable lieutenant'],
            risks: ['Requires extra work to draft the mitigation patch yourself']
          },
          perspectiveCheck: {
            otherInterpretation: 'Thorne thinks: "They are looking out for my reputation and compliance risks. Smart."',
            missingInformation: 'None.'
          },
          consequences: {
            shortTerm: 'Thorne approves your mitigation patch: "Good catch, write it up."',
            longTerm: 'Thorne promotes you as a trusted key advisor.',
            tradeoffs: 'Requires humble phrasing to achieve a monumental strategic victory.'
          },
          alternativeNaturalResponse: '"I want to ensure your rollout avoids regulatory friction. Here is the shield."',
          skillDevelopment: {
            skill: 'The Executive Shield Frame',
            practicalExercise: 'Never tell a leader they are making a mistake; show them how to avoid an external ambush.'
          },
          scoreIndicator: {
            emotionalRegulation: 98,
            socialAwareness: 99,
            strategicThinking: 99,
            assertiveness: 92
          }
        }
      },
      {
        id: 'opt-20c',
        label: 'C',
        text: 'Say nothing and let the disaster happen so you can say "I told you so" later.',
        intent: 'Cynical schadenfreude',
        feedback: {
          situationAnalysis: 'Allowing a catastrophe that harms users just to validate personal vanity is an egregious breach of ethics.',
          decisionReview: {
            accomplished: 'Protected personal comfort.',
            strengths: ['None'],
            risks: ['Data breach occurs', 'Users harmed', 'You could have prevented it']
          },
          perspectiveCheck: {
            otherInterpretation: 'When investigated, if notes show you knew and stayed silent, you share culpability.',
            missingInformation: 'None.'
          },
          consequences: {
            shortTerm: 'Silent satisfaction.',
            longTerm: 'Disaster damages everyone, including your resume.',
            tradeoffs: 'Petty vanity over professional duty.'
          },
          alternativeNaturalResponse: '"Always intervene when security or safety is at risk."'
        } as any
      },
      {
        id: 'opt-20d',
        label: 'D',
        text: 'Leak the flaw anonymously to a competitor or tech journalist.',
        intent: 'Malicious sabotage',
        feedback: {
          situationAnalysis: 'Leaking internal documents breaches nondisclosure agreements and invites legal prosecution.',
          decisionReview: {
            accomplished: 'Sabotaged the department.',
            strengths: ['None'],
            risks: ['Lawsuits, criminal charges, expulsion']
          },
          perspectiveCheck: {
            otherInterpretation: 'You are viewed as a criminal leaker.',
            missingInformation: 'None.'
          },
          consequences: {
            shortTerm: 'Public scandal.',
            longTerm: 'Blacklisted from the entire industry.',
            tradeoffs: 'Self-destruction.'
          },
          alternativeNaturalResponse: '"Handle internal technical disputes through rigorous internal channels."'
        } as any
      }
    ]
  },

  // 021
  {
    id: 'sc-021',
    number: '021',
    title: 'The Midnight Ping',
    category: 'conflict-resolution',
    difficulty: 2,
    setting: 'Personal Phone / WhatsApp at 11:45 PM',
    context: 'A coworker who struggles with personal time management messages you late at night requesting routine project assets that are not needed until Tuesday.',
    characterDialogue: '"Hey, sorry to ping so late! Can you send me the latest deck file right now? Trying to look over it before bed."',
    dialogueSpeaker: 'Gabe (Coworker)',
    estimatedDuration: '3 min',
    skillTags: ['Asynchronous Boundaries', 'Availability Conditioning', 'Pacing Discipline', 'Habit Calibration'],
    learningObjectives: [
      'Resist the dopamine and anxiety urge to reply instantly to late-night pings.',
      'Train colleagues on your communication latency without rude lectures.',
      'Preserve sleep quality and non-work mental clarity.'
    ],
    reflectionPrompt: 'When your phone buzzes before sleep, do you feel an overwhelming compulsion to check it and reply immediately?',
    options: [
      {
        id: 'opt-21a',
        label: 'A',
        text: 'Jump out of bed, boot up your laptop, search for the file, and send it immediately with an apology for taking 5 minutes.',
        intent: 'Instant submissive compliance',
        feedback: {
          situationAnalysis: 'Replying at 11:45 PM trains Gabe that you are on 24/7 call and reinforces his habit of midnight requests.',
          decisionReview: {
            accomplished: 'Sent the file.',
            strengths: ['Fast customer service'],
            risks: ['Ruins sleep hygiene', 'Establishes expectation of 24/7 responsiveness', 'Encourages poor planning by Gabe']
          },
          perspectiveCheck: {
            otherInterpretation: 'Gabe: "Awesome, they are always awake and ready to work late for me."',
            missingInformation: 'Whether it was an emergency (it wasn’t).'
          },
          consequences: {
            shortTerm: 'Gabe gets the file; you stay up another hour with insomnia.',
            longTerm: 'Midnight pings become routine.',
            tradeoffs: 'Sacrifices personal health to be a digital concierge.'
          },
          alternativeNaturalResponse: '"Leave it untouched until morning. Reply at 8:30 AM."'
        } as any
      },
      {
        id: 'opt-21b',
        label: 'B',
        text: 'Do not open the message. Go to sleep. Reply the next morning at 8:45 AM: "Morning Gabe, here is the deck link. See you at standup."',
        intent: 'Disciplined asynchronous boundary conditioning',
        feedback: {
          situationAnalysis: 'The most effective boundary requires zero confrontation: simply do not respond until working hours. Silence during the night passively establishes that your evenings are offline.',
          decisionReview: {
            accomplished: 'Protected sleep, provided the file during business hours, and trained Gabe on expectations without a single harsh word.',
            strengths: ['Effortless boundary setting', 'Zero emotional friction', 'High executive maturity'],
            risks: ['Requires tolerating unread notifications']
          },
          perspectiveCheck: {
            otherInterpretation: 'Gabe realizes: "Right, they don’t check work stuff at midnight. That makes sense."',
            missingInformation: 'None.'
          },
          consequences: {
            shortTerm: 'Full night of restful sleep; file delivered on time in the morning.',
            longTerm: 'Gabe stops messaging you after hours.',
            tradeoffs: 'None.'
          },
          alternativeNaturalResponse: '"Send files during standard work hours."',
          skillDevelopment: {
            skill: 'Latency Calibration',
            practicalExercise: 'Control people’s expectations by controlling your response latency, not by sending angry paragraphs.'
          },
          scoreIndicator: {
            emotionalRegulation: 96,
            socialAwareness: 94,
            strategicThinking: 95,
            assertiveness: 92
          }
        }
      },
      {
        id: 'opt-21c',
        label: 'C',
        text: 'Send an angry rant right now: "It’s midnight! How dare you message me! Have you no respect for personal life?!"',
        intent: 'Explosive boundary enforcement',
        feedback: {
          situationAnalysis: 'Reacting with fury at midnight reveals that you are indeed awake, checking messages, and easily provoked.',
          decisionReview: {
            accomplished: 'Vented rage.',
            strengths: ['Clear message'],
            risks: ['Makes you look erratic and hysterical over what was likely a careless casual ping']
          },
          perspectiveCheck: {
            otherInterpretation: 'Gabe thinks you are hyper-aggressive and unhinged.',
            missingInformation: 'None.'
          },
          consequences: {
            shortTerm: 'Awkwardness all week.',
            longTerm: 'Gabe avoids you entirely.',
            tradeoffs: 'Rude and unnecessary.'
          },
          alternativeNaturalResponse: '"Silence is far more powerful than midnight rage."'
        } as any
      },
      {
        id: 'opt-21d',
        label: 'D',
        text: 'Block Gabe on all platforms immediately.',
        intent: 'Extreme avoidant overreaction',
        feedback: {
          situationAnalysis: 'Blocking a coworker over an off-hours message makes professional coordination impossible.',
          decisionReview: {
            accomplished: 'Blocked coworker.',
            strengths: ['None'],
            risks: ['Inability to work together on future sprints', 'HR complaints']
          },
          perspectiveCheck: {
            otherInterpretation: 'Coworker and manager view you as childishly unmanageable.',
            missingInformation: 'None.'
          },
          consequences: {
            shortTerm: 'Communication blackout.',
            longTerm: 'Workplace reprimand.',
            tradeoffs: 'Catastrophic.'
          },
          alternativeNaturalResponse: '"Manage notification settings; do not block active teammates."'
        } as any
      }
    ]
  },

  // 022
  {
    id: 'sc-022',
    number: '022',
    title: 'The Public Rejection',
    category: 'conflict-resolution',
    difficulty: 3,
    setting: 'All-Hands Company Auditorium',
    context: 'You and a peer both applied for the Lead Architect position. During the quarterly all-hands, the director announces on stage that your peer got the role. Everyone in your row turns to look at your face.',
    characterDialogue: '"Please give a warm congratulations to our new Lead Architect, Nina!"',
    dialogueSpeaker: 'Managing Director',
    estimatedDuration: '4 min',
    skillTags: ['Grace Under Defeat', 'Public Poise', 'Long-Horizon Strategy', 'Ego Mastery'],
    learningObjectives: [
      'Master the public poker face and maintain total status under public defeat.',
      'Applaud an adversary authentically to signal strength rather than weakness.',
      'Position yourself for the next strategic opportunity without sulking.'
    ],
    reflectionPrompt: 'When you lose a competition publicly, do you display bitterness or project gracious strength?',
    options: [
      {
        id: 'opt-22a',
        label: 'A',
        text: 'Slump in your chair, scowl visibly, and refuse to applaud while looking down at your phone.',
        intent: 'Sore loser petulance',
        feedback: {
          situationAnalysis: 'Public sulking confirms to everyone in leadership that they made the right decision not to promote you to executive responsibility.',
          decisionReview: {
            accomplished: 'Showed you were displeased.',
            strengths: ['None'],
            risks: ['Destroys executive credibility', 'Validates leadership’s choice of Nina', 'Memorable image of immaturity']
          },
          perspectiveCheck: {
            otherInterpretation: 'Leadership and peers look at you and think: "Glad we didn’t pick them; clearly lacks emotional maturity."',
            missingInformation: 'None.'
          },
          consequences: {
            shortTerm: 'Pity and contempt from colleagues.',
            longTerm: 'Permanently tagged as emotionally immature for future roles.',
            tradeoffs: 'Fatal to career ambition.'
          },
          alternativeNaturalResponse: '"Applaud with genuine posture; debrief privately tomorrow."'
        } as any
      },
      {
        id: 'opt-22b',
        label: 'B',
        text: 'Sit tall, smile warmly, applaud Nina with calm dignity, and make relaxed eye contact with colleagues: "Nina will do great work."',
        intent: 'Immovable public grace and high-status sportsmanship',
        feedback: {
          situationAnalysis: 'Exhibiting calm, magnanimous confidence when experiencing public defeat projects supreme internal power. It signals that your self-worth does not depend on a single announcement.',
          decisionReview: {
            accomplished: 'Maintained elite professional status, disarmed gossipers, and signaled readiness for the next leadership tier.',
            strengths: ['Unshakeable public composure', 'Eliminates pity from observers', 'Forces leadership to admire your maturity'],
            risks: ['Requires profound internal discipline in the moment']
          },
          perspectiveCheck: {
            otherInterpretation: 'The director notices your applause and thinks: "Incredible composure. We need to find another major opportunity for them soon."',
            missingInformation: 'The specific hiring criteria that tipped it to Nina.'
          },
          consequences: {
            shortTerm: 'Zero awkwardness; colleagues respect your poise.',
            longTerm: 'First in line for the next executive opening.',
            tradeoffs: 'Must process the disappointment privately later.'
          },
          alternativeNaturalResponse: '"Congratulations to Nina. I’m excited for what the team will build."',
          skillDevelopment: {
            skill: 'High-Status Defeat Reception',
            practicalExercise: 'When someone else wins, clap the loudest. Confidence is never threatened by another’s victory.'
          },
          scoreIndicator: {
            emotionalRegulation: 99,
            socialAwareness: 98,
            strategicThinking: 98,
            assertiveness: 95
          }
        }
      },
      {
        id: 'opt-22c',
        label: 'C',
        text: 'Storm out of the auditorium in the middle of the speech.',
        intent: 'Dramatic exit',
        feedback: {
          situationAnalysis: 'Storming out creates an unforgettable scene of unprofessional instability.',
          decisionReview: {
            accomplished: 'Made a dramatic statement.',
            strengths: ['None'],
            risks: ['Disciplinary review', 'Total destruction of professional reputation']
          },
          perspectiveCheck: {
            otherInterpretation: 'Everyone talks about your walkout for weeks with amusement.',
            missingInformation: 'None.'
          },
          consequences: {
            shortTerm: 'Humiliation.',
            longTerm: 'Career dead-end.',
            tradeoffs: 'Unmitigated disaster.'
          },
          alternativeNaturalResponse: '"Never leave the room until the formal session concludes."'
        } as any
      },
      {
        id: 'opt-22d',
        label: 'D',
        text: 'Corner the director right after the applause and demand to know why you were passed over.',
        intent: 'Impulsive post-ceremony confrontation',
        feedback: {
          situationAnalysis: 'Ambushing leadership immediately after a celebratory event looks desperate and emotionally uncalibrated.',
          decisionReview: {
            accomplished: 'Demanded answers.',
            strengths: ['None'],
            risks: ['Director is in celebration mode; your ambush feels hostile and tone-deaf']
          },
          perspectiveCheck: {
            otherInterpretation: 'Director feels ambushed and defensive.',
            missingInformation: 'The director’s scheduled debrief availability.'
          },
          consequences: {
            shortTerm: 'Tense, unsatisfactory brush-off.',
            longTerm: 'Seen as lacking situational awareness.',
            tradeoffs: 'Book a formal feedback 1-on-1 for next week instead.'
          },
          alternativeNaturalResponse: '"Schedule a structured debrief for next week to understand specific growth requirements."'
        } as any
      }
    ]
  },

  // 023
  {
    id: 'sc-023',
    number: '023',
    title: 'The Repeated Boundary Breach',
    category: 'conflict-resolution',
    difficulty: 3,
    setting: 'Open Studio / Co-working Space',
    context: 'You have repeatedly asked a peer not to use your personal design workstation and tools without asking. You return from lunch to find them sitting in your chair with their feet up, using your hardware again.',
    characterDialogue: '"Oh relax! Don’t be so uptight, we’re all friends here! I’m just charging my phone."',
    dialogueSpeaker: 'Dorian (Peer)',
    estimatedDuration: '4 min',
    skillTags: ['Boundary Escalation', 'Direct Confrontation', 'Non-apologetic Firmness', 'Physical Space Control'],
    learningObjectives: [
      'Handle individuals who laugh off or dismiss verbal boundaries.',
      'Escalate from gentle reminders to firm physical and verbal presence.',
      'Refuse to be shamed into tolerating disrespect under the guise of "being uptight".'
    ],
    reflectionPrompt: 'When someone laughs at your boundary and calls you "uptight", do you second-guess yourself or hold the line?',
    options: [
      {
        id: 'opt-23a',
        label: 'A',
        text: 'Laugh nervously and say: "Haha yeah, I guess I’m just crazy, take your time!"',
        intent: 'Self-minimizing surrender',
        feedback: {
          situationAnalysis: 'Calling yourself crazy to appease a boundary violator destroys your self-respect and confirms to them that your boundaries are meaningless.',
          decisionReview: {
            accomplished: 'Avoided confrontation.',
            strengths: ['None'],
            risks: ['Dorian will continue using your space indefinitely', 'Internal self-loathing']
          },
          perspectiveCheck: {
            otherInterpretation: 'Dorian learns that calling you "uptight" instantly causes you to fold.',
            missingInformation: 'None.'
          },
          consequences: {
            shortTerm: 'You wait for him to finish.',
            longTerm: 'You lose control of your own workspace.',
            tradeoffs: 'Complete surrender of sovereignty.'
          },
          alternativeNaturalResponse: '"I’ve asked you twice to ask first. Please unplug your device and move now."'
        } as any
      },
      {
        id: 'opt-23b',
        label: 'B',
        text: 'Stand directly in front of him, maintain steady eye contact without smiling, and say with low, measured tonality: "Dorian, I’ve asked you twice before to respect my workstation. Calling me uptight does not change the boundary. Please unplug your phone and move to the common table now."',
        intent: 'Unshakable, calibrated direct escalation',
        feedback: {
          situationAnalysis: 'Using physical presence, steady eye contact, and a low, serious vocal tone communicates that the time for polite hints has passed, while refusing to engage with his attempt to shame you.',
          decisionReview: {
            accomplished: 'Held the boundary unblinkingly, rejected the emotional gaslighting, and enforced immediate compliance.',
            strengths: ['Unambiguous authority', 'Zero emotional hysterics', 'Refuses to debate whether you are "uptight"'],
            risks: ['Dorian might mutter as he moves, which can be safely ignored']
          },
          perspectiveCheck: {
            otherInterpretation: 'Dorian realizes that his social charm defense has zero effect on you and that you will not back down.',
            missingInformation: 'None.'
          },
          consequences: {
            shortTerm: 'Dorian unplugs his phone and vacates the chair.',
            longTerm: 'He never touches your workstation again.',
            tradeoffs: 'Requires enduring 10 seconds of social tension.'
          },
          alternativeNaturalResponse: '"I need you to move from my desk right now."',
          skillDevelopment: {
            skill: 'The Refusal of Deflection',
            practicalExercise: 'Never defend against labels like "uptight". Re-assert the physical requirement immediately.'
          },
          scoreIndicator: {
            emotionalRegulation: 96,
            socialAwareness: 92,
            strategicThinking: 95,
            assertiveness: 99
          }
        }
      },
      {
        id: 'opt-23c',
        label: 'C',
        text: 'Physically shove his feet off your desk and throw his phone across the room.',
        intent: 'Physical battery and property damage',
        feedback: {
          situationAnalysis: 'Initiating physical violence or property destruction makes you the legal and disciplinary offender.',
          decisionReview: {
            accomplished: 'Removed his feet.',
            strengths: ['None'],
            risks: ['Police report, campus security expulsion, paying for broken phone']
          },
          perspectiveCheck: {
            otherInterpretation: 'Dorian becomes the victim; you become the criminal.',
            missingInformation: 'None.'
          },
          consequences: {
            shortTerm: 'Security called.',
            longTerm: 'Expulsion.',
            tradeoffs: 'Disastrous.'
          },
          alternativeNaturalResponse: '"Never touch another person’s body or property in anger."'
        } as any
      },
      {
        id: 'opt-23d',
        label: 'D',
        text: 'Go to the studio manager and cry about someone using your desk.',
        intent: 'Helpless escalation',
        feedback: {
          situationAnalysis: 'Running to a manager before looking someone in the eye and giving a direct command looks childish.',
          decisionReview: {
            accomplished: 'Complained to authority.',
            strengths: ['None'],
            risks: ['Studio manager wonders why you cannot say "get off my desk" yourself']
          },
          perspectiveCheck: {
            otherInterpretation: 'Management views you as lacking basic peer assertiveness.',
            missingInformation: 'None.'
          },
          consequences: {
            shortTerm: 'Manager asks Dorian to move.',
            longTerm: 'Dorian mocks you behind your back for needing a chaperone.',
            tradeoffs: 'Sacrifices peer respect.'
          },
          alternativeNaturalResponse: '"Deliver direct commands before invoking authorities."'
        } as any
      }
    ]
  },

  // 024
  {
    id: 'sc-024',
    number: '024',
    title: 'The Panic Decision Trap',
    category: 'conflict-resolution',
    difficulty: 4,
    setting: 'Emergency Product Council',
    context: 'A minor cloud outage has triggered widespread panic in your startup team. The CEO is demanding an immediate decision to switch cloud providers entirely within the next 30 minutes, which could corrupt customer data.',
    characterDialogue: '"We are losing users every minute! We need to pull the plug and migrate to AWS right now! Who’s with me?!"',
    dialogueSpeaker: 'Harrison (CEO / Co-founder)',
    estimatedDuration: '4 min',
    skillTags: ['Crisis Anchoring', 'Panic Resistance', 'Pacing Control', 'Second-Order Risk Forecasting'],
    learningObjectives: [
      'Hold psychological stability when the room is in full collective panic.',
      'Slow the decision tempo without appearing unresponsive to the emergency.',
      'Prevent catastrophic impulsive decisions under time pressure.'
    ],
    reflectionPrompt: 'When everyone around you is panicking, do you join the adrenaline wave or anchor the room in data?',
    options: [
      {
        id: 'opt-24a',
        label: 'A',
        text: 'Agree enthusiastically: "Yes, let’s do it right now! I’ll start running the migration scripts!"',
        intent: 'Joining the panic stampede',
        feedback: {
          situationAnalysis: 'Migrating an entire production database in 30 minutes without verification guarantees data loss and unrecoverable company damage.',
          decisionReview: {
            accomplished: 'Appeased the CEO’s panicked urgency.',
            strengths: ['Signals compliance'],
            risks: ['Catastrophic data corruption', 'Destroys company viability', 'You will be blamed for executing the botched migration']
          },
          perspectiveCheck: {
            otherInterpretation: 'The CEO feels temporary adrenaline relief until the database drops.',
            missingInformation: 'The root cause of the outage.'
          },
          consequences: {
            shortTerm: 'Panic-driven migration fails midway.',
            longTerm: 'Company faces existential crisis.',
            tradeoffs: 'Fatal.'
          },
          alternativeNaturalResponse: '"Harrison, a rushed migration during active degradation guarantees data loss. Give engineering 10 minutes to verify the upstream ISP status first."'
        } as any
      },
      {
        id: 'opt-24b',
        label: 'B',
        text: 'Anchor the room with calm, decisive diagnostic pacing: "Harrison, I hear the urgency on user churn. But a live migration under active degradation carries an 80% risk of permanent database corruption. Give us exactly 8 minutes to run the diagnostic on the upstream load balancer. If it’s an unrecoverable host failure, we execute the migration plan. If it’s just DNS propagation, we fix it in 3 minutes without data loss. Let’s look at the telemetry dashboard now."',
        intent: 'Disciplined crisis anchoring with time-boxed diagnostic protocol',
        feedback: {
          situationAnalysis: 'By acknowledging the urgency, quantifying the catastrophic risk of a hasty move, and proposing a tight 8-minute time-box with a clear decision criteria, you regain strategic control of the room without looking paralyzed.',
          decisionReview: {
            accomplished: 'Anchored the room, prevented a suicidal engineering blunder, and provided a structured decision protocol under extreme pressure.',
            strengths: ['Peak crisis leadership', 'Controls room tempo', 'Quantifies risks clearly'],
            risks: ['Requires standing firm against executive panic']
          },
          perspectiveCheck: {
            otherInterpretation: 'The CEO catches his breath and realizes: "8 minutes is reasonable; they are protecting us from data suicide."',
            missingInformation: 'The telemetry logs.'
          },
          consequences: {
            shortTerm: 'Diagnostic identifies a simple DNS glitch fixed in 4 minutes; database saved.',
            longTerm: 'The CEO views you as the calm anchor of the entire organization.',
            tradeoffs: 'Requires supreme nerve under fire.'
          },
          alternativeNaturalResponse: '"Let’s take 8 minutes for telemetry before we risk permanent data loss."',
          skillDevelopment: {
            skill: 'The 8-Minute Crisis Anchor',
            practicalExercise: 'When executives demand immediate catastrophic action, offer a short, time-boxed diagnostic pause.'
          },
          scoreIndicator: {
            emotionalRegulation: 99,
            socialAwareness: 97,
            strategicThinking: 99,
            assertiveness: 98
          }
        }
      },
      {
        id: 'opt-24c',
        label: 'C',
        text: 'Roll your eyes and say: "Harrison, you’re being totally hysterical, calm down."',
        intent: 'Condescending invalidation of leadership',
        feedback: {
          situationAnalysis: 'Telling a panicked CEO he is hysterical in front of the team attacks his status and causes him to double down on his bad decision to prove his authority.',
          decisionReview: {
            accomplished: 'Insulted the CEO.',
            strengths: ['None'],
            risks: ['Instant firing', 'Guarantees he will execute the reckless migration out of spite']
          },
          perspectiveCheck: {
            otherInterpretation: 'CEO feels insulted and challenged in front of subordinates.',
            missingInformation: 'None.'
          },
          consequences: {
            shortTerm: 'Furious shouting match.',
            longTerm: 'You are terminated on the spot.',
            tradeoffs: 'Disastrous.'
          },
          alternativeNaturalResponse: '"Validate the urgency; guide the execution."'
        } as any
      },
      {
        id: 'opt-24d',
        label: 'D',
        text: 'Silently slip out of the Zoom room and turn off your WiFi.',
        intent: 'Cowardly desertion',
        feedback: {
          situationAnalysis: 'Abandoning a team during a critical production emergency is considered professional desertion.',
          decisionReview: {
            accomplished: 'Escaped the heat.',
            strengths: ['None'],
            risks: ['Immediate termination for cause', 'Blacklisted']
          },
          perspectiveCheck: {
            otherInterpretation: 'Team sees someone who abandons the ship at the first sign of trouble.',
            missingInformation: 'None.'
          },
          consequences: {
            shortTerm: 'Company burns without you.',
            longTerm: 'Unemployable.',
            tradeoffs: 'Total cowardice.'
          },
          alternativeNaturalResponse: '"Stand at your post during a crisis."'
        } as any
      }
    ]
  }
];
