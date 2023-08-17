import React from "react";

// Quero passar propriedades para esse botão

type ButtonProps = {
  tamanho?: string; // tamanho não é obrigatorio/opcional "?", e é uma string
  // children pode ser uma string, pode ser outro elemento react, pode ser uma tag html direto, pode ser muitas coisas diferentes.
  children?: React.ReactNode;
  onClick?: () => void;
};

// Lembrar sempre que ao adicionar algum type, sempre passar para o elemento que está sendo criado.
const Button = (props: ButtonProps) => {
  return (
    <button onClick={props.onClick} style={{ fontSize: props.tamanho }}>
      {props.children}
    </button>
  );
};

/*
Quando se trataa de apenas uma props, tudo bem declarar dentro do componente, porém mais de uma pode ficar confuso, então o certo é declarar as props fora do componente.
const Button = (props: { tamanho: string }) => {
  return <button style={{ fontSize: props.tamanho }}>Adicionar</button>;
};
*/

export default Button;
