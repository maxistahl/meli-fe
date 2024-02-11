
import './styles.scss';
import { Link } from "react-router-dom";

type Step = {
  title: string;
  id: string;
  url: string;
}

type BreadcrumbProps = {
  steps: Step[];
}

const Breadcrumb = ({ steps }: BreadcrumbProps) => {
  return (
    <nav className="breadcrumb">
      <ol>
        {steps.map((step) => (
          <li key={step.id}>
            <Link to={step.url}>{step.title}</Link>
          </li>
        ))}
      </ol>
    </nav>
  );
}

export default Breadcrumb;
