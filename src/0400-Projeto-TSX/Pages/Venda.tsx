// Importando o React e os hooks useParams e useFetch, além de outros componentes.
import { useParams } from "react-router-dom";
import useFetch from "../Hooks/useFetch";
import { IVenda } from "../Context/DataContext";
import Loading from "../Components/Loading";

// Definindo o tipo VendaSemData baseado no tipo IVenda, mas sem a propriedade "data".
type VendaSemData = Omit<IVenda, "data">;

// Componente Venda que exibe os detalhes de uma venda específica.
const Venda = () => {
  // Obtendo o parâmetro de rota "id" usando o hook useParams.
  const { id } = useParams();

  // Usando o hook useFetch para buscar os detalhes da venda com base no ID.
  const { data, loading } = useFetch<IVenda>(
    `https://data.origamid.dev/vendas/${id}`,
  );

  // Se estiver carregando, exibe o componente Loading.
  if (loading === true) return <Loading />;

  // Se os dados ainda não foram carregados, retorna nulo (pode ser ajustado conforme necessário).
  if (data === null) return null;

  // Renderiza os detalhes da venda.
  return (
    <div>
      <div className="box mb">ID: {data.id}</div>
      <div className="box mb">Nome: {data.nome}</div>
      <div className="box mb">
        Preço:{" "}
        {data.preco.toLocaleString("pt-br", {
          style: "currency",
          currency: "BRL",
        })}
      </div>
      <div className="box mb">Status: {data.status}</div>
      <div className="box mb">Pagamento: {data.pagamento}</div>
    </div>
  );
};

// Exportando o componente Venda para ser usado em outras partes do aplicativo.
export default Venda;
