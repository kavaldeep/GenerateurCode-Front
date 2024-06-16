import React, { useEffect, useState } from "react";
import Layout from "../components/Layout";
import { Link, Navigate } from "react-router-dom";
import { isAuthenticated } from "../utils/isAuthenticated";
import fetchDashBoard, {
	IDashBoardResponse,
	IDashBoardError,
} from "../controllers/Dashboard/dashboardController";
import {
	fetchVouchers,
	fetchVouchersByPage,
} from "../controllers/Voucher/voucherController";
import { fetchCustomers } from "../controllers/Customer/customerController";
import CustomerList from "../components/Customer/CustomerList";
import { fetchRewards } from "../controllers/Reward/rewardController";
import RewardList from "../components/Rewards/RewardList";
import { fetchRedemption, fetchRedemptions } from "../controllers/Redemptions/redemptionsController";

export const Home = () => {
	const [dashboardStats, setDashbordStats] = useState<IDashBoardResponse>({
		vouchers: 0,
		campaigns: 0,
		customers: 0,
		redemptions: 0,
		rewards: 0,
	});

	const [rewards, setRewards] = useState([]);
	const [customers, setCustomers] = useState([]);

	const [dashboartError, setDashboardError] = useState<IDashBoardError>({
		status: 0,
	});

	useEffect(() => {
		fetchRewards().then((data: any) => {
			setRewards(data);
		});

		fetchCustomers().then((data: any) => {
			setCustomers(data);
		});
		fetchDashBoard
			.GetStats()
			.then((response) => {
				// check if th reponse is the type of IDashBoardResponse
				setDashbordStats(response as IDashBoardResponse);
			})
			.catch((error) => {
				setDashboardError(error as IDashBoardError);
			});
	}, []);

	if (!isAuthenticated()) {
		return <Navigate to="/login" />;
	} else {
		return (
			<>
				<Layout title="Home">
					{/* <div className="bg-gray-50 w-full p-5 mb-4">
						<h1 className="text-1xl text-gray-500 font-bold">Welcome again!</h1>
					</div>
					<div className="flex flex-col md:flex-row gap-8">
						<Link
							to="/vouchers"
							className="flex flex-row m-auto bg-gradient-to-r from-blue-500 via-blue-600 to-blue-700 p-6 gap-8 rounded-lg border-2 border-blue-500"
						>
							<div className="my-auto">
								<div className="text-lg text-purple-300">Vouchers</div>
								<div className="text-4xl text-purple-100">
									{dashboardStats.vouchers}
								</div>
							</div>
							<div className="text-blue-300 my-auto bg-gradient-to-l from-blue-500 via-blue-600 to-blue-700 rounded-full p-4">
								<svg
									fill="none"
									stroke="currentColor"
									strokeWidth="1.5"
									className="h-12 w-12"
									viewBox="0 0 24 24"
									xmlns="http://www.w3.org/2000/svg"
									aria-hidden="true"
								>
									<path
										strokeLinecap="round"
										strokeLinejoin="round"
										d="M9 14.25l6-6m4.5-3.493V21.75l-3.75-1.5-3.75 1.5-3.75-1.5-3.75 1.5V4.757c0-1.108.806-2.057 1.907-2.185a48.507 48.507 0 0111.186 0c1.1.128 1.907 1.077 1.907 2.185zM9.75 9h.008v.008H9.75V9zm.375 0a.375.375 0 11-.75 0 .375.375 0 01.75 0zm4.125 4.5h.008v.008h-.008V13.5zm.375 0a.375.375 0 11-.75 0 .375.375 0 01.75 0z"
									></path>
								</svg>
							</div>
						</Link>
						<Link
							to="/campaigns"
							className="flex flex-row m-auto bg-gradient-to-r from-blue-700 via-blue-800 to-blue-900 p-6 gap-8 rounded-lg border-2 border-purple-500"
						>
							<div className="my-auto">
								<div className="text-lg text-purple-300">Campaigns</div>
								<div className="text-4xl text-purple-100">
									{dashboardStats.campaigns}
								</div>
							</div>
							<div className="text-purple-300 my-auto bg-gradient-to-l from-blue-700 via-blue-800 to-blue-900 rounded-full p-4">
								<svg
									fill="none"
									stroke="currentColor"
									strokeWidth="1.5"
									viewBox="0 0 24 24"
									className="h-12 w-12"
									xmlns="http://www.w3.org/2000/svg"
									aria-hidden="true"
								>
									<path
										strokeLinecap="round"
										strokeLinejoin="round"
										d="M3.75 9.776c.112-.017.227-.026.344-.026h15.812c.117 0 .232.009.344.026m-16.5 0a2.25 2.25 0 00-1.883 2.542l.857 6a2.25 2.25 0 002.227 1.932H19.05a2.25 2.25 0 002.227-1.932l.857-6a2.25 2.25 0 00-1.883-2.542m-16.5 0V6A2.25 2.25 0 016 3.75h3.879a1.5 1.5 0 011.06.44l2.122 2.12a1.5 1.5 0 001.06.44H18A2.25 2.25 0 0120.25 9v.776"
									></path>
								</svg>
							</div>
						</Link>
						<Link
							to="/customers"
							className="flex flex-row m-auto bg-gradient-to-r from-purple-700 via-purple-800 to-purple-900 p-6 gap-8 rounded-lg border-2 border-purple-500"
						>
							<div className="my-auto">
								<div className="text-lg text-purple-300">Customers</div>
								<div className="text-4xl text-purple-100">
									{dashboardStats.customers}
								</div>
							</div>
							<div className="text-purple-300 my-auto bg-gradient-to-l from-purple-700 via-purple-800 to-purple-900 rounded-full p-4">
								<svg
									fill="none"
									stroke="currentColor"
									strokeWidth="1.5"
									viewBox="0 0 24 24"
									xmlns="http://www.w3.org/2000/svg"
									aria-hidden="true"
									className="h-12 w-12"
								>
									<path
										strokeLinecap="round"
										strokeLinejoin="round"
										d="M18 18.72a9.094 9.094 0 003.741-.479 3 3 0 00-4.682-2.72m.94 3.198l.001.031c0 .225-.012.447-.037.666A11.944 11.944 0 0112 21c-2.17 0-4.207-.576-5.963-1.584A6.062 6.062 0 016 18.719m12 0a5.971 5.971 0 00-.941-3.197m0 0A5.995 5.995 0 0012 12.75a5.995 5.995 0 00-5.058 2.772m0 0a3 3 0 00-4.681 2.72 8.986 8.986 0 003.74.477m.94-3.197a5.971 5.971 0 00-.94 3.197M15 6.75a3 3 0 11-6 0 3 3 0 016 0zm6 3a2.25 2.25 0 11-4.5 0 2.25 2.25 0 014.5 0zm-13.5 0a2.25 2.25 0 11-4.5 0 2.25 2.25 0 014.5 0z"
									></path>
								</svg>
							</div>
						</Link>
					</div> */}
					<>
						{/* component */}
						<section className="bg-white p-5 m-3 rounded-lg shadow">
							<div className="flex flex-col lg:flex-row items-center gap-5 mt-5">
								<Link
									to="/vouchers"
									className="flex justify-evenly items-center w-96 lg:w-1/3 p-3 m-3 border border-gray-300 rounded"
								>
									<svg
										fill="none"
										stroke="currentColor"
										strokeWidth="1.5"
										className="h-12 w-12 text-blue-700"
										viewBox="0 0 24 24"
										xmlns="http://www.w3.org/2000/svg"
										aria-hidden="true"
									>
										<path
											strokeLinecap="round"
											strokeLinejoin="round"
											d="M9 14.25l6-6m4.5-3.493V21.75l-3.75-1.5-3.75 1.5-3.75-1.5-3.75 1.5V4.757c0-1.108.806-2.057 1.907-2.185a48.507 48.507 0 0111.186 0c1.1.128 1.907 1.077 1.907 2.185zM9.75 9h.008v.008H9.75V9zm.375 0a.375.375 0 11-.75 0 .375.375 0 01.75 0zm4.125 4.5h.008v.008h-.008V13.5zm.375 0a.375.375 0 11-.75 0 .375.375 0 01.75 0z"
										></path>
									</svg>
									<div className="text-center">
										<h2 className="text-4xl font-bold pb-2">
											{dashboardStats.vouchers}
										</h2>
										<h4 className="inline text-gray-500 text-md">Vouchers</h4>
									</div>
								</Link>
								<Link
									to="/redemptions"
									className="flex justify-evenly items-center w-96 lg:w-1/3 p-3 m-3 border border-gray-300 rounded"
								>
									<svg
										fill="none"
										stroke="currentColor"
										strokeWidth="1.5"
										viewBox="0 0 24 24"
										className="h-12 w-12 text-blue-600"
										xmlns="http://www.w3.org/2000/svg"
										aria-hidden="true"
									>
										<path
											strokeLinecap="round"
											strokeLinejoin="round"
											d="M3.75 9.776c.112-.017.227-.026.344-.026h15.812c.117 0 .232.009.344.026m-16.5 0a2.25 2.25 0 00-1.883 2.542l.857 6a2.25 2.25 0 002.227 1.932H19.05a2.25 2.25 0 002.227-1.932l.857-6a2.25 2.25 0 00-1.883-2.542m-16.5 0V6A2.25 2.25 0 016 3.75h3.879a1.5 1.5 0 011.06.44l2.122 2.12a1.5 1.5 0 001.06.44H18A2.25 2.25 0 0120.25 9v.776"
										></path>
									</svg>
									<div className="text-center">
										<h2 className="text-4xl font-bold pb-2">
											{dashboardStats.redemptions}											
										</h2>
										<h4 className="inline text-gray-500 text-md">Redemptions</h4>
									</div>
								</Link>
								<Link
									to="/campaigns"
									className="flex justify-evenly items-center w-96 lg:w-1/3 p-3 m-3 border border-gray-300 rounded"
								>
									<svg
										fill="none"
										stroke="currentColor"
										strokeWidth="1.5"
										viewBox="0 0 24 24"
										className="h-12 w-12 text-blue-600"
										xmlns="http://www.w3.org/2000/svg"
										aria-hidden="true"
									>
										<path
											strokeLinecap="round"
											strokeLinejoin="round"
											d="M3.75 9.776c.112-.017.227-.026.344-.026h15.812c.117 0 .232.009.344.026m-16.5 0a2.25 2.25 0 00-1.883 2.542l.857 6a2.25 2.25 0 002.227 1.932H19.05a2.25 2.25 0 002.227-1.932l.857-6a2.25 2.25 0 00-1.883-2.542m-16.5 0V6A2.25 2.25 0 016 3.75h3.879a1.5 1.5 0 011.06.44l2.122 2.12a1.5 1.5 0 001.06.44H18A2.25 2.25 0 0120.25 9v.776"
										></path>
									</svg>
									<div className="text-center">
										<h2 className="text-4xl font-bold pb-2">
											{dashboardStats.campaigns}
										</h2>
										<h4 className="inline text-gray-500 text-md">Campaigns</h4>
									</div>
								</Link>
								<Link
									to="/customers"
									className="flex justify-evenly items-center w-96 lg:w-1/3 p-3 m-3 border border-gray-300 rounded"
								>
									<svg
										fill="none"
										stroke="currentColor"
										strokeWidth="1.5"
										viewBox="0 0 24 24"
										xmlns="http://www.w3.org/2000/svg"
										aria-hidden="true"
										className="h-12 w-12 text-blue-500"
									>
										<path
											strokeLinecap="round"
											strokeLinejoin="round"
											d="M18 18.72a9.094 9.094 0 003.741-.479 3 3 0 00-4.682-2.72m.94 3.198l.001.031c0 .225-.012.447-.037.666A11.944 11.944 0 0112 21c-2.17 0-4.207-.576-5.963-1.584A6.062 6.062 0 016 18.719m12 0a5.971 5.971 0 00-.941-3.197m0 0A5.995 5.995 0 0012 12.75a5.995 5.995 0 00-5.058 2.772m0 0a3 3 0 00-4.681 2.72 8.986 8.986 0 003.74.477m.94-3.197a5.971 5.971 0 00-.94 3.197M15 6.75a3 3 0 11-6 0 3 3 0 016 0zm6 3a2.25 2.25 0 11-4.5 0 2.25 2.25 0 014.5 0zm-13.5 0a2.25 2.25 0 11-4.5 0 2.25 2.25 0 014.5 0z"
										></path>
									</svg>
									<div className="text-center">
										<h2 className="text-4xl font-bold pb-2">
											{dashboardStats.customers}
										</h2>
										<h4 className="inline text-gray-500 text-md">Customers</h4>
									</div>
								</Link>
								<Link
									to="/rewards"
									className="flex justify-evenly items-center w-96 lg:w-1/3 p-3 m-3 border border-gray-300 rounded"
								>
									<svg
										fill="none"
										stroke="currentColor"
										strokeWidth="1.5"
										viewBox="0 0 24 24"
										xmlns="http://www.w3.org/2000/svg"
										aria-hidden="true"
										className="h-12 w-12 text-blue-400"
									>
										<path
											strokeLinecap="round"
											strokeLinejoin="round"
											d="M21 11.25v8.25a1.5 1.5 0 01-1.5 1.5H5.25a1.5 1.5 0 01-1.5-1.5v-8.25M12 4.875A2.625 2.625 0 109.375 7.5H12m0-2.625V7.5m0-2.625A2.625 2.625 0 1114.625 7.5H12m0 0V21m-8.625-9.75h18c.621 0 1.125-.504 1.125-1.125v-1.5c0-.621-.504-1.125-1.125-1.125h-18c-.621 0-1.125.504-1.125 1.125v1.5c0 .621.504 1.125 1.125 1.125z"
										></path>
									</svg>
									<div className="text-center">
										<h2 className="text-4xl font-bold pb-2">
											{dashboardStats.rewards}
										</h2>
										<h4 className="inline text-gray-500 text-md">Rewards</h4>
									</div>
								</Link>
							</div>
						</section>

						<section className="flex flex-row">
							<div className="p-5 m-3 w-full  bg-white dark:bg-gray-800 overflow-hidden shadow rounded-lg">
								<div className="flex flex-row justify-between items-center">
									<h2 className="text-2xl font-semibold pb-4">
										Latest Customers{" "}
										<small className="font-light text-sm">
											Showing the latest 10 records.
										</small>
									</h2>
								</div>

								<div className="relative overflow-x-auto">
									<CustomerList data={customers.slice(0, 10)}></CustomerList>
									{/* <table className="w-full text-sm text-left text-gray-500 dark:text-gray-400">
										<thead className="text-xs text-gray-700 uppercase bg-gray-50 dark:bg-gray-700 dark:text-gray-400">
											<tr>
												<th scope="col" className="px-6 py-3">
													Product name
												</th>
												<th scope="col" className="px-6 py-3">
													Color
												</th>
												<th scope="col" className="px-6 py-3">
													Category
												</th>
												<th scope="col" className="px-6 py-3">
													Price
												</th>
											</tr>
										</thead>
										<tbody>
											<tr className="bg-white border-b dark:bg-gray-800 dark:border-gray-700">
												<th
													scope="row"
													className="px-6 py-4 font-medium text-gray-900 whitespace-nowrap dark:text-white"
												>
													Apple MacBook Pro 17"
												</th>
												<td className="px-6 py-4">Silver</td>
												<td className="px-6 py-4">Laptop</td>
												<td className="px-6 py-4">$2999</td>
											</tr>
											<tr className="bg-white border-b dark:bg-gray-800 dark:border-gray-700">
												<th
													scope="row"
													className="px-6 py-4 font-medium text-gray-900 whitespace-nowrap dark:text-white"
												>
													Microsoft Surface Pro
												</th>
												<td className="px-6 py-4">White</td>
												<td className="px-6 py-4">Laptop PC</td>
												<td className="px-6 py-4">$1999</td>
											</tr>
											<tr className="bg-white dark:bg-gray-800">
												<th
													scope="row"
													className="px-6 py-4 font-medium text-gray-900 whitespace-nowrap dark:text-white"
												>
													Magic Mouse 2
												</th>
												<td className="px-6 py-4">Black</td>
												<td className="px-6 py-4">Accessories</td>
												<td className="px-6 py-4">$99</td>
											</tr>
										</tbody>
									</table> */}
								</div>
							</div>
							<div className="p-5 m-3 w-full bg-white dark:bg-gray-800 overflow-hidden shadow rounded-lg">
								<div className="flex flex-row justify-between items-center">
									<h2 className="text-2xl font-semibold pb-4">
										Latest Rewards{" "}
										<small className="font-light text-sm">
											Showing the latest 10 records.
										</small>
									</h2>
								</div>
								<div className="relative overflow-x-auto">
									<RewardList data={rewards.slice(0, 10)}></RewardList>
								</div>
							</div>
						</section>
					</>
				</Layout>
			</>
		);
	}
};
