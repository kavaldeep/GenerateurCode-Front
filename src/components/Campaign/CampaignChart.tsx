import { Chart as ChartJS, ArcElement, Tooltip, Legend } from "chart.js";
import { Doughnut } from "react-chartjs-2";

const CampaignChart = () => {
	ChartJS.register(ArcElement, Tooltip, Legend);

	const data = {
		labels: ["Success", "Failure"],
		datasets: [
			{
				data: [12, 19],
				backgroundColor: ["rgb(75, 192, 192)", "rgba(255, 99, 132)"],
				borderColor: ["rgb(75, 192, 192)", "rgba(255, 99, 132)"],
				borderWidth: 1,
			},
		],
	};

	return <Doughnut data={data} />;
};

export default CampaignChart;
