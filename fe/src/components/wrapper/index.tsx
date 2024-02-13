import { ReactNode } from "react";
import "./styles.scss";

const Wrapper = ({ children }: { children: ReactNode }) => {
  return (
    <div className="wrapper">
      {children}
    </div>
  )
};

export default Wrapper;
