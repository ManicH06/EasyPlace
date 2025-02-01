import axios from "axios";

const axiosInstance = axios.create({
  baseURL: process.env.BACKEND_URL || "http://localhost:5000", 
  timeout: 10000, // Timeout (10 secondes)
  headers: {
    "Content-Type": "application/json",
  },
  withCredentials: true,
});

export default axiosInstance;