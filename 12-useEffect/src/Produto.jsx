import React, { useEffect } from 'react';

// Componente funcional Produto
export const Produto = () => {
  // useEffect é usado para lidar com efeitos colaterais no componente
  useEffect(() => {
    // Função que lida com o evento de rolagem da janela
    function handleScroll(event) {
      console.log(event); // Exibe o evento de rolagem no console
    }
    
    // Adiciona um ouvinte de evento para o evento de rolagem da janela
    window.addEventListener('scroll', handleScroll);

    // Função de limpeza que é executada quando o componente é desmontado
    return () => {
      // Remove o ouvinte de evento de rolagem da janela
      window.removeEventListener('scroll', handleScroll)
    }

  }, []); // Este efeito é executado apenas uma vez, após a montagem do componente

  // Retorna um elemento div que simula o conteúdo do produto
  return <div style={{ height: '200vh' }}>Produto</div>;
};
