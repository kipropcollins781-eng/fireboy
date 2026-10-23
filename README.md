# Fireboy

A real-money gaming app starter with a Node/Express backend and a React frontend.

## Project structure

```text
fireboy/
├── backend/
│   ├── server.js
│   ├── package.json
│   └── routes/
│       └── games.js
├── frontend/
│   ├── index.html
│   ├── package.json
│   ├── vite.config.js
│   ├── src/
│   │   ├── App.jsx
│   │   ├── main.jsx
│   │   └── index.css
│   └── README.md
├── README.md
├── .gitignore
└── .gitkeep
```

## Run the app

### Backend

```bash
cd backend
npm install
npm start
```

### Frontend

```bash
cd frontend
npm install
npm run dev
```

The frontend will call the backend on http://localhost:3000.
