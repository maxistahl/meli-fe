
import { Product } from "../types";
import "./styles.scss";
import Price from "../price";
import FreeShipping from "../freeShipping";
import { Link } from "react-router-dom";

type ProductListProps = {
  products: Product[];
  loading?: boolean;
}

const Item = (product: Product) => {
  if (!product) {
    return null;
  }

  return (
    <li>
      <img src={product.picture} alt={product.title} />
      <div className="item-details">
        <Price price={product.price} />
        <Link className="title" to={`/items/${product.id}`} title={product.title}>
          <h3>{product.title}</h3>
        </Link>
        <FreeShipping show={product.free_shipping} />
      </div>
    </li>
  );
}

const ProductList = ({ products, loading }: ProductListProps) => {
  if (loading) {
    return <div>Cargando...</div>;
  }

  if (products) {
    return (
      <ul className="product-list">
        {products.map((product: Product) => (
          <Item key={product.id} {...product} />
        ))}
      </ul>
    );
  }
}

export default ProductList;
