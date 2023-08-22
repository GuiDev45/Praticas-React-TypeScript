// Importando a biblioteca React e o hook personalizado useFetch.
import React from "react";
import useFetch from "../Hooks/useFetch";

// Definindo o tipo IDataContext para o contexto de dados.
type IDataContext = {
  data: IVenda[] | null; // Dados das vendas
  loading: boolean; // Indicador de carregamento
  error: string | null; // Mensagem de erro, se houver
  inicio: string; // Data de início do intervalo
  final: string; // Data final do intervalo
  setInicio: React.Dispatch<React.SetStateAction<string>>; // Função para atualizar a data de início
  setFinal: React.Dispatch<React.SetStateAction<string>>; // Função para atualizar a data final
};

// Definindo o tipo IVenda para representar os dados de venda.
export type IVenda = {
  id: string;
  nome: string;
  preco: number;
  status: "pago" | "processando" | "falha";
  pagamento: "boleto" | "pix" | "cartão";
  data: string;
  parcelas: number | null;
};

// Criando um contexto DataContext para compartilhar dados entre componentes.
const DataContext = React.createContext<IDataContext | null>(null);

// Hook customizado useData para facilitar o acesso ao contexto de dados.
export const useData = () => {
  const context = React.useContext(DataContext);
  if (!context)
    throw new Error("useDataa precisa estar em DataContextProvider");
  return context;
};

// Função para obter a data em formato yyyy-mm-dd, deslocada por n dias.
function getDate(n: number) {
  const date = new Date();
  date.setDate(date.getDate() - n);
  const dd = String(date.getDate()).padStart(2, "0");
  const mm = String(date.getMonth() + 1).padStart(2, "0");
  const yyyy = date.getFullYear();
  return `${yyyy}-${mm}-${dd}`;
}

// Provedor de contexto que fornece os dados de vendas, intervalo de datas e funções de atualização.
export const DataContextProvider = ({ children }: React.PropsWithChildren) => {
  const [inicio, setInicio] = React.useState(getDate(14));
  const [final, setFinal] = React.useState(getDate(0));

  // Usando o hook useFetch para buscar dados das vendas.
  const { data, loading, error } = useFetch<IVenda[]>(
    `https://data.origamid.dev/vendas/?inicio=${inicio}&final=${final}`,
  );

  // Fornecendo o contexto de dados para os componentes filhos.
  return (
    <DataContext.Provider
      value={{ data, loading, error, inicio, setInicio, final, setFinal }}
    >
      {children}
    </DataContext.Provider>
  );
};
