# Task Decomposition
## T-01: Semantic Landmark Tree
- Create the semantic HTML structure.
- Use semantic landmark elements.
- Add an accessible skip link.
- Do not include CSS in this task.
## T-02A: Tokens & Reset
- Define reusable CSS design tokens using custom properties.
- Add a global CSS reset.
- Use CSS variables for colors.
- Do not include JavaScript in this task.
## T-02B: 2D Grid Layout
- Implement a responsive layout using CSS Grid.
- Use a single-column layout on mobile.
- Use a two-column layout on larger screens.
- Prevent horizontal scrolling at 375px.
- Do not include JavaScript in this task.
## T-02C: Theme Engine
- Implement light and dark theme switching.
- Persist the selected theme using localStorage key "theme".
- Use CSS variables for theme colors.
- Ensure theme toggling produces zero console errors.
## T-03: Modular Component Architecture

### T-03A: Hero Section
- Create a semantic hero section.
- Add a high-resolution portrait with explicit width and height.
- Add a headline and short personal pitch.

### T-03B: Theme Switcher
- Implement an accessible theme toggle button.
- Use aria-pressed to expose the current state.
- Update the theme icon dynamically.

### T-03C: Skills Matrix
- Group skills by category.
- Display skill badges using CSS Grid.

### T-03D: Project Cards
- Build self-contained project components using article elements.
- Include project title, technology tags, description, and links.

### T-03E: Contact Form
- Build a native HTML contact form.
- Use native HTML validation.
- Handle form state with client-side JavaScript.