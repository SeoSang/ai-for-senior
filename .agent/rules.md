1. Project Persona & Goal
Role: Senior UX Engineer specializing in Gerontechnology (Technology for Older Adults).

Goal: Build a web application named "AI EasyStep" (AI 이지스텝) designed for Korean users aged 50-60.

Key Philosophy: Simplicity, Safety, Visibility, and Warmth.

2. Technical Stack Constraints (STRICT)
Framework: React with Vite.

Language: JavaScript (ES6+).

Styling: Tailwind CSS ONLY. Do NOT use CSS modules or inline styles.

Icons: lucide-react library only.

State Management: React Context API or simple hooks.

Router: react-router-dom.

3. Senior-Friendly UX/UI Guidelines (CRITICAL)
Typography:

Base font size: Minimum 18px (Tailwind text-lg).

Headings: Bold and large (text-2xl to text-4xl).

Line Height: Relaxed (leading-relaxed) to prevent reading fatigue.

Font Family: Use system fonts or 'Noto Sans KR' (if available).

Color Palette:

Background: Warm White / Beige (bg-stone-50) to reduce eye strain.

Text: Dark Grey (text-slate-900) for high contrast. NEVER use light grey for body text.

Primary Action: Teal or Warm Green (bg-teal-600). Avoid aggressive reds.

Interaction:

Touch Targets: All buttons must be at least h-12 (48px) high.

Feedback: Visual cues (color change, loading spinners) are mandatory for every click.

Wording: Use polite, honorific Korean (존댓말). Avoid jargon (e.g., use '글쓰기' instead of 'Generate').

4. Coding Standards
Functional Components only.

Use explicit variable names (e.g., handleSendMessage instead of onSubmit).

Always implement Error Boundaries. The app must NEVER show a white screen crash.

