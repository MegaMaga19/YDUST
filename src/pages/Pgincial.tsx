import './Pgincial.css';
import Img01 from '../componentes/Imagens/ooooo.png'
import Img02 from '../componentes/Imagens/study-tools.png'
import Cabecalho from '../componentes/Cabecalho';
<<<<<<< HEAD
=======
import Arame from '../componentes/Arame';
>>>>>>> 873f8e42353d71f8e81c0c10bd5953ca3af4efd8

const Pgincial = function (){
    return (
        <>
<<<<<<< HEAD
        <Cabecalho/>
            <img src={Img01} className='Img01'/>
            <div className='pesquisar'>
                <input type="text" placeholder='Pesquisar'/>
            </div>

=======
        

        
            <Arame/>
            <img src={Img01} className='Img01'/>

            <div className='pesquisar'>
                <input type="text" placeholder='Pesquisar'/>
            </div>
        
>>>>>>> 873f8e42353d71f8e81c0c10bd5953ca3af4efd8
            
            <div className='Introducao'>
                <h1>Corrija sua redação em um instante</h1>

                <p>Ydust é um programa onde os alunos cadastrados conseguem aprimorar sua redação e compartilhar <br />
                conhecimentos, de forma rápida e gratuita.</p>
            </div>
        </>
    );
};

export default Pgincial;