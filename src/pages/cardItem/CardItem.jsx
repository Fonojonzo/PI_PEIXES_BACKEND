import React, { useState, useEffect } from "react";
import "./CardItem.css";
import { Button, FlexboxGrid, Modal } from "rsuite";

const CardItem = ({ peixe }) => {
  const [open, setOpen] = useState(false);

  const handleOpen = () => {
    setOpen(true);
  };

  const handleClose = () => {
    setOpen(false);
  };

  useEffect(() => {
    if (peixe.ID_peixes !== null && peixe.ID_peixes !== undefined) {
      handleOpen(peixe.ID_peixes);
    }
  }, [peixe.ID_peixes]);

  return (
    <>
      <div className="card-list">
        <div className="card" onClick={handleOpen}>
          <img src={peixe?.Imagem} alt={peixe?.Nome} className="card-image" />
          <div className="card-content">
            <h3 className="card-title">Nome: {peixe?.Nome}</h3>
            <p className="card-description">Espécie: {peixe?.Especie}</p>
            <p className="card-description">Alimentação: {peixe?.Alimentacao}</p>
            <p className="card-description">Quantidade: {peixe?.Quantidade}</p>
            <p className="card-description">Tempo de Alimentação: {peixe?.Tempo_alimentacao}</p>
          </div>
        </div>
      </div>
      <Modal open={open} onClose={handleClose} size={"sm"}>
        <Modal.Header />
        <Modal.Body>
          <div className="card-content">
            <FlexboxGrid>
              <FlexboxGrid.Item colspan={12}>
                <img style={{ width: "60%" }} src={peixe?.Imagem} alt={peixe?.Nome} className="card-image" />
              </FlexboxGrid.Item>
              <FlexboxGrid.Item colspan={12}>
                <h3 className="card-description">Nome: {peixe?.Nome}</h3>
                <p className="card-description">Espécie: {peixe?.Especie}</p>
                <p className="card-description">Alimentação: {peixe?.Alimentacao}</p>
                <p className="card-description">Quantidade: {peixe?.Quantidade}</p>
                <p className="card-description">Tempo de Alimentação: {peixe?.Tempo_alimentacao}</p>
              </FlexboxGrid.Item>
            </FlexboxGrid>
          </div>
        </Modal.Body>
      </Modal>
    </>
  );
};

export default CardItem;
