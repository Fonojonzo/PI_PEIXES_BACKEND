import React from 'react';
import './Header.css';
import { GiExitDoor ,GiCirclingFish} from "react-icons/gi";
import { useNavigate } from 'react-router-dom';

const HeaderCard = () => {
    const history = useNavigate();
  return (
    <header className="header">
      <div className="logo"><GiCirclingFish size={35}/>Guardiões do Aquário<GiCirclingFish size={35}/></div>
      <nav className="nav">
        <ul className="nav-list">
          <li className="nav-item"><a href="#home">Home</a></li>
          <li className="nav-item"><a href="#about">Sobre</a></li>
          <li className="nav-item"><a href="#services">Serviços</a></li>
          <li className="nav-item"><a href="#contact">Contato</a></li>
          <div onClick={()=>{ history('/login');}}>
        <li className="nav-item"><a href="/"><GiExitDoor  size={20} /></a> </li>
        </div>
        </ul>
      </nav>
    </header>
  );
};

export default HeaderCard;
