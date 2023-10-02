import { useState } from 'react';
import { Tarefas } from './Tarefas';

export function TaskForm() {
  const [txtTitulo, setTitulo] = useState('');
  const [txtDescricao, setDescricao] = useState('');
  const [txtData, setData] = useState('');

  const titulo = () => {
    const titulo = parseFloat(txtTitulo);
  };
  const [lista, setLista] = useState([]);
  const addItem = () => {
    setLista([...lista, txtTitulo]);
    console.log(lista);
  };

  // Adiciona o botão de excluir
  const handleRemove = (index) => {
    setLista(lista.filter((item, i) => i !== index));
  };

  return (
    <div>
      <label>Tarefa</label>
      <input
        type="text"
        placeholder="Descrição da Tarefa"
        onChange={(e) => setTitulo(e.target.value)}
      />

      <br />

      <button onClick={addItem}>Cadastrar Tarefa</button>
      {lista.map((item, index) => (
        <p key={index}>
          {item}
          <button key={index} onClick={() => handleRemove(index)}>
            Excluir
          </button>
        </p>
      ))}
    </div>
  );
}
