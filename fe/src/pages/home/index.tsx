import { useEffect } from "react";
import useNavAndSearch, { NavAndSearchType } from "../../context/useNavAndSearch";
import Profile from "../../components/profile";
import './styles.scss';

const HomePage = () => {
  const { setSearchValue, wasNavigated } = useNavAndSearch() as NavAndSearchType;

  useEffect(() => {
    setSearchValue('');
    window.scrollTo(0, 0);
  }, [setSearchValue]);

  return (
    <div className="home-container">
      {!wasNavigated && <p className="first-message">Luego de buscar algun producto, este mensage desaparecera :)</p>}
      {wasNavigated && <Profile />}
    </div>
  )
}

export default HomePage;
