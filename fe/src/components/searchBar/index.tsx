import { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import './styles.scss';
import SearchIcon from './assets/searchIcon';

function SearchBar({ value = "" }: { value?: string }) {
  const [query, setQuery] = useState(value);
  const navigate = useNavigate();

  const handleSubmit = (event: React.FormEvent<HTMLFormElement>) => {
    event.preventDefault();
    navigate(`/items?search=${encodeURIComponent(query)}`);
  };

  return (
    <form onSubmit={handleSubmit} className='search-bar'>
      <label className="hidden" htmlFor="cb1-edit">Ingresá lo que quieras encontrar</label>
      <input
        id="cb1-edit"
        type="text"
        value={query}
        onChange={(event) => setQuery(event.target.value)}
        placeholder='Buscar productos, marcas y más…'
        autoComplete='off'
        spellCheck='false'
        autoCorrect='off'
      />
      <button type="submit">
        <SearchIcon />
        <span className='hidden'>Search</span>
      </button>
    </form>
  );
}

export default SearchBar;
