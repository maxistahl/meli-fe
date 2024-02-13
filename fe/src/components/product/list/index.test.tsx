import '@testing-library/jest-dom';
import { render, screen } from '@testing-library/react';
import { BrowserRouter } from 'react-router-dom';
import ProductList from './index';

describe('ProductList', () => {
  const products = [
    {
      id: 'MLA123',
      picture: 'test.jpg',
      title: 'Test product',
      description: 'Test description',
      condition: 'nuevo',
      sold_quantity: 5,
      price: { amount: 100, currency: '$', decimals: 0 },
      free_shipping: true,
    },
  ];

  it('renders loading state', () => {
    render(<ProductList products={[]} loading={true} />);
    expect(screen.getByText('Cargando...')).toBeInTheDocument();
  });

  it('renders product list', () => {
    render(
      <BrowserRouter>
        <ProductList products={products} loading={false} />
      </BrowserRouter>
    );
    const linkElement = screen.getByRole('item-link');
    expect(linkElement).toBeInTheDocument();
    expect(linkElement).toHaveAttribute('href', `/items/${products[0].id}`);
  });
});