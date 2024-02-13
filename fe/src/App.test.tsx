import { render } from '@testing-library/react';
import { BrowserRouter } from 'react-router-dom';
import '@testing-library/jest-dom';
import App from './App';

test("Renders the main page", () => {
  render(
    <BrowserRouter>
      <App />
    </BrowserRouter>
  );
  expect(true).toBeTruthy();
})