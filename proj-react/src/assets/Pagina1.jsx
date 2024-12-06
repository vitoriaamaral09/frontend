import { Card } from './Card'
import ListaSolicitacao from './solicitacao';

export default function Pagina1 () {
  return (      
      <div className="card-list">
        <Card
          title="Informações Cadastrais"
        
        />
        <Card
          title="Situação do Usuário"
          
        />
        <Card
          title="Processos"
          
        />  
        <Card
          title="Validação de documentos"
          
        />
        <Card
          title="Emissão de guias"
         
        />
        <ListaSolicitacao/>
      </div>
  );
}

