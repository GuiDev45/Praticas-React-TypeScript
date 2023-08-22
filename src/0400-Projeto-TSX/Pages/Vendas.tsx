// Importando o hook useData do contexto DataContext e o componente VendaItem.
import { useData } from "../Context/DataContext";
import VendaItem from "../Components/VendaItem";

// Componente Vendas que exibe uma lista de itens de venda.
const Vendas = () => {
  // Utilizando o hook useData para obter os dados das vendas do contexto.
  const { data } = useData();

  // Se os dados ainda não foram carregados, retorna nulo (pode ser ajustado conforme necessário).
  if (data === null) return null;
  return (
    <ul>
      {/* Mapeando cada item de venda e renderizando o componente VendaItem para cada um. */}
      {data.map((venda) => (
        <li>
          <VendaItem venda={venda} />
        </li>
      ))}
    </ul>
  );
};

// Exportando o componente Vendas para ser usado em outras partes do aplicativo.
export default Vendas;
