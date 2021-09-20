import axios from "axios";
import AppConfig from "@/config";

const { apiToken } = AppConfig;

// @todo Logic can be bettered to prevent hard-coding authenticated requests
axios.interceptors.request.use(
  (request) => {
    if (request.url.includes("workshops") || request.url.includes("sessions")) {
      // 'Bearer <token>' is just the requirement for workshops app
      // In meetings app only token is sent (no 'Bearer ' prefix should be passed)
      request.headers["Authorization"] = "Bearer " + apiToken;
    }

    return request;
  },
  (error) => Promise.reject(error)
);
