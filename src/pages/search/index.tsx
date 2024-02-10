import React from "react";
import { useLocation } from 'react-router-dom';
import Content from "../../components/content";
import Breadcrumb from "../../components/breadcrumb";
import { Product } from "../../components/product/types";
import ProductList from "../../components/product/list";

function useQuery() {
  const location = useLocation();
  console.log('location', location);
  return new URLSearchParams(location.search);
}

const products: Product[] = [
  {
    id: '1',
    title: 'Product 1',
    price: {
      currency: 'USD',
      amount: 199.99,
      decimals: 2
    },
    picture: 'url-to-picture-1',
    condition: 'New',
    free_shipping: true
  },
  {
    id: '2',
    title: 'Product 2',
    price: {
      currency: 'USD',
      amount: 29.99,
      decimals: 2
    },
    picture: 'url-to-picture-2',
    condition: 'Used',
    free_shipping: false
  },
  {
    id: '3',
    title: 'Product 3',
    price: {
      currency: 'USD',
      amount: 15.99,
      decimals: 2
    },
    picture: 'url-to-picture-3',
    condition: 'New',
    free_shipping: true
  },
  {
    id: '4',
    title: 'Product 4',
    price: {
      currency: 'USD',
      amount: 49.99,
      decimals: 2
    },
    picture: 'url-to-picture-4',
    condition: 'Used',
    free_shipping: false
  }
];

const SearchPage = () => {
  const query = useQuery();
  const search = query.get('search');
  console.log(search);

  return (
    <>
      <Breadcrumb steps={[
        { title: 'Volver al listado', id: 'home', url: '/' },
        { title: 'Search', id: 'search', url: '/items' },
        { title: 'Iphone', id: 'iphone', url: '/items' },
      ]} />
      <Content>
        {<ProductList products={products} />}
      </Content>
    </>
  )
}

export default SearchPage;
