import React from "react";
import "../App.css";
import useFetch from "./useFetch";

type Produto = {
  id: string;
  nome: string;
  preco: number;
  quantidade: number;
  descricao: string;
  internacional: boolean;
};

function AppUseFetch() {
  const produtos = useFetch<Produto[]>("https://data.origamid.dev/produtos/");
  const produto = useFetch<Produto>("https://data.origamid.dev/produtos//");

  return <div>fff</div>;
}

export default AppUseFetch;
