// Importando a biblioteca React e componentes/contextos necessários.
import React from "react";
import DataRange from "./DateRange"; // Importando o componente DataRange
import Meses from "./Meses"; // Importando o componente Meses
import { useLocation } from "react-router-dom"; // Importando o hook useLocation do react-router-dom

// Definindo o componente Header
const Header = () => {
  // Definindo o estado local 'title' para o título da página exibido no cabeçalho.
  const [title, setTitle] = React.useState("Resumo");

  // Obtendo a localização atual usando o hook useLocation do react-router-dom.
  const location = useLocation();

  // Efeito para atualizar o título e o título da página com base na localização atual.
  React.useEffect(() => {
    if (location.pathname === "/") {
      setTitle("Resumo");
      document.title = "Fintech | Resumo"; // Atualizando o título da página no navegador.
    } else if (location.pathname === "/vendas") {
      setTitle("Vendas");
      document.title = "Fintech | Vendas"; // Atualizando o título da página no navegador.
    }
  }, [location]); // O efeito será acionado sempre que a localização mudar.

  return (
    <header className="mb">
      <div className="daterange mb">
        {/* Incluindo o componente DataRange para selecionar um intervalo de datas */}
        <DataRange />
        {/* Exibindo o título da página dentro de um elemento 'h1' */}
        <h1 className="box bg-3">{title}</h1>
      </div>
      {/* Incluindo o componente Meses para exibir seleção de meses */}
      <Meses />
    </header>
  );
};

// Exportando o componente Header para ser usado em outros lugares.
export default Header;
