import { createContext } from 'react';

export const AuthContext = createContext({
  isLoggedIn: false,
  level:0,
  login: () => {},
  logout: () => {}
});