import { api } from '@/shared/lib/axios';
import { LoginRequest, LoginResponse } from './types';

export const loginUser = async (data: LoginRequest): Promise<LoginResponse> => {
  const response = await api.post<LoginResponse>('/auth/login', data);
  return response.data;
};