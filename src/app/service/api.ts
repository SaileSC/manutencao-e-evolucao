import axios from "axios";

const api = axios.create({
  //baseURL: process.env.NEXT_PUBLIC_BACKEND_API,
  baseURL: "http://192.168.17.129:4466",
});

export default api;
