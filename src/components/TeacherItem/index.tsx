import React from 'react';

import whatsappIcon from '../../assets/images/icons/whatsapp.svg';

import './styles.css';

function TeacherItem() {
  return (
    <article className="teacher-item">
      <header>
        <img src="https://avatars3.githubusercontent.com/u/47981817?s=460&u=5bbf813dd54ade8c24c7f0a11045b00cc001eaed&v=4" alt="Kevin Shibuya"/>
        <div>
          <strong>Kevin Shibuya</strong>
          <span>Programação</span>
        </div>
      </header>

      <p>
        Lorem ipsum dolor sit amet consectetur adipisicing elit. Quibusdam debitis ipsum fugiat sequi fugit mollitia minima. Rerum, ipsum illum eveniet labore quae vel sed quaerat provident consectetur dicta nam dolorum?
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