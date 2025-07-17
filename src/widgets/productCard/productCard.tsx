import { Product } from '@/entities/product/types';
import styles from './productCard.module.scss';
import { useAuth } from '@/entities/user/model';


interface Props {
  product: Product;
}

export const ProductCard = ({ product }: Props) => {
  const user = useAuth();

  return (
    <div className={styles.card}>
      <img className={styles.image} src={product.thumbnail} alt={product.title}/>
      <div className={styles.info}>
        <h3 className={styles.title}>{product.title}</h3>
        <p className={styles.category}>{product.category}</p>
        <div className={styles.footer}>
          <span className={styles.price}>${product.price}</span>
          {user.user && <button className={styles.button}>Add to cart</button>}
        </div>
      </div>
    </div>
  );
};