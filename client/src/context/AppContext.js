import { createContext, useContext, useReducer } from 'react';
import reducers from './reducers';

const AppContext = createContext();

const INITIAL_STATE = {
  user: {
    id: 'iuhf78y73uuey9',
    name: 'John Doe',
    email: 'johndoe@gmail.com',
    desc: 'A frontend web developer',
    location: 'Los Angeles, CA',
  },
  error: false,
  isApplicant: true,
};

export const AppContextProvider = ({ children }) => {
  const [state, dispatch] = useReducer(reducers, INITIAL_STATE);

  return (
    <AppContext.Provider value={{ state, dispatch }}>
      {children}
    </AppContext.Provider>
  );
};

export const useAppContext = () => useContext(AppContext);
