import 'jest-canvas-mock';
import '@testing-library/jest-dom';
import { render, screen, fireEvent } from '@testing-library/react';
import Profile from './index';

describe('Profile', () => {
  it('renders without crashing', () => {
    render(<Profile />);
    expect(screen.getByRole('img')).toBeInTheDocument();
    expect(screen.getByText('Maximiliano Stahl')).toBeInTheDocument();
    expect(screen.getByText('maxistahl@gmail.com')).toBeInTheDocument();
    expect(screen.getByText('Dejame un like o dislike... ¡si podes!')).toBeInTheDocument();
  });

  it('displays the correct image', () => {
    render(<Profile />);
    const imgElement = screen.getByRole('img');
    expect(imgElement).toHaveAttribute('src', 'test-file-stub');
    expect(imgElement).toHaveAttribute('alt', 'Maxi Stahl');
  });

  it('displays the correct text when showAnim is 2', () => {
    render(<Profile />);
    fireEvent.click(screen.getByRole('cta'));
    fireEvent.click(screen.getByRole('cta'));
    expect(screen.getByText('Me gustaría trabajar en MeLi...')).toBeInTheDocument();
  });

  it('displays the correct text when showAnim is 3', () => {
    render(<Profile />);
    fireEvent.click(screen.getByRole('cta'));
    fireEvent.click(screen.getByRole('cta'));
    fireEvent.click(screen.getByRole('cta'));
    expect(screen.getByText('¿Me ayudas?')).toBeInTheDocument();
  });
});