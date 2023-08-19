// Importa a função useUi do arquivo UiContext
import { useUi } from "./UiContext";

// Define um componente funcional chamado Content
const Content = () => {
  // Chama a função useUi para obter os valores do contexto de interface do usuário
  const { dark } = useUi();

  // Retorna um elemento div com estilos baseados no valor de dark
  return (
    <div
      style={{
        // Define a altura do div como 400 pixels
        height: "400px",
        // Define a cor do texto com base no valor de dark
        color: dark ? "#fff" : "#222",
        // Define a cor de fundo com base no valor de dark
        backgroundColor: dark ? "#222" : "#fff",
      }}
    >
      {/* Define o conteúdo do div */}
      Esse é um teste do modo.
    </div>
  );
};

// Exporta o componente Content como padrão
export default Content;
