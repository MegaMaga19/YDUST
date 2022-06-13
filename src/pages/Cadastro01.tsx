import { useState } from 'react';
import Img from '../componentes/Imagens/ooooo.png'
import Botao from '../componentes/Botao';
import './Cadastro01.css'
import Pg01Page from './pg01';

enum Estado {
  inicial,
  
};
  
const Cadastro01= function() {
      const [estado,setEstado] = useState (Estado.inicial);

      const botaoSalvarClicado = function () {
      
      };

        return (
        <div className='cadastro01'>
<<<<<<< HEAD
          
          <img src={Img} className='titulo' alt="livro" />
          <div className='cadastro'>
            <input type="text" placeholder='Nome de usuário' className='campo'/>
            <br></br>
            <input type="password" placeholder='Digite sua senha' className='campo'/>
            <br></br>
            <input type="text" placeholder='Digite seu Email' className='campo' />
            <br></br>
            <input type="text" placeholder='Digite seu CPF' className='campo' />
            <br></br>
=======
          <h1 className='titulo'>Ydust</h1>
          <div className='cadastro'>
            <input type="text" placeholder='Nome de usuário' className='campo'/>
            <input type="password" placeholder='Digite sua senha' className='campo'/>
            <input type="text" placeholder='Digite seu Email' className='campo' />
            <input type="text" placeholder='Digite seu CPF' className='campo' />
>>>>>>> 873f8e42353d71f8e81c0c10bd5953ca3af4efd8
            <input type="text" placeholder='Digite sua Data de Nascimento' className='campo'/>
            <Botao texto='Salvar' clique={botaoSalvarClicado}/>
          </div>        
      </div>
    );
}

export default Cadastro01;
