import React from "react";

type ButtonProps2 = React.PropsWithChildren<{
  tamanho?: string;
  onClick?: () => void;
}>;

// passando um generico 'button' vai dizer ao typeScript que ele pode receber qualquer propriedade que exista em um button
// & extends o tipo, ou seja consigo usar a propriedade tamanho por exemplo
type ButtonProps = React.ComponentProps<"button"> & {
  tamanho?: string;
};

// o mais normal e desestruturar ao inves de fazer const Button = (props: ButtonProps) => {
// com isso em button, não precisa do props para envocar, exemplo fontSize: props.tamanho, vai ser só o tamanho
// como posso usar qualquer coisa que button pode usar, então posso desestruturar className por exemplo
// pra não fica repetindo as propriedades desejadas existe um jeito ainda melhor do que esse - const Button = ({ tamanho, children, onClick, className }: ButtonProps) => {

// ...props nada mais é que apenas um objeto que recebe todas as propriedades que sobraram
/*
não precisa mais informar essa parte e passa apenas o ...props
className={className}
onClick={onClick}
*/

// resumo, desestrutura tudo que sobrou em ...props e adiciona em <button {...props}
const Button = ({ tamanho, children, ...props }: ButtonProps) => {
  return (
    <button style={{ fontSize: tamanho }} {...props}>
      {children}
    </button>
  );
};

export default Button;

// React.PropsWithChildren são as propriedades com children, logo não é mais necessário anotar
/*
type React.PropsWithChildren<P = unknown> = P & {
    children?: React.ReactNode;
}
Ou seja ele recebe um generico, sendo assim não tem mais necessidade de usar:
type ButtonProps = {
  tamanho?: string;
  children?: React.ReactNode;
  onClick?: () => void;
};
*/
