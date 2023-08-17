import React from "react";
import "../App.css";
import Button from "./Button";

function AppPropsTwo() {
  const [total, setTotal] = React.useState(0);

  function incrementar() {
    setTotal((total) => total + 1);
  }

  return (
    <div>
      <p>Total: {total}</p>
      {/* Agora ao usar o auto completar, toda propriedade que tiver em um button, vai ser possível usar sem precisar ficar declarando em algum type graças ao React.ComponentProps<"button">;*/}
      <Button
        id="botao-principal"
        onClick={incrementar}
        className={"btn"}
        tamanho="1.5rem"
      >
        Incrementar
      </Button>
    </div>
  );
}

export default AppPropsTwo;
