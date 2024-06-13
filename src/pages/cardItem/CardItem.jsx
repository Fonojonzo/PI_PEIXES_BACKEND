import React, { useState } from "react";
import "./CardItem.css";
import { FlexboxGrid, Modal, Button } from "rsuite";
import axios from "axios";

const CardItem = ({ listCard, refreshList }) => {
  const [open, setOpen] = useState(false);
  const [selectedCard, setSelectedCard] = useState(null);
  const [loading, setLoading] = useState(false);

  const handleOpen = (card) => {
    setSelectedCard(card);
    setOpen(true);
  };

  const handleClose = () => {
    setOpen(false);
  };

  const handleDelete = async (id) => {
    console.log("ID do peixe para deletar:", id);
    setLoading(true); // Ativar estado de carregamento
    try {
      const response = await axios.delete(`https://api-peixes.vercel.app/api/peixes/${id}`);
      console.log("Resposta da API:", response);
      alert("Peixe removido com sucesso!");
      handleClose(); // Fechar o modal
      refreshList(); // Atualizar a lista de peixes chamando a função passada por props
    } catch (error) {
      console.error("Erro ao remover peixe:", error.response || error);
      alert("Erro ao remover peixe. Tente novamente.");
    } finally {
      setLoading(false); // Desativar estado de carregamento
    }
  };

  return (
    <>
      {listCard.map((e) => (
        <div className="card-list" key={e._id}>
          <div
            className="card"
            onClick={() => {
              handleOpen(e);
            }}
          >
            <img src={e.Imagem} alt={e.Nome} className="card-image" />
            <div className="card-content">
              <h3 className="card-title">Nome: {e.Nome}</h3>
              <p className="card-description">Espécie: {e.Especie}</p>
              <p className="card-description">Alimentação: {e.Alimentacao}</p>
              <p className="card-description">
                Tempo de Alimentacao: {e.Tempo_alimentacao}
              </p>
              <p className="card-description">Quantidade: {e.Quantidade}</p>
            </div>
            <Button
              className="btn_remove"
              color="red"
              appearance="primary"
              loading={loading} // Mostrar estado de carregamento
              onClick={(event) => {
                event.stopPropagation();
                handleDelete(e._id);
              }}
            >
              Remover peixe
            </Button>
          </div>
        </div>
      ))}
      <Modal open={open} onClose={handleClose} size={"sm"}>
        <Modal.Header></Modal.Header>
        <Modal.Body>
          <div className="card-content">
            <FlexboxGrid>
              <FlexboxGrid.Item colspan={12}>
                <img
                  style={{ width: "60%" }}
                  src={selectedCard?.Imagem}
                  alt={selectedCard?.Nome}
                  className="card-image"
                />
              </FlexboxGrid.Item>
              <FlexboxGrid.Item colspan={12}>
                <h3 className="card-description">Nome: {selectedCard?.Nome}</h3>
                <p className="card-description">
                  Espécie: {selectedCard?.Especie}
                </p>
                <p className="card-description">
                  Alimentação: {selectedCard?.Alimentacao}
                </p>
                <p className="card-description">
                  Tempo de alimentação: {selectedCard?.Tempo_alimentacao}
                </p>
                <p className="card-description">
                  Quantidade: {selectedCard?.Quantidade}
                </p>
                <Button
                  className="btn_remove"
                  color="red"
                  appearance="primary"
                  loading={loading} // Mostrar estado de carregamento
                  onClick={() => handleDelete(selectedCard?._id)}
                >
                  Remover peixee
                </Button>
              </FlexboxGrid.Item>
            </FlexboxGrid>
          </div>
        </Modal.Body>
      </Modal>
    </>
  );
};

export default CardItem;
