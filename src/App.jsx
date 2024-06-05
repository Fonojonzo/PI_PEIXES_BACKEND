import React from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';

import Login from './pages/login/Login';
import Cadastro from './pages/cadastroUsuario/CadastroUsuario';
import Card from './pages/cardItem/CardItens';

const App = () => {
  return (
    <Router>
      <Routes> 
        <Route path="/" element={<Login />} />
        <Route path="/cadastro" element={<Cadastro />} />
        <Route path="/cards" element={<Card />} />
      </Routes>
    </Router>
  );
};

export default App;
