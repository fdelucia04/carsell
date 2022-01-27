import React from "react";
import { ItemListContainer } from "./Components/ItemListContainer/ItemListContainer";
import Navbar from "./Components/NavBar/NavBar";

const Home = () => {
  return (
    <div>
      <Navbar />
      <br />
      <ItemListContainer greeting="Agrego  Prop para el saludo desde ItemListsContainers!"></ItemListContainer>
    </div>
  );
};

export default Home;
