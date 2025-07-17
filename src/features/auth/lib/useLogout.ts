import { useAuth } from '@/entities/user/model';
import { useRouter } from 'next/navigation';

export const useLogout = () => {
  const auth = useAuth();
  const router = useRouter();

  const logout = () => {
    auth.logout();
    router.push('/login');
  };

  return { logout };
};