import React from "react";
import DateInput from "./DateInput";

// Componente DataRange
const DataRange = () => {
  // Estados para armazenar as datas de início e final
  const [inicio, setInicio] = React.useState("");
  const [final, setFinal] = React.useState("");

  return (
    // Formulário que previne o comportamento padrão de submit
    <form className="box flex" onSubmit={(e) => e.preventDefault()}>
      {/* Componente DateInput para selecionar a data de início */}
      <DateInput
        label="Início"
        value={inicio}
        onChange={({ target }) => setInicio(target.value)}
      />

      {/* Exibe a data de início (apenas para fins de depuração) */}
      {inicio}

      {/* Componente DateInput para selecionar a data final */}
      <DateInput
        label="Final"
        value={final}
        onChange={({ target }) => setFinal(target.value)}
      />

      {/* Exibe a data final (apenas para fins de depuração) */}
      {final}
    </form>
  );
};

export default DataRange;
