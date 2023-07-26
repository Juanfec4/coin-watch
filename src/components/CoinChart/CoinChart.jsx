import {
  Chart as ChartJS,
  CategoryScale,
  LinearScale,
  PointElement,
  LineElement,
  Title,
  Tooltip,
  Filler,
  Legend,
} from "chart.js";
import { Line } from "react-chartjs-2";
import ChartAnnotation from "chartjs-plugin-annotation";
import { formatHours, formatPrice, getColor } from "./chartFormat";
import { toolTipLine } from "./chartPlugins";

export const CoinChart = ({ coinData, coinTrend }) => {
  if (!coinData) {
    return;
  }

  ChartJS.register(
    CategoryScale,
    LinearScale,
    PointElement,
    LineElement,
    Title,
    Tooltip,
    Filler,
    Legend,
    ChartAnnotation,
    toolTipLine
  );

  const options = {
    responsive: true,
    maintainAspectRatio: false,
    plugins: {
      //Hide legend
      legend: {
        display: false,
      },
      //Show tooltip on hover
      tooltip: {
        callbacks: {
          label: (value) => {
            return formatPrice(value.formattedValue);
          },
          labelColor: () => {
            return {
              borderColor: getColor(coinTrend).line,
              backgroundColor: getColor(coinTrend).line,
            };
          },
        },
      },
    },
    interaction: {
      mode: "index",
      axis: "x",
      intersect: false,
    },
    //Show scales and format the values
    scales: {
      y: {
        ticks: {
          callback: (value) => {
            return formatPrice(value);
          },
          maxTicksLimit: 4,
          minTicksLimit: 4,
          autoSkip: false,
        },
        display: false,
      },
      //Hide bottom scale
      x: {
        display: false,
      },
    },
  };

  const data = {
    labels: coinData.map((value) => formatHours(value.x)),
    datasets: [
      {
        fill: true,
        borderColor: getColor(coinTrend).line,
        backgroundColor: getColor(coinTrend).background,
        data: coinData.map((value) => value.y),
        pointRadius: 1,
      },
    ],
  };
  return <Line options={options} data={data} />;
};
