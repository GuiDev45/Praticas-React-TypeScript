// Importa a biblioteca React
import React from "react";

// Define um tipo de interface IUiContext que descreve os valores disponíveis no contexto
type IUiContext = {
  dark: boolean;
  setDark: React.Dispatch<React.SetStateAction<boolean>>;
};

// Cria um contexto UiContext com o tipo IUiContext ou null como valor inicial
const UiContext = React.createContext<IUiContext | null>(null);

// Define um hook personalizado useUi que encapsula o uso do contexto UiContext
export const useUi = () => {
  // Obtém o contexto atual utilizando o hook useContext
  const context = React.useContext(UiContext);
  // Se o contexto for nulo, lança um erro indicando que useUi deve ser usado dentro do Provider
  if (!context) throw new Error("useContext deve estar dentro do Provider");
  // Retorna o contexto, que contém as informações dark e setDark
  return context;
};

// Define o componente funcional UiContextProvider que envolve seus filhos com o contexto
export const UiContextProvider = ({ children }: React.PropsWithChildren) => {
  // Define um estado dark com valor inicial de false
  const [dark, setDark] = React.useState(false);

  // Retorna o componente UiContext.Provider que contém os valores dark e setDark
  return (
    <UiContext.Provider
      value={{
        dark,
        setDark,
      }}
    >
      {/* Renderiza os componentes filhos que foram passados como children */}
      {children}
    </UiContext.Provider>
  );
};
