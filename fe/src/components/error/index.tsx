import { Link } from "react-router-dom";
import Laptop from "./assets/laptop";
import "./styles.scss";

type ErrorUIProps = {
  message: string;
  goHomeLinkText?: string;
};

const ErrorUI = ({ message, goHomeLinkText = "Ir a la página principal" }: ErrorUIProps) => {
  return (
    <div className="error-ui">
      <Laptop />
      <h2>{message}</h2>
      <Link to="/">{goHomeLinkText}</Link>
    </div>
  );
}

export default ErrorUI;
