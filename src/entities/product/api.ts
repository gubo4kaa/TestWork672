import { api } from '@/shared/lib/axios';
import { Product } from './types';

interface ProductsResponse {
  products: Product[];
  total: number;
  skip: number;
  limit: number;
}

export const fetchProducts = async (): Promise<Product[]> => {
  const response = await api.get<ProductsResponse>('/products?limit=12');
  return response.data.products;
};