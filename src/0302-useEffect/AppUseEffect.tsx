import React from "react";
import "../App.css";

function AppUseEffect() {
  // Pelo fato do index.tsx estar em <React.StrictMode>, o montou vai mostrar duas vezes, porque ele monta e desmonta o componente rapidamente.
  // Mas com a build do react normal isso não aconteceria
  /*
  React.useEffect(() => {
    console.log("montou");
    return () => {
      console.log("desmontou");
    };
  }, []);
  */

  // É uma função que retorna uma outra função que por sua vez não retorna nada, (é como o useEffect se comporta com o TypeScript)
  function useEffectCallback() {
    console.log("montou");

    return () => {
      console.log("desmontou");
    };
  }

  React.useEffect(useEffectCallback, []);
  return <div>Effect</div>;
}

export default AppUseEffect;
