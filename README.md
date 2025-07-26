# 🎓 Educational Interactive Template

A clean, professional, and LLM-friendly React template designed for creating educational interactives.

## ✨ Features

- 🎨 **Beautiful Design**: Professional glassmorphism effects with gradient backgrounds
- 📱 **Mobile-First**: Percentage-based responsive layout that works on all devices
- 🤖 **LLM-Friendly**: Clean, semantic code structure that's easy for AI to understand and modify
- ⚡ **Performance Optimized**: Lightweight with modern CSS and minimal dependencies
- 🎯 **Multi-Stage Ready**: Perfect for step-by-step educational interactions
- ♿ **Accessible**: Built with accessibility best practices

## 🚀 Quick Start

### 1. Clone and Install
```bash
git clone <your-repo-url>
cd educational-template
npm install
```

### 2. Start Development
```bash
npm run dev
```

### 3. Add Your Content
Edit the `content-area` in `src/App.jsx`:
```jsx
<div className="content-area">
  {/* Your educational content goes here */}
  <h1>Welcome to Your Interactive</h1>
  <p>Start building your educational experience!</p>
</div>
```

## 🏗️ Structure

```
src/
├── App.jsx          # Clean React component (LLM-friendly)
├── App.css          # All styling (percentage-based)
├── main.jsx         # React entry point
└── index.css        # Global styles
```

## 🎯 Multi-Stage Interactives

Perfect for creating step-by-step educational experiences:

```jsx
import React, { useState } from 'react';

function App() {
  const [stage, setStage] = useState(1);

  const renderStage = () => {
    switch(stage) {
      case 1: return <IntroStage onNext={() => setStage(2)} />;
      case 2: return <ExerciseStage onNext={() => setStage(3)} />;
      case 3: return <SummaryStage onRestart={() => setStage(1)} />;
    }
  };

  return (
    <div className="app-container">
      <div className="app-wrapper">
        <div className="main-container">
          <div className="decorative-line-top"></div>
          <div className="content-area">
            {renderStage()}
          </div>
          <div className="decorative-line-bottom"></div>
        </div>
        <div className="floating-effects">
          <div className="floating-circle-1"></div>
          <div className="floating-circle-2"></div>
        </div>
      </div>
    </div>
  );
}
```

## 🎨 Styling Approach

- **Percentage-based layout**: All margins, padding, and sizing use percentages for perfect responsiveness
- **CSS-only styling**: No inline styles or complex Tailwind classes in React components
- **Clean separation**: Styling lives in `App.css`, React logic stays in `App.jsx`
- **LLM-friendly**: Simple class names that are self-explanatory

## 🛠️ Available Scripts

- `npm run dev` - Start development server
- `npm run build` - Build for production
- `npm run preview` - Preview production build
- `npm run lint` - Run ESLint

## 📦 Dependencies

- React 18+ 
- Vite (build tool)
- Tailwind CSS (minimal usage)
- Modern CSS features (gradients, backdrop-filter, clamp)

## 🎓 Perfect For

- Math concepts and visualizations
- Science simulations
- Language learning exercises
- Interactive tutorials
- Educational games
- Step-by-step problem solving

## 🤖 LLM-Friendly Features

- Clean, semantic HTML structure
- Self-explanatory CSS class names
- Minimal complexity in React components
- Clear separation of concerns
- Easy to understand and modify

## 📄 License

MIT License - feel free to use for educational projects!

## 🚀 Deploy

Deploy easily to:
- Vercel: `vercel --prod`
- Netlify: Drag and drop the `dist` folder
- GitHub Pages: Use GitHub Actions

---

**Built with ❤️ for educators and learners**