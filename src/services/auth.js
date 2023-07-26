import axios from "axios";

const API = axios.create({ baseURL: "http://localhost:4000" });

API.interceptors.request.use((req) => {
  if (localStorage.getItem("token")) {
    req.headers.Authorization = `Bearer ${
      JSON.parse(localStorage.getItem("token")).token
    }`;
  }

  return req;
});

export const signup = (email, password) =>
  API.post(`/user/signup`, { email, password });
export const login = (email, password) =>
  API.post(`/user/login`, { email, password });
