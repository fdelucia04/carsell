import { Item } from "../Item/Item";
import Row from "react-bootstrap/Row";

export const ItemList = ({ productos }) => {
  return (
    <section>
      <Row />
      {productos.map((el) => (
        <Item
          key={el.id}
          nombre={el.nombre}
          precio={el.precio}
          img={el.img}
          descripcion={el.descripcion}
          id={el.id}
        />
      ))}
    </section>
  );
};
