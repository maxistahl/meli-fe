import { Link } from "react-router-dom";
import Wrapper from "../wrapper";
import SearchBar from "../searchBar";
import "./styles.scss";

const Header = () => {
  return (
    <header className="header" role="header">
      <Wrapper>
        <div className="inner">
          <Link to="/" role="link">
            <div className="logo" />
          </Link>
          <SearchBar />
        </div>
      </Wrapper>
    </header>
  );
}

export default Header;
