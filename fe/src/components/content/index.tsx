import { ReactNode } from 'react';
import './styles.scss';

const Content = ({ children }: { children: ReactNode }) => {
  return (
    <div className='content'>
      {children}
    </div>
  );
}

export default Content;
