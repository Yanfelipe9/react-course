import { Header } from './components/Header';
import { Home } from './components/Home';
import { Produtos } from './components/Produtos';

function App() {
  let Pagina;
  const { pathname } = window.location;
  if (pathname === '/produtos') {
    Pagina = Produtos;
  } else {
    Pagina = Home;
  }

  return (
    <>
      <Header />
      <Pagina />
    </>
  );
}

export default App;
