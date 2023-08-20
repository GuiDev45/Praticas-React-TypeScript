import React from "react";
import { useData } from "../Context/DataContext";

// Componente chamado Resumo
const Resumo = () => {
  // Usando o hook useData para acessar os dados do contexto
  const { data } = useData();

  // Imprimindo os dados no console (pode ser removido em produção)
  console.log(data);

  // Retornando um elemento JSX que exibe "Resumo"
  return <div>Resumo</div>;
};

export default Resumo;
