import React from 'react';

import whatsappIcon from '../../assets/images/icons/whatsapp.svg';

import './styles.css';

const TeacherItem: React.FC = () => {
  return (
   <article className="teacher-item">
      <header>
         <img src="https://pbs.twimg.com/profile_images/1290374806353907716/Mz5DqTxe_400x400.jpg" alt="Vitória Lopes"/>
         <div>
            <strong>Vitória Lopes</strong>
            <span>Física</span>
         </div>
      </header>

      <p>
         Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. 
         <br/><br/>
         Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat.
      </p>

      <footer>
         <p>
            Preço/hora
            <strong>R$ 60,00</strong>
         </p>
         <button type="button">
            <img src={whatsappIcon} alt="Whatsapp"/>
            Entrar em contato
         </button>
      </footer>
   </article>
  );
}

export default TeacherItem;