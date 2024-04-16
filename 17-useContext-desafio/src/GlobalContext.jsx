import { useState } from 'react';
import { useEffect } from 'react';
import { createContext } from 'react';

export const GlobalContext = createContext();

export const GlobalStorage = ({ children }) => {
  const [dados, setDados] = useState([]);

  function limparDados(){
    setDados(null)
  }

  useEffect(() => {
    fetch('https://ranekapi.origamid.dev/json/api/produto/')
      .then((response) => response.json())
      .then((json) => setDados(json));
  }, []);
  

  return <GlobalContext.Provider value={{dados, setDados, limparDados}}>{children}</GlobalContext.Provider>;
};
