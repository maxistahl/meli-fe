import axios from "axios";
import { useEffect, useState } from "react";
import { ProductDetails } from "../components/product/types";

const useProduct = (id: string) => {
  const [product, setProduct] = useState<ProductDetails>(null);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    async function fetchProduct() {
      const response = await axios.get(`http://localhost:3000/api/items/${id}`);
      setProduct(response.data.item);
      setLoading(false);
    }

    if (id) {
      fetchProduct();
    }
  }, [id]);

  return { product, loading };
}

export default useProduct;
