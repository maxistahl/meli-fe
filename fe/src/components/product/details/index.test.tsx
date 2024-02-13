import '@testing-library/jest-dom';
import { render, screen } from '@testing-library/react';
import ProductDetails from './index';
import { BrowserRouter } from 'react-router-dom';

describe('ProductDetails', () => {
  const product = {
    id: 'MLA123',
    picture: 'test.jpg',
    title: 'Test product',
    description: 'Test description',
    condition: 'nuevo',
    sold_quantity: 5,
    price: { amount: 100, currency: '$', decimals: 0 },
    free_shipping: true,
  };

  it('renders loading state', () => {
    render(<ProductDetails product={null} loading={true} />);
    expect(screen.getByText('Cargando...')).toBeInTheDocument();
  });

  it('renders error state', () => {
    render(
      <BrowserRouter>
        <ProductDetails product={null} loading={false} />
      </BrowserRouter>
    );
    expect(screen.getByText('No se encontró el producto')).toBeInTheDocument();
  });

  it('renders product details', () => {
    render(<ProductDetails product={product} loading={false} />);
    expect(screen.getByText(product.title)).toBeInTheDocument();
    expect(screen.getByText(product.description)).toBeInTheDocument();
    expect(screen.getByText(`${product.condition} | ${product.sold_quantity} vendidos`)).toBeInTheDocument();
    expect(screen.getByRole('img')).toHaveAttribute('src', product.picture);
    expect(screen.getByRole('img')).toHaveAttribute('alt', product.title);
  });
});