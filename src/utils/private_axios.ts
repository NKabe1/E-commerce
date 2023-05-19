import axios from "axios";
import { TLocalStorage } from "../types/localstorage";

export const private_axios = axios.create({
  baseURL: import.meta.env.VITE_API_URL,
  headers: {
    authorization: `Bearer ${localStorage.getItem(TLocalStorage.ACCESSTOKEN)}`,
  },
});
