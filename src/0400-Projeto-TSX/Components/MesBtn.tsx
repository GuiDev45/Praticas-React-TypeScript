// Importando a biblioteca React e o contexto useData.
import React from "react";
import { useData } from "../Context/DataContext";

// Definindo os estilos do botão.
const style: React.CSSProperties = {
  padding: "var(--gap) var(--gap-s)",
  backgroundColor: "var(--color-3)",
  border: "none",
  borderRadius: "var(--gap)",
  color: "var(--color-2)",
  fontWeight: "600",
  textTransform: "capitalize",
};

// Função que retorna o nome do mês deslocado por n meses.
function nomeMes(n: number) {
  const date = new Date();

  date.setMonth(date.getMonth() + n);
  return new Intl.DateTimeFormat("pt-br", { month: "long" }).format(date);
}

// Função para formatar a data no formato "YYYY-MM-DD".
function formatDate(date: Date) {
  const dd = String(date.getDate()).padStart(2, "0");
  const mm = String(date.getMonth() + 1).padStart(2, "0");
  const yyyy = date.getFullYear();
  return `${yyyy}-${mm}-${dd}`;
}

// Componente MesBtn que renderiza um botão para selecionar um mês.
const MesBtn = ({ n }: { n: number }) => {
  // Usando o contexto useData para acessar as funções de atualização de datas.
  const { setInicio, setFinal } = useData();

  // Função para definir o intervalo de datas do mês correspondente.
  function setMes(n: number) {
    const date = new Date();
    date.setMonth(date.getMonth() + n);

    const firstDay = new Date(date.getFullYear(), date.getMonth(), 1);
    const lastDay = new Date(date.getFullYear(), date.getMonth() + 1, 0);
    setInicio(formatDate(firstDay)); // Atualizando a data de início no contexto.
    setFinal(formatDate(lastDay)); // Atualizando a data final no contexto.
  }

  return (
    // Botão que, quando clicado, define o intervalo de datas do mês.
    <button style={style} onClick={() => setMes(n)}>
      {nomeMes(n)}
    </button>
  );
};

// Exportando o componente MesBtn para ser usado em outros lugares.
export default MesBtn;
