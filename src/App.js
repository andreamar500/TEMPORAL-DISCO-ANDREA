import './App.css';
import InputLogin from './componentes/input-login';
import loginlogo from './imagenes/logo-login.png';

function App() {
  return (
    <div className='App'>
      <div class="row justify-content-end mt-5 mb-4">
        <div class="col-5  ingresa-nombre">
          Ingresa tu nombre
        </div>
      </div>
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

      <div class="row justify-content-center mt-5 mb-4">
        <div class="col-10 text-justify politicas">
          Al tocar continuar con Google o Continuar con
          Facebook, aceptas las condiciones de uso y la
          Política de privacidad de Disco Centro.
        </div>
      </div>
      
    </div>
     

  );
}

export default App;
