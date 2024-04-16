// useMemo é usado para memorizar o valor de retorno de uma função complexa, garantindo que essa função só seja executada quando necessário. 

import { useMemo, useState } from 'react';

function operacaoLenta(){
  let c;
  for (let i = 0; i < 100000000; i++) {
    c = i + i /10
  }
  return c
}

function App() {
  const [contar, setContar] = useState(0);

  const t1 = performance.now()
  const valor = useMemo(()=> {
    operacaoLenta()
  },[]) // O segundo argumento de useMemo é um array de dependências. Se alguma dessas dependências mudar, a função passada como primeiro argumento será reexecutada. No entanto, como o array de dependências está vazio ([]), a função será executada apenas uma vez, durante a renderização inicial do componente. Isso significa que o valor de valor será memorizado e não será recalculado em rerenderizações subsequentes, a menos que as dependências mudem.
  console.log(performance.now() - t1)


  return (
    <>
      <button onClick={() => setContar(contar + 1)}>Adicionar {contar}</button>
    </>
  );
}

export default App;
