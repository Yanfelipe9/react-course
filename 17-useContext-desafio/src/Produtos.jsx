import React, { useContext } from 'react';
import { GlobalContext } from './GlobalContext';

export const Produtos = () => {
  const global = useContext(GlobalContext);

  if(global.dados == null) return null

  return (
    <>
      {global.dados.map(({id, nome, preco, fotos}) => (
        <div key={id}>
          <h2>{nome}</h2>
          <p>R$ {preco}</p>
          <img style={{width: '100px'}} src={fotos[0].src} alt={nome} />
        </div>
      ))}
    </>
  );
};
