import "../App.css";

// Declarando o tipo, porém usando interface seria algo mais pra classes, shapes...
// o primeiro objeto é desestruturação e o segundo objeto que é o tipo.
const InterfaceProps = ({ text }: { text: string }) => {
  return <h2>{text}</h2>;
};

// Declarando o tipo
type TitleProps = {
  text: string;
};

const Title = ({ text }: TitleProps) => {
  return <h1>{text}</h1>;
};

// Passando um children, children é a palavra reservada para quem vem dentro do componente de react
const Title2 = ({ children }: { children: string }) => {
  return <h3>{children}</h3>;
};

// Nessa declaração, não é mais um tipo primitivo, é um Node do React
const Title3 = ({ children }: { children: React.ReactNode }) => {
  return <h4>{children}</h4>;
};

// É recomendável criar um type separado, obs: não é mais um tipo primitivo, é um Node do React
type TitleProps4 = {
  children: React.ReactNode;
};

const Title4 = ({ children }: TitleProps4) => {
  return <h4>{children}</h4>;
};

// ----------------------------------------

type TitleProps5 = {
  children: React.ReactNode;
  size?: "small" | "large"; // Ou vai ser small ou vai ser large (lembrando que ? torna opcional essa propriedade)
};

// o "small que o size está recebendo, vai ser o padrão caso não seja passado nenhum outro (small ou large) na declaração do componente do App"
const Title5 = ({ children, size = "small" }: TitleProps5) => {
  return (
    <h1
      style={{
        // Se usar auto completar em "small" por exemplo, vai mostrar o que é possível usar, no caso small ou large que foi declarado em TitleProps5
        fontSize: size === "small" ? "1.5rem" : "3rem",
      }}
    >
      {children}
    </h1>
  );
};

// -----------------------------------------------

// Também poderia ter esse valor padrão em um type (objeto que define esse default)
const titleDefaultProps = {
  size: "small",
};

// Minha tipagem
const Title6 = ({
  children,
  size,
}: {
  children: React.ReactNode;
  size?: "small" | "large";
}) => {
  return (
    <h1
      style={{
        fontSize: size === "small" ? "1.5rem" : "3rem",
      }}
    >
      {children}
    </h1>
  );
};

// Invocando uma propriedade para receber o type para default que foi criado.
Title6.defaultProps = titleDefaultProps;

// ------------------------------------------------

// Um type base
type TypeParagrafoProps = {
  children: React.ReactNode;
  size?: "small" | "large";
};

// E um type especifico podendo criar um merge
type ParagrafoProps = {
  color: string;
};

const Paragrafo = ({
  children,
  size,
  color,
}: TypeParagrafoProps & ParagrafoProps) => {
  // Merge criado para juntar dois types, um base e um especifico
  return (
    <h1
      style={{
        fontSize: size === "small" ? "1.5rem" : "3rem",
        color: color, // Agora é possível adicionar color na linha de estilo
      }}
    >
      {children}
    </h1>
  );
};

// ------------------------------------------------

// TypeScript é inteligente o suficiente pra entender que id é number, name é string etc.
const user = {
  id: 1,
  name: "John Doe",
  age: 30,
  isAdmin: true,
  birthDate: new Date("1980-01-01"),
};

// typeof é reservado e bem interessante, é possível extrar apenas os tipos de um objeto normal, ou seja, meu tipo é dinamico
type UserAttributes = typeof user;

// como mary é do tipo UserAttributes eu consigo usar todos os atributos do objeto user, o autocompletar vai ajudar e também vai exigir nesse caso que os atributos sejam passados
const mary: UserAttributes = {
  id: 2,
  name: "mary orange",
  age: 25,
  isAdmin: false,
  birthDate: new Date("1990-01-01"),
};

// ------------------------------------------------

// Inferencia de tipos
function sumNumbers(a: number, b: number) {
  return a + b;
}

// apenas para não ficar acusando que não está sendo usado.
console.log(sumNumbers);
/*
Não precisa colocar que o retorno é um : number, porque o TypeScript já entende que o retorno vai ser um number
function sumNumbers(a: number, b: number): number {
*/

// ------------------------------------------------

function List<ItemType>({
  items,
  render,
}: {
  items: ItemType[];
  render: (item: ItemType, index: number) => React.ReactNode;
}) {
  return (
    <ul>
      {items.map((item, index) => {
        return render(item, index);
      })}
    </ul>
  );
}

function App() {
  const items = [
    {
      id: 1,
      name: "John John",
    },
    {
      id: 2,
      name: "orange orange",
    },
  ];

  return (
    <div>
      <Title text="Hello World"></Title>

      <InterfaceProps text="Interface - Props"></InterfaceProps>

      <Title2>children - Component</Title2>

      <Title3>
        <span>
          Olá <b>Mundo</b>
        </span>
      </Title3>

      <Title4>
        <span>
          Hello <b>World</b>
        </span>
      </Title4>

      {/* caso não seja passado small ou large, o padrão declarado vai ser executado*/}
      <Title5 size="small">
        <span>
          Hello <b>World</b>
        </span>
      </Title5>

      <Title6>
        <span>
          Title <b>6</b>
        </span>
      </Title6>

      <Paragrafo color="red" size="small">
        Eu sou um parágrafo
      </Paragrafo>

      {/* Renderizando a constante "mary" */}
      <div>
        <p>ID: {mary.id}</p>
        <p>Name: {mary.name}</p>
        <p>Age: {mary.age}</p>
        <p>Is Admin: {mary.isAdmin ? "Yes" : "No"}</p>
        <p>Birth Date: {mary.birthDate.toDateString()}</p>
      </div>

      {/* Renderizando a constante "mary" outra forma */}
      <div>
        {Object.entries(mary).map(([key, value]) => (
          <p key={key}>
            <strong>{key}: </strong>
            {typeof value === "object" && value instanceof Date
              ? value.toDateString()
              : value.toString()}
          </p>
        ))}
      </div>

      <List
        items={items}
        render={(item, index) => {
          if (item.id === 1) {
            return <p>{item.name}</p>;
          }
          return <h3>{index}</h3>;
        }}
      ></List>
    </div>
  );
}

export default App;
