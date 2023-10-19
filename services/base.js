import axios from "axios";

const BASE_URL = "http://localhost:8080/api";

const apiService = axios.create({
  baseURL: BASE_URL,
  timeout: 5000,
  headers: {
    "Content-Type": "application/json",
  },
});

// Add request interceptor to add token to every request
apiService.interceptors.request.use(
  (config) => {
    return config;
  },
  (error) => {
    return Promise.reject(error);
  },
);

// Add a response interceptor
apiService.interceptors.response.use(
  (response) => {
    return response.data;
  },
  (error) => {
    console.log("error", error);
    // Check if it's a network error
    if (!error.response) {
      // eslint-disable-next-line prefer-promise-reject-errors
      return Promise.reject({
        message:
          "Woops! Something terribly has gone wrong. Please try again later.",
      });
    }

    // Check to see if it's a 401 error
    if (error.response.status === 401) {
      // TODO; Show alert and take user back to the login screen
    }

    // If response data is a string, then turn it into an object
    if (typeof error.response.data === "string") {
      error.response.data = { message: error.response.data };
    }

    return Promise.reject(error.response.data || {});
  },
);

export default apiService;
