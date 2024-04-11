import { Button } from './Button';
import { Input } from './Input';

export const Form = () => {

  return (
    <form>
      <Input id='nome' label='Nome' required/>
      <Input id='email' label='Email' type='password'/>
      <Button titulo="Enviar" />
    </form>
  );
};
