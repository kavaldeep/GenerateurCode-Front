import { ArcElement, Chart } from "chart.js";
import "chartjs-plugin-datalabels";
import { Doughnut } from "react-chartjs-2";
Chart.register(ArcElement);

export interface numberOfLabelProps {
  label: string;
  number: number;
}

interface DoughnutCommonProps {
  numberOfLabel: numberOfLabelProps[];
}

const DoughnutCommon: React.FC<DoughnutCommonProps> = (
  numberOfLabel: DoughnutCommonProps
) => {
  const data = {
    labels: ["Red", "Blue", "Yellow"],

    datasets: [
      {
        label: "My First Dataset",
        data: [300, 50, 100],
        backgroundColor: [
          "rgb(255, 99, 132)",
          "rgb(54, 162, 235)",
          "rgb(255, 205, 86)",
        ],
        hoverOffset: 4,
      },
    ],
  };

  return <Doughnut data={data} />;
};

export default DoughnutCommon;
