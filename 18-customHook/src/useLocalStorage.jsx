import React, { useEffect, useState } from 'react'

// Define um hook personalizado para armazenar valores no localStorage
export const useLocalStorage = (key, initialValue) => {
  // Usa useState para gerenciar o estado local
  const [state, setState] = useState(() => {
    // Inicializa o estado com base no valor armazenado no localStorage ou no valor inicial fornecido
    const local = localStorage.getItem(key);
    return local ? local : initialValue; // Retorna o valor do localStorage se existir, caso contrário, retorna initialValue
  })

  // Usa useEffect para sincronizar o estado com o localStorage
  useEffect(() => {
    localStorage.setItem(key, state); // Atualiza o localStorage com o valor do estado sempre que o estado mudar e RETORNA COMO STRING
  }, [state, key]);

  return [state, setState]; // Retorna o estado e a função para atualizar o estado
};

