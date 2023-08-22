import React from "react";

// Definindo o hook personalizado useFetch.
function useFetch<T>(url: RequestInfo | URL, options?: RequestInit) {
  // Definindo estados para dados, indicador de carregamento e erro.
  const [data, setData] = React.useState<T | null>(null); // Dados obtidos
  const [loading, setLoading] = React.useState(false); // Indicador de carregamento
  const [error, setError] = React.useState<string | null>(null); // Mensagem de erro, se houver

  // Criando uma referência para as opções de requisição.
  const optionsRef = React.useRef(options);
  optionsRef.current = options;

  // Efeito para buscar os dados quando o URL é alterado.
  React.useEffect(() => {
    const controller = new AbortController(); // Criando um controlador de abort.
    const { signal } = controller; // Obtendo o sinal do controlador.

    const fetchData = async () => {
      setLoading(true); // Definindo indicador de carregamento como verdadeiro.
      setData(null); // Limpando os dados anteriores.

      try {
        const response = await fetch(url, {
          signal, // Passando o sinal para abortar a requisição se necessário.
          ...optionsRef.current, // Passando as opções de requisição.
        });
        // Lançando um erro se a resposta não for bem-sucedida.
        if (!response.ok) throw new Error(`Error: ${response.status}`);

        // Convertendo a resposta em formato JSON e definindo os dados se o sinal não foi abortado.
        const json = (await response.json()) as T;
        if (!signal.aborted) setData(json);
      } catch (error) {
        // Tratando o erro e definindo a mensagem de erro se o sinal não foi abortado.
        if (!signal.aborted && error instanceof Error) setError(error.message);
      } finally {
        // Definindo o indicador de carregamento como falso, se o sinal não foi abortado.
        if (!signal.aborted) setLoading(false);
      }
    };
    fetchData(); // Chamando a função para buscar os dados.

    // Retornando uma função para abortar a requisição quando o efeito é limpo.
    return () => {
      controller.abort();
    };
  }, [url]); // Dependência para reexecutar o efeito quando o URL muda.

  // Retornando os dados, o indicador de carregamento e a mensagem de erro.
  return { data, loading, error };
}

// Exportando o hook personalizado useFetch.
export default useFetch;
