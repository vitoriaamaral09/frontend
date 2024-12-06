import './App.css';

import { Login } from './assets/Login';

function App(){
  return (
    <div className='login-container'>
      <Login 
        title="Página Cliente" 
        link= "/Pagina1"
      />
      <Login 
        title="Página Usuário"
        link= "/Dashboard"
      />
    </div>
  );
}

export default App;


