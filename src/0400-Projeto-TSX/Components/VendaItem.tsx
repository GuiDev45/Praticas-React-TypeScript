// Importando o tipo IVenda do contexto DataContext e o componente NavLink.
import { IVenda } from "../Context/DataContext";
import { NavLink } from "react-router-dom";

// Renderiza os detalhes de uma venda individual, incluindo ID, nome e preço.
const VendaItem = ({ venda }: { venda: IVenda }) => {
  return (
    <div className="venda box">
      {/* Link para a página de detalhes da venda com base no ID */}
      <NavLink to={`/vendas/${venda.id}`} style={{ fontFamily: "monospace" }}>
        {venda.id}
      </NavLink>

      {/* Exibindo o nome da venda */}
      <div>{venda.nome}</div>

      {/* Exibindo o preço da venda formatado como moeda brasileira */}
      <div>
        {venda.preco.toLocaleString("pt-br", {
          style: "currency",
          currency: "BRL",
        })}
      </div>
    </div>
  );
};

// Exportando o componente VendaItem para ser usado em outros lugares.
export default VendaItem;
