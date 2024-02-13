import { ReactNode } from "react";
import "./styles.scss";

const Wrapper = ({ children }: { children: ReactNode }) => {
  return (
    <div className="wrapper" data-testid="wrapper">
      {children}
    </div>
  )
};

export default Wrapper;
