// Importa a função useUi do arquivo UiContext
import { useUi } from "./UiContext";

// Define um componente funcional chamado Header
const Header = () => {
  // Chama a função useUi para obter a função setDark do contexto de interface do usuário
  const { setDark } = useUi();

  // Quando o botão é clicado, a função setDark é chamada com uma função que inverte o valor de dark
  // Isso alterna entre os modos claro e escuro
  return <button onClick={() => setDark((d) => !d)}>Alternar Modo</button>;
};

// Exporta o componente Header como padrão
export default Header;
