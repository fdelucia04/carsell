import "./ItemListContainer.css";

export const ItemListContainer = ({ greeting }) => {
  return (
    <section className="ItemListContainer">
      <h2>{greeting}</h2>
      <hr />
    </section>
  );
};
