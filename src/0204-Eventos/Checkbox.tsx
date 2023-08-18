import React from "react";

/*
const Checkbox = ({ label }: { label: string }) => {
  const [value, setValue] = React.useState(false);

  // Como é uma função simples, seria melhor passar direto no retorno, não ficaria confuso porque é algo simples, mas se fosse uma função maior, essa forma é a mais aconselhável 
  const handleChange: React.ChangeEventHandler<HTMLInputElement> = (event) => {
    setValue(event.currentTarget.checked);
  };

  return (
    <label
      style={{
        padding: "1rem",
        border: value ? "2px solid #8D2" : "2px solid #F70",
      }}
    >
      <input type="checkbox" checked={value} onChange={handleChange} />
      {label}
    </label>
  );
};
*/

const Checkbox = ({ label }: { label: string }) => {
  const [value, setValue] = React.useState(false);

  return (
    <label
      style={{
        padding: "1rem",
        border: value ? "2px solid #8D2" : "2px solid #F70",
      }}
    >
      <input
        type="checkbox"
        checked={value}
        onChange={({ currentTarget }) => setValue(currentTarget.checked)}
      />
      {label}
    </label>
  );
};

export default Checkbox;
