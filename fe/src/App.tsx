import { Routes, Route } from "react-router-dom";
import Layout from './layout/default';
import HomePage from './pages/home';
import SearchPage from './pages/search';
import ProductDetailsPage from './pages/productDetails';
import NoMatch from './pages/noMatch';

function App() {
  return (
    <Routes>
      <Route path="/" element={<Layout />}>
        <Route index element={<HomePage />} />
        <Route path="items" element={<SearchPage />} />
        <Route path="items/:id" element={<ProductDetailsPage />} />
        <Route path="*" element={<NoMatch />} />
      </Route>
    </Routes>
  )
}

export default App
