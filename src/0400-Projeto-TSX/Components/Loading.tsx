import React from "react";

// Definindo estilos para o elemento de carregamento.
const style: React.CSSProperties = {
  border: "var(--gap-s) solid var(--color-2)", // Borda do elemento
  borderRightColor: "var(--color-4)", // Cor da borda do lado direito para criar um efeito de rotação
  width: "var(--gap)", // Largura do elemento
  height: "var(--gap)", // Altura do elemento
  borderRadius: "50%", // Borda circular para criar uma aparência de círculo
  animation: "spin 1s infinite", // Animação 'spin' com duração de 1 segundo, infinita
};

// Componente Loading para exibir um elemento de carregamento giratório.
const Loading = () => {
  return <div style={style}></div>; // Retornando o elemento de carregamento
};

// Exportando o componente Loading para ser usado em outros lugares.
export default Loading;
