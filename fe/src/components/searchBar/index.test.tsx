import '@testing-library/jest-dom';
import { render, screen, fireEvent } from '@testing-library/react';
import NavigationProvider from '../../context/index';
import SearchBar from './index';
// import { createMemoryHistory } from 'history';
import { MemoryRouter, Route, Routes } from 'react-router-dom';

describe('SearchBar', () => {
  it('renders without crashing', () => {
    render(
      <NavigationProvider>
        <MemoryRouter initialEntries={["/"]}>
          <SearchBar />
        </MemoryRouter>
      </NavigationProvider>
    );
    expect(screen.getByRole('search')).toBeInTheDocument();
  });

  it('navigates correctly when submitting the form', () => {
    const { getByText } = render(
      <NavigationProvider>
        <MemoryRouter initialEntries={["/"]}>
          <Routes>
            <Route path="/" element={<SearchBar />} />
            <Route path="/items" element={<div>list</div>} />
          </Routes>
        </MemoryRouter>
      </NavigationProvider>
    );

    const inputElement = screen.getByRole('textbox');
    fireEvent.change(inputElement, { target: { value: 'test' } });
    fireEvent.submit(screen.getByRole('search'));

    expect(getByText('list')).toBeInTheDocument();
  });
});