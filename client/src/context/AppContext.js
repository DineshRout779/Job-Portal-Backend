import { createContext, useContext, useReducer } from 'react';
import reducers from './reducers';

const AppContext = createContext();

const INITIAL_STATE = {
  user: null,
  error: false,
  isApplicant: true,
};

export const AppContextProvider = ({ children }) => {
  const [state, dispatch] = useReducer(INITIAL_STATE, reducers);

  return (
    <AppContext.Provider value={{ state, dispatch }}>
      {children}
    </AppContext.Provider>
  );
};

export const useAppContext = () => useContext(AppContext);
