import React from "react";
import "../App.css";
// Importa os componentes Header e Content dos respectivos arquivos
import Header from "./Header";
import Content from "./Content";

// Importa o componente UiContextProvider do arquivo UiContext
import { UiContextProvider } from "./UiContext";

// Define o componente funcional AppUseContext
function AppUseContext() {
  return (
    // Usa o UiContextProvider para envolver os componentes Header e Content
    // Isso permite que eles acessem e interajam com o contexto de interface do usuário
    <UiContextProvider>
      {/* Renderiza o componente Header */}
      <Header />
      {/* Renderiza o componente Content */}
      <Content />
    </UiContextProvider>
  );
}

// Exporta o componente AppUseContext como padrão
export default AppUseContext;
