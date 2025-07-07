// API Configuration
const config = {
  API_BASE_URL: process.env.NODE_ENV === 'production'
    ? 'https://blog-webapp-backend.onrender.com/api'  // Your live backend URL
    : 'http://localhost:5000/api'
};

export default config;