
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
    <li role="listitem" itemScope itemType="OfferCatalog">
      <img src={product.picture} alt={product.title} itemProp="image" />
      <div className="item-details">
        <Price price={product.price} />
        <Link className="title" role="item-link" itemProp="name" to={`/items/${product.id}`} title={product.title}>
          <h4>{product.title}</h4>
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
      <ul className="product-list" role="list" itemScope itemType="https://schema.org/OfferCatalog">
        {products.map((product: Product) => (
          <Item key={product.id} {...product} />
        ))}
      </ul>
    );
  }
}

export default ProductList;
