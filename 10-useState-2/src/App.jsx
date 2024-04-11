import { useState } from 'react';

function App() {
  const [contador, setContador] = useState(1);
  const [item, setItem] = useState(['Item 1']);

  function handleClick() {
    setContador(contador + 1);
    setItem([...item, `Item ${contador + 1}`]);
  }

  return (
    <div>
      {item.map((item) => (
        <li key={item}>{item}</li>
      ))}
      <button onClick={handleClick}>Adicionar</button>
    </div>
  );
}

export default App;
