import React from 'react';
import '../hojas-de-estilo/input-login.css';
import googleIcon from '../imagenes/google-icono.png';
import facebookIcon from '../imagenes/facebook-icono.png';

function InputLogin(props) {
    return (
        <div class="container">
            <div class="row g-3">
                <div class="col">
                <label for="email1" class="form-label label-login">Escribe tu correo electrónico para continuar</label>
                    <input type="email" class="form-control" placeholder="First name" id="email1"></input>
                </div>
            </div>
            <div class="row g-3 mt-2">
                <div class="col text-center">
                    <button type="button" class="btn btn-primary btn-continuar">Continuar</button>
                </div>
            </div>
            <div class="row g-3 mt-2">
                <div class="strike">
                    <span class="linea">o</span>
                </div>
            </div>
            <div class="row g-3 mt-2">
                <div class="col text-center">
                    <button type="button" class="btn btn-primary login-google"> <img src={googleIcon}  className="logo-google" alt='Google'></img> Continuar con google</button>
                </div>
            </div>
            <div class="row g-3 mt-2">
                <div class="col text-center">
                    <button type="button" class="btn btn-primary login-facebook"><img src={facebookIcon}  className="logo-facebook" alt='Facebook'></img>Continuar con Facebook</button>
                </div>
            </div>
        </div>
/*        <form>
        <div class="mb-3">
          <label for={props.label_for} class="form-label label-login">{props.label}</label>
          <input type={props.tipo} class="form-control" id={props.input_id} aria-describedby="emailHelp"></input>
        </div>
        <div className='text-center'>
            <button type="submit" class="btn btn-primary">Submit</button>
        </div>
        
      </form> */
    );
  }
  
  export default InputLogin;