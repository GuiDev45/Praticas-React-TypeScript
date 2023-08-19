import React from "react";

// Começa com uma key tipo string porque o local storage vem sempre como sring, e o valor inicial também é string que seria um valor que ele começa caso não tenha nada salvo no local storage
const useLocalStorage = (
  key: string,
  inicial: string,
  //string e React.Dispatch(...) é o tipo do state e setState
): [string, React.Dispatch<React.SetStateAction<string>>] => {
  const [state, setState] = React.useState<string>(() => {
    // local pega o valor da key que foi definida
    const local = window.localStorage.getItem(key);
    // esse é o retorno de estado, se local existe retorne local se não retorne o inicial(string)
    return local ? local : inicial;
  });

  React.useEffect(() => {
    window.localStorage.setItem(key, state);
  }, [key, state]);

  return [state, setState];
};

export default useLocalStorage;
