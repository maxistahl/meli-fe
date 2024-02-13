import { render, screen } from '@testing-library/react';
import { BrowserRouter } from 'react-router-dom';
import '@testing-library/jest-dom';
import Breadcrumb from './index';

describe('Breadcrumb', () => {
  const steps = [
    { id: '1', title: 'Step 1', url: '/step1' },
    { id: '2', title: 'Step 2', url: '/step2' },
    { id: '3', title: 'Step 3', url: '/step3' },
  ];

  it('renders the correct number of steps', () => {
    render(
      <BrowserRouter>
        <Breadcrumb steps={steps} />
      </BrowserRouter>
    );

    const breadcrumbItems = screen.getAllByRole('listitem');
    expect(breadcrumbItems).toHaveLength(steps.length);
  });

  it('renders the correct step titles and URLs', () => {
    render(
      <BrowserRouter>
        <Breadcrumb steps={steps} />
      </BrowserRouter>
    );

    steps.forEach((step) => {
      const linkElement = screen.getByText(step.title);
      expect(linkElement).toBeInTheDocument();
      expect(linkElement).toHaveAttribute('href', step.url);
    });
  });
});