import React from 'react'
import { useContext } from 'react'
import { GlobalContext } from './GlobalContext'

export const Produto = ({props}) => {
  const global = useContext(GlobalContext)
  return (
    <div>
      <p>Produto: {global.contar}</p>
      <button onClick={() => global.props()}>Adicionar</button>
    </div>
  )
}
