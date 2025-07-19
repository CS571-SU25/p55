# AIBox

AIBox is an interactive web application for learning prompt engineering with generative AI tools. Users can log in, chat with an AI model (DeepSeek via LangChain & Flask backend), explore sample prompts, and see how different prompts affect AI responses. A dynamic rating system provides feedback on generated outputs.

---

## 📂 Project Structure

```
root/
├── aibox-backend/          # Flask + LangChain backend
│   ├── app.py              # Entry point
│   ├── config.py           # Environment config loader
│   ├── models/             # AI model implementations
│   │   ├── base_model.py
│   │   └── deepseek_model.py
│   ├── routes/             # Flask route handlers
│   │   └── generate.py
│   ├── services/           # Business logic wrappers
│   │   └── ai_service.py
│   ├── utils/              # Helpers (prompt formatting)
│   │   └── prompt_helpers.py
│   └── requirements.txt    # Backend dependencies
│
└── aibox-frontend/         # React frontend
    ├── public/
    │   └── index.html
    ├── src/
    │   ├── assets/         # Logo and static assets
    │   ├── components/     # Reusable UI components
    │   │   ├── NavBar.jsx
    │   │   ├── PromptForm.jsx
    │   │   ├── ResponseView.jsx
    │   │   ├── LoginForm.jsx
    │   │   ├── RegisterForm.jsx
    │   │   └── ContactInfo.jsx
    │   ├── pages/          # Route components
    │   │   ├── HomePage.jsx  # Login/intro
    │   │   ├── ChatPage.jsx  # Chat interface
    │   │   ├── ExamplesPage.jsx
    │   │   ├── RegisterPage.jsx
    │   │   └── NotFoundPage.jsx
    │   ├── api.js          # Fetch wrapper for `/generate`
    │   ├── App.jsx         # React Router setup
    │   └── index.js        # React entry point
    └── package.json        # Frontend dependencies & scripts
```

---

## 🔧 Prerequisites

* **Python 3.10+**
* **Node.js 18+ & npm**
* **DeepSeek API key** (for AI backend)

---

## ⚙️ Backend Setup (aibox-backend)

1. **Navigate** into `aibox-backend`:

   ```bash
   cd aibox-backend
   ```

2. **Create & activate** a virtual environment:

   ```bash
   python -m venv .venv
   source .venv/bin/activate      # macOS/Linux
   .\.venv\Scripts\activate    # Windows
   ```

3. **Install** dependencies:

   ```bash
   pip install -r requirements.txt
   ```

4. **Configure** environment variables in a `.env` file:

   ```env
   DEEPSEEK_API_KEY=your_deepseek_api_key_here
   ```

5. **Run** the server:

   ```bash
   python app.py
   ```

   * The API will serve on `http://localhost:5000`.
   * Endpoint: `POST /generate` accepts `{ prompt: string }` and returns AI response + rating.

---

## ⚛️ Frontend Setup (aibox-frontend)

1. **Navigate** into `aibox-frontend`:

   ```bash
   cd aibox-frontend
   ```

2. **Install** dependencies:

   ```bash
   npm install
   ```

3. **Run** the dev server:

   ```bash
   npm start
   ```

   * The app launches in your browser at `http://localhost:3000`.
   * Features a login/registration flow (mocked via sessionStorage).

---

## 🚀 Usage

1. **Home (`/`)**: Log in with any username/password or register a new account.
2. **Chat (`/chat`)**: Enter your prompt, generate AI output & rating.
3. **Examples (`/examples`)**: Browse curated sample prompts.
4. **Logout**: Clears session and returns to login.
5. **Contact**: Footer on every page with support info & company details.

---

## 🛠️ Customization

* **Swap LLM**: Replace `DeepSeekModel` with another implementation (OpenAI, Claude) under `models/` and update `services/ai_service.py`.
* **Styling**: Extend or replace inline styles with a CSS/SCSS solution.
* **Persistence**: Integrate a real backend or database for user auth & history.

---

## 📄 License

This project is open-source and free to use under the MIT License.
