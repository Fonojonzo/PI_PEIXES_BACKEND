import React, { useState } from "react";
import "./CardItem.css";
import { FlexboxGrid, Modal } from "rsuite";

const CardItem = ({ listCard }) => {
  const [open, setOpen] = useState(false);
  const [selectedCard, setSelectedCard] = useState(null);

  const handleOpen = (card) => {
    setSelectedCard(card);
    setOpen(true);
  };

  const handleClose = () => {
    setOpen(false);
  };
  return (
    <>
      {listCard.map((e) => (
        <div className="card-list">
          <div
            className="card"
            key={e._id}
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
                  alt={selectedCard?.nome}
                  className="card-image"
                />
              </FlexboxGrid.Item>
              <FlexboxGrid.Item colspan={12}>
                <h3 className="card-description">Nome: {selectedCard?.Nome}</h3>
                <p className="card-description">
                  Espécie: {selectedCard?.especie}
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
              </FlexboxGrid.Item>
            </FlexboxGrid>
          </div>
        </Modal.Body>
      </Modal>
    </>
  );
};

export default CardItem;
