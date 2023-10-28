const axios = require("axios");

const axiosInstance = axios.create({
  baseURL: "http://localhost:3000/api_php",
  headers: {
    "Content-Type": "application/json",
  },
});

module.exports = axiosInstance;
