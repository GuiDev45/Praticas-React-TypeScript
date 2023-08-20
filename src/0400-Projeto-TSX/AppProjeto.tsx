import Header from "./Components/Header";
import Sidenav from "./Components/Sidenav";
import { Resumo } from "./Pages/Resumo";
import "./Style.css";

function AppProjeto() {
  return (
    <div>
      <Sidenav />
      <main>
        <Header /> {/*Formulários*/}
        <Resumo /> {/*Dados*/}
      </main>
    </div>
  );
}

export default AppProjeto;
