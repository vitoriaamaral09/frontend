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
      setErrorMessage('Preencha todos os campos!');
    }
  }

  function removeItem(id) {
    setItems(items.filter((item) => item.id !== id));
  }

  return (
    <div className="p-6">
      <h2 className="mb-5 text-3xl font-semibold text-gray-800">
        Lista de Documentos
      </h2>
      <ul className="mx-5 my-4 list-disc">
        {items.map((item) => (
          <li key={item.id} className="py-px">
            <a
              href={`#delete-item-${item.id}`}
              className="hover:text-green-700"
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
      <form onSubmit={addItem} className="mt-6 w-full max-w-md rounded bg-gray-100 p-3.5">
        <fieldset>
          <div className="mb-4">
            <label htmlFor="newItemName" className="block text-gray-600">
              Documento solicitado:
            </label>
            <input
              id="newItemName"
              name="newItemName"
              type="text"
              className="mt-1 block w-full rounded border border-gray-300 p-1.5 focus:border-teal-500 focus:ring focus:ring-teal-500 focus:ring-opacity-50"
            />
          </div>
          {errorMessage && <p className="text-red-500">{errorMessage}</p>}
          <button
            type="submit"
            className="rounded bg-teal-500 px-4 py-2 text-white hover:bg-teal-600"
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
