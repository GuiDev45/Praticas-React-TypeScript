import React from "react";
import "../App.css";
import useFetch from "./useFetch"; // Importa o custom hook useFetch.

type Produto = {
  id: string;
  nome: string;
  preco: number;
  quantidade: number;
  descricao: string;
  internacional: boolean;
};

function AppUseFetch() {
  const [id, setId] = React.useState("p001"); // Estado para controlar o ID do produto selecionado
  const produtos = useFetch<Produto[]>("https://data.origamid.dev/produtos/"); // Chama o hook useFetch para buscar todos os produtos
  const produto = useFetch<Produto>( // Chama o hook useFetch para buscar um produto específico com base no ID
    `https://data.origamid.dev/produtos/${id}`,
    {
      cache: "force-cache", //  força o navegador a buscar a resposta da requisição diretamente do cache, evitando que o navegador retorne um resultado em cache válido, o que significa que ele tentará obter os dados mais recentes do servidor. Essa opção é utilizada para garantir que os dados obtidos para um produto específico sejam os mais atualizados possíveis.
    },
  );

  return (
    <section className="flex">
      <div>
        {produtos.data && // Renderiza uma lista de botões com os IDs dos produtos se houver dados
          produtos.data.map((produto) => (
            <button
              onClick={() => setId(produto.id)}
              style={{ fontSize: "1rem" }}
              key={produto.id}
            >
              {produto.id}
            </button>
          ))}
      </div>
      <div>
        {/*Renderiza "Carregando..." se a requisição do produto estiver em loading*/}
        {produto.loading && <div>Carregando...</div>}
        {/*Renderiza os detalhes do produto se houver dados disponíveis*/}
        {produto.data && (
          <ul>
            <li>ID: {produto.data.id}</li>
            <li>Nome: {produto.data.nome}</li>
            <li>Descrição: {produto.data.descricao}</li>
            <li>Quantidade: {produto.data.quantidade}</li>
          </ul>
        )}
      </div>
    </section>
  );
}

export default AppUseFetch;
