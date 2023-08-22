// Importando o componente GraficoVendas e o hook useData do contexto DataContext.
import GraficoVendas from "../Components/GraficoVendas";
import { useData } from "../Context/DataContext";

// Componente Resumo que exibe informações resumidas das vendas.
const Resumo = () => {
  const { data } = useData(); // Utilizando o hook useData para obter os dados das vendas.

  // Se os dados ainda não foram carregados, retorna nulo (pode ser ajustado conforme necessário).
  if (data === null) return null;
  return (
    <section>
      {/* Seção que exibe informações resumidas das vendas */}
      <div className="resumo flex mb">
        {/* Caixa para exibir o total de vendas (excluindo as falhas) */}
        <div className="box">
          <h2>Vendas</h2>
          <span>
            {data
              .filter((i) => i.status !== "falha")
              .reduce((acc, item) => acc + item.preco, 0)
              .toLocaleString("pt-br", { style: "currency", currency: "BRL" })}
          </span>
        </div>
        {/* Caixa para exibir o total recebido (vendas pagas) */}
        <div className="box">
          <h2>Recebido</h2>
          <span>
            {data
              .filter((i) => i.status === "pago")
              .reduce((acc, item) => acc + item.preco, 0)
              .toLocaleString("pt-br", { style: "currency", currency: "BRL" })}
          </span>
        </div>
        {/* Caixa para exibir o total de vendas em processamento */}
        <div className="box">
          <h2>Processando</h2>
          <span>
            {data
              .filter((i) => i.status === "processando")
              .reduce((acc, item) => acc + item.preco, 0)
              .toLocaleString("pt-br", { style: "currency", currency: "BRL" })}
          </span>
        </div>
      </div>
      {/* Caixa que exibe o gráfico de vendas */}
      <div className="box mb">
        <GraficoVendas data={data} />
      </div>
    </section>
  );
};

// Exportando o componente Resumo para ser usado em outros lugares.
export default Resumo;
