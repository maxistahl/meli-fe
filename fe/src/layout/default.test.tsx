import '@testing-library/jest-dom';
import { render, screen } from '@testing-library/react';
import { BrowserRouter } from 'react-router-dom';
import Layout from './default';

describe('Layout', () => {
  it('renders correctly', () => {
    render(<BrowserRouter><Layout /></BrowserRouter>);
    const header = screen.getByRole('header');
    const wrapper = screen.getAllByTestId('wrapper');

    expect(header).toBeInTheDocument();
    expect(wrapper[0]).toBeInTheDocument();
  });
});