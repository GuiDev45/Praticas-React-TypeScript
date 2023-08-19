import React from "react";
import Input from "./Input"; // Importando o componente Input de outro arquivo

// Definindo o tipo para o estado do formulário
type State = {
  name: string;
  email: string;
};

// Definindo os tipos de ação que podem ser despachados para atualizar o estado
type Action =
  | { type: "setName"; payload: string }
  | { type: "setEmail"; payload: string };

// Função de redução que atualiza o estado com base na ação despachada
function reducer(state: State, action: Action): State {
  switch (action.type) {
    case "setName":
      return { ...state, name: action.payload }; // Atualiza o campo 'name' no estado
    case "setEmail":
      return { ...state, email: action.payload }; // Atualiza o campo 'email' no estado
    default:
      return state;
  }
}

// Componente de formulário
function Form() {
  // Usando o hook useReducer para gerenciar o estado do formulário
  const [state, dispatch] = React.useReducer(reducer, { name: "", email: "" });

  return (
    <form>
      {/* Componente Input para o campo 'name' */}
      <Input
        label={`Nome: ${state.name}`}
        value={state.name}
        onChange={
          ({ target }) => dispatch({ type: "setName", payload: target.value }) // Dispara ação para atualizar o nome
        }
      />
      {/* Componente Input para o campo 'email' */}
      <Input
        label={`Email: ${state.email}`}
        value={state.email}
        onChange={
          ({ target }) => dispatch({ type: "setEmail", payload: target.value }) // Dispara ação para atualizar o email
        }
      />
    </form>
  );
}

export default Form;
