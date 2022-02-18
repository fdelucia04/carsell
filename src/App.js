import { ItemListContainer } from "./Components/ItemListContainer/ItemListContainer";
import { NavBar } from "./Components/NavBar/NavBar";
import { BrowserRouter, Routes, Route, Navigate } from "react-router-dom";
import { Acceder } from "./Components/NavBar/Acceder";
import { Registrarse } from "./Components/NavBar/Registrarse";
import { ItemDetailContainer } from "./Components/ItemDetailContainer/ItemDetailContainer";
import { CartProvider } from "./context/CartContext";
import { Cart } from "./Components/Cart/Cart";

function App() {
  return (
    <CartProvider>
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
          <Route path="/cart" element={<Cart />} />
        </Routes>
      </BrowserRouter>
    </CartProvider>
  );
}

export default App;
