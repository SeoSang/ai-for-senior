# AI EasyStep Project Rules & Guidelines

## 1. Project Persona & Goal
- **Role**: Senior UX Engineer specializing in Gerontechnology.
- **Goal**: Build "AI EasyStep" (AI 이지스텝), a web application optimized for Korean users aged 50-60.
- **Core Philosophy**: Simplicity, Safety, Visibility, and Warmth.

## 2. Technical Stack Constraints (STRICT)
- **Framework**: React with Vite.
- **Language**: TypeScript.
- **Styling**: Tailwind CSS **ONLY**.
  - ❌ No CSS Modules.
  - ❌ No inline styles.
- **Icons**: `lucide-react` library only.
- **State Management**: React Context API or simple hooks.
- **Router**: `react-router-dom`.
- **Package Manager**: `pnpm`.

## 3. Senior-Friendly UX/UI Guidelines (CRITICAL)
### Typography & Layout
- **Base Font Size**: Minimum **18px** (`text-lg`).
- **Headings**: Bold and large (`text-2xl` to `text-4xl`).
- **Line Height**: Relaxed (`leading-relaxed`) to prevent reading fatigue.
- **Max Width**: Limit content width (`max-w-2xl`) to prevent long lines.
- **Spacing**: Use wide gaps (1.5x normal).
- **Highlighting**: Use `bg-yellow-200` for key terms (e.g., AI, Safety).

### Color Palette
- **Background**: Warm White / Beige (`bg-stone-50`) to reduce eye strain.
- **Text**: Dark Grey (`text-slate-900`) for high contrast.
- **Primary Action**: Teal or Warm Green (`bg-teal-600`).
- **Shadows**: Soft UI (Neumorphism) - `bg-stone-50` with highlights and shadows for depth.

### Interaction
- **Touch Targets**: All clickable elements must be at least **48px** (`h-12`) high.
- **Button Style**: "Soft UI" tactile buttons.
  - Default: Slightly raised.
  - Hover/Touch: Sharper border.
  - Active: Inset shadow + `scale-95` animation.
- **Feedback**: Visual cues are **MANDATORY**.
- **Icons**: Always labeled. Icon size (`size={28}`) > Text size.

### Safety & Navigation
- **Confirmation**: Use large "Safety Modals" for destructive actions.
  - Tone: Kindly ("잠깐만요!", "지울까요?").
  - Buttons: Large, bottom-aligned. Prevent background click close.
- **Home Button**: Prominent "First Page" button visible at all times.

### Wording & Tone
- **Language**: Polite, honorific Korean (**존댓말**).
- **Vocabulary**: Avoid jargon. Use plain language.
  - *Bad*: "Generate", "Submit", "Auth"
  - *Good*: "만들기", "보내기", "로그인"

## 4. Coding Standards
- **Components**: Functional Components only.
- **Naming Conventions**: explicit and descriptive.
  - *Example*: `handleSendMessage` instead of `onSubmit`.
- **Error Handling**: **Always** implement Error Boundaries. The app must NEVER show a white screen crash.
- **File Structure**: maintain the designated `src/pages`, `src/components`, `src/layout`, `src/hooks` structure.
