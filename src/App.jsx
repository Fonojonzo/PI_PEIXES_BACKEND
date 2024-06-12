import React, { useEffect, useState } from "react";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Login from "./pages/login/Login";
import Cadastro from "./pages/cadastroUsuario/CadastroUsuario";
import Card from "./pages/cardItem/CardItens";
import Peixes from "./pages/peixes/Peixes";
import axios from "axios";
import Dashboard from "./pages/dashboard/Dashboard";

const App = () => {
  const [listCard, setListPeixes] = useState([
    {
      id: 1,
      especie: "Betta",
      nome: "Brasil",
      aquario: "1",
      codigo: "56456",
      link: "https://www.petz.com.br/blog/wp-content/uploads/2019/03/como-cuidar-do-peixe-beta.jpg",
    },
    {
      id: 2,
      especie: "Salmão ",
      nome: "Batman",
      aquario: "10",
      codigo: "58852",
      link: "https://indexiscdn.nyc3.cdn.digitaloceanspaces.com/sites/sucessonocampo.com.br/uploads/2022/09/22094231/salmao-peixe.jpg",
    },
    {
      id: 3,
      especie: "Tilápia ",
      nome: "Code",
      aquario: "6",
      codigo: "444",
      link: "https://cptstatic.s3.amazonaws.com/imagens/enviadas/materias/materia8967/peixe-tilapia-cursos-cpt.jpg",
    },
    {
      id: 4,
      especie: "Bacalhau",
      nome: "Shark",
      aquario: "1",
      codigo: "2282",
      link: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTU5B9Jvz4p0jZVQvc0WI0x973P2Jlsc4DxkQ&s",
    },
    {
      id: 5,
      especie: "Atum",
      nome: "Rajado",
      aquario: "3",
      codigo: "8987",
      link: "https://caiaque.net/wp-content/uploads/2023/02/atum.jpg",
    },
    {
      id: 6,
      especie: "Dourado",
      nome: "Lili",
      aquario: "3",
      codigo: "35341",
      link: "https://s2.glbimg.com/vuft3YpL0XHGbo1SEe2nYh72VmM=/e.glbimg.com/og/ed/f/original/2021/04/22/gettyimages-1054612994_1.jpg",
    },
    {
      id: 7,
      especie: "Badejo",
      nome: "Robson",
      aquario: "100",
      codigo: "42",
      link: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTJt6CMc8BikdQwFBpIKk1bJ20PEuoT6j4CXQ&s",
    },
    {
      id: 8,
      especie: "Tambaqui",
      nome: "Liu",
      aquario: "4",
      codigo: "1",
      link: "https://www.pescazila.com.br/storage/2020/12/peixe-capa-tambaqui.jpg",
    },
    {
      id: 9,
      especie: "Peixe-palhaço",
      nome: "Cj",
      aquario: "8",
      codigo: "566",
      link: "https://blog.cobasi.com.br/wp-content/uploads/2021/03/peixe-palhaco-capa.png",
    },
    {
      id: 10,
      especie: "Bagre",
      nome: "Kratos",
      aquario: "9",
      codigo: "7753",
      link: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTtXloBqel8w1kMxPDSgVHW9ACR52gzsCCobA&s",
    },
  ]);

  const [listEmail, setListEmail] = useState([
    { id: 1, email: "joao@gmail.com", senha: "1234" },
    { id: 2, email: "ian@gmail.com", senha: "1234" },
    { id: 3, email: "brenda@gmail.com", senha: "1234" },
  ]);

  useEffect(() => {
    get();
  }, []);

  async function get() {
    try {
      const apiUrl = "https://api-peixes-cxxg.vercel.app/api/users/";
      const response = await axios.get(apiUrl, {
        headers: {
          Accept: "*/*",
          "User-Agent": "Thunder Client (https://www.thunderclient.com)",
        },
      });
    } catch (error) {}
  }

  return (
    <Router>
      <Routes>
        <Route
          path="/"
          element={<Login listEmail={listEmail} setListEmail={setListEmail} />}
        />
        <Route
          path="/cadastro"
          element={
            <Cadastro listEmail={listEmail} setListEmail={setListEmail} />
          }
        />
        <Route
          path="/home"
          element={<Card listCard={listCard} setListPeixes={setListPeixes} />}
        />
        <Route path="/dash" element={<Dashboard />} />
        <Route
          path="/cadastro-peixe"
          element={<Peixes listCard={listCard} setListPeixes={setListPeixes} />}
        />
      </Routes>
    </Router>
  );
};

export default App;
