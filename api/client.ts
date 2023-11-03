import axios from "axios";

const BASE_URL = "https://reqres.in/api";

const axiosInstance = axios.create({
  baseURL: BASE_URL,
  headers: {
    "Content-Type": "application/json",
  },
});

export const getRequestApi = (url: string, params = {}) => {
  return axiosInstance.get(url, { ...params });
};
