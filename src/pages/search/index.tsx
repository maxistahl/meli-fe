import React from "react";
import { useLocation } from 'react-router-dom';
import Content from "../../components/content";
import Breadcrumb from "../../components/breadcrumb";

function useQuery() {
  const location = useLocation();
  console.log('location', location);
  return new URLSearchParams(location.search);
}

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
        <h1>Search: {search}</h1>
      </Content>
    </>
  )
}

export default SearchPage;
