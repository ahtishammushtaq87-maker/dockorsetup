# University of Management and Technology Website

## Overview

A complete ReactJS Single Page Application (SPA) for a university website built with React Router and CSS.

## Features

- **Home Page** - Hero section, university introduction, and featured programs
- **Programs Page** - Displays all 7 programs with program cards
- **Program Detail Page** - Dynamic routing with program-specific details
- **Admission Page** - Admission criteria, process steps, and important dates
- **Faculty Page** - Faculty member cards with photos and expertise

## Tech Stack

- React 18 (Functional Components)
- React Router DOM v6
- Plain CSS (no Bootstrap required)

## Project Structure

```
src/
├── components/
│   ├── Navbar.jsx
│   ├── ProgramCard.jsx
│   └── FacultyCard.jsx
├── pages/
│   ├── Home.jsx
│   ├── Programs.jsx
│   ├── ProgramDetail.jsx
│   ├── Admission.jsx
│   └── Faculty.jsx
├── data/
│   ├── programs.js
│   └── faculty.js
├── App.js
├── index.js
├── App.css
└── (other assets)
public/
└── index.html
```

## Setup Instructions

### Option 1: Using Create React App (Recommended)

1. Create a new React app:
   ```bash
   npx create-react-app umt-website
   cd umt-website
   ```

2. Replace all files with the provided code:
   - Copy `src/` folder content into your project's `src/`
   - Copy `public/index.html` into your project's `public/`
   - Copy `package.json` or just run: `npm install react-router-dom`

3. Install dependencies:
   ```bash
   npm install
   ```

4. Start the development server:
   ```bash
   npm start
   ```

5. Open http://localhost:3000

### Option 2: Using Vite

1. Create a Vite project:
   ```bash
   npm create vite@latest umt-website -- --template react
   cd umt-website
   ```

2. Install dependencies:
   ```bash
   npm install
   ```

3. Replace the content of `src/` and `public/index.html` with provided files.

4. Run:
   ```bash
   npm run dev
   ```

## Component Architecture

### Data Flow
- All data stored in arrays inside `src/data/` folder
- Parent components pass data to child components via props
- Pages fetch data from arrays and render using `.map()`

### Routing
Routes defined in `App.js`:
- `/` - Home
- `/programs` - Programs list
- `/program/:id` - Program detail (dynamic routing)
- `/admission` - Admission info
- `/faculty` - Faculty members

### Key Features
- Fully responsive design (mobile-friendly)
- Hover animations and transitions
- Proper keys used in all `.map()` calls
- Invalid route handling (404 page)
- Clean, modular component structure
- Semantic HTML and accessibility best practices

## Browser Support

Modern browsers (Chrome, Firefox, Safari, Edge)

## License

Educational Project
