import { useEffect, useState } from "react";
import Layout from "../../components/Layout";
import CampaignList from "../../components/Campaign/CampaignList";
import {
	createHandler,
	fetchCampaigns,
	fetchSearchResults,
} from "../../controllers/Campaign/campaignController";
import { Button } from "flowbite-react";
import { LoadingSkeleton } from "../../components/Utils/LoadingSkeleton";
import { isAuthenticated } from "../../utils/isAuthenticated";
import { Navigate } from "react-router-dom";
import SearchForm from "../../components/search/SearchBar";

export const Campaigns = () => {
	const [data, setData] = useState([]);
	const [showModal, setShowModal] = useState<boolean>(false);
	const [created, setCreated] = useState<boolean | string | null>(null);
	const [error, setError] = useState<boolean | string | null>(null);

	const handleSearch = (e: any) => {
		if (e && e.length > 0 && e !== " ") {
			fetchSearchResults(e).then((data: any) => {
				setData(data);
			});
		} else {
			fetchCampaigns().then((data: any) => {
				setData(data);
			});
		}
	};

	useEffect(() => {
		fetchCampaigns().then((data: any) => {
			setData(data);
		});
	}, []);

	if (!isAuthenticated()) {
		return <Navigate to="/login" />;
	} else {
		if (data.length == 0) {
			return (
				<Layout title="Vouchers">
					{/* GENERATE MODAL */}

					<div className="md:mr-20 md:ml-20 md:mb-4 mb:mt-4 sm:mr-5 sm:ml-5 sm:mb-2 sm:mt-2 mx-auto justify-center text-center">
						<LoadingSkeleton />
					</div>
				</Layout>
			);
		}
		return (
			<Layout title="Campaigns">
				
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
										Create a new Campaign
									</h1>
									<form
										method="POST"
										id="createCampaignForm"
										onSubmit={(event) =>
											createHandler(event)?.then((data: any) => {
												setCreated(data);
												setError(!data);
												(
													document.getElementById(
														"createCampaignForm"
													) as HTMLFormElement
												)?.reset();
											})
										}
									>
										<label
											htmlFor="email-address-icon"
											className="block mb-2 text-sm text-gray-900 dark:text-white"
										>
											Campaign Name
										</label>
										<div className="relative mb-2">
											<div className="absolute inset-y-0 left-0 flex items-center pl-3 pointer-events-none">
												<svg
													fill="none"
													stroke="currentColor"
													strokeWidth="1.5"
													viewBox="0 0 24 24"
													className="w-5 h-5 text-gray-500 dark:text-gray-400"
													xmlns="http://www.w3.org/2000/svg"
													aria-hidden="true"
												>
													<path
														strokeLinecap="round"
														strokeLinejoin="round"
														d="M15.75 6a3.75 3.75 0 11-7.5 0 3.75 3.75 0 017.5 0zM4.501 20.118a7.5 7.5 0 0114.998 0A17.933 17.933 0 0112 21.75c-2.676 0-5.216-.584-7.499-1.632z"
													></path>
												</svg>
											</div>
											<input
												type="text"
												id="campaignName"
												className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full pl-10 p-2.5  dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500"
												placeholder="My fantastic campaign"
												required
											/>
										</div>

										<label
											htmlFor="email-address-icon"
											className="block mb-2 text-sm text-gray-900 dark:text-white"
										>
											Campaign Description
										</label>
										<div className="relative mb-2">
											<div className="absolute inset-y-0 left-0 flex items-center pl-3 pointer-events-none">
												<svg
													fill="none"
													stroke="currentColor"
													strokeWidth="1.5"
													viewBox="0 0 24 24"
													className="w-5 h-5 text-gray-500 dark:text-gray-400"
													xmlns="http://www.w3.org/2000/svg"
													aria-hidden="true"
												>
													<path
														strokeLinecap="round"
														strokeLinejoin="round"
														d="M15.75 6a3.75 3.75 0 11-7.5 0 3.75 3.75 0 017.5 0zM4.501 20.118a7.5 7.5 0 0114.998 0A17.933 17.933 0 0112 21.75c-2.676 0-5.216-.584-7.499-1.632z"
													></path>
												</svg>
											</div>
											<input
												type="text"
												id="campaignDescription"
												className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full pl-10 p-2.5  dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500"
												placeholder="lorem ipsum dolor sit amet"
												required
											/>
										</div>

										<label
											htmlFor="campaignType"
											className="block mb-2 text-sm font-medium text-gray-900 dark:text-white"
										>
											Type of the campaign
										</label>
										<select
											id="campaignType"
											className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500"
										>
											<option value="STATIC" selected>
												STATIC
											</option>
											<option value="AUTO_UPDATE">AUTO_UPDATE</option>
										</select>

										<button
											className="mt-4 w-full text-white bg-gradient-to-r from-blue-500 via-blue-600 to-blue-700 hover:bg-gradient-to-br focus:ring-4 focus:outline-none focus:ring-blue-300 dark:focus:ring-blue-800 shadow-lg shadow-blue-500/50 dark:shadow-lg dark:shadow-blue-800/80 font-medium rounded-lg text-sm px-5 py-2.5 text-center mr-2 mb-2"
											type="submit"
										>
											Create
										</button>
										{created && (
											<p className="text-green-500">
												Campaign Created Successfully!
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
				<div className="md:mr-20 md:ml-20 md:mb-4 md:mt-4">
					<Button
						onClick={() => {
							setShowModal(true);
						}}
						className="text-white bg-gradient-to-r from-blue-500 via-blue-600 to-blue-700 hover:bg-gradient-to-br focus:ring-4 focus:outline-none focus:ring-blue-300 dark:focus:ring-blue-800 shadow-lg shadow-blue-500/50 dark:shadow-lg dark:shadow-blue-800/80 font-medium rounded-lg text-sm px-1 py-2 mr-2 mb-2"
						type="button"
					>
						Create a new Campaign
					</Button>
					
					<SearchForm
					label="Search a campaign by his name"
					handleSearch={handleSearch} />
					
				</div>
				<CampaignList data={data}></CampaignList>
			</Layout>
		);
	}
};
