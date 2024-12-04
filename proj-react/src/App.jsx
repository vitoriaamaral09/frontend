import './App.css';

import { Login } from './assets/Login';

function App(){
  return (
    <div className='login-container'>
      <Login 
        title="Oi" 
        link= "/Pagina1"
      />
      <Login 
        title="Olá"
        link= "/Pagina1"
      />
    </div>
  );
}

export default App;


