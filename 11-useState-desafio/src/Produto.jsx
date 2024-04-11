import React from 'react'

export const Produto = ({dados}) => {

  return (
    <>
    <h1>{dados.nome}</h1>
    <h3>R${dados.preco}</h3>
    <p>{dados.descricao}</p>
    <img src={dados.fotos[0].src} alt={dados.fotos[0].titulo} />
    </>
  )
}
