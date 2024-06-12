import React, { useState, useEffect } from "react";
import { useLocation } from "react-router-dom";
import CardItem from "./CardItem";
import "./app.css";
import { Header } from "rsuite";
import HeaderCard from "../header/Header";

const Card = () => {
  const location = useLocation();
  const userId = location.state?.userId;

  const [listCard, setListCard] = useState([]);

  useEffect(() => {
    const fetchPeixes = async () => {
      try {
        const response = await fetch(`https://api-peixes.vercel.app/api/users/peixes/${userId}`);
        const data = await response.json();
        setListCard(data);
      } catch (error) {
        console.error("Erro ao buscar peixes:", error);
      }
    };

    if (userId) {
      fetchPeixes();
    }
  }, [userId]);

  return (
    <div className="App">
      <HeaderCard />
      <h1>Meus Peixes</h1>
      <div className="card-container">
        {listCard.map((peixe) => (
          <CardItem key={peixe._id} peixe={peixe} />
        ))}
      </div>
    </div>
  );
};

export default Card;
