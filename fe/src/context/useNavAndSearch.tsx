import { useContext } from "react";
import { NavigationContext } from ".";

export type NavAndSearchType = {
  searchValue: string;
  setSearchValue: (value: string) => void;
  wasNavigated: boolean;
  setWasNavigated: (value: boolean) => void;
}

const useNavAndSearch = () => {
  const context = useContext(NavigationContext);
  if (!context) {
    throw new Error('useNavigation must be used within a NavigationProvider');
  }
  return context;
}

export default useNavAndSearch;
