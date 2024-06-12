import React, { useState } from "react";
import { Form, Button, FlexboxGrid } from "rsuite";
import "./Cadastro.css";
import { FaRegEye, FaRegEyeSlash } from "react-icons/fa";
import { Link, useNavigate } from "react-router-dom";
import swal from "sweetalert";
import HeaderLogin from "../login/Header";
import axios from "axios";

const Cadastro = () => {
  const history = useNavigate();
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [password2, setPassword2] = useState("");
  const [nome, setNome] = useState("");
  const [showPassword, setShowPassword] = useState(false);
  const [showPassword2, setShowPassword2] = useState(false);

  const togglePasswordVisibility = () => {
    setShowPassword(!showPassword);
  };
  const togglePasswordVisibility2 = () => {
    setShowPassword2(!showPassword2);
  };

  async function handleCadastro() {
    if (password !== password2) {
      swal({
        title: "ERRO!",
        text: "As senhas digitadas não coincidem",
        icon: "error",
      });
    } else {
     
      const obj = {
        name: nome,
        email: email,
        password: password2,
      };

      await axios({
        method: "post",
        url: "https://api-peixes-cxxg.vercel.app/api/users/",
        headers: {
          accept: "*/*",
          "Content-Type": "application/json",
        },
        data: obj,
      })
        .then((res) => {
          swal({
            title: "SUCESSO!",
            text: "Usuário Cadastrado com Sucesso!",
            icon: "success",
          });
          history("/");
        })
        .catch((erro) => {
          console.error(`Erro: ${erro}`);
        });
    }
  }

  return (
    <Form>
      <HeaderLogin />
      <div className="cadastro-container">
        <h4 className="titulo">Cadastro de Usuário</h4>

        <FlexboxGrid>
          <FlexboxGrid.Item colspan={24}>
            <Form.Group>
              <Form.ControlLabel className="label">
                Nome Completo:
              </Form.ControlLabel>
              <Form.Control
                name="nome"
                type="text"
                placeholder="Digite seu Nome Completo"
                value={nome}
                onChange={(value) => setNome(value)}
              />
            </Form.Group>
          </FlexboxGrid.Item>
        </FlexboxGrid>

        <FlexboxGrid style={{ marginTop: "0.6rem" }}>
          <FlexboxGrid.Item colspan={24}>
            <Form.Group>
              <Form.ControlLabel className="label">Email:</Form.ControlLabel>
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
        <FlexboxGrid style={{ marginTop: "0.6rem" }}>
          <FlexboxGrid.Item colspan={24}>
            <Form.Group>
              <Form.ControlLabel className="label">
                Confirme sua Senha:
              </Form.ControlLabel>
              <div className="input-with-icon">
                <Form.Control
                  name="password"
                  type={showPassword2 ? "text" : "password"}
                  placeholder="Digite a Senha Novamente"
                  value={password2}
                  onChange={(value) => setPassword2(value)}
                />
                <Button
                  className="input-icon-divs"
                  onClick={togglePasswordVisibility2}
                >
                  {showPassword2 ? <FaRegEyeSlash /> : <FaRegEye />}
                </Button>
              </div>
            </Form.Group>
          </FlexboxGrid.Item>
        </FlexboxGrid>

        <FlexboxGrid>
          <Button appearance="primary" color="blue" onClick={handleCadastro}>
            CADASTRAR
          </Button>
        </FlexboxGrid>
        <FlexboxGrid justify="center" style={{ marginTop: "0.6rem" }}>
          <Link to="/">Já tem uma conta? Faça login</Link>
        </FlexboxGrid>
      </div>
    </Form>
  );
};

export default Cadastro;
