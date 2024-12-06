import { Link } from "react-router-dom";

export function Card({ title, link, buttonLabel = 'Acessar Aqui' }) {
  return (
    <div className="card">
      <div className="card-body">
        <h5 className="card-title">{title}</h5>
        <Link to= {link}> 
          {buttonLabel}        
        </Link>          
      </div>
    </div>
  );
}

