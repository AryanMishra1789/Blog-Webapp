# 📝 BlogX

A full-stack MERN blog application that allows users to create, and interact with blog posts in a modern, visually appealing interface with a beautiful glassmorphism design, featuring user authentication, post management, and real-time interactions.

This application provides a complete blogging experience where users can register accounts, write and publish articles, engage with content through comments and likes, and manage their own posts with full CRUD operations.

## Deployment Link

- **Frontend**: [https://blogxwebapp.netlify.app/](https://blogxwebapp.netlify.app/)
- **Backend API**: [https://blog-webapp-backend.onrender.com](https://blog-webapp-backend.onrender.com)

## Features

- **Modern Glassmorphism UI** - Beautiful, responsive design with floating elements
- **User Authentication** - Secure registration and login with JWT tokens
- **Rich Text Editor** - Create and edit posts with ReactQuill
- **Comments System** - Engage with posts through comments
- **Like System** - Like and unlike posts
- **Responsive Design** - Works perfectly on all devices
- **Real-time Updates** - Dynamic content loading
- **Secure API** - Protected routes with authentication middleware

## Tech Stack

### Frontend
- **React.js** - UI framework
- **React Router** - Navigation
- **Axios** - HTTP client
- **ReactQuill** - Rich text editor
- **CSS3** - Modern styling with glassmorphism effects

### Backend
- **Node.js** - Runtime environment
- **Express.js** - Web framework
- **MongoDB Atlas** - Cloud database
- **Mongoose** - MongoDB object modeling
- **JWT** - Authentication tokens
- **bcryptjs** - Password hashing
- **CORS** - Cross-origin resource sharing

### Deployment
- **Frontend**: Netlify
- **Backend**: Render
- **Database**: MongoDB Atlas

## Quick Start

### Prerequisites
- Node.js (v14 or higher)
- npm or yarn
- MongoDB Atlas account

**Cloning the repository**
   ```bash
   git clone https://github.com/AryanMishra1789/Blog-Webapp.git
   cd Blog-Webapp

**Project Structure**
Blog-Webapp/
├── client/                 # React frontend
│   ├── public/
│   │   ├── index.html
│   │   ├── favicon.ico
│   │   ├── logo192.png
│   │   ├── logo512.png
│   │   ├── manifest.json
│   │   └── robots.txt
│   ├── src/
│   │   ├── components/     # Reusable components
│   │   │   ├── [Comments.js](http://_vscodecontentref_/0)
│   │   │   └── Navbar.js
│   │   ├── pages/         # Page components
│   │   │   ├── [Home.js](http://_vscodecontentref_/1)
│   │   │   ├── [Login.js](http://_vscodecontentref_/2)
│   │   │   ├── [Register.js](http://_vscodecontentref_/3)
│   │   │   ├── [CreatePost.js](http://_vscodecontentref_/4)
│   │   │   ├── [EditPost.js](http://_vscodecontentref_/5)
│   │   │   └── [LikesPage.js](http://_vscodecontentref_/6)
│   │   ├── AuthContext.js # Authentication context
│   │   ├── [config.js](http://_vscodecontentref_/7)      # API configuration
│   │   ├── App.js         # Main app component
│   │   ├── App.css        # Global styles
│   │   └── index.js       # App entry point
│   ├── package.json
│   └── .gitignore
├── server/                # Express backend
│   ├── models/           # Database models
│   │   ├── User.js
│   │   ├── Post.js
│   │   └── Comment.js
│   ├── routes/           # API routes
│   │   ├── auth.js
│   │   ├── posts.js
│   │   └── comments.js
│   ├── .env             # Environment variables
│   ├── [server.js](http://_vscodecontentref_/8)        # Main server file
│   └── package.json
├── .gitignore
└── README.md




