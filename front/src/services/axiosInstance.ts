import axios from "axios";

const axiosInstance = axios.create({
  baseURL: process.env.API_URL,
  timeout: 10000, // Timeout (10 secondes)
  headers: {
    "Content-Type": "application/json",
  },
  withCredentials: true,
});

export default axiosInstance;
