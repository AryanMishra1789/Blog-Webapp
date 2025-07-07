# BlogX

A full-stack MERN blog application with a beautiful glassmorphism design, featuring user authentication, post management, and real-time interactions.

## Live Demo

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

### Local Development

1. **Clone the repository**
   ```bash
   git clone https://github.com/AryanMishra1789/Blog-Webapp.git
   cd Blog-Webapp
2. **Backend Setup**
   ```bash
   cd server
   npm install
3. **Environment Variables**: Create a .env file in the server directory
- MONGO_URI=your_mongodb_atlas_connection_string
- JWT_SECRET=your_super_secret_jwt_key
- NODE_ENV=development
4. **Start Backend**
  ```bash
  npm start
# Backend runs on http://localhost:5000
5. **Frontend Setup**
  ```bash
  cd ../client
  npm install


