import React from "react";

type ButtonProps = {
  total: number;
  // Sei que setTotal é esse tipo no react pelo fato de passar o mouse sobre o setTotal.
  setTotal: React.Dispatch<React.SetStateAction<number>>;
};

const Button = ({ total, setTotal }: ButtonProps) => {
  return (
    <button onClick={() => setTotal((total) => total + 1)}>
      Incrementar {total}
    </button>
  );
};

export default Button;
