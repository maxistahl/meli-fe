import 'jest-canvas-mock';
import '@testing-library/jest-dom';
import { render, screen } from '@testing-library/react';
import Confetti from './index';

describe('Confetti', () => {
  it('renders without crashing', () => {
    render(<Confetti />);
    expect(screen.getByRole('canvas')).toBeInTheDocument();
  });

  it('renders a canvas with the correct dimensions', () => {
    render(<Confetti />);
    const canvas = screen.getByRole('canvas') as HTMLCanvasElement;
    expect(canvas.width).toEqual(window.innerWidth);
    expect(canvas.height).toEqual(window.innerHeight);
  });
});