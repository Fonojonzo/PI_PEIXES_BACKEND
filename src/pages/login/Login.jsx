// src/pages/login/Login.js

import React, { useState } from "react";
import { Form, Button, FlexboxGrid } from "rsuite";
import "./Login.css";
import { FaRegEye, FaRegEyeSlash } from "react-icons/fa";
import { Link, useNavigate } from 'react-router-dom';
import swal from 'sweetalert';

const Login = () => {
  const navigate = useNavigate();
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [showPassword, setShowPassword] = useState(false);

  const togglePasswordVisibility = () => {
    setShowPassword(!showPassword);
  };

  const handleLogin = async () => {
    try {
      const response = await fetch('http://localhost:5000/api/users/login', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify({ email, password }),
      });

      if (response.ok) {
        const data = await response.json();
        swal({
          title: "Sucesso",
          text: "Login bem-sucedido",
          icon: "success",
        });
        navigate('/cards', { state: { userId: data.userId } }); // Passando o userId
      } else {
        const errorData = await response.json();
        swal({
          title: "Erro",
          text: `Erro ao fazer login: ${errorData.message}`,
          icon: "error",
        });
      }
    } catch (error) {
      swal({
        title: "Erro",
        text: `Erro ao fazer login: ${error.message}`,
        icon: "error",
      });
    }
  };

  return (
    <div className="login-container">
      <h4 className="titulo" style={{marginLeft:"20rem"}}>FAÇA SEU LOGIN</h4>
      <Form>
        <FlexboxGrid>
          <FlexboxGrid.Item colspan={24}>
            <Form.Group>
              <Form.ControlLabel className="label">Email</Form.ControlLabel>
              <Form.Control
                name="email"
                type="email"
                placeholder="Digite seu E-Mail"
                value={email}
                onChange={(value) => setEmail(value)}
              />
            </Form.Group>
          </FlexboxGrid.Item>
        </FlexboxGrid>
        <FlexboxGrid style={{ marginTop: "1rem" }}>
          <FlexboxGrid.Item colspan={24}>
            <Form.Group>
              <Form.ControlLabel className="label">Senha</Form.ControlLabel>
              <div className="input-with-icon">
                <Form.Control
                  name="password"
                  placeholder="Digite sua Senha"
                  type={showPassword ? "text" : "password"}
                  value={password}
                  onChange={(value) => setPassword(value)}
                />
                <Button
                  className="input-icon-divs"
                  onClick={togglePasswordVisibility}
                >
                  {showPassword ? <FaRegEyeSlash /> : <FaRegEye />}
                </Button>
              </div>
            </Form.Group>
          </FlexboxGrid.Item>
        </FlexboxGrid>
       
        <FlexboxGrid style={{ marginTop: "1rem" }}>
          <Button appearance="primary" color="blue" onClick={handleLogin}>
            ENTRAR
          </Button>
        </FlexboxGrid>
        <FlexboxGrid justify="center" style={{ marginTop: "1rem" }}>
          <Link to="/cadastro">Não Tenho Conta</Link>
        </FlexboxGrid>
      </Form>
    </div>
  );
};

export default Login;
