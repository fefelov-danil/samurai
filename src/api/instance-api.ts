import axios from "axios";

export const instance = axios.create({
  baseURL: 'https://social-network.samuraijs.com/api/1.0/',
  withCredentials: true,
  headers: {
    'API-KEY': '4e9b0636-58a9-499c-aa39-97e8d2fc85f8'
  }
})