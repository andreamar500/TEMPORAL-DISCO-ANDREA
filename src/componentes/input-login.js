import React from 'react';
import '../hojas-de-estilo/input-login.css';

function InputLogin(props) {
    return (
       <form>
        <div class="mb-3">
          <label for={props.label_for} class="form-label label-login">{props.label}</label>
          <input type={props.tipo} class="form-control" id={props.input_id} aria-describedby="emailHelp"></input>
        </div>
        <div className='text-center'>
            <button type="submit" class="btn btn-primary">Submit</button>
        </div>
        
      </form>
    );
  }
  
  export default InputLogin;