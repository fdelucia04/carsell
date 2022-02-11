import { NavBar } from "./Components/NavBar/NavBar";
import { BrowserRouter } from "react-router-dom";
import { Routes } from "react-router-dom";
import { Route } from "react-router-dom";
import { ItemListContainer } from "./Components/ItemListContainer/ItemListContainer";
import { ItemDetailContainer } from "./Components/ItemDetailContainer/ItemDetailContainer";
import { Acceder } from "./Components/NavBar/Acceder";
import { Registrarse } from "./Components/NavBar/Registrarse";

import { Navigate } from "react-router-dom";

function App() {
  return (
    <BrowserRouter>
      <NavBar />
      <Routes>
        <Route path="/" element={<ItemListContainer />} />
        <Route path="/productos/:catId" element={<ItemListContainer />} />
        <Route
          path="/productos/:catId/catId2"
          element={<ItemListContainer />}
        />
        <Route path="/detail/:itemId" element={<ItemDetailContainer />} />
        <Route path="/registrarse" element={<Registrarse />} />
        <Route path="/acceder" element={<Acceder />} />
        <Route path="*" element={<Navigate to="/" />} />
      </Routes>
    </BrowserRouter>
  );
}

export default App;
