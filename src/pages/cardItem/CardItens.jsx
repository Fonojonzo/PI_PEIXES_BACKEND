import React, { useEffect, } from "react";
import CardItem from "./CardItem";
import "./app.css";
import HeaderCard from "../header/Header";
import axios from "axios";

const Card = ({ listCard, setListPeixes }) => {
  useEffect(() => {
    get();
  }, []);

  async function get() {
    var idUsuario = sessionStorage.getItem("idUsuario");
    if (!idUsuario) {
      console.error("ID de usuário não encontrado no sessionStorage");
      return;
    }

    try {
      const apiUrl = `https://api-peixes-cxxg.vercel.app/api/users/peixes/${idUsuario}`;
      const response = await axios.get(apiUrl, {
        headers: {
          Accept: "application/json",
          "User-Agent": "Thunder Client (https://www.thunderclient.com)",
        },
      });
      setListPeixes(response.data);
    } catch (error) {
      console.error("Erro ao buscar dados:", error);
    }
  }

  return (
    <div className="App">
      <HeaderCard />
      <h1>Meus Peixes</h1>
      <div className="card-container">
        <CardItem listCard={listCard} />
      </div>
    </div>
  );
};

export default Card;
