import React from "react";
import ReactDOM from "react-dom/client";
import AppResumo from "./0001-Resumo-React-TypeScript/AppResumo.tsx";
import AppInferencia from "./0201-Inferencia/AppInferencia.tsx";
import AppProps from "./0202-Props-1/AppProps.tsx";
import AppPropsTwo from "./0202-Props-2/AppPropsTwo.tsx";
import AppPropsThree from "./0202-Props-3/AppPropsThree.tsx";
import AppInterfaces from "./0203-Interfaces-e-Tipos-1/AppInterfaces.tsx";
import AppInterfacesTwo from "./0203-Interfaces-e-Tipos-2/AppInterfacesTwo.tsx";
import AppEventos from "./0204-Eventos/AppEventos.tsx";
import AppUseState from "./0301-useState-TSX-1/AppUseState.tsx";
import AppUseStateTwo from "./0301-useState-TSX-2/AppUseStateTwo.tsx";
import AppUseEffect from "./0302-useEffect/AppUseEffect.tsx";

ReactDOM.createRoot(document.getElementById("root")!).render(
  <React.StrictMode>
    {/*<AppResumo />*/}
    {/*<AppInferencia />*/}
    {/*<AppProps />*/}
    {/*<AppPropsTwo />*/}
    {/*<AppPropsThree />*/}
    {/*<AppInterfaces />*/}
    {/*<AppInterfacesTwo />*/}
    {/*<AppEventos />*/}
    {/*<AppUseState />*/}
    {/*<AppUseStateTwo />*/}
    <AppUseEffect />
  </React.StrictMode>
);
