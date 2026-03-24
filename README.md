# Language Learning Platform

A full‑stack web application for learning languages online.

## Tech Stack

**Frontend** - React - Vite - Axios - React Router

**Backend** - Node.js - Express.js - MongoDB - JWT Authentication -
Google OAuth

------------------------------------------------------------------------

# Project Structure

    Language-Learning
    │
    ├── backend
    │   ├── controllers
    |        ├── authController.js
    |        ├── courseController.js
    |        └── lessonController.js
    │   ├── models
    |        ├── Course.js
    |        ├── Lesson.js
    |        └── User.js
    │   ├── routes
    |        ├── authRoutes.js
    |        ├── courseRoutes.js
    |        └── lessonRoutes.js
    │   ├── config
    |        └── passport.js
    |   ├── middleware
    |        ├── adminMiddleware.js
    |        └── authMiddleware.js
    |   ├── seed
    |        └── adminSeed.js
    │   ├── server.js
    │   └── package.json
    │
    ├── frontend
    │   ├── src
    │   │   ├── components
    |   |        └── ProtectedRoute.jsx
    │   │   ├── contexts
    |   |        └── AuthContext.jsx
    │   │   ├── pages
    |   |        ├── Courses.jsx
    |   |        ├── GameLesson.jsx
    |   |        ├── Home.jsx
    |   |        ├── Lessons.jsx
    |   |        ├── Login.jsx
    |   |        ├── OAuthSuccess.jsx
    |   |        └── Register.jsx
    │   │   ├── services
    |   |        ├── authService.js
    |   |        ├── courseService.js
    |   |        └── lessonService.js
    │   │   ├── styles
    │   │   ├── App.jsx
    │   │   └── main.jsx
    │   └── package.json
    │
    ├── README.md
    └── .gitignore

------------------------------------------------------------------------

# Requirements

Install the following:

-   Node.js (v18 or later)
-   npm
-   MongoDB

Check installation:

``` bash
node -v
npm -v
```

------------------------------------------------------------------------

# Installation

Clone the repository:

``` bash
git clone https://github.com/yourusername/Language-Learning.git
cd Language-Learning
```

------------------------------------------------------------------------

# Backend Setup

Navigate to backend folder:

``` bash
cd backend
```

Install dependencies:

``` bash
npm install
```

Create a `.env` file inside the backend folder:

    PORT=5000
    MONGO_URI=your_mongodb_connection_string
    JWT_SECRET=your_jwt_secret

    GOOGLE_CLIENT_ID=your_google_client_id
    GOOGLE_CLIENT_SECRET=your_google_client_secret

    SESSION_SECRET=your_session_secret

Run backend:

``` bash
npm start
```

Backend runs on:

    http://localhost:5000

------------------------------------------------------------------------

# Frontend Setup

Open a new terminal.

Navigate to frontend:

``` bash
cd frontend
```

Install dependencies:

``` bash
npm install
```

Run development server:

``` bash
npm run dev
```

Frontend runs on:

    http://localhost:5173

------------------------------------------------------------------------

# Features

-   User Registration
-   User Login
-   Google OAuth Login
-   Forgot Password
-   Reset Password via Email
-   JWT Authentication
-   Logout System

------------------------------------------------------------------------

# Authentication Flow

    Register
       ↓
    Login
       ↓
    JWT Token stored in localStorage
       ↓
    Access protected pages
       ↓
    Logout clears token

------------------------------------------------------------------------

# Environment Variables

Example `.env.example`

    PORT=5000
    MONGO_URI=
    JWT_SECRET=
    GOOGLE_CLIENT_ID=
    GOOGLE_CLIENT_SECRET=
    EMAIL_USER=
    EMAIL_PASS=
    SESSION_SECRET=

------------------------------------------------------------------------

# Future Improvements

Possible upgrades:

-   User profile page
-   Language courses system
-   Progress tracking
-   Leaderboard
-   Email verification
-   Rate limiting for authentication

------------------------------------------------------------------------

# Author

Developed as a full‑stack learning project.
