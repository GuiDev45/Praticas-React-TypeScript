import React from "react";
import "../App.css";
import Input from "./Input";

function AppPropsThree() {
  const [data, setData] = React.useState("");

  return (
    <div>
      <p>Início da viagem {data}</p>
      <Input label="Nome" />
      <Input label="Horário" type="time" />
      <Input
        value={data}
        onChange={(event) => setData(event.currentTarget.value)}
        label="Início da Viagem"
        type="date"
      />
    </div>
  );
}

export default AppPropsThree;
