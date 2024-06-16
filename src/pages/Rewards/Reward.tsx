import { useEffect, useState } from "react";
import Layout from "../../components/Layout";
import { useParams, Link, Navigate } from "react-router-dom";
import { fetchReward } from "../../controllers/Reward/rewardController";
import { isAuthenticated } from "../../utils/isAuthenticated";
import { RewardDetails } from "./components/RewardDetails";

export const Reward = () => {
	const [data, setData]: any = useState([]);
	const { id } = useParams();

	if (!isAuthenticated()) {
		return <Navigate to="/login" />;
	} else {
		return (
			<Layout title="Rewards">
				<div className="bg-blue-100 w-full p-5 mb-4">
					<p className="text-2xl text-bl-500 font-semibold">
						<Link
							to="/rewards"
							className="text-blue-700 border border-blue-700 hover:bg-blue-700 hover:text-white focus:ring-4 focus:outline-none focus:ring-blue-300 font-medium rounded-full text-sm p-2.5 text-center inline-flex items-center dark:border-blue-500 dark:text-blue-500 dark:hover:text-white dark:focus:ring-blue-800 dark:hover:bg-blue-500"
						>
							<svg
								fill="none"
								stroke="currentColor"
								strokeWidth="1.5"
								viewBox="0 0 24 24"
								className="w-4 h-4"
								xmlns="http://www.w3.org/2000/svg"
								aria-hidden="true"
							>
								<path
									strokeLinecap="round"
									strokeLinejoin="round"
									d="M6.75 15.75L3 12m0 0l3.75-3.75M3 12h18"
								></path>
							</svg>
							<span className="sr-only">Icon description</span>
						</Link>{" "}
						{id}
					</p>
					</div>
					<RewardDetails data={data}/>
			</Layout>
		);
	}
};

export default Reward;
