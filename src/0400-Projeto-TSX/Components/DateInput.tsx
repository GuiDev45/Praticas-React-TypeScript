import React from "react";

// Definindo um conjunto de estilos gerais para reutilização.
const generalStyle: React.CSSProperties = {
  fontSize: "1rem",
  color: "var(--color-2)",
  padding: "var(--gap-s) .75rem",
  backgroundColor: "var(--color-4)",
  borderRadius: "var(--gap)",
};

// Definindo estilos específicos para o rótulo (label) do componente.
const labelStyle: React.CSSProperties = {
  display: "block",
  marginBottom: "var(--gap-s)",
  fontWeight: "600",
  ...generalStyle,
};

// Definindo estilos específicos para o campo de entrada (input) do componente.
const inputStyle: React.CSSProperties = {
  border: "none",
  fontFamily: "monospace",
  ...generalStyle,
};

// Definindo um tipo personalizado que extende as propriedades padrão do input e inclui a propriedade 'label'.
type IDateInput = React.ComponentProps<"input"> & {
  label: string;
};

// Definindo o componente DataInput que recebe as propriedades 'label' e todas as outras propriedades do input.
const DataInput = ({ label, ...props }: IDateInput) => {
  return (
    <div>
      {/* Rótulo do input */}
      <label style={labelStyle} htmlFor={label}>
        {label}
      </label>

      {/* Campo de entrada do tipo 'date' */}
      <input
        style={inputStyle}
        id={label}
        name={label}
        type="date"
        {...props} // Passando todas as outras propriedades recebidas para o input
      />
    </div>
  );
};

// Exportando o componente DataInput para que possa ser usado em outros lugares.
export default DataInput;
