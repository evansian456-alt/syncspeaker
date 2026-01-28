# SyncSpeaker - GitHub Copilot Instructions

## Project Overview

SyncSpeaker is a simple web application built with vanilla HTML, CSS, and JavaScript. This is a lightweight, single-page application designed to run directly in the browser without any build tools or dependencies.

## Tech Stack

- **HTML5**: Semantic markup
- **CSS3**: Vanilla CSS (no preprocessors)
- **JavaScript**: Vanilla JavaScript (no frameworks)
- **Browser-based**: No build tools, no dependencies

## Project Structure

- `index.html` - Main and only HTML file containing all markup, styles, and scripts

## Coding Standards

### HTML
- Use HTML5 semantic elements where appropriate
- Maintain proper indentation (4 spaces)
- Keep all content in a single `index.html` file for simplicity
- Write void elements without closing slashes (e.g., `<meta>`, `<link>`) following HTML5 conventions

### CSS
- Write CSS inline within `<style>` tags in the HTML file
- Use modern CSS features (flexbox, grid, CSS variables)
- Follow mobile-first responsive design principles
- Maintain consistent spacing and formatting
- Use meaningful class names that describe purpose or function
- Prefer class selectors over ID selectors for styling
- Use the universal selector sparingly and intentionally

### JavaScript
- Write vanilla JavaScript (no frameworks or libraries)
- Include scripts inline within `<script>` tags at the end of the HTML file
- Use modern ES6+ syntax (const/let, arrow functions, template literals)
- Follow functional programming principles where appropriate
- Use meaningful variable and function names
- Add comments for complex logic or non-obvious code

### General Conventions
- Indentation: 4 spaces (no tabs)
- Line length: Aim for 80-100 characters where practical
- File encoding: UTF-8
- Line endings: LF (Unix-style)

## Design Principles

- **Simplicity**: Keep the codebase simple and maintainable
- **Self-contained**: Everything should work from a single HTML file
- **No dependencies**: Avoid external libraries and frameworks
- **Browser compatibility**: Support modern browsers (Chrome, Firefox, Safari, Edge)
- **Performance**: Optimize for fast loading and smooth user experience
- **Accessibility**: Follow basic ARIA and semantic HTML practices

## Patterns to Follow

- Keep styles scoped and organized by component or section
- Use CSS reset/normalization at the top of the style block
- Group related JavaScript functions together
- Initialize JavaScript after DOM content is loaded
- Use event delegation for dynamic content

## Patterns to Avoid

- Do not add external dependencies or npm packages
- Do not introduce build tools or compilation steps
- Avoid inline styles in HTML (use style blocks instead)
- Do not use jQuery or other JavaScript libraries
- Avoid global namespace pollution - wrap code in IIFE (Immediately Invoked Function Expressions) when needed

## Testing and Validation

- Test manually in multiple browsers
- Validate HTML using W3C validator
- Check for console errors in browser DevTools
- Test responsive behavior at different viewport sizes
- Verify accessibility using browser accessibility tools

## Comments and Documentation

- Add comments for complex algorithms or non-obvious behavior
- Document any browser-specific workarounds
- Keep comments concise and meaningful
- Avoid obvious comments that restate the code
