import { create } from 'zustand';
import { User } from './types';

interface AuthState {
  user: User | null;
  token: string | null;
  isAuth: boolean;
  login: (user: User, token: string) => void;
  logout: () => void;
  loadFromStorage: () => void;
}

export const useAuth = create<AuthState>((set) => ({
  user: null,
  token: null,
  isAuth: false,

  login: (user, token) => {
    localStorage.setItem('token', token);
    localStorage.setItem('user', JSON.stringify(user));
    set({ user, token, isAuth: true });
  },

  logout: () => {
    localStorage.removeItem('token');
    localStorage.removeItem('user');
    set({ user: null, token: null, isAuth: false });
  },

  loadFromStorage: () => {
    const token = localStorage.getItem('token');
    const userString = localStorage.getItem('user');

    if (token && userString) {
      try {
        const user = JSON.parse(userString);
        set({ user, token, isAuth: true });
      } catch {
        // Если невалидный JSON, очистить
        localStorage.removeItem('token');
        localStorage.removeItem('user');
        set({ user: null, token: null, isAuth: false });
      }
    }
  }
}));