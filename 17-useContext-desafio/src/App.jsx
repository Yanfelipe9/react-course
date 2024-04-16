// Utilize o GlobalContext do exemplo anterior para puxar os dados da API abaixo:
// https://ranekapi.origamid.dev/json/api/produto/
// assim que o usuário acessar o app
// coloque os dados da API no contexto global, dando acesso aos dados da mesma
// defina uma função chamada limparDados que é responsável por zerar os dados de produto
// e exponha essa função no contexto global

import { GlobalStorage } from './GlobalContext';
import { Produtos } from './Produtos';
import { Limpar } from './Limpar';

function App() {

  return (
    <GlobalStorage>
      <Limpar/>
      <Produtos />
    </GlobalStorage>
  );
}

export default App;
