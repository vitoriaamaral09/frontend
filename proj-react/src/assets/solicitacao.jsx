import { useState } from 'react';

export default function ListaSolicitacao() {
  const [items, setItems] = useState([]);
  const [errorMessage, setErrorMessage] = useState('');

  function addItem(event) {
    event.preventDefault();

    const form = event.currentTarget;
    const formData = new FormData(form);
    const newItemName = formData.get('newItemName');

    if (newItemName !== '' && newItemName.length > 0) {
      const newItem = {
        id: generateId(),
        name: newItemName,
      };

      setItems([...items, newItem]);
      form.reset();
      setErrorMessage('');
    } else {
      setErrorMessage('Preencha o campo!');
    }
  }

  function removeItem(id) {
    setItems(items.filter((item) => item.id !== id));
  }

  return (
    <div>
      <h2>
        Lista de Documentos
      </h2>
      <ul>
        {items.map((item) => (
          <li key={item.id}>
            <a
              href={`#delete-item-${item.id}`}              
              onClick={(event) => {
                event.preventDefault();
                if (confirm('Excluir este item?')) {
                  removeItem(item.id);
                }
              }}
            >
              <strong>{item.name}</strong>
            </a>
          </li>
        ))}
      </ul>
      <form onSubmit={addItem}>
        <fieldset>
          <div className="mb-4">
            <label htmlFor="newItemName">
              Documento solicitado:
            </label>
            <input
              id="newItemName"
              name="newItemName"
              type="text"
              
            />
          </div>
          {errorMessage && <p className="text-red-500">{errorMessage}</p>}
          <button
            type="submit"
         
          >
            Adicionar Item
          </button>
        </fieldset>
      </form>
    </div>
  );
}

const generateId = function () {
  return Date.now().toString(36) + Math.random().toString(36).substr(2);
};
