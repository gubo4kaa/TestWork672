import axios from 'axios';

const token = typeof window !== 'undefined' ? localStorage.getItem('token') : null;

export const api = axios.create({
  baseURL: process.env.NEXT_PUBLIC_API_URL || 'https://your-api.com/api',
});

api.interceptors.request.use((config) => {
  if (token) {
    config.headers.Authorization = `Bearer ${token}`;
  }
  return config;
});