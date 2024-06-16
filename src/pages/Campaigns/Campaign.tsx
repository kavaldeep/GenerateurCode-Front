import React, { useEffect, useState } from "react";
import Layout from "../../components/Layout";
import { useParams, Link, Navigate } from "react-router-dom";
import {
	fetchCampaign,
	fetchStats,
	fetchVouchers,
	generateVouchersInBulk,
	toggleActiveCampaign,
} from "../../controllers/Campaign/campaignController";
import { isAuthenticated } from "../../utils/isAuthenticated";
import { Tabs } from "../../components/Tabs/Tabs";
import { CampaignDetails} from "./Components/CampaignsDetails";
import { CampaignStats } from "./Components/CampaignStats";
import { CampaignVouchers } from "./Components/CampaignVouchers";
import { ICampaign } from "../../Models/Campaigns/Campaigns";

export const Campaign = () => {

	const tabs = ["Details", "Stats", "Vouchers"];
	/* Campaign data */
	const [campaignData, setCampaignData]= useState<ICampaign>();
	/* State for checking the status of a Campaign. */
	const [checked, setChecked]: any = useState(false);

	/* Vouchers data */
	const [vouchers, setVouchers]: any[] = useState([]);

	/* Stats of the campaign */
	const [stats, setStats]: any = useState([]);

	/* ID of the campaign got by the URL as a param. */
	const { id } = useParams();

	/* State to manage the tab system */
	const [currentTab, setCurrentTab] = useState(tabs[0]);

	/* Modal states */
	const [showModal, setShowModal] = useState(false);
	const [created, setCreated] = useState<boolean | string | null>(null);
	const [error, setError] = useState<boolean | string | null>(null);

	// Pagination system
	const [currentPage, setCurrentPage] = useState(0);

	// Change page
	const paginate = (pageNumber: any) => {
		if (pageNumber < 0) return;
		setCurrentPage(pageNumber);

		fetchVouchers(id, pageNumber).then((vouchers: any) => {
			setVouchers(vouchers); // Setting the vouchers of the campaign.
		});
	};

	useEffect(() => {
		/* Fetching the data: campaign, vouchers of the campaign and stats of the campaign. */
		fetchCampaign(id).then((response: any) => {
			setCampaignData(response);

			setChecked(response["active"]); // Setting the status of the campaign.
		});

		fetchVouchers(id, currentPage).then((vouchers: any) => {
			setVouchers(vouchers); // Setting the vouchers of the campaign.
		});

		fetchStats(id).then((stats: any) => {
			setStats(stats); // Setting the stats of the campaign.
		});
	}, []);

	/* Function to get current tab and aplying a style */
	const setUnderline = (tab: string) => {
		if (tab === currentTab) {
			return "bg-blue-500 text-white hover:text-white rounded-xl";
		}
		return "";
	};

	if (!isAuthenticated()) {
		return <Navigate to="/login" />;
	} else {
		return (
			<Layout title="Campaign">
				{showModal && (
					<div
						id="redeem-modal"
						className="justify-center items-center flex overflow-x-hidden overflow-y-auto fixed inset-0 z-50 outline-none focus:outline-none "
					>
						<div className="relative w-full max-w-md max-h-full z-50">
							<div className="relative bg-white rounded-lg shadow dark:bg-gray-700">
								<button
									type="button"
									onClick={() => {
										setShowModal(false);
										setCreated(false);
										setError(false);
									}}
									className="absolute top-3 right-2.5 text-gray-400 bg-transparent hover:bg-gray-200 hover:text-gray-900 rounded-lg text-sm p-1.5 ml-auto inline-flex items-center dark:hover:bg-gray-800 dark:hover:text-white"
									data-modal-hide="redeem-modal"
								>
									<svg
										aria-hidden="true"
										className="w-5 h-5"
										fill="currentColor"
										viewBox="0 0 20 20"
										xmlns="http://www.w3.org/2000/svg"
									>
										<path
											fillRule="evenodd"
											d="M4.293 4.293a1 1 0 011.414 0L10 8.586l4.293-4.293a1 1 0 111.414 1.414L11.414 10l4.293 4.293a1 1 0 01-1.414 1.414L10 11.414l-4.293 4.293a1 1 0 01-1.414-1.414L8.586 10 4.293 5.707a1 1 0 010-1.414z"
											clipRule="evenodd"
										></path>
									</svg>
									<span className="sr-only">Close modal</span>
								</button>
								<div className="p-6">
									<h1 className="text-2xl text-center mb-3">
										Generate Vouchers in Bulk
									</h1>
									<form
										method="POST"
										id="generateVouchersBulkForm"
										onSubmit={(event) =>
											generateVouchersInBulk(event, id)?.then((data: any) => {
												setCreated(data);
												setError(!data);
												(
													document.getElementById(
														"generateVouchersBulkForm"
													) as HTMLFormElement
												)?.reset();
											})
										}
									>
										<label
											htmlFor="email-address-icon"
											className="block mb-2 text-sm text-gray-900 dark:text-white"
										>
											Amount{" "}
											<small>(Amount of discount for each voucher)</small>
										</label>
										<div className="relative">
											<input
												type="number"
												id="amount"
												className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5  dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500"
												placeholder="50"
												required
											/>
										</div>

										<label
											htmlFor="email-address-icon"
											className="block mb-2 text-sm text-gray-900 dark:text-white"
										>
											Count <small>(Count of vouchers to generate)</small>
										</label>
										<div className="relative">
											<input
												type="number"
												id="count"
												className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5  dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500"
												placeholder="150"
												required
											/>
										</div>

										<button
											className="mt-4 w-full text-white bg-gradient-to-r from-blue-500 via-blue-600 to-blue-700 hover:bg-gradient-to-br focus:ring-4 focus:outline-none focus:ring-blue-300 dark:focus:ring-blue-800 shadow-lg shadow-blue-500/50 dark:shadow-lg dark:shadow-blue-800/80 font-medium rounded-lg text-sm px-5 py-2.5 text-center mr-2 mb-2"
											type="submit"
										>
											Create
										</button>
										{created && (
											<p className="text-green-500">
												Customer Created Successfully!
											</p>
										)}
										{error && (
											<p className="text-red-500">
												Error! Check all fields and try again.
											</p>
										)}
									</form>
								</div>
							</div>
						</div>
						<div className="opacity-25 fixed inset-0 z-0 bg-black"></div>
					</div>
				)}

				<div className="bg-blue-100 w-full p-5 mb-4">
					<p className="text-2xl text-bl-500 font-semibold">
						<Link
							to="/campaigns"
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
						{campaignData?.name ? campaignData.name : "No name provided."}
					</p>
				</div>

				{/* TABS NAVIGATION */}
				<Tabs 
					tabs={tabs}
					currentTab={currentTab}
					setCurrent={setCurrentTab}
				></Tabs>
				{currentTab === "Details" && <CampaignDetails 
				checked={checked}
				setChecked={setChecked}
				campaign = {campaignData } />}
				{ currentTab === "Stats" && <CampaignStats stats={stats} /> }
				{ currentTab === "Vouchers" && <CampaignVouchers 
				vouchers={vouchers}
				setShowModal={setShowModal}
				setCreated={setCreated}
				setError={setError}
				paginate={paginate}
				currentPage={currentPage}
				/> }
						{/* A pagination system made with tailwindcss */}

			</Layout>
		);
	}
};



