# 🚀 SkillSync

SkillSync is a full-stack MERN web application designed to connect students with internships, jobs, workshops, hackathons, and career opportunities through a centralized platform.

The platform allows users to explore opportunities, apply for events, manage applications, and maintain their professional profiles while providing organizers and administrators with tools to manage opportunities efficiently.

---

## ✨ Features

### 👨‍🎓 Student
- User Registration & Login
- View Available Opportunities
- Apply for Opportunities
- Manage Profile
- Track Applications

### 🏢 Organizer
- Post New Opportunities
- Manage Posted Opportunities
- View Applications

### 👨‍💼 Admin
- Admin Authentication
- Manage Users
- Manage Opportunities
- Monitor Platform Activities

### ⚙ Backend Features
- REST APIs
- MongoDB Database Integration
- Mongoose Models & Validation
- Session Management
- Cookies Support
- File Upload using Multer
- Email Support using Nodemailer
- CRUD Operations
- CORS Configuration

---

## 🛠 Tech Stack

### Frontend
- React.js
- Vite
- React Router
- Axios
- CSS

### Backend
- Node.js
- Express.js
- MongoDB
- Mongoose

### Additional Packages
- Multer
- Nodemailer
- Express Session
- Cookie Parser
- Dotenv
- CORS

---

## 📁 Project Structure

```txt
SkillSync/
│
├── frontend/
│   ├── src/
│   ├── public/
│   └── ...
│
├── backend/
│   ├── config/
│   ├── controllers/
│   ├── middleware/
│   ├── models/
│   ├── routes/
│   ├── uploads/
│   └── server.js
│
└── README.md
```

---

## ⚙ Installation

### Clone Repository

```bash
git clone https://github.com/your-username/SkillSync.git
cd SkillSync
```

---

### Frontend Setup

```bash
cd frontend
npm install
npm run dev
```

Frontend runs on:

```txt
http://localhost:5173
```

---

### Backend Setup

```bash
cd backend
npm install
npm run dev
```

Backend runs on:

```txt
http://localhost:5000
```

---

## 🔐 Environment Variables

Create a `.env` file inside the backend folder.

```env
MONGODB_URI=mongodb://127.0.0.1:27017/skillsync
SESSION_SECRET=skillsync_secret_2026
CLIENT_URL=http://localhost:5173
```

---

## 📚 Academic Relevance

This project was developed as part of the **Full Stack Development with JavaScript (FSD-2)** curriculum and demonstrates practical implementation of:

- JSON
- Node.js
- Express.js
- REST APIs
- Middleware
- Cookies & Sessions
- Multer
- Nodemailer
- MongoDB
- Mongoose
- CRUD Operations
- MERN Stack Connectivity

---

## 🎯 Future Enhancements

- JWT Authentication
- Real-time Notifications
- Resume Builder
- Dashboard Analytics
- Role-Based Access Control
- Cloud File Storage

---

## 👨‍💻 Author

**Deep Patel**

Full Stack Development Student

---

⭐ If you found this project useful, consider giving it a star.
