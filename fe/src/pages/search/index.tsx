import { useLocation } from 'react-router-dom';
import Content from "../../components/content";
import Breadcrumb from "../../components/breadcrumb";
import ProductList from "../../components/product/list";
import useSearch from '../../hooks/useSearch';

function useQuery() {
  const location = useLocation();
  console.log('location', location);
  return new URLSearchParams(location.search);
}

const SearchPage = () => {
  const query = useQuery();
  const search = query.get('search');

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