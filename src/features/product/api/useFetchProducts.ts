'use client'
import { useEffect } from 'react';
import { useProductStore } from '@/entities/product/model';

export const useFetchProducts = () => {
  const { products, loading, error, loadProducts } = useProductStore();

  useEffect(() => {
    loadProducts();
  }, []);

  return { products, loading, error };
};