import { Link } from 'react-router-dom';
import { useState } from 'react';

export function Login({title, link, buttonTitle = "Acessar"}) {
  const [formData, setFormData] = useState({
        Usuário: 'Kat',
        Senha: '123ka',
    });
  const [pessoas, setPessoas] = useState([]);

  function logar() {
    setPessoas([...pessoas, formData]);
    setFormData({
      usuário: '',
      senha: '',
    });
  }

  return (
    <div style={{ marginBottom: 32 }}>
      <h3>{title}
      </h3>
      <div>
        <input
          value={formData.usuário}
          onChange={(event) =>
            setFormData({ ...formData, usuário: event.target.value })
          }
          type="text"
          placeholder="Nome de Usuário"
        />
      </div>
          
      <div>
        <input
          value={formData.senha}
          onChange={(event) =>
            setFormData({ ...formData, senha: event.target.value })
          }
          type="password"
          placeholder="Sua senha"
        />
      </div>
      <br />
      <Link
          to={link}
          className="inline-flex rounded-md bg-gray-100 p-4 text-base font-semibold hover:bg-gray-200 md:text-lg"
        >
          {buttonTitle}
      </Link>         
    </div>
  );
}
