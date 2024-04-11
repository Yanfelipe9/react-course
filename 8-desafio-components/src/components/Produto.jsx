export const Produto = ({ nome, propriedades }) => {
  return (
    <>
      <div style={{border: '1px solid black', margin: '0.5rem', padding:'0.5rem'}}>
        <p>{nome}</p>
        <ul>
          {propriedades.map((item, index) => (
            <li key={index}>{item}</li>
          ))}
        </ul>
      </div>
    </>
  );
};
