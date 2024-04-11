export const ButtonModal = ({ modal, setModal }) => {
  function handleClick() {
    setModal((ativo) => !ativo);
  }

  return (
    <>
      <button onClick={handleClick}>{modal ? 'Fechar' : 'Abrir'}</button>
    </>
  );
};
