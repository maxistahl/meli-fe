import '@testing-library/jest-dom';
import { render, screen } from '@testing-library/react';
import FreeShipping from './index';

describe('FreeShipping', () => {
  it('renders when show is true', () => {
    render(<FreeShipping show={true} />);
    expect(screen.getByText('Envío gratis')).toBeInTheDocument();
  });

  it('does not render when show is false', () => {
    render(<FreeShipping show={false} />);
    expect(screen.queryByText('Envío gratis')).not.toBeInTheDocument();
  });
});