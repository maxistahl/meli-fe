import { useLocation } from 'react-router';
import { useEffect } from 'react';
import Content from "../../components/content";
import Breadcrumb from "../../components/breadcrumb";
import ProductList from "../../components/product/list";
import useSearch from '../../hooks/useSearch';
import { useNavigate } from 'react-router-dom';

function useQuery() {
  const location = useLocation();
  return new URLSearchParams(location.search);
}

const SearchPage = () => {
  const query = useQuery();
  const search = query.get('search');
  const navigate = useNavigate();

  useEffect(() => {
    if (!search) {
      navigate('/');
    }
  }, [search, navigate]);

  const { categories, products, loading } = useSearch(search as string);

  return (
    <>
      <Breadcrumb steps={[
        { title: 'Volver al inicio', id: 'home', url: '/' },
        ...categories.map((category, index) => ({ title: category, id: `category-${index}`, url: `/items?search=${category}` }))
      ]} />
      <Content>
        <ProductList products={products} loading={loading} />
      </Content>
    </>
  )
}

export default SearchPage;
