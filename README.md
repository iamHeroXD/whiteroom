# WHITE ROOM — Emotional Intelligence & Strategic Decision System

> *"Understand the situation. Choose your response."*

WHITE ROOM is a premium, client-side web application for practicing emotional intelligence, social awareness, cold composure, and deliberate strategic decision-making.

Inspired by the disciplined, analytical atmosphere of high-stakes psychological training facilities, the system translates rigorous cognitive-behavioral principles into an interactive, frontend-first simulation environment.

---

## Key Features

1. **The Situation Simulator (Core Engine)**
   - 32 original, deeply authored scenarios across 8 tactical modules.
   - Realistic character dialogues, multi-stage branching, and contextual stakes.
   - Deterministic 7-section coaching feedback:
     - 01. Situation Analysis (Context, ambiguity, subtext)
     - 02. Decision Review (Accomplished, strengths, risks)
     - 03. Perspective Check (Other party interpretation, missing data)
     - 04. Consequence Trajectory (Short-term vs long-term tradeoffs)
     - 05. Alternative Natural Response (Spoken phrasing benchmark)
     - 06. Skill Development (Targeted mental exercise)
     - 07. Candidate Reflection (Write-in prompt saved to journal)

2. **Eight Specialized Curriculum Modules**
   - **Module 01: Social Intelligence** (Subtext, non-verbal cues, room dynamics)
   - **Module 02: Emotional Control** (Physiological regulation, 3-second pause)
   - **Module 03: Conversation Mastery** (Boundary articulation, rhythm, flow)
   - **Module 04: Strategic Thinking** (Incentives, leverage, second-order effects)
   - **Module 05: Manipulation Defense** (Guilt neutralization, coercion resistance)
   - **Module 06: Conflict Resolution** (De-escalation, ego bridges, agreements)
   - **Module 07: Digital Social Intelligence** (Asynchronous latency, flame wars)
   - **Module 08: Leadership & Teamwork** (Radical candor, credit allocation)

3. **16-Point EQ Baseline Diagnostic Assessment**
   - Untimed, comprehensive situational questionnaire across 6 dimensions.
   - Radar profile visualization, relative strengths, growth areas, and retake history.

4. **Personal Decision Journal**
   - Full CRUD reflection journal persisted in `localStorage`.
   - Domain filtering, date sorting, and instant text search.
   - Privacy-first: all reflections remain in the local browser.

5. **Progress & Operational Progression**
   - 4-Tier Candidate Progression: **Observer → Analyst → Strategist → Self-Mastered**.
   - Curriculum domain coverage visualization and qualitative reflection history.

6. **Saved Scenarios & Command Search**
   - Bookmark drills for iterative practice and quick launch.
   - Command Palette (`Ctrl+K` or `Cmd+K`) for keyboard navigation and drill lookups.

7. **Architectural Visual Identity**
   - Monochromatic, minimalist design system (`#F5F5F2` light, `#141414` dark).
   - Fully responsive on desktop, tablet, and mobile.
   - Reduced-motion support and sound signaling toggle.

---

## Tech Stack & Architecture

- **Framework:** React 18 + TypeScript + Vite
- **Styling:** Tailwind CSS (Custom monochromatic palette and architectural grid)
- **Icons:** Lucide React
- **Persistence:** LocalStorage with schema versioning (`whiteroom_state_v1`)
- **Execution:** 100% Client-Side. No external paid APIs or backend requirements.

---

## Running the Project Locally

### Prerequisites
- Node.js (v18 or higher)
- npm

### Installation & Execution

```bash
# Install dependencies
npm install

# Start local development server
npm run dev

# Run production build
npm run build

# Preview production build
npm run preview
```

The application runs locally at `http://127.0.0.1:5173/`.
