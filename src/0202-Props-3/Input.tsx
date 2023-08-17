import React from "react";

type InputProps = React.ComponentProps<"input"> & {
  label: string;
};

// Lembrando que quando se passa o id, se ganha o foco do input ao clicar na label
const Input = ({ label, ...props }: InputProps) => {
  return (
    <div style={{ marginBottom: "1rem" }}>
      <label htmlFor={label}>{label}</label>
      {/* Caso passe outro type no lugar de type="text" vai consegui substituir, exemplo um type="time"*/}
      <input id={label} name={label} type="text" {...props} />
    </div>
  );
};

export default Input;
