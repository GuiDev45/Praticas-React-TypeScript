import React from "react";
import useFetch from "../Hooks/useFetch";

type IDataContext = {
  data: IVenda[] | null;
  loading: boolean;
  error: string | null;
  inicio: string; // Data de início
  final: string; // Data final
  setInicio: React.Dispatch<React.SetStateAction<string>>; // Função para atualizar a data de início
  setFinal: React.Dispatch<React.SetStateAction<string>>; // Função para atualizar a data final
};

export type IVenda = {
  id: string;
  nome: string;
  preco: number;
  status: "pago" | "processando" | "falha";
  pagamento: "boleto" | "pix" | "cartão";
  data: string;
  parcelas: number | null;
};

const DataContext = React.createContext<IDataContext | null>(null);

export const useData = () => {
  const context = React.useContext(DataContext);
  if (!context)
    throw new Error("useDataa precisa estar em DataContextProvider");
  return context;
};

// Função que retorna a data formatada com base no número de dias passado
function getDate(n: number) {
  const date = new Date();
  date.setDate(date.getDate() - n);
  const dd = String(date.getDate()).padStart(2, "0");
  const mm = String(date.getMonth() + 1).padStart(2, "0");
  const yyyy = date.getFullYear();
  return `${yyyy}-${mm}-${dd}`;
}

export const DataContextProvider = ({ children }: React.PropsWithChildren) => {
  const [inicio, setInicio] = React.useState(getDate(14)); // Estado para a data de início
  const [final, setFinal] = React.useState(getDate(0)); // Estado para a data final

  const { data, loading, error } = useFetch<IVenda[]>(
    `https://data.origamid.dev/vendas/?inicio=${inicio}&final=${final}`,
  );
  return (
    <DataContext.Provider
      value={{ data, loading, error, inicio, setInicio, final, setFinal }}
    >
      {children}
    </DataContext.Provider>
  );
};
