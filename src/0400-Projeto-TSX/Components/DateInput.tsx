import React from "react";

// Define o tipo IDateInput que estende as propriedades de um input e adiciona uma propriedade label
type IDateInput = React.ComponentProps<"input"> & {
  label: string;
};

// Componente DataInput que recebe propriedades e renderiza uma entrada de data com um rótulo
const DataInput = ({ label, ...props }: IDateInput) => {
  return (
    <div>
      {/* Rótulo associado ao input usando htmlFor */}
      <label htmlFor={label}>{label}</label>
      {/* Input de data que utiliza a propriedade label como id e name */}
      <input id={label} name={label} type="date" {...props} />
    </div>
  );
};

export default DataInput;
