import React from 'react';
import { Titulo } from "./Titulo";
import { Produto } from "./Produto";

const produtos = [
  { nome: 'Notebook', propriedades: ['16gb ram', '512gb'] },
  { nome: 'Smartphone', propriedades: ['2gb ram', '128gb'] },
];

export const Produtos = () => {
  return (
    <section>
      <Titulo text='Produtos'/>
      {produtos.map(({nome , propriedades}, index) => (
        <Produto key={index} nome={nome} propriedades={propriedades}/>
      ))}
    </section>
  )
}
