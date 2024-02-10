import React from "react";
import { ProductDetails } from "./types";

type ProductDetailsProps = {
  product: ProductDetails;
}

const ProductDetails = ({ product }: ProductDetailsProps) => {
  return (
    <div className="prooduct-details">
      <div className="description">
        <img src={product.picture} alt={product.title} />
        <div className="details">
          <h3>Descripcion del producto</h3>
          <p>{product.description}</p>
        </div>
      </div>
      <div className="purchase">
        <div className="status">
          <span>{product.condition}</span>
          <span>{product.sold_quantity} vendidos</span>
        </div>
        <h1>{product.title}</h1>
        <div className="price"
          aria-label={`${product.price.amount} ${product.price.currency}`}
          aria-roledescription="Precio"
        >
          <span className="currency">{product.price.currency}</span>
          <span className="amount">{product.price.amount}</span>
        </div>
        <button>Comprar</button>
      </div>
    </div>
  );
}

export default ProductDetails;
