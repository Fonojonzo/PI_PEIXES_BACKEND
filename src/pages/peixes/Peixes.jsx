import React, { useState } from "react";
import { Form, Button, FlexboxGrid } from "rsuite";
import "./Peixes.css";
import { useNavigate } from "react-router-dom";
import HeaderCadastro from "./Header";
import axios from "axios";
import swal from "sweetalert";

const Peixes = () => {
  const history = useNavigate();
  const [especie, setEspecie] = useState("");
  const [nome, setNome] = useState("");
  const [tempoAlimentacao, setTempoAlimentacao] = useState("");
  const [alimentacao, setAlimentacao] = useState("");
  const [quantidade, setQuantidade] = useState("");
  const [imagem, setImagem] = useState("");

  const handleSave = async () => {
    const usuarioId = sessionStorage.getItem("idUsuario");
    if (!usuarioId) {
      swal({
        title: "ERRO!",
        text: "Usuário não logado. Por favor, faça login novamente.",
        icon: "error",
      });
      return;
    }

    const obj = {
      usuarioId,
      Especie: especie,
      Nome: nome,
      Tempo_alimentacao: tempoAlimentacao,
      Quantidade: quantidade,
      Alimentacao: alimentacao,
      Imagem: imagem ? imagem : "https://i0.wp.com/carbonozero.net/wp-content/uploads/2022/06/lula-gigante-mitologia.jpg?fit=1920%2C1080&ssl=1",
    };

    try {
      const response = await axios.post("https://api-peixes.vercel.app/api/peixes", obj);
      if (response.status === 201) {
        swal({
          title: "SUCESSO!",
          text: "Peixe cadastrado com sucesso!",
          icon: "success",
        });
        history("/home");
      }
    } catch (error) {
      swal({
        title: "ERRO!",
        text: "Erro ao cadastrar o peixe. Por favor, tente novamente.",
        icon: "error",
      });
    }
  };

  return (
    <Form>
      <HeaderCadastro />
      <div className="login-container">
        <h4 className="titulo" style={{ marginLeft: "18rem" }}>
          CADASTRO DE PEIXES
        </h4>
      
        <FlexboxGrid justify="start" style={{ marginTop: "2rem" }}>
          <FlexboxGrid.Item colspan={24}>
            <Form.Group>
              <Form.ControlLabel className="label">Nome</Form.ControlLabel>
              <Form.Control
                name="Nome"
                type="text"
                placeholder="Digite o Nome do seu Peixinho"
                value={nome}
                width={"100%"}
                onChange={(value) => setNome(value)}
              />
            </Form.Group>
          </FlexboxGrid.Item>
          <FlexboxGrid.Item colspan={24}>
            <Form.Group>
              <Form.ControlLabel className="label">Espécie</Form.ControlLabel>
              <Form.Control
                name="Especie"
                type="text"
                placeholder="Digite a Espécie"
                value={especie}
                width={"100%"}
                onChange={(value) => setEspecie(value)}
              />
            </Form.Group>
          </FlexboxGrid.Item>
          <FlexboxGrid.Item colspan={24}>
            <Form.Group>
              <Form.ControlLabel className="label">Alimentação</Form.ControlLabel>
              <Form.Control
                name="Alimentacao"
                type="text"
                placeholder="Digite a Alimentação"
                value={alimentacao}
                width={"100%"}
                onChange={(value) => setAlimentacao(value)}
              />
            </Form.Group>
          </FlexboxGrid.Item>
          <FlexboxGrid.Item colspan={24}>
            <Form.Group>
              <Form.ControlLabel className="label">Quantidade</Form.ControlLabel>
              <Form.Control
                name="Quantidade"
                type="number"
                placeholder="Digite a Quantidade"
                value={quantidade}
                width={"100%"}
                onChange={(value) => setQuantidade(value)}
              />
            </Form.Group>
          </FlexboxGrid.Item>
          <FlexboxGrid.Item colspan={24}>
            <Form.Group>
              <Form.ControlLabel className="label">Tempo de Alimentação</Form.ControlLabel>
              <Form.Control
                name="Tempo_alimentacao"
                type="text"
                placeholder="Digite quantas vezes seu Peixinho se alimenta por dia"
                value={tempoAlimentacao}
                width={"100%"}
                onChange={(value) => setTempoAlimentacao(value)}
              />
            </Form.Group>
          </FlexboxGrid.Item>
          <FlexboxGrid.Item colspan={24}>
            <Form.Group>
              <Form.ControlLabel className="label">Imagem</Form.ControlLabel>
              <Form.Control
                name="Imagem"
                type="text"
                placeholder="Digite a URL da Imagem"
                value={imagem}
                width={"100%"}
                onChange={(value) => setImagem(value)}
              />
            </Form.Group>
          </FlexboxGrid.Item>
        </FlexboxGrid>
        <FlexboxGrid style={{ marginTop: "0.6rem" }}>
          <Button appearance="primary" color="blue" onClick={handleSave}>
            CADASTRAR
          </Button>
        </FlexboxGrid>
      </div>
    </Form>
  );
};

export default Peixes;
