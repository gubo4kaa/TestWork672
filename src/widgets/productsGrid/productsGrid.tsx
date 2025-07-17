import React from 'react';
import styles from './productsGrid.module.scss';

interface ProductsWidgetProps<T> {
  items: T[];
  loading?: boolean;
  error?: string | null;
  ItemComponent: React.ComponentType<{ product: T }>;
}

export function ProductsWidget<T>({
  items,
  loading,
  error,
  ItemComponent,
}: ProductsWidgetProps<T>) {
  if (loading) return <p>Загрузка товаров...</p>;
  if (error) return <p>{error}</p>;

  return (
    <div className={styles.grid}>
      {items.map((item, id)=> (
        <ItemComponent key={id} product={item} />
      ))}
    </div>
  );
}