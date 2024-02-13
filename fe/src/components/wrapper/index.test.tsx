import '@testing-library/jest-dom';
import { render, screen } from '@testing-library/react';
import Wrapper from './index';

describe('Wrapper', () => {
  it('renders correctly', () => {
    render(<Wrapper><div>Test</div></Wrapper>);
    const wrapperElement = screen.getByText('Test');
    expect(wrapperElement).toBeInTheDocument();
  });
});