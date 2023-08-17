import React from "react";

// Novamente, ao passar o mouse note que o TypeScript já Infere que Button é um JSX.Element / const Button: () => JSX.Element
const Button = () => {
  return <button>Button</button>;
};

export default Button;
