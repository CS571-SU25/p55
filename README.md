# AIBox Frontend

AIBox is an interactive web application for learning prompt engineering with generative AI tools. This repository contains the **frontend** implementation, built with React and React Router.

## 📂 Project Structure

```
frontend/
├── public/
│   └── index.html             # HTML template
├── src/                       # Application source
│   ├── assets/                # Logo and static assets
│   ├── components/            # Reusable UI components
│   │   ├── NavBar.jsx
│   │   ├── PromptForm.jsx
│   │   ├── ResponseView.jsx
│   │   ├── LoginForm.jsx
│   │   ├── RegisterForm.jsx
│   │   ├── ContactInfo.jsx
│   │   └── ...
│   ├── pages/                 # Route components
│   │   ├── HomePage.jsx
│   │   ├── ChatPage.jsx
│   │   ├── ExamplesPage.jsx
│   │   ├── EvaluatePage.jsx
│   │   ├── RegisterPage.jsx
│   │   └── NotFoundPage.jsx
│   ├── api.js                 # Fetch wrapper for AI endpoints
│   ├── App.jsx                # React Router setup
│   └── index.js               # React entry point (imports Bootstrap CSS)
├── package.json               # Frontend dependencies & scripts
└── README.md                  # This file
```

## 🔧 Prerequisites

* Node.js 18+ & npm

## ⚛️ Frontend Setup

1. Navigate into `frontend` directory:

   ```bash
   cd frontend
   ```
2. Install dependencies:

   ```bash
   npm install
   ```
3. Run the development server:

   ```bash
   npm start
   ```

The app launches in your browser at `http://localhost:3000`.

## 🚀 Usage

* **Home** (`/`): Login or register to access features.
* **Chat** (`/chat`): Enter prompts, view AI responses and ratings.
* **Examples** (`/examples`): Browse and generate sample prompts.
* **Evaluate** (`/evaluate`): Submit prompts for star ratings and improvement advice.
* **Logout**: Clears session and returns to login.

## 🛠️ Customization

* **Styling**: Swap inline styles for a CSS/SCSS solution or UI library.
* **Backend Integration**: Connect to a completed AI backend by updating `api.js` endpoints.

## 📄 License

This project is open-source under the MIT License.
