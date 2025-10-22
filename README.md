# Resume Analyzer

Analyze and validate your resume with ATS accuracy

Application for evaluating a resume's compatibility with applicant tracking systems (ATS).
Allows you to upload a file, extract its content, analyze the information using artificial intelligence, and generate a compatibility score based on key recruiting criteria.

## 📸 Screenshots

![App Screenshot](https://github.com/thecoderbutcher/resume.analyzer/blob/main/screenshots/ra1.webp?raw=true)

![App Screenshot](https://github.com/thecoderbutcher/resume.analyzer/blob/main/screenshots/ra2.webp?raw=true)

![App Screenshot](https://github.com/thecoderbutcher/resume.analyzer/blob/main/screenshots/ra3.webp?raw=true)

## ⭐ Features

- Automated CV analysis with AI.
- Relevant keyword detection.
- Assessment of compatibility with ATS systems.
- Modern, fast, and minimalist interface.

Ideal for candidates looking to optimize their resume before submitting it or recruiters looking to streamline their screening process.

## 🖥️ Run Locally

Clone the project

```bash
  git clone https://github.com/thecoderbutcher/resume.analyzer.git
```

Go to the project directory

```bash
  cd resume.analyzer
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
root/
├── constants
├── src/
│   ├── assets/
│   ├── components/
│   ├── App.jsx
│   ├── index.css
│   └── main.jsx
├── store/ # Zustand context
└── index.html
```

## 🚀 Tech Stack

- React
- Node
- Zustand
- Puter.js
- TailwindCSS

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
