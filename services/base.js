// apiService.js
import axios from "axios";

const BASE_URL = "http://localhost:8080";

const apiService = axios.create({
  baseURL: BASE_URL,
  timeout: 5000,
  headers: {
    "Content-Type": "application/json",
  },
});

// Add a response interceptor
apiService.interceptors.response.use(
  (response) => {
    return response.data;
  },
  (error) => {
    return Promise.reject(error.response.data || {});
  },
);

export default apiService;
