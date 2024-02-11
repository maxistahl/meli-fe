import ErrorUI from "../error";
import { ProductDetails } from "./types";

type ProductDetailsProps = {
  product: ProductDetails | null;
  loading?: boolean;
};

const ProductDetails = ({ product, loading }: ProductDetailsProps) => {
  if (!product && loading) {
    return <div>Cargando...</div>;
  }

  if (!product && !loading) {
    return <ErrorUI message="No se encontró el producto" />;
  }

  if (product) {
    return (
      <div className="prooduct-details">
        <div className="description">
          <img src={product.picture} alt={product.title} />
          <div className="details">
            <h2>Descripcion del producto</h2>
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
}

export default ProductDetails;
