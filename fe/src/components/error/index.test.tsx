import '@testing-library/jest-dom';
import { render, screen } from '@testing-library/react';
import { BrowserRouter } from 'react-router-dom';
import ErrorUI from './index';

describe('ErrorUI', () => {
  const message = 'Test error message';
  const goHomeLinkText = 'Go to home page';

  it('renders without crashing', () => {
    render(
      <BrowserRouter>
        <ErrorUI message={message} />
      </BrowserRouter>
    );
    expect(screen.getByRole('error-ui')).toBeInTheDocument();
  });

  it('displays the correct error message', () => {
    render(
      <BrowserRouter>
        <ErrorUI message={message} />
      </BrowserRouter>
    );
    expect(screen.getByText(message)).toBeInTheDocument();
  });

  it('displays a link to the home page with correct text', () => {
    render(
      <BrowserRouter>
        <ErrorUI message={message} goHomeLinkText={goHomeLinkText} />
      </BrowserRouter>
    );
    const linkElement = screen.getByText(goHomeLinkText);
    expect(linkElement).toBeInTheDocument();
    expect(linkElement).toHaveAttribute('href', '/');
  });
});