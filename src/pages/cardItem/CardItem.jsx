import React, { useState } from "react";
import "./CardItem.css";
import { FlexboxGrid, Modal, Button } from "rsuite";
import axios from "axios";

const CardItem = ({ listCard, refreshList }) => {
  const [open, setOpen] = useState(false);
  const [selectedCard, setSelectedCard] = useState(null);

  const handleOpen = (card) => {
    setSelectedCard(card);
    setOpen(true);
  };

  const handleClose = () => {
    setOpen(false);
  };

  const handleDelete = async (id) => {
    console.log("ID do peixe para deletar:", id);  // Log para verificar o ID
    try {
      const response = await axios.delete(`https://api-peixes.vercel.app/api/peixes/${id}`);
      console.log("Resposta da API:", response);  // Log para verificar a resposta da API
      alert("Peixe removido com sucesso!");
      refreshList();
    } catch (error) {
      console.error("Erro ao remover peixe:", error.response || error);  // Log detalhado do erro
      alert("Erro ao remover peixe. Tente novamente.");
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
                  onClick={() => handleDelete(selectedCard?._id)}
                >
                  Remover peixe
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
