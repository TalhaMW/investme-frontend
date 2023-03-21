import { createContext, useState } from 'react';

export const LoginContext = createContext();

export default function LoginProvider({ children }) {
  const [loginToken, setLoginToken] = useState(
    localStorage.getItem('jwtToken')
  );
  return (
    <LoginContext.Provider value={{ loginToken, setLoginToken }}>
      {children}
    </LoginContext.Provider>
  );
}
