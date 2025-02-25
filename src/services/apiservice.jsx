import axios from "axios";

const AxiosService = axios.create({
  baseURL: "https://flight-backend-28sr.onrender.com/",
  headers: {
    "Content-Type": "application/json",
  },
});

AxiosService.interceptors.request.use((config) => {
  const token = sessionStorage.getItem("token");
  if (token) config.headers.Authorization = `Bearer ${token}`;
  return config;
});

export default AxiosService;
