# Resumia

Boost, analyze and optimize your CV with artificial intelligence (ATS-Friend)

Resumia it's an application designed to evaluate, improve, and create resumes that are highly compatible with Applicant Tracking Systems (ATS).

Now it not only analyzes your resume, but also allows you to **generate a fully AI-optimized one**, ready to pass automated filters and stand out to recruiters.

## 📸 Screenshots

![App Screenshot](https://github.com/thecoderbutcher/resume.analyzer/blob/main/screenshots/resumia01.webp?raw=true)

![App Screenshot](https://github.com/thecoderbutcher/resume.analyzer/blob/main/screenshots/resumia02.webp?raw=true)

![App Screenshot](https://github.com/thecoderbutcher/resume.analyzer/blob/main/screenshots/resumia03.webp?raw=true)

![App Screenshot](https://github.com/thecoderbutcher/resume.analyzer/blob/main/screenshots/resumia04.webp?raw=true)

## ⭐ Features

- **AI-powered automated CV analysis.**
- **Relevant keyword detection** based on your profile and the position you're applying for.
- **ATS compatibility assessment** with detailed scoring.
- **AI-powered CV builder**, fully ATS-friendly.
- **Content optimization**, including experience, skills, and achievements.
- **Modern, fast, and minimalist** interface.
- Ideal for both **candidates** who want to stand out and **recruiters** looking to streamline the pre-selection process.

Resumia is the perfect tool to take your CV to the next level.

Upload, analyze, improve, or create your resume from scratch in just a few clicks.

## 🖥️ Run Locally

Clone the project

```bash
  git clone https://github.com/thecoderbutcher/resumia.git
```

Go to the project directory

```bash
  cd resumia
```

Install dependencies

```bash
  npm install
```

Start the server

```bash
  npm run dev
```

## 🗂️ Architecture

#### Frontend

```javascript
root
├── constants
│   ├── index.js      // Prompts and metric config
│   ├── language.js   // Application text
│   └── routes.jsx    // Aplication routes
├── schemas
│   ├── formSchema.js // Zod form validations
├── src
│   ├── assets
│   ├── components
│   ├── pages
│   │   ├── ResumeAnalyzer
│   │   │   ├── components
│   │   │   └── index.jsx
│   │   └── ResumeCreator
│   │   │   ├── components
│   │   │   └── index.jsx
│   ├── App.jsx
│   ├── index.css
│   ├── layout.jsx
│   └── main.jsx
├── store
│   ├── useCvStore.js   // Analyzer context
│   ├── useFormStore.js // Creator Context
│   └── useLangStore.js // Language Context
└── index.html
```

## 🚀 Tech Stack

- Node
- React
- Puter.js
- TailwindCSS
- Zustand
- Zod

## 🤝 Contributing

Contributions are always welcome!

See `contributing.md` for ways to get started. (coming soon)

Please adhere to this project's `code of conduct`.

## 📚 Lessons Learned

During the development of this application, we learned how to:

- Implement Zustand for efficient management of global state.
- Integrate a first approach to AI with Plugin.js.
- Improve the structure and organization of the frontend project, applying good architectural and maintainability practices.

## 📜 License

[GPL-3.0](https://choosealicense.com/licenses/gpl-3.0/)

## 🧑🏾‍💻 Authors

- [@thecoderbutcher](https://thecoderbutcher.site)
