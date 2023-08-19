import React from "react";

// Definindo os tipos das propriedades do componente Input
type InputProps = {
  label: string; // Rótulo exibido acima do campo de entrada
  value: string; // Valor atual do campo de entrada
  onChange: (event: React.ChangeEvent<HTMLInputElement>) => void; // Função chamada quando o valor do campo muda
};

// Componente de entrada reutilizável
function Input({ label, value, onChange }: InputProps) {
  return (
    <div>
      {/* Exibe o rótulo passado como prop */}
      <label>{label}</label>
      {/* Campo de entrada */}
      <input type="text" value={value} onChange={onChange} />
    </div>
  );
}

export default Input; // Exporta o componente Input
