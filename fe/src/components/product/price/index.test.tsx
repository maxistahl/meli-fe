import '@testing-library/jest-dom';
import { render, screen } from '@testing-library/react';
import Price from './index';

describe('Price', () => {
  const price = { amount: 100, currency: '$', decimals: 0 };

  it('renders without crashing', () => {
    render(<Price price={price} />);
    expect(screen.getByRole('price')).toBeInTheDocument();
  });

  it('displays the correct price', () => {
    render(<Price price={price} />);
    const amountElement = screen.getByText(price.amount.toString());
    expect(amountElement).toBeInTheDocument();
    expect(amountElement).toHaveClass('amount');
  });

  it('displays the correct currency', () => {
    render(<Price price={price} />);
    const currencyElement = screen.getByText(price.currency);
    expect(currencyElement).toBeInTheDocument();
    expect(currencyElement).toHaveClass('currency');
  });
});