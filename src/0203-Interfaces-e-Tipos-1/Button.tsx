import React from "react";

const Button = ({ children }: React.PropsWithChildren) => {
  // Se a função handleClick é do tipo React.MouseEventHandler então a propriedade que esssa função vai receber (event) já está certa que vai ser um (parameter) event: React.MouseEvent<Element, MouseEvent>
  // Essa é uma das formas para anotar evento e sempre lembrar de passar o mouse para saber o que é cada coisa.
  const handleClick: React.MouseEventHandler = (event) => {
    console.log(event.pageX);
  };
  return <button onClick={handleClick}>{children}</button>;
};

export default Button;
