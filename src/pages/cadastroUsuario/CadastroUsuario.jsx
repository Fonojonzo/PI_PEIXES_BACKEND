import React, { useState } from 'react';
import { Form, Button, FlexboxGrid } from 'rsuite';
import './Cadastro.css'; // Certifique-se de criar o arquivo CSS para estilização
import { FaRegEye, FaRegEyeSlash } from 'react-icons/fa';
import { Link } from 'react-router-dom';
import swal from 'sweetalert';

const Cadastro = () => {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [password2, setPassword2] = useState('');
  const [nome, setNome] = useState('');
  const [showPassword, setShowPassword] = useState(false);
  const [showPassword2, setShowPassword2] = useState(false);

  const togglePasswordVisibility = () => {
    setShowPassword(!showPassword);
  };
  const togglePasswordVisibility2 = () => {
    setShowPassword2(!showPassword2);
  };

  const handleCadastro = async () => {
    if (!nome || !email || !password || !password2) {
      swal({
        title: "Erro",
        text: "Por favor, preencha todos os campos obrigatórios",
        icon: "error",
      });
      return;
    }

    if (password !== password2) {
      swal({
        title: "Erro",
        text: "As senhas digitadas não coincidem",
        icon: "error",
      });
      return;
    }

    try {
      const response = await fetch('https://api-peixes.vercel.app/api/users', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify({ name: nome, email, password }),
      });

      if (response.ok) {
        swal({
          title: "Sucesso",
          text: "Usuário cadastrado com sucesso",
          icon: "success",
        });
      } else {
        const errorData = await response.json();
        swal({
          title: "Erro",
          text: `Erro ao cadastrar usuário: ${errorData.message}`,
          icon: "error",
        });
      }
    } catch (error) {
      swal({
        title: "Erro",
        text: `Erro ao cadastrar usuário: ${error.message}`,
        icon: "error",
      });
    }
  };

  return (
    <div className="cadastro-container">
      <h4 className="titulo">Cadastro de Usuário</h4>
      <Form>
        <FlexboxGrid>
          <FlexboxGrid.Item colspan={24}>
            <Form.Group>
              <Form.ControlLabel>Nome Completo:</Form.ControlLabel>
              <Form.Control
                name="nome"
                type="text"
                placeholder='Digite seu Nome Completo'
                value={nome}
                onChange={(value) => setNome(value)}
              />
            </Form.Group>
          </FlexboxGrid.Item>
        </FlexboxGrid>

        <FlexboxGrid style={{ marginTop: '0.6rem' }}>
          <FlexboxGrid.Item colspan={24}>
            <Form.Group>
              <Form.ControlLabel>Email:</Form.ControlLabel>
              <Form.Control
                name="email"
                type="email"
                placeholder='Digite seu E-Mail'
                value={email}
                onChange={(value) => setEmail(value)}
              />
            </Form.Group>
          </FlexboxGrid.Item>
        </FlexboxGrid>

        <FlexboxGrid style={{ marginTop: '0.6rem' }}>
          <FlexboxGrid.Item colspan={24}>
            <Form.Group>
              <Form.ControlLabel>Senha:</Form.ControlLabel>
              <div >
                <Form.Control
                  name="password"
                  type={showPassword ? 'text' : 'password'}
                  placeholder='Digite a Senha'
                  value={password}
                  onChange={(value) => setPassword(value)}
                />
                <Button
                  className="input-icon-div"
                  onClick={togglePasswordVisibility}
                >
                  {showPassword ? <FaRegEyeSlash /> : <FaRegEye />}
                </Button>
              </div>
            </Form.Group>
          </FlexboxGrid.Item>
        </FlexboxGrid>
        <FlexboxGrid style={{ marginTop: '0.6rem' }}>
          <FlexboxGrid.Item colspan={24}>
            <Form.Group>
              <Form.ControlLabel>Confirme sua Senha:</Form.ControlLabel>
              <div >
                <Form.Control
                  name="password"
                  type={showPassword2 ? 'text' : 'password'}
                  placeholder='Digite a Senha Novamente'
                  value={password2}
                  onChange={(value) => setPassword2(value)}
                />
                <Button
                  className="input-icon-div"
                  onClick={togglePasswordVisibility2}
                >
                  {showPassword2 ? <FaRegEyeSlash /> : <FaRegEye />}
                </Button>
              </div>
            </Form.Group>
          </FlexboxGrid.Item>
        </FlexboxGrid>

        <FlexboxGrid >
          <Button appearance="primary" color="blue" onClick={handleCadastro}>
            CADASTRAR
          </Button>
        </FlexboxGrid>
        <FlexboxGrid justify="center" style={{ marginTop: '0.6rem' }}>
          <Link to="/">Já tem uma conta? Faça login</Link>
        </FlexboxGrid>
      </Form>
    </div>
  );
};

export default Cadastro;
