export function Card({ title, buttonLabel = 'Acessar Aqui' }) {
    return (
      <div className="card">
        <div className="card-body">
          <h5 className="card-title">{title}</h5>
          <a href="#go" className="btn btn-primary">
            {buttonLabel}
          </a>
        </div>
      </div>
    );
  }
