import {
  BarElement,
  CategoryScale,
  Chart as ChartJS,
  Legend,
  LinearScale,
  Title,
  Tooltip,
} from "chart.js";
import dayjs from "dayjs";

interface DateEnum {
  date: string;
  value: string;
}

import { Bar } from "react-chartjs-2";

ChartJS.register(
  CategoryScale,
  LinearScale,
  BarElement,
  Title,
  Tooltip,
  Legend
);

export const VerticalBarChartCommon = ({
  dates,
  color,
  title,
  dateRange,
}: any) => {
  const allDatesBetweenRange = GetAllDatesBetweenRange(
    dateRange.start,
    dateRange.end,
    dates
  );

  const options = {
    responsive: true,
    maintainAspectRatio: false,
    plugins: {
      legend: {
        position: "top" as const,
        display: false,
      },
      title: {
        display: false,
        text: "Chart.js Bar Chart",
      },
    },
  };

  const customArray = allDatesBetweenRange.map((obj) => obj.date);

  const data = {
    labels: customArray,
    datasets: [
      {
        data: allDatesBetweenRange.map((obj) => obj.value),
        backgroundColor: color,
      },
    ],
  };

  return <Bar options={options} data={data} />;
};

function GetAllDatesBetweenRange(startDate: any, endDate: any, date: any) {
  const dates: DateEnum[] = [];

  let currentDate = dayjs(startDate);
  while (currentDate.format("YYYY-MM-DD") <= endDate.format("YYYY-MM-DD")) {
    const dateEnum: DateEnum = {
      date: currentDate.format("YYYY-MM-DD"),
      value: "",
    };

    if (date.hasOwnProperty(currentDate.format("YYYY-MM-DD"))) {
      dateEnum.value = date[currentDate.format("YYYY-MM-DD")];
    }

    dates.push(dateEnum);
    currentDate = currentDate.add(1, "day");
  }

  return dates;
}

const startDate = new Date("2023-07-01");
const endDate = new Date("2023-07-10");
