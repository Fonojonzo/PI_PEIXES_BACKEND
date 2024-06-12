import React, { useState } from "react";
import { Form, Button, FlexboxGrid } from "rsuite";
import "./Login.css";
import { FaRegEye, FaRegEyeSlash } from "react-icons/fa";
import { Link } from "react-router-dom";
import { useNavigate } from "react-router-dom";
import HeaderLogin from "./Header";
import axios from "axios";

const Login = () => {
  const history = useNavigate();
  const [email, setEmail] = useState("");

  const [password, setPassword] = useState("");
  const [showPassword, setShowPassword] = useState(false);

  const togglePasswordVisibility = () => {
    setShowPassword(!showPassword);
  };

  async function handleLogin() {
    const obj = { email: email.toString(), password: password.toString() };

    await axios({
      method: "post",
      url: "https://api-peixes-cxxg.vercel.app/api/users/login",
      headers: {
        accept: "*/*",
        "Content-Type": "application/json",
      },
      data: obj,
    })
      .then((res) => {
        if (res.data.message === "Login bem-sucedido") {
          swal({
            title: "SUCESSO!",
            text: "Usuário Cadastrado com Sucesso!",
            icon: "success",
          });
          sessionStorage.setItem("idUsuario", res.data.userId);
          history("/home");
        } else {
          swal({
            title: "ERRO!",
            text: "Usuário ou senha incorretos. Por favor, verifique suas credenciais e tente novamente.",
            icon: "error",
          });
        }
      })

      .catch((erro) => {
        swal({
          title: "ERRO!",
          text: "Usuário ou senha incorretos. Por favor, verifique suas credenciais e tente novamente.",
          icon: "error",
        });
      });
  }

  return (
    <Form>
      <HeaderLogin />
      <div className="login-containers">
        <h4 className="titulo" style={{ marginLeft: "20rem" }}>
          FAÇA SEU LOGIN
        </h4>

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
      </div>
    </Form>
  );
};

export default Login;
