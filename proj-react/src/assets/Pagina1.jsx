import { Card } from './rotas/Card'

export function Pagina1 () {
  return (      
      <div className="card-list">
        <Card
          title="Informações Cadastrais"
          buttonLabel="Acessar Aqui"
        />
        <Card
          title="Situação do Usuário"
          buttonLabel="Acessar Aqui"
        />
        <Card
          title="Processos"
          buttonLabel="Acessar Aqui"
        />  
        <Card
          title="Validação de documentos"
          buttonLabel="Acessar Aqui"
        />
        <Card
          title="Emissão de guias"
          buttonLabel="Acessar Aqui"
        />
      </div>
  );
}

