// Importando a biblioteca React e os ícones e componentes necessários.
import resumo from "../assets/icons/resumo.svg"; // Ícone para a página de Resumo
import vendas from "../assets/icons/vendas.svg"; // Ícone para a página de Vendas
import webhooks from "../assets/icons/webhooks.svg"; // Ícone para a página de Webhooks
import configuracoes from "../assets/icons/configuracoes.svg"; // Ícone para a página de Configurações
import contato from "../assets/icons/contato.svg"; // Ícone para a página de Contato
import sair from "../assets/icons/sair.svg"; // Ícone para a ação de Sair
import FintechSVG from "../assets/FintechSVG"; // Componente SVG personalizado
import { NavLink } from "react-router-dom"; // Importando o componente NavLink do react-router-dom

// Componente Sidenav que renderiza a barra de navegação lateral.
function Sidenav() {
  return (
    <nav className="sidenav box bg-3">
      {/* Renderizando o logotipo da fintech */}
      <FintechSVG title="Fintech Logo" />
      <ul>
        {/* Item de navegação para a página Resumo */}
        <li>
          <span>
            <img src={resumo} alt="" />
          </span>
          <NavLink to="/">Resumo</NavLink>
        </li>
        {/* Item de navegação para a página Vendas */}
        <li>
          <span>
            <img src={vendas} alt="" />
          </span>
          <NavLink to="/vendas">Vendas</NavLink>
        </li>
        {/* Item de navegação para a página Webhooks */}
        <li>
          <span>
            <img src={webhooks} alt="" />
          </span>
          <a>Webhooks</a>
        </li>
        {/* Item de navegação para a página Configurações */}
        <li>
          <span>
            <img src={configuracoes} alt="" />
          </span>
          Configurações
        </li>
        {/* Item de navegação para a página Contato */}
        <li>
          <span>
            <img src={contato} alt="" />
          </span>
          <a>Contato</a>
        </li>
        {/* Item de navegação para a ação de Sair */}
        <li>
          <span>
            <img src={sair} alt="" />
          </span>
          <a>Sair</a>
        </li>
      </ul>
    </nav>
  );
}

export default Sidenav;
