# WARP.md

This file provides guidance to WARP (warp.dev) when working with code in this repository.

## Project Overview

HobbyClass is an Angular 18 application for discovering and booking hobby classes with professional mentors. The project uses a modern standalone component architecture with TypeScript, SCSS, and Angular Router.

## Key Architecture

### Standalone Components
- All components use Angular's standalone architecture (no NgModules)
- Components are self-contained with inline templates and styles
- Lazy loading is implemented for the home component route

### Directory Structure
- `src/app/core/` - Core application components (header, shared layout)
- `src/app/pages/` - Route-based page components (home, explore, login, mentor-details)
- `src/app/shared/` - Reusable components (experience-live-classes)
- `src/assets/` - Static assets (images referenced in component styles)

### Routing Configuration
- Uses functional routing with `provideRouter`
- Home route uses lazy loading: `loadComponent()`
- Other routes use direct component imports
- Catch-all route redirects to home

### Styling Approach
- Inline styles in component definitions using template literals
- Primary brand color: `#020061` (dark blue)
- Secondary color: `#b2b2b2` (light gray)
- Font family: 'Source Sans Pro' used throughout
- Responsive layouts using flexbox
- Background images referenced from `src/assets/` directory

## Common Commands

### Development
```bash
# Start development server (http://localhost:4200)
npm start
# or
ng serve

# Build for production
npm run build
# or
ng build

# Build with watch mode (development)
npm run watch
# or
ng build --watch --configuration development
```

### Testing
```bash
# Run unit tests
npm test
# or
ng test

# Run tests for specific component
ng test --include="**/app.component.spec.ts"
```

### Code Generation
```bash
# Generate new component
ng generate component component-name

# Generate component in specific directory
ng generate component pages/new-page
ng generate component shared/new-shared-component

# Other generators
ng generate service services/my-service
ng generate guard guards/auth-guard
ng generate pipe pipes/my-pipe
```

### Angular CLI Helpers
```bash
# Get help
ng help

# Check Angular CLI version
ng version

# Lint (if configured)
ng lint
```

## Development Guidelines

### Component Creation
- Use standalone: true for all new components
- Place page components in `src/app/pages/`
- Place reusable components in `src/app/shared/`
- Use inline templates and styles for simple components
- Import only necessary Angular modules in the imports array

### Styling Patterns
- Use the established color scheme (#020061, #b2b2b2, white)
- Follow the inline styling pattern used throughout the project
- Use Source Sans Pro font family for consistency
- Maintain the established spacing and layout patterns (100px horizontal padding, etc.)

### Asset Management
- Place images in `src/assets/` directory
- Reference assets using relative paths: `url('src/assets/filename.jpg')`
- Background images should use `background-size: cover` and `background-position: center`

### Route Structure
- Page components should be placed in `src/app/pages/[page-name]/`
- Update `app.routes.ts` when adding new routes
- Use lazy loading for larger page components
- Maintain the catch-all redirect to home page

## Project Configuration

### TypeScript Configuration
- Strict mode enabled with additional strict checks
- ES2022 target with bundler module resolution
- Angular compiler options enforce strict templates and injection parameters

### Build Configuration
- Production builds include output hashing and budget warnings
- Development builds include source maps and optimization disabled
- SCSS preprocessing enabled (inlineStyleLanguage: "scss")
- Assets copied from `public/` directory

### Testing Setup
- Karma test runner with Jasmine framework
- Chrome launcher for browser testing
- Coverage reports generated in coverage directory
