import { ReactNode, createContext, useState } from 'react';

const NavigationContext = createContext({});

const NavigationProvider = ({ children }: { children: ReactNode }) => {
  const [searchValue, setSearchValue] = useState('');
  const [wasNavigated, setWasNavigated] = useState(false);

  return (
    <NavigationContext.Provider value={{ searchValue, setSearchValue, wasNavigated, setWasNavigated }}>
      {children}
    </NavigationContext.Provider>
  );
}

export default NavigationProvider;

export { NavigationContext };
