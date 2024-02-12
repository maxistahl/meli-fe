import ErrorUI from "../../error";
import Price from "../price";
import { ProductDetails } from "../types";
import "./styles.scss";

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
      <div className="product-details">
        <div className="description">
          <div className="image">
            <img src={product.picture} alt={product.title} />
          </div>
          <div className="details">
            <h2>Descripcion del producto</h2>
            <p>{product.description}</p>
          </div>
        </div>
        <div className="purchase">
          <div className="status">
            <span>{product.condition} | {product.sold_quantity} vendidos</span>
          </div>
          <h1>{product.title}</h1>
          <Price price={product.price} />
          <button className="cta">Comprar</button>
        </div>
      </div>
    );
  }
}

export default ProductDetails;
