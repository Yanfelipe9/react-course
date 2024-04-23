import React, { useState } from 'react';

export const Input = () => {
  const [form, setForm] = useState({
    nome: '',
    email: '',
  });

  function handleSubmit(event) {
    event.preventDefault();
    console.log(event)
  }

  function handleChange({ target }) {
    const { id, value } = target;
    console.log({[id]:value})
    setForm({...form, [id]:value})
  }

  return (
    <div>
      <form onSubmit={handleSubmit}>
        <label htmlFor="nome">Nome:</label>
        <input type="text" id='nome' value={form.nome} onChange={handleChange} />
        {form.nome}
        <label htmlFor="email">Email:</label>
        <input type="email" id='email' value={form.email} onChange={handleChange} />
        {form.email}
        <button>Enviar</button>
      </form>
    </div>
  );
};
