import { useState } from 'react';
import { Modal } from './Modal';
import { ButtonModal } from './ButtonModal';

function App() {
  const [modal, setModal] = useState(false);

  return (
    <>
      <Modal modal={modal} setModal={setModal} />
      <ButtonModal modal={modal} setModal={setModal} />
    </>
  );
}

export default App;
