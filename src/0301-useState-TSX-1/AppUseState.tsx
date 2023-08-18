import React from "react";
import "../App.css";
import Button from "./Button";

// Apenas simulando uma função que carregaria um objeto
function user() {
  return {
    nome: "John",
    profissao: "Designer",
  };
}

type User = {
  nome: string;
  profissao: string;
};

function AppUseState() {
  // useState pode ser null ou User/que é o tipagem do "objeto" que estou recebendo e o estado começa como null.
  // Caso seja um número não precisa inferir, o TypeScript já vai entender que é um número.
  const [data, setData] = React.useState<null | User>(null);
  const [total, setTotal] = React.useState(0);

  // Assim que essa aplicação monta vai passar esse efeito/useEffect
  React.useEffect(() => {
    setTimeout(() => {
      // setando o objeto user
      setData(user());
    }, 1000);
  }, []);

  return (
    <div>
      <div>
        <p>Total: {total}</p>
        <Button incrementar={setTotal} />
      </div>
      {data !== null && (
        <div>
          {data.nome}: {data.profissao}
        </div>
      )}
    </div>
  );
}

export default AppUseState;
