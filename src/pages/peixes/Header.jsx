import React from "react";
import "./Header.css";
import { GiExitDoor, GiCirclingFish } from "react-icons/gi";
import { useNavigate, Link } from "react-router-dom";
import { FlexboxGrid } from "rsuite";

const HeaderCadastro = () => {
  const history = useNavigate();
  return (
    <header className="header">
      <FlexboxGrid className="logo">
      <FlexboxGrid.Item colspan={3}>
          <GiCirclingFish style={{ marginTop: "0.1rem", }} size={30} />
        </FlexboxGrid.Item>
        <FlexboxGrid.Item colspan={16} style={{marginLeft: "12px"}}>
          Fish-Care
        </FlexboxGrid.Item>
        <FlexboxGrid.Item colspan={3}>
          <GiCirclingFish style={{marginLeft: "-10px", marginTop: "0.1rem" }} size={30} />
        </FlexboxGrid.Item>
      </FlexboxGrid>
      <nav className="nav">
        <ul className="nav-list">
          <li className="nav-item" style={{ outline: 'none' }}>
            <Link to="/home" style={{textDecoration: 'none'}}>Home</Link>
          </li>
          <li className="nav-item" style={{ outline: 'none' }}>
            <Link to="/cadastro-peixe" style={{textDecoration: 'none'}}>Cadastrar Meus Peixes</Link>
          </li>
          <li className="nav-item" style={{ outline: 'none' }}>
            <Link to="/dash" style={{textDecoration: 'none'}}>Dashboard</Link>
          </li>
          <div
            onClick={() => {
              history("/login");
            }}
          >
            <li className="nav-item" style={{ outline: 'none' }}>
              <a href="/">
                <GiExitDoor size={20} />
              </a>
            </li>
          </div>
        </ul>
      </nav>
    </header>
  );
};

export default HeaderCadastro;
