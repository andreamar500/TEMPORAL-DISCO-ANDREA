import './App.css';
import InputLogin from './componentes/input-login';
import loginlogo from './imagenes/logo-login.png';

function App() {
  return (
    <div className='App'>
      <div className='encabezado-login'>
        <div className='titulo-login'>
          <p>Especialistas en Vinilos y Cassettes de época.</p>
        </div>      
        <img src={loginlogo}  alt='Logo de Disco Centro'></img>        
      </div>
      <div className='formulario-correo'>
        <InputLogin label="Escribe tu correo electrónico para continuar"
        label_for="correo"
        input_id="correo"
        tipo="email"/>
      </div>
      
    </div>
     

  );
}

export default App;
