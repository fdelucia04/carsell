import React from "react";
import { ItemListContainer } from "./Components/ItemListContainer/ItemListContainer";
import Navbar from "./Components/NavBar/NavBar";

const Home = () => {
  return (
    <div>
      <Navbar />
      <br />
      <h3>Productos</h3>
      <ItemListContainer></ItemListContainer>
    </div>
  );
};

export default Home;
