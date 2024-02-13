import { render, screen } from '@testing-library/react';
import Content from './index';
import '@testing-library/jest-dom';

describe('Content', () => {
  it('renders without crashing', () => {
    render(<Content />);
    expect(screen.getByRole('content')).toBeInTheDocument();
  });

  it('renders its children correctly', () => {
    const testText = 'Test child';
    render(<Content>{testText}</Content>);
    expect(screen.getByText(testText)).toBeInTheDocument();
  });
});