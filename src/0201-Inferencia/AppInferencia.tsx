import React from "react";
import "../App.css";
import Button from "./Button";

function AppInferencia() {
  const [total, setTotal] = React.useState(0);

  function incrementar() {
    setTotal((total) => total + 1);
  }

  return (
    <div>
      <p>Total: {total}</p>
      <button onClick={incrementar}>Incrementar</button>
      <Button />
    </div>
  );
}

export default AppInferencia;

/*
Lembrando que TypeScript inferiu o tipo, ele sabe que total é number, ao passar o mouse ele mostra o tipo,
deixar o TypeScript inferir o máximo possível, só inferir "manualmente" quando não for realmente possível o tipo daquele dado.
*/
