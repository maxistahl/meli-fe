import axios from "axios";
import { useEffect, useState } from "react";
import { Product } from "../components/product/types";

const useSearch = (search: string) => {
  const [products, setProducts] = useState<Product[]>([]);
  const [categories, setCategories] = useState<string[]>([]);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    async function fetchProducts() {
      const response = await axios.get(`http://localhost:3000/api/items?q=${search}`);
      setProducts(response.data.items);
      setCategories(response.data.categories);
      setLoading(false);
    }

    if (search) {
      fetchProducts();
    }
  }, [search]);

  return { products, categories, loading };
}

export default useSearch;
