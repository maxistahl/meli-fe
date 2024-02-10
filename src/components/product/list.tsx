import React from "react";
import { Product } from "./types";

type ProductListProps = {
  products: Product[];
}

const Item = (product: Product) => {
  return (
    <li>
      <img src={product.picture} alt={product.title} />
      <div className="item-details">
        <div className="price">
          <span className="currency">{product.price.currency}</span>
          <span className="amount">{product.price.amount}</span>
        </div>
        <p>{product.title}</p>
        {product.free_shipping && <span className="free-shipping">Envío gratis</span>}
      </div>
    </li>
  );
}

const ProductList = ({ products }: ProductListProps) => {
  return (
    <ul>
      {products.map((product) => (
        <Item key={product.id} {...product} />
      ))}
    </ul>
  );
}

export default ProductList;
