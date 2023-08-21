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
import { IVenda } from "../Context/DataContext";

const dadosGrafico = [
  {
    data: "2023-05-03",
    pago: 30000,
    processando: 3000,
    falha: 2000,
  },
  {
    data: "2023-05-04",
    pago: 340000,
    processando: 5000,
    falha: 6000,
  },
  {
    data: "2023-05-05",
    pago: 250000,
    processando: 200000,
    falha: 30000,
  },
];

const GraficoVendas = ({ data }: { data: IVenda[] }) => {
  return (
    <ResponsiveContainer width={"99%"} height={400}>
      <LineChart data={dadosGrafico}>
        <XAxis dataKey="data" />
        <YAxis />
        <Tooltip />
        <Legend />
        <CartesianGrid stroke="#999" strokeDasharray="5 5" />
        <Line type="monotone" dataKey="pago" stroke="#8884d8" strokeWidth={3} />
        <Line
          type="monotone"
          dataKey="processando"
          stroke="#FBCB21"
          strokeWidth={3}
        />
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

export default GraficoVendas;
