# CSS Organization Structure

This directory contains organized CSS files for the CAXiE Technologies website.

## File Structure

### Core Files
- **`base.css`** - Base styles, CSS variables, and global resets
- **`layout.css`** - Layout-specific styles for containers and page structure
- **`typography.css`** - Typography styles for headings, paragraphs, and text elements
- **`components.css`** - Reusable component styles (logos, buttons, cards, etc.)

### Specialized Files
- **`policy-pages.css`** - Combined styles for all policy pages (privacy, terms, cookies, do-not-sell)
- **`contact-form.css`** - Styles specifically for contact form setup page

## Usage

### Policy Pages
All policy pages (privacy.html, terms.html, cookies.html, do-not-sell.html) use:
```html
<link rel="stylesheet" href="/css/policy-pages.css" />
```

### Contact Form Page
The contact form setup page uses:
```html
<link rel="stylesheet" href="/css/contact-form.css" />
```

## CSS Variables

The following CSS custom properties are defined in `base.css`:
- `--primary-purple: #7c3aed`
- `--secondary-purple: #4c1d95`
- `--dark-purple: #1e1b4b`
- `--text-dark: #312e81`
- `--text-light: #6b7280`
- `--glass-bg: rgba(255, 255, 255, 0.85)`
- `--shadow-purple: rgba(31, 38, 135, 0.18)`
- `--shadow-logo: rgba(80, 0, 200, 0.10)`

## Benefits

1. **Maintainability** - Styles are organized by purpose and functionality
2. **Reusability** - Components can be easily reused across pages
3. **Performance** - Smaller, focused CSS files load faster
4. **Scalability** - Easy to add new styles without cluttering existing files
5. **Consistency** - Centralized variables ensure consistent theming

## Adding New Styles

- Add base styles to `base.css`
- Add layout styles to `layout.css`
- Add typography styles to `typography.css`
- Add component styles to `components.css`
- Create new specialized files for unique page requirements
