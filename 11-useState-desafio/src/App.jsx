// Os links abaixo puxam dados de um produto em formato JSON
// https://ranekapi.origamid.dev/json/api/produto/tablet
// https://ranekapi.origamid.dev/json/api/produto/smartphone
// https://ranekapi.origamid.dev/json/api/produto/notebook
// Crie uma interface com 3 botões, um para cada produto.
// Ao clicar no botão faça um fetch a api e mostre os dados do produto na tela.
// Mostre apenas um produto por vez
// Mostre a mensagem carregando... enquanto o fetch é realizado

import { useState } from "react";
import { Produto } from "./Produto";



function App() {

  const [dados, setDados] = useState(null)
  const [loading, setLoading] = useState(null)

  // useEffect(() => {
  //   fetch('https://ranekapi.origamid.dev/json/api/produto/notebook')
  //     .then((response) => response.json())
  //     .then((json) => setDados(json));
  // }, []);

  async function handleClick(event){
    setLoading(true)
    const response = await fetch(`https://ranekapi.origamid.dev/json/api/produto/${event.target.innerText}`)
    const json = await response.json()
    console.log(json)
    setDados(json)
    setLoading(false)
  }

  return (
    <>
      <button onClick={handleClick}>tablet</button>
      <button onClick={handleClick}>smartphone</button>
      <button onClick={handleClick}>notebook</button>
      {loading && <p>Loading...</p>}
      {!loading && dados && <Produto dados={dados}/>}
    </>
  );
}

export default App;
