import React from 'react';
import './styles.scss';

const Content = ({ children }) => {
  return (
    <div className='content'>
      {children}
    </div>
  );
}

export default Content;
