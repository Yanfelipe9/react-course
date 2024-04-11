import { useRef, useState } from 'react';

function App() {
  // Define o estado do carrinho e da notificação
  const [carrinho, setCarrinho] = useState(0);
  const [notificacao, setNotificacao] = useState(null);
  const timeoutRef = useRef(); // Cria uma referência para o timeout

  // Função chamada quando o botão é clicado
  function handleClick() {
    // Incrementa o número de itens no carrinho
    setCarrinho(carrinho + 1);
    // Define a notificação como 'Adicionado'
    setNotificacao('Adicionado');
    // Limpa qualquer timeout existente
    clearTimeout(timeoutRef.current);
    // Define um novo timeout para limpar a notificação após 2 segundos
    timeoutRef.current = setTimeout(() => {
      setNotificacao(null); // Remove a notificação após 2 segundos
    }, 2000);
  }

  return (
    <>
      <p>{notificacao}</p>
      <button onClick={handleClick}>Adicionar ao carrinho {carrinho}</button>
    </>
  );
}

export default App;



// import { useRef, useState } from 'react';

// function App() {
//   const [comentario, setComentario] = useState([]);
//   const [input, setInput] = useState('');
//   const inputElement = useRef()

//   function handleClick(event) {
//     if (input.trim() != '') {
//       setComentario([...comentario, input]);
//       setInput('');
//       inputElement.current.focus()
//     }
//   }

//   return (
//     <>
//       <ul>
//         {comentario.map((comentario) => (
//           <li key={comentario}>{comentario}</li>
//         ))}
//       </ul>
//       <input
//         type="text"
//         ref={inputElement}
//         value={input}
//         onChange={({ target }) => setInput(target.value)}
//       />
//       <button onClick={handleClick}>Enviar</button>
//     </>
//   );
// }

// export default App;

