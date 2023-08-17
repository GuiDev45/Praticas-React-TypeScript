import React from "react";
import ReactDOM from "react-dom/client";
import AppResumo from "./0001-Resumo-React-TypeScript/AppResumo.tsx";
import AppInferencia from "./0201-Inferencia/AppInferencia.tsx";

ReactDOM.createRoot(document.getElementById("root")!).render(
  <React.StrictMode>
    {/*<AppResumo />*/}
    <AppInferencia />
  </React.StrictMode>,
);
