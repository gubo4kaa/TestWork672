'use client'
import { useFetchProducts } from "@/features/product/api/useFetchProducts";
import { ProductCard } from "@/widgets/productCard/productCard";
import { ProductsWidget } from "@/widgets/productsGrid/productsGrid";
import styles from "./page.module.css";

export default function Home() {

  const product = useFetchProducts()

  return (
    <div className={styles.page}>
      <main className={styles.main}>
        <ProductsWidget
          items={product.products}
          loading={product.loading}
          error={product.error}
          ItemComponent={ProductCard}
        />
      </main>
    </div>
  );
}
