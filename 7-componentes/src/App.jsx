import { Footer } from './Footer';
import { Form } from './Form/Form';
import { Header } from './Header';


function App() {
  return (
    <>
      <Header text='Header'>
        <h3>Children</h3>
      </Header>
      <Form/>
      <Footer text='Todos os direitos reservados'/>
    </>
  );
}

export default App;
