import ProductDetails from "../../components/product/details";
import Breadcrumb from "../../components/breadcrumb";
import Content from "../../components/content";
import { useParams } from "react-router";
import useProduct from "../../hooks/useProduct";

const ProductDetailsPage = () => {
  const { id } = useParams();

  const { product, loading } = useProduct(id as string);

  return (
    <>
      <Breadcrumb steps={[
        { title: 'Volver al inicio', id: 'home', url: '/' }
      ]} />
      <Content>
        <ProductDetails product={product} loading={loading} />
      </Content>
    </>
  );
};

export default ProductDetailsPage;
