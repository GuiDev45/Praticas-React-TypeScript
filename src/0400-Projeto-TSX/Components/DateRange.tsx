import React from "react";
import DateInput from "./DateInput";
import { useData } from "../Context/DataContext";

// Componente DataRange
const DataRange = () => {
  // Usando o hook useData para acessar os dados de início, final e suas funções de atualização
  const { inicio, setInicio, final, setFinal } = useData();

  return (
    // Formulário com estilo "box flex" que previne o comportamento padrão de submit
    <form className="box flex" onSubmit={(e) => e.preventDefault()}>
      {/* Componente DateInput para selecionar a data de início */}
      <DateInput
        label="Início"
        value={inicio}
        onChange={({ target }) => setInicio(target.value)}
      />
      {inicio}

      {/* Componente DateInput para selecionar a data final */}
      <DateInput
        label="Final"
        value={final}
        onChange={({ target }) => setFinal(target.value)}
      />
      {final}
    </form>
  );
};

export default DataRange;
