// Importando os componentes necessários do pacote 'recharts' para criar o gráfico.
import {
  CartesianGrid,
  Legend,
  Line,
  LineChart,
  ResponsiveContainer,
  Tooltip,
  XAxis,
  YAxis,
} from "recharts";

// Importando o tipo IVenda do contexto DataContext.
import { IVenda } from "../Context/DataContext";

// Definindo um tipo para representar os dados de venda por dia.
type VendaDia = {
  data: string;
  pago: number;
  processando: number;
  falha: number;
};

// Função para transformar os dados de vendas em dados compatíveis com o gráfico.
function transformData(data: IVenda[]): VendaDia[] {
  // Usando reduce para agrupar os dados de venda por dia.
  const dias = data.reduce((acc: { [key: string]: VendaDia }, item) => {
    const dia = item.data.split(" ")[0]; // Extraindo apenas a parte da data (dia) do timestamp.
    if (!acc[dia]) {
      acc[dia] = {
        data: dia,
        pago: 0,
        falha: 0,
        processando: 0,
      };
    }
    acc[dia][item.status] += item.preco; // Adicionando o valor da venda ao status correto (pago, falha, processando).
    return acc;
  }, {});

  // Convertendo o objeto de dias agrupados em um array de objetos.
  return Object.values(dias).map((dia) => ({
    ...dia,
    data: dia.data.substring(5), // Removendo o ano da data para simplificar o gráfico.
  }));
}

// Componente GraficoVendas que renderiza o gráfico de vendas.
const GraficoVendas = ({ data }: { data: IVenda[] }) => {
  const transformedData = transformData(data); // Transformando os dados de venda para o formato necessário para o gráfico.

  return (
    <ResponsiveContainer width={"99%"} height={400}>
      {/* Criando o gráfico de linhas */}
      <LineChart data={transformedData}>
        {/* Eixo X - Data */}
        <XAxis dataKey="data" />
        {/* Eixo Y */}
        <YAxis />
        {/* Tooltip para mostrar informações ao passar o mouse sobre as linhas */}
        <Tooltip />
        {/* Legenda das cores das linhas */}
        <Legend />
        {/* Grade do gráfico */}
        <CartesianGrid stroke="#999" strokeDasharray="5 5" />
        {/* Linha representando vendas pagas */}
        <Line type="monotone" dataKey="pago" stroke="#8884d8" strokeWidth={3} />
        {/* Linha representando vendas em processo */}
        <Line
          type="monotone"
          dataKey="processando"
          stroke="#FBCB21"
          strokeWidth={3}
        />
        {/* Linha representando vendas com falha */}
        <Line
          type="monotone"
          dataKey="falha"
          stroke="#000000"
          strokeWidth={3}
        />
      </LineChart>
    </ResponsiveContainer>
  );
};

// Exportando o componente GraficoVendas para ser usado em outros lugares.
export default GraficoVendas;
