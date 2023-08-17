import React from "react";
import "../App.css";
import Button from "./Button";

function AppProps() {
  const [total, setTotal] = React.useState(0);

  function incrementar() {
    setTotal((total) => total + 1);
  }

  return (
    <div>
      <p>Total: {total}</p>
      <Button tamanho="1.5rem" />
      {/* Lembrando que quando eu fecho o componente na mesma tag, meu componente não tem filhos/children*/}
      {/* Como é um children então tudo que for escrito dentro do componente vai ser aceito.*/}
      <Button onClick={incrementar}>Adicionar children</Button>
    </div>
  );
}

export default AppProps;
