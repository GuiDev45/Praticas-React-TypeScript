// Importando a biblioteca React e os componentes/contextos necessários.
import DateInput from "./DateInput"; // Importando o componente DateInput
import { useData } from "../Context/DataContext"; // Importando o contexto useData

// Definindo o componente DateRange
const DataRange = () => {
  // Usando o hook useData para acessar o estado global de 'inicio', 'setInicio', 'final' e 'setFinal'
  const { inicio, setInicio, final, setFinal } = useData();

  // Retornando um formulário com dois campos de entrada DateInput
  return (
    <form className="box flex" onSubmit={(e) => e.preventDefault()}>
      {/* Componente DateInput para selecionar a data de início */}
      <DateInput
        label="Início"
        value={inicio} // Valor do campo definido pelo estado global 'inicio'
        onChange={({ target }) => setInicio(target.value)} // Atualizando o estado 'inicio' ao modificar o valor
      />

      {/* Componente DateInput para selecionar a data final */}
      <DateInput
        label="Final"
        value={final} // Valor do campo definido pelo estado global 'final'
        onChange={({ target }) => setFinal(target.value)} // Atualizando o estado 'final' ao modificar o valor
      />
    </form>
  );
};

// Exportando o componente DataRange para ser usado em outros lugares.
export default DataRange;
