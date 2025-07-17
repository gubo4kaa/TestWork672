import { loginUser } from '@/entities/user/api';
import { useAuth } from '@/entities/user/model';
import { LoginRequest } from '@/entities/user/types';
import { useRouter } from 'next/navigation';
import { useState } from 'react';

export const useLogin = () => {
  const [error, setError] = useState('');
  const [loading, setLoading] = useState(false);
  const auth = useAuth();
  const router = useRouter();

  const login = async (data: LoginRequest) => {
    if (data.username.length < 3 || data.password.length < 3) {
      setError('Минимум 3 символа');
      return;
    }

    setError('');
    setLoading(true);

    try {
      const response = await loginUser(data);
      const { token, ...user } = response;
      auth.login(user, token);
      router.push('/');
    } catch (err) {
      setError('Неверные логин или пароль');
    } finally {
      setLoading(false);
    }
  };

  return { login, loading, error };
};
