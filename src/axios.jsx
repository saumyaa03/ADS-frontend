import axios from "axios";


export const API = axios.create({
  baseURL: "http://localhost:8080/api",
});

export const AuthAPI = axios.create({
  baseURL: "http://localhost:8080/auth",
});


export default API;
