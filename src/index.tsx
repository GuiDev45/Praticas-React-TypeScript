import React from "react";
import ReactDOM from "react-dom/client";
import AppResumo from "./0001-Resumo-React-TypeScript/AppResumo.tsx";
import AppInferencia from "./0201-Inferencia/AppInferencia.tsx";
import AppProps from "./0202-Props-1/AppProps.tsx";
import AppPropsTwo from "./0202-Props-2/AppPropsTwo.tsx";
import AppPropsThree from "./0202-Props-3/AppPropsThree.tsx";
import AppInterfaces from "./0203-Interfaces-e-Tipos-1/AppInterfaces.tsx";

ReactDOM.createRoot(document.getElementById("root")!).render(
  <React.StrictMode>
    {/*<AppResumo />*/}
    {/*<AppInferencia />*/}
    {/*<AppProps />*/}
    {/*<AppPropsTwo />*/}
    {/*<AppPropsThree />*/}
    <AppInterfaces />
  </React.StrictMode>
);
