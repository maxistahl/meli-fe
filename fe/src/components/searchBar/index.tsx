import { useNavigate } from 'react-router-dom';
import './styles.scss';
import SearchIcon from './assets/searchIcon';
import useNavAndSearch, { NavAndSearchType } from '../../context/useNavAndSearch';

function SearchBar() {
  const { searchValue, setSearchValue, setWasNavigated } = useNavAndSearch() as NavAndSearchType;
  const navigate = useNavigate();

  const handleSubmit = (event: React.FormEvent<HTMLFormElement>) => {
    event.preventDefault();
    setWasNavigated(true);
    navigate(`/items?search=${encodeURIComponent(searchValue)}`);
  };

  return (
    <form onSubmit={handleSubmit} className='search-bar' role='search'>
      <label className="hidden" htmlFor="cb1-edit">Ingresá lo que quieras encontrar</label>
      <input
        id="cb1-edit"
        type="text"
        value={searchValue}
        onChange={(event) => setSearchValue(event.target.value)}
        placeholder='Buscar productos, marcas y más…'
        autoComplete='off'
        spellCheck='false'
        autoCorrect='off'
        role='textbox'
      />
      <button type="submit">
        <SearchIcon />
        <span className='hidden'>Search</span>
      </button>
    </form>
  );
}

export default SearchBar;
