# 🧠 Quiz App

A simple, interactive quiz application built with vanilla HTML, CSS, and JavaScript. Users answer a fixed set of questions and get their final score at the end.

##SCREENSHORTS OF PROJECT
<img width="792" height="633" alt="image" src="https://github.com/user-attachments/assets/639196ed-b696-4792-b514-0f0b4323252c" />
<img width="1536" height="605" alt="image" src="https://github.com/user-attachments/assets/a6863283-bf76-453b-9585-cd25ad40c8c5" />



## ✨ Features

- Fixed set of quiz questions loaded dynamically from a JSON file
- Instant answer selection and progression through questions
- Final score calculated and displayed at the end of the quiz
- Clean, responsive UI built with vanilla CSS
- Easy to update or extend — just edit the JSON file, no code changes needed
- No frameworks or external dependencies — runs entirely in the browser

## 🛠️ Tech Stack

- **HTML5** – Structure and markup
- **CSS3** – Styling and layout
- **JavaScript** – Quiz logic, scoring, and DOM manipulation
- **JSON** – Question bank, stored separately and fetched at runtime

## 📁 Project Structure

```
quiz-app/
├── index.html
├── style.css
├── script.js
├── questions.json
└── README.md
```

## 🧑‍💻 Getting Started

1. Clone the repository
   ```bash
   git clone https://github.com/<your-username>/quiz-app.git
   cd quiz-app
   ```
2. Since questions are loaded from `questions.json` via `fetch()`, opening `index.html` directly (`file://`) may be blocked by the browser's CORS policy. Run it through a local server instead:
   - **VS Code**: right-click `index.html` → "Open with Live Server"
   - **Python**: `python -m http.server`, then visit `http://localhost:8000`

No build tools or package installations required — it's a fully static front-end project.

## 📌 How It Works

1. `script.js` fetches the question set from `questions.json` on page load.
2. Each question is rendered dynamically with its multiple-choice options.
3. The user selects an answer for each question and moves to the next.
4. Once all questions are answered, the app calculates and displays the final score.

## 📝 Question Format (`questions.json`)

The questions file follows a simple structure — update or add questions here without touching any JavaScript:

```json
[
  {
    "question": "What does HTML stand for?",
    "options": [
      "Hyper Trainer Marking Language",
      "Hyper Text Markup Language",
      "Hyper Text Marketing Language",
      "Hyper Text Markup Leveler"
    ],
    "answer": "Hyper Text Markup Language"
  }
]
```

