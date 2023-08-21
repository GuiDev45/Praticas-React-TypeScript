import Header from "./Components/Header";
import Sidenav from "./Components/Sidenav";
import { DataContextProvider } from "./Context/DataContext";
import Resumo from "./Pages/Resumo";
import Vendas from "./Pages/Vendas";
import "./Style.css";

function AppProjeto() {
  return (
    // Envolve os componentes com o DataContextProvider para fornecer contexto de dados
    <DataContextProvider>
      <div className="container">
        <Sidenav />
        <main>
          <Header /> {/*Formulários*/}
          <Resumo /> {/*Dados*/}
          <Vendas />
        </main>
      </div>
    </DataContextProvider>
  );
}

export default AppProjeto;
