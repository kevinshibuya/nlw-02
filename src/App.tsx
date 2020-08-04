// Necessário importar React sempre que for utilizar HTML dentro do código.
// JSX/TSX = Javascript/Typescript + HTML
import React from 'react';

import './assets/styles/global.css';
import Routes from './routes';

// Nome do componente sempre com letra maiúscula.
function App() {
  return (
    <Routes />
  );
}

export default App;
