// Importando componentes e módulos necessários.
import { BrowserRouter, Route, Routes } from "react-router-dom";
import Header from "./Components/Header";
import Sidenav from "./Components/Sidenav";
import { DataContextProvider } from "./Context/DataContext";
import Resumo from "./Pages/Resumo";
import Vendas from "./Pages/Vendas";
import Venda from "./Pages/Venda";
import "./Style.css";

// Componente principal do projeto.
function AppProjeto() {
  return (
    <BrowserRouter>
      {/* Provedor do contexto de dados */}
      <DataContextProvider>
        <div className="container">
          {/* Barra lateral */}
          <Sidenav />
          {/* Conteúdo principal */}
          <main>
            {/* Cabeçalho */}
            <Header />
            {/* Rotas do aplicativo */}
            <Routes>
              {/* Rota para a página Resumo */}
              <Route path="/" element={<Resumo />} />
              {/* Rota para a página de listagem de vendas */}
              <Route path="/vendas/" element={<Vendas />} />
              {/* Rota para a página de detalhes da venda */}
              <Route path="/vendas/:id" element={<Venda />} />
            </Routes>
          </main>
        </div>
      </DataContextProvider>
    </BrowserRouter>
  );
}

// Exportando o componente principal do projeto.
export default AppProjeto;
