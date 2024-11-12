import { useState } from 'react';

export function Login() {
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
      <h3>Acesse sua conta</h3>
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
          type="varchar"
          placeholder="Sua senha"
        />
      </div>
      <br />
      <button onClick={logar} type="button" className="btn btn-info">
        Entrar
      </button>
               
    </div>
  );
}
