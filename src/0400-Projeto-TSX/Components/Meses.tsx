// Importando o componente MesBtn.
import MesBtn from "./MesBtn";

// Componente Meses que renderiza uma série de botões MesBtn para selecionar diferentes meses.
const Meses = () => {
  return (
    <div className="flex">
      {/* Botão para selecionar o mês deslocado por -3 meses */}
      <MesBtn n={-3} />
      {/* Botão para selecionar o mês deslocado por -2 meses */}
      <MesBtn n={-2} />
      {/* Botão para selecionar o mês deslocado por -1 mês */}
      <MesBtn n={-1} />
      {/* Botão para selecionar o mês atual - 0 meses deslocado */}
      <MesBtn n={0} />
    </div>
  );
};

// Exportando o componente Meses para ser usado em outros lugares.
export default Meses;
