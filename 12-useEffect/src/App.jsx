import { useEffect } from 'react';
import { useState } from 'react';
import { Produto } from './Produto';

function App() {
  const [ativo, setAtivo] = useState(false);

  return (
    <>
      <div>
        {ativo && <Produto/>}
        <button onClick={() => setAtivo(!ativo)}>{ativo ? 'Desativar' : "Ativar"}</button>
      </div>
    </>
  );
}

export default App;
