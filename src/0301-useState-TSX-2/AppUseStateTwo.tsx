import React from "react";
import "../App.css";
import Input from "./Input";

type Venda = {
  id: string;
  nome: string;
  status: string;
};

function AppUseStateTwo() {
  const [data, setData] = React.useState<null | Venda[]>(null);
  const [inicio, setInicio] = React.useState("");
  const [final, setFinal] = React.useState("");

  React.useEffect(() => {
    if (inicio !== "" && final !== "")
      fetch(`https://data.origamid.dev/vendas/?inicio=${inicio}&final=${final}`)
        .then((r) => r.json())
        .then((json) => setData(json as Venda[]))
        .catch((error) => console.log(error));
  }, [inicio, final]);

  return (
    <div>
      <div>
        <Input label="Início" setState={setInicio} value={inicio} type="date" />
        <Input label="Final" setState={setFinal} value={final} type="date" />
      </div>
      <ul>
        {data &&
          data.map((venda) => (
            <li key={venda.id}>
              {venda.nome}: {venda.status}
            </li>
          ))}
      </ul>
    </div>
  );
}

export default AppUseStateTwo;
