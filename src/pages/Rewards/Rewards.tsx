import { useEffect, useState } from "react";
import Layout from "../../components/Layout";
import {
	fetchRewards,
	searchRewards,
} from "../../controllers/Reward/rewardController";
import RewardList from "../../components/Rewards/RewardList";
import { LoadingSkeleton } from "../../components/Utils/LoadingSkeleton";
import { isAuthenticated } from "../../utils/isAuthenticated";
import { Navigate } from "react-router-dom";

export const Rewards = () => {
	const [data, setData] = useState([]);

	const fetchSearchResults = async (query: any) => {
		if (query) {
			searchRewards(query).then((data: any) => {
				if (data) setData(data);
			});
		} else {
			fetchRewards().then((data: any) => {
				if (data) setData(data);
			});
		}
	};

	const handleChange = (e: any) => {
		fetchSearchResults(e.value);
	};

	useEffect(() => {
		fetchRewards().then((data: any) => {
			if (data) setData(data);
		});
	}, []);

	if (!isAuthenticated()) {
		return <Navigate to="/login" />;
	} else {
		return (
			<Layout title="Rewards">
				<div className="md:mr-20 md:ml-20 md:mb-4 md:mt-4">
					<form>
						<label
							htmlFor="default-search"
							className="mb-2 text-sm font-medium text-gray-900 sr-only dark:text-white"
						>
							Search for voucher codes
						</label>
						<div className="relative">
							<div className="absolute inset-y-0 left-0 flex items-center pl-3 pointer-events-none">
								<svg
									aria-hidden="true"
									className="w-5 h-5 text-gray-500 dark:text-gray-400"
									fill="none"
									stroke="currentColor"
									viewBox="0 0 24 24"
									xmlns="http://www.w3.org/2000/svg"
								>
									<path
										strokeLinecap="round"
										strokeLinejoin="round"
										strokeWidth="2"
										d="M21 21l-6-6m2-5a7 7 0 11-14 0 7 7 0 0114 0z"
									></path>
								</svg>
							</div>
							<input
								type="text"
								id="default-search"
								className="block w-full p-4 pl-10 text-sm text-gray-900 border border-gray-300 rounded-lg bg-gray-50 focus:ring-blue-500 focus:border-blue-500 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500"
								placeholder="Search by reward name"
								required
								onChange={(e) => {
									if (e.target.value == null || e.target.value == "") {
										handleChange("");
									}
								}}
							/>
							<button
								type="submit"
								className="text-white absolute right-2.5 bottom-2.5 bg-blue-700 hover:bg-blue-800 focus:ring-4 focus:outline-none focus:ring-blue-300 font-medium rounded-lg text-sm px-4 py-2 dark:bg-blue-600 dark:hover:bg-blue-700 dark:focus:ring-blue-800"
								onClick={(e) => {
									e.preventDefault();
									const search = document.getElementById(
										"default-search"
									) as HTMLInputElement;
									handleChange(search);
								}}
							>
								Search
							</button>
						</div>
					</form>
				</div>
				<div className="md:mr-20 md:ml-20">
					<div className="relative overflow-x-auto shadow-md sm:rounded-lg">
						<RewardList data={data}></RewardList>
					</div>
				</div>
			</Layout>
		);
	}
};

export default Rewards;
