# Sinenhlanhla Magubane Portfolio

A modern, responsive portfolio website built with React, TypeScript, and Vite. This portfolio showcases professional experience, skills, projects, and contact information with a beautiful gradient design.

## ✨ Features

- **Homepage** - Hero section with introduction and social links
- **CV/Resume** - Comprehensive display of skills, experience, and education
- **Projects** - Showcase of recent work and side projects
- **Contact** - Contact form and information with social media links
- **Responsive Design** - Fully responsive across all devices
- **Modern UI** - Beautiful gradient design with smooth transitions
- **Environment Configuration** - Easy content updates via `.env` file

## 🚀 Tech Stack

- **React 19** - UI library
- **TypeScript** - Type-safe development
- **Vite** - Fast build tool and dev server
- **Tailwind CSS** - Utility-first CSS framework
- **ESLint** - Code linting

## 📦 Installation

1. Clone the repository:
```bash
git clone https://github.com/sinenhlanhla-magubane/portfolio.git
cd sinenhlanhla-magubane-portfolio
```

2. Install dependencies:
```bash
npm install
```

3. Create and configure your `.env` file:
```bash
cp .env.example .env
```
Edit the `.env` file with your personal information.

## 🔧 Environment Variables

Create a `.env` file in the root directory with the following variables:

```env
# Personal Information
VITE_NAME=Your Name
VITE_TITLE=Your Job Title
VITE_EMAIL=your.email@example.com
VITE_PHONE=+XX XXX XXXX
VITE_LOCATION=Your Location
VITE_LINKEDIN=https://linkedin.com/in/your-profile
VITE_GITHUB=https://github.com/your-username
VITE_BIO=Your bio description

# Skills (comma-separated)
VITE_FRONTEND_SKILLS=React,TypeScript,JavaScript
VITE_BACKEND_SKILLS=Node.js,Express,MongoDB
VITE_TOOLS_SKILLS=Git,Docker,AWS

# Experience
VITE_EXPERIENCE_1_TITLE=Job Title
VITE_EXPERIENCE_1_COMPANY=Company Name
VITE_EXPERIENCE_1_PERIOD=Date Range
VITE_EXPERIENCE_1_DESCRIPTION=Job description

# Projects
VITE_PROJECT_1_NAME=Project Name
VITE_PROJECT_1_DESCRIPTION=Project description
VITE_PROJECT_1_TECH=React,Node.js
VITE_PROJECT_1_LINK=https://github.com/...

# Education
VITE_EDUCATION_1_DEGREE=Your Degree
VITE_EDUCATION_1_INSTITUTION=Your Institution
VITE_EDUCATION_1_YEAR=Year
```

## 💻 Development

Start the development server:
```bash
npm run dev
```

The site will be available at `http://localhost:5173`

## 🏗️ Build

Build for production:
```bash
npm run build
```

Preview production build:
```bash
npm run preview
```

## 📁 Project Structure

```
sinenhlanhla-magubane-portfolio/
├── src/
│   ├── pages/
│   │   ├── Homepage.tsx    # Hero/landing page
│   │   ├── CV.tsx          # Resume/CV page
│   │   ├── Project.tsx     # Projects showcase
│   │   └── Contact.tsx     # Contact page with form
│   ├── components/         # Reusable components
│   ├── features/           # Feature modules
│   ├── assets/             # Static assets
│   ├── App.tsx             # Main app component
│   ├── main.tsx            # Entry point
│   └── index.css           # Global styles
├── .env                    # Environment variables
├── package.json            # Dependencies
└── README.md               # This file
```

## 🎨 Customization

1. **Update Personal Information**: Edit the `.env` file
2. **Modify Styles**: Update Tailwind classes in component files
3. **Add Pages**: Create new components in `src/pages/`
4. **Add Projects**: Add more project entries in `.env` file

## 📝 License

This project is open source and available under the [MIT License](LICENSE).

---

## Technical Details - React + TypeScript + Vite

This portfolio is built using a minimal setup to get React working in Vite with HMR and ESLint rules.

Currently, two official plugins are available:

- [@vitejs/plugin-react](https://github.com/vitejs/vite-plugin-react/blob/main/packages/plugin-react) uses [Babel](https://babeljs.io/) (or [oxc](https://oxc.rs) when used in [rolldown-vite](https://vite.dev/guide/rolldown)) for Fast Refresh
- [@vitejs/plugin-react-swc](https://github.com/vitejs/vite-plugin-react/blob/main/packages/plugin-react-swc) uses [SWC](https://swc.rs/) for Fast Refresh

## React Compiler

The React Compiler is not enabled on this template because of its impact on dev & build performances. To add it, see [this documentation](https://react.dev/learn/react-compiler/installation).

## Expanding the ESLint configuration

If you are developing a production application, we recommend updating the configuration to enable type-aware lint rules:

```js
export default defineConfig([
  globalIgnores(['dist']),
  {
    files: ['**/*.{ts,tsx}'],
    extends: [
      // Other configs...

      // Remove tseslint.configs.recommended and replace with this
      tseslint.configs.recommendedTypeChecked,
      // Alternatively, use this for stricter rules
      tseslint.configs.strictTypeChecked,
      // Optionally, add this for stylistic rules
      tseslint.configs.stylisticTypeChecked,

      // Other configs...
    ],
    languageOptions: {
      parserOptions: {
        project: ['./tsconfig.node.json', './tsconfig.app.json'],
        tsconfigRootDir: import.meta.dirname,
      },
      // other options...
    },
  },
])
```

You can also install [eslint-plugin-react-x](https://github.com/Rel1cx/eslint-react/tree/main/packages/plugins/eslint-plugin-react-x) and [eslint-plugin-react-dom](https://github.com/Rel1cx/eslint-react/tree/main/packages/plugins/eslint-plugin-react-dom) for React-specific lint rules:

```js
// eslint.config.js
import reactX from 'eslint-plugin-react-x'
import reactDom from 'eslint-plugin-react-dom'

export default defineConfig([
  globalIgnores(['dist']),
  {
    files: ['**/*.{ts,tsx}'],
    extends: [
      // Other configs...
      // Enable lint rules for React
      reactX.configs['recommended-typescript'],
      // Enable lint rules for React DOM
      reactDom.configs.recommended,
    ],
    languageOptions: {
      parserOptions: {
        project: ['./tsconfig.node.json', './tsconfig.app.json'],
        tsconfigRootDir: import.meta.dirname,
      },
      // other options...
    },
  },
])
```
