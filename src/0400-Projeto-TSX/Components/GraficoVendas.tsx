import {
  CartesianGrid,
  Line,
  LineChart,
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
    <LineChart width={500} height={300} data={dadosGrafico}>
      <XAxis dataKey="data" />
      <Tooltip />
      <CartesianGrid stroke="#eee" strokeDasharray="5 5" />
      <Line type="monotone" dataKey="pago" stroke="#8884d8" />
      <Line type="monotone" dataKey="processando" stroke="#82ca9d" />
      <Line type="monotone" dataKey="falha" stroke="#000000" />
    </LineChart>
  );
};

export default GraficoVendas;
