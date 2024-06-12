import React, { useState } from "react";
import { Form, Button, FlexboxGrid } from "rsuite";
import { useNavigate } from "react-router-dom";
import swal from "sweetalert";
import HeaderCadastro from "./Header";
import "./Peixes.css";

const Peixes = () => {
  const navigate = useNavigate();
  const [especie, setEspecie] = useState("");
  const [nome, setNome] = useState("");
  const [tempoAlimentacao, setTempoAlimentacao] = useState("");
  const [alimentacao, setAlimentacao] = useState("");
  const [quantidade, setQuantidade] = useState("");
  const [imagem, setImagem] = useState("");

  const handleSave = async () => {
    const obj = {
      Especie: especie,
      Nome: nome,
      Tempo_alimentacao: tempoAlimentacao,
      Quantidade: quantidade,
      Alimentacao: alimentacao,
      Imagem: imagem || "https://i0.wp.com/carbonozero.net/wp-content/uploads/2022/06/lula-gigante-mitologia.jpg?fit=1920%2C1080&ssl=1",
      ID_usuario: "60d5f5c4f1b2c9092c8b4567" // Substitua por um ID de usuário válido
    };

    try {
      const response = await fetch("https://api-peixes.vercel.app/api/peixes", {
        method: "POST",
        headers: {
          "Content-Type": "application/json"
        },
        body: JSON.stringify(obj)
      });

      if (response.ok) {
        swal({
          title: "SUCESSO!",
          text: "Peixe Cadastrado com Sucesso!",
          icon: "success"
        });
        navigate("/home");
      } else {
        const errorData = await response.json();
        swal({
          title: "ERRO!",
          text: `Erro ao cadastrar peixe: ${errorData.message}`,
          icon: "error"
        });
      }
    } catch (error) {
      swal({
        title: "ERRO!",
        text: `Erro ao cadastrar peixe: ${error.message}`,
        icon: "error"
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
                placeholder="Digite Quantas vezes seu Peixinho se alimenta por dia"
                value={tempoAlimentacao}
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
                placeholder="Digite URL da Imagem"
                value={imagem}
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
