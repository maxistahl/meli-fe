import { Link } from "react-router-dom";
import Wrapper from "../wrapper";
import SearchBar from "../searchBar";
import "./styles.scss";

const Header = () => {
  return (
    <header className="header">
      <Wrapper>
        <div className="inner">
          <Link to="/">
            <div className="logo" />
          </Link>
          <SearchBar />
        </div>
      </Wrapper>
    </header>
  );
}

export default Header;
