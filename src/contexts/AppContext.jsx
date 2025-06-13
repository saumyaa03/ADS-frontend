import { createContext, useState, useEffect } from "react";

export const Context = createContext();

export const AppProvider = ({ children }) => {
  const [token, setToken] = useState(null);

  useEffect(() => {
    const storedToken = localStorage.getItem("token");
    if (storedToken) setToken(storedToken);
  }, []);

  return (
    <Context.Provider value={{ token, setToken }}>
      {children}
    </Context.Provider>
  );
};
