import React from "react";
import {
	Chart as ChartJS,
	CategoryScale,
	LinearScale,
	BarElement,
	Title,
	Tooltip,
	Legend,
} from "chart.js";

import { Bar } from "react-chartjs-2";

ChartJS.register(
	CategoryScale,
	LinearScale,
	BarElement,
	Title,
	Tooltip,
	Legend
);

export const VerticalBarChart = ({ dates, color, title }: any) => {
	const options = {
		responsive: true,
		plugins: {
			legend: {
				position: "top" as const,
			},
			title: {
				display: false,
				text: "Chart.js Bar Chart",
			},
		},
	};

	const customArray = Object.keys(dates).slice(0, 7);

	const data = {
		labels: customArray,
		datasets: [
			{
				label: title,
				data: Object.values(dates).slice(0, 7),
				backgroundColor: color,
			},
		],
	};

	return <Bar options={options} data={data} />;
};
