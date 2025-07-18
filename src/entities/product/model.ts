import { create } from 'zustand';
import { Product } from './types';
import { fetchProducts } from './api';

interface ProductState {
  products: Product[];
  loading: boolean;
  error: string | null;
  loadProducts: () => Promise<void>;
}

export const useProductStore = create<ProductState>((set) => ({
  products: [],
  loading: false,
  error: null,

  loadProducts: async () => {
    set({ loading: true, error: null });
    try {
      const products = await fetchProducts();
      set({ products });
    } catch (err) {
      console.log(err)
      set({ error: 'Не удалось загрузить товары' });
    } finally {
      set({ loading: false });
    }
  },
}));