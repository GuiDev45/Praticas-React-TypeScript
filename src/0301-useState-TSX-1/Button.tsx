import React from "react";

type ButtonProps = {
  //Lembrando que eu sei o tipo do useState pelo fato de passar o mouse nela.
  incrementar: React.Dispatch<React.SetStateAction<number>>;
};

const Button = ({ incrementar }: ButtonProps) => {
  return <button onClick={() => incrementar((n) => n + 1)}>Incrementar</button>;
};

export default Button;
