import { useState } from 'react';

export default function Pagina2() {
  const [formData, setFormData] = useState({
    nome: '',
    cpf: '',
    endereco: '',
    estadocivil: '',
    nacionalidade: '',
    naturalidade: '',
    data: '',
    profissao: '',
    senha: '',
  });

  const handleSubmit = (event) => {
    event.preventDefault();
    // Aqui você pode adicionar a lógica para enviar os dados do formulário
    console.log('Dados do formulário:', formData);
    // Limpar o formulário após o envio
    setFormData({
      nome: '',
      cpf: '',
      endereco: '',
      estadocivil: '',
      nacionalidade: '',
      naturalidade: '',
      data: '',
      profissao: '',
      senha: '',
    });
  };

  return (
    <div className="form-container">
      <h3>Cadastro</h3>
      <form onSubmit={handleSubmit}>
        <div>
          <input
            type="text"
            placeholder="Nome"
            value={formData.nome}
            onChange={(event) => setFormData({ ...formData, nome: event.target.value })}
            required
            className="input-field" // Adicionando classe para estilo
          />
        </div>
        <div>
          <input
            type="text"
            placeholder="CPF"
            value={formData.cpf}
            onChange={(event) => setFormData({ ...formData, cpf: event.target.value })}
            required
            className="input-field" // Adicionando classe para estilo
          />
        </div>
        <div>
          <input
            type="text"
            placeholder="Endereço"
            value={formData.endereco}
            onChange={(event) => setFormData({ ...formData, endereco: event.target.value })}
            required
            className="input-field" // Adicionando classe para estilo
          />
        </div>
        <div>
          <input
            type="text"
            placeholder="Estado Civil"
            value={formData.estadocivil}
            onChange={(event) => setFormData({ ...formData, estadocivil: event.target.value })}
            required
            className="input-field" // Adicionando classe para estilo
          />
        </div>
        <div>
          <input
            type="text"
            placeholder="Nacionalidade"
            value={formData.nacionalidade}
            onChange={(event) => setFormData({ ...formData, nacionalidade: event.target.value })}
            required
            className="input-field" // Adicionando classe para estilo
          />
        </div>
        <div>
          <input
            type="text"
            placeholder="Naturalidade"
            value={formData.naturalidade}
            onChange={(event) => setFormData({ ...formData, naturalidade: event.target.value })}
            required
            className="input-field" // Adicionando classe para estilo
          />
        </div>
        <div>
          <input
            type="text"
            placeholder="Data de Nascimento"
            value={formData.data}
            onChange={(event) => setFormData({ ...formData, data: event.target.value })}
            required
            className="input-field" // Adicionando classe para estilo
          />
        </div>
        <div>
          <input
            type="text"
            placeholder="Profissão"
            value={formData.profissao}
            onChange={(event) => setFormData({ ...formData, profissao: event.target.value })}
            required
            className="input-field" // Adicionando classe para estilo
          />
        </div>
        <div>
          <input
            type="password"
            placeholder="Senha"
            value={formData.senha}
            onChange={(event) => setFormData({ ...formData, senha: event.target.value })}
            required
            className="input-field" // Adicionando classe para estilo
          />
        </div>
        <button type="submit">Enviar</button>
      </form>
    </div>
  );
}
