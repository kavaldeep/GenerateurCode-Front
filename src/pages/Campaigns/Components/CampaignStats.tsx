import React from "react";
import  { VerticalBarChart } from "../../../components/Charts/VerticalBarChart";7

interface IProps {
    stats: any;
}


export const CampaignStats: React.FC<IProps> = ({ stats }) => {

    return (
    	<div id="stats" className="grid grid-cols-1 md:grid-cols-1 gap-3 grid-flow-row m-4">					
			<div className="bg-white dark:bg-gray-800 overflow-hidden shadow rounded-lg">
				<div className="px-4 py-5 sm:p-6">
					<h3 className="text-xl font-semibold text-gray-900 dark:text-gray-100">
						Statistics
					</h3>
					<p className="mt-1 max-w-2xl text-sm text-gray-500 dark:text-gray-400">
						Statistics about the campaign.
					</p>
					<div className="mt-5 border-t border-gray-200 dark:border-gray-700">
						<dl className="mt-5 grid grid-cols-1 gap-x-4 gap-y-8 sm:grid-cols-1 md:grid-cols-2 lg:grid-cols-4">
							<div className="flex items-center shadow p-5">
								<div className="px-3 pt-8 pb-10 text-center relative z-10 m-auto">
									<svg
										fill="none"
										stroke="currentColor"
										strokeWidth="1.5"
										viewBox="0 0 24 24"
										xmlns="http://www.w3.org/2000/svg"
										aria-hidden="true"
										className="w-10 h-6mx-2 text-gray-400 dark:text-gray-300 m-auto"
									>
										<path
											strokeLinecap="round"
											strokeLinejoin="round"
											d="M3.75 4.875c0-.621.504-1.125 1.125-1.125h4.5c.621 0 1.125.504 1.125 1.125v4.5c0 .621-.504 1.125-1.125 1.125h-4.5A1.125 1.125 0 013.75 9.375v-4.5zM3.75 14.625c0-.621.504-1.125 1.125-1.125h4.5c.621 0 1.125.504 1.125 1.125v4.5c0 .621-.504 1.125-1.125 1.125h-4.5a1.125 1.125 0 01-1.125-1.125v-4.5zM13.5 4.875c0-.621.504-1.125 1.125-1.125h4.5c.621 0 1.125.504 1.125 1.125v4.5c0 .621-.504 1.125-1.125 1.125h-4.5A1.125 1.125 0 0113.5 9.375v-4.5z"
										></path>
										<path
											strokeLinecap="round"
											strokeLinejoin="round"
											d="M6.75 6.75h.75v.75h-.75v-.75zM6.75 16.5h.75v.75h-.75v-.75zM16.5 6.75h.75v.75h-.75v-.75zM13.5 13.5h.75v.75h-.75v-.75zM13.5 19.5h.75v.75h-.75v-.75zM19.5 13.5h.75v.75h-.75v-.75zM19.5 19.5h.75v.75h-.75v-.75zM16.5 16.5h.75v.75h-.75v-.75z"
										></path>
									</svg>
									<h3 className="text-3xl text-gray-700 font-semibold leading-tight my-3">
										{stats.total_vouchers}
									</h3>
									<h4 className="text-sm m-auto text-gray-500 leading-tight">
										Total number of voucher codes
									</h4>
								</div>
							</div>
							<div className="flex items-center shadow p-5">
								<div className="px-3 pt-8 pb-10 text-center relative z-10 m-auto">
									<svg
										xmlns="http://www.w3.org/2000/svg"
										fill="none"
										viewBox="0 0 24 24"
										strokeWidth="1.5"
										stroke="currentColor"
										className="w-10 h-6mx-2 text-gray-400 dark:text-gray-300 m-auto"
									>
										<path
											strokeLinecap="round"
											strokeLinejoin="round"
											d="M19 7.5v3m0 0v3m0-3h3m-3 0h-3m-2.25-4.125a3.375 3.375 0 11-6.75 0 3.375 3.375 0 016.75 0zM4 19.235v-.11a6.375 6.375 0 0112.75 0v.109A12.318 12.318 0 0110.374 21c-2.331 0-4.512-.645-6.374-1.766z"
										/>
									</svg>
									<h3 className="text-3xl text-gray-700 font-semibold leading-tight my-3">
										{stats.total_redemptions_amount}
									</h3>
									<h4 className="text-sm m-auto text-gray-500 leading-tight ">
										Total number of successful published vouchers.
									</h4>
								</div>
							</div>
							<div className="flex items-center shadow p-5">
								<div className="px-3 pt-8 pb-10 text-center relative z-10 m-auto">
									<svg
										fill="none"
										stroke="currentColor"
										strokeWidth="1.5"
										viewBox="0 0 24 24"
										xmlns="http://www.w3.org/2000/svg"
										aria-hidden="true"
										className="w-10 h-6mx-2 text-gray-400 dark:text-gray-300 m-auto"
									>
										<path
											strokeLinecap="round"
											strokeLinejoin="round"
											d="M9 12.75L11.25 15 15 9.75M21 12a9 9 0 11-18 0 9 9 0 0118 0z"
										></path>
									</svg>
									<h3 className="text-3xl text-gray-700 font-semibold leading-tight my-3">
										{stats.total_reedem_voucher}
									</h3>
									<h4 className="text-sm m-auto text-gray-500 leading">
										Total Vouchers Redeemed
									</h4>
								</div>
							</div>
							<div className="flex items-center shadow p-5">
								<div className="px-3 pt-8 pb-10 text-center relative z-10 m-auto">
									<svg
										fill="none"
										stroke="currentColor"
										strokeWidth="1.5"
										viewBox="0 0 24 24"
										xmlns="http://www.w3.org/2000/svg"
										aria-hidden="true"
										className="w-10 h-6mx-2 text-gray-400 dark:text-gray-300 m-auto"
									>
										<path
											strokeLinecap="round"
											strokeLinejoin="round"
											d="M15 19.128a9.38 9.38 0 002.625.372 9.337 9.337 0 004.121-.952 4.125 4.125 0 00-7.533-2.493M15 19.128v-.003c0-1.113-.285-2.16-.786-3.07M15 19.128v.106A12.318 12.318 0 018.624 21c-2.331 0-4.512-.645-6.374-1.766l-.001-.109a6.375 6.375 0 0111.964-3.07M12 6.375a3.375 3.375 0 11-6.75 0 3.375 3.375 0 016.75 0zm8.25 2.25a2.625 2.625 0 11-5.25 0 2.625 2.625 0 015.25 0z"
										></path>
									</svg>
									<h3 className="text-3xl text-gray-700 font-semibold leading-tight my-3">
										{stats.total_customers}
									</h3>
									<h4 className="text-sm m-auto text-gray-500 leading">
										Total Customers
									</h4>
								</div>
							</div>
						</dl>
						<dl className="mt-5 grid grid-cols-1 gap-x-2 gap-y-8 sm:grid-cols-1 md:grid-cols-2 lg:grid-cols-2">
							<div className="flex items-center shadow p-5">
								<div className="px-3 pt-8 pb-10 text-center relative z-10 m-auto">
									<h4 className="text-3xl pb-8 m-auto text-gray-500 leading-tight">
										Total redemptions by day
									</h4>
									{stats.total_reedmed_points_by_date ? (
										<VerticalBarChart
											dates={stats.total_reedmed_points_by_date}
											color="rgba(255, 99, 132, 0.5)"
											title="Redemptions"
										></VerticalBarChart>
									) : (
										<p>No data to show.</p>
									)}
								</div>
							</div>
							<div className="flex items-center shadow p-5">
								<div className="px-3 pt-8 pb-10 text-center relative z-10 m-auto">
									<h4 className="text-3xl pb-8 m-auto text-gray-500 leading-tight">
										Total redemption points by day
									</h4>
									{stats.total_redemptions_count_by_date ? (
										<VerticalBarChart
											dates={stats.total_redemptions_count_by_date}
											color="rgba(122, 99, 132, 0.5)"
											title="Points"
										></VerticalBarChart>
									) : (
										<p>No data to show.</p>
									)}
								</div>
							</div>
						</dl>
					</div>
				</div>
			</div>
		</div>
	)
};