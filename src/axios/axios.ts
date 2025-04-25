import axios from "axios";
import { API_BASE_URL } from "../config";

const axiosClient = axios.create({
    baseURL: API_BASE_URL,
    withCredentials: true,
    headers: {
      'Content-Type': 'application/json',
      'Accept': 'application/json'
    }
})

export default axiosClient