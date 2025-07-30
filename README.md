
# 💬 Real-Time Chat Application

## 📘 Project Overview

A real-time chat app with WebSocket communication, user authentication, chat rooms, and message history using MongoDB.

## 🚀 Features

- 🔐 User Login & Registration (JWT-based)
- 💬 Real-time messaging using Socket.IO
- 🧠 Chat History stored in MongoDB
- 🎯 Room-based messaging
- 🖥️ Clean frontend (HTML/CSS/JS)

## 🧰 Tech Stack

- Frontend: HTML, CSS, JavaScript
- Backend: Node.js, Express.js, Socket.IO
- Database: MongoDB (Mongoose)
- Auth: JWT + bcrypt

## 📦 Folder Structure

```
real-time-chat/
├── backend/
│   ├── models/
│   ├── routes/
│   └── server.js
├── frontend/
│   ├── index.html
│   ├── style.css
│   └── script.js
```

## ⚙️ Setup Instructions

1. Clone the repo and install dependencies

```bash
cd backend
npm install
node server.js
```

2. Environment Variables (`.env`)

```
MONGO_URI=your_mongo_uri
JWT_SECRET=supersecretkey
PORT=5000
```

3. Open frontend: `frontend/index.html` in browser.

## 🔐 API Endpoints

- `POST /api/auth/register`
- `POST /api/auth/login`
- `GET /api/messages/:room`

## ✍️ Author

- Your Name
- GitHub: [yourusername]

## 📃 License

MIT License
