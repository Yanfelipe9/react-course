import { useLocalStorage } from "./useLocalStorage"

function App() {

  const [produto, setProduto] = useLocalStorage('produto', '')

  function handleClick({target}){
    setProduto(target.innerText)
  }

  return (
    <>
      <button onClick={handleClick}>note</button>
      <button onClick={handleClick}>phone</button>
    </>
  )
}

export default App

// Quando a página é aberta, o componente App é renderizado.
// Dentro do componente App, o hook useLocalStorage é chamado para obter o estado do produto do localStorage. Como inicialmente não há nenhum valor no localStorage para a chave 'produto', o valor inicial é usado (vazio).
// Os botões "note" e "phone" são renderizados na interface do usuário.
// Quando um botão é clicado, a função handleClick é chamada e o evento de clique é passado para ela.
// Dentro da função handleClick, o estado do produto é atualizado com o texto do botão clicado usando setProduto.
// A atualização do estado do produto aciona o re-render do componente App.
// O estado atualizado do produto é exibido na interface do usuário, refletindo o texto do botão clicado.
// Simultaneamente, o hook useLocalStorage atualiza o valor no localStorage com o novo estado do produto. Isso garante que o valor persista mesmo quando a página for recarregada ou fechada e aberta novamente.
