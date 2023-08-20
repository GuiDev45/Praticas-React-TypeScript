import Header from "./Components/Header";
import Sidenav from "./Components/Sidenav";
import { DataContextProvider } from "./Context/DataContext";
import Resumo from "./Pages/Resumo";
import "./Style.css";

function AppProjeto() {
  return (
    // Envolve os componentes com o DataContextProvider para fornecer contexto de dados
    <DataContextProvider>
      <div>
        <Sidenav />
        <main>
          <Header /> {/*Formulários*/}
          <Resumo /> {/*Dados*/}
        </main>
      </div>
    </DataContextProvider>
  );
}

export default AppProjeto;
