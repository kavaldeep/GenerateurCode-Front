import { useEffect, useState } from "react";
import Layout from "../../components/Layout";
import { LoadingSkeleton } from "../../components/Utils/LoadingSkeleton";
import RedemptionList from "../../components/Redemptions/RedemptionList";
import {
	fetchRedemptions,
	searchRedemptions,
} from "../../controllers/Redemptions/redemptionsController";
import { isAuthenticated } from "../../utils/isAuthenticated";
import { Navigate } from "react-router-dom";


export const Redemptions = () => {
	const [data, setData] = useState([]);
	/*const [showModal, setShowModal] = useState<boolean>(false);
	const [created, setCreated] = useState<boolean | string | null>(null);
	const [error, setError] = useState<boolean | string | null>(null);*/

	const fetchSearchResults = async (query: any) => {
		if (query) {
			searchRedemptions(query).then((data: any) => {
				if (data) setData(data);
			});
		} else {
			fetchRedemptions().then((data: any) => {
				if (data) setData(data);
			});
		}
	};

	const handleChange = (e: any) => {
		fetchSearchResults(e.value);
	};

	useEffect(() => {
		fetchRedemptions().then((data: any) => {
			if (data) setData(data);
		});
	}, []);

	if (!isAuthenticated()) {
		return <Navigate to="/login" />;
	} else {
		
		return (
			<Layout title="Redemptions">
				{/*showModal && (
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
									Create a new Customer
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
										Source ID
									</label>
									<div className="relative">
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
											id="source_id"
											className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full pl-10 p-2.5  dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500"
											placeholder="62627"
											required
										/>
									</div>

									<label
										htmlFor="email-address-icon"
										className="block mb-2 text-sm text-gray-900 dark:text-white"
									>
										Name
									</label>
									<div className="relative">
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
											id="name"
											className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full pl-10 p-2.5  dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500"
											placeholder="Liam Smith"
											required
										/>
									</div>

									<label
										htmlFor="email-address-icon"
										className="block mb-2 text-sm text-gray-900 dark:text-white"
									>
										Email
									</label>
									<div className="relative">
										<div className="absolute inset-y-0 left-0 flex items-center pl-3 pointer-events-none">
											<svg
												className="w-5 h-5 text-gray-500 dark:text-gray-400"
												fill="none"
												stroke="currentColor"
												strokeWidth="1.5"
												viewBox="0 0 24 24"
												xmlns="http://www.w3.org/2000/svg"
												aria-hidden="true"
											>
												<path
													strokeLinecap="round"
													strokeLinejoin="round"
													d="M21.75 6.75v10.5a2.25 2.25 0 01-2.25 2.25h-15a2.25 2.25 0 01-2.25-2.25V6.75m19.5 0A2.25 2.25 0 0019.5 4.5h-15a2.25 2.25 0 00-2.25 2.25m19.5 0v.243a2.25 2.25 0 01-1.07 1.916l-7.5 4.615a2.25 2.25 0 01-2.36 0L3.32 8.91a2.25 2.25 0 01-1.07-1.916V6.75"
												></path>
											</svg>
										</div>
										<input
											type="email"
											id="email"
											className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full pl-10 p-2.5  dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500"
											placeholder="liamsmith@yahoo.es"
											required
										/>
									</div>

									<label
										htmlFor="email-address-icon"
										className="block mb-2 text-sm text-gray-900 dark:text-white"
									>
										Phone
									</label>
									<div className="relative">
										<div className="absolute inset-y-0 left-0 flex items-center pl-3 pointer-events-none">
											<svg
												fill="none"
												stroke="currentColor"
												strokeWidth="1.5"
												viewBox="0 0 24 24"
												xmlns="http://www.w3.org/2000/svg"
												aria-hidden="true"
												className="w-5 h-5 text-gray-500 dark:text-gray-400"
											>
												<path
													strokeLinecap="round"
													strokeLinejoin="round"
													d="M2.25 6.75c0 8.284 6.716 15 15 15h2.25a2.25 2.25 0 002.25-2.25v-1.372c0-.516-.351-.966-.852-1.091l-4.423-1.106c-.44-.11-.902.055-1.173.417l-.97 1.293c-.282.376-.769.542-1.21.38a12.035 12.035 0 01-7.143-7.143c-.162-.441.004-.928.38-1.21l1.293-.97c.363-.271.527-.734.417-1.173L6.963 3.102a1.125 1.125 0 00-1.091-.852H4.5A2.25 2.25 0 002.25 4.5v2.25z"
												></path>
											</svg>
										</div>
										<input
											type="text"
											id="phone"
											className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full pl-10 p-2.5  dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500"
											placeholder="+1 123 456 7890"
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
			)*/}
				<div className="md:mr-20 md:ml-20 md:mb-4 md:mt-4">
					{/*<Button
					onClick={() => {
						setShowModal(true);
					}}
					className="text-white bg-gradient-to-r from-blue-500 via-blue-600 to-blue-700 hover:bg-gradient-to-br focus:ring-4 focus:outline-none focus:ring-blue-300 dark:focus:ring-blue-800 shadow-lg shadow-blue-500/50 dark:shadow-lg dark:shadow-blue-800/80 font-medium rounded-lg text-sm px-1 py-2 mr-2 mb-2"
					type="button"
				>
					Create a new Customer
				</Button>*/}

					<form>
						<label
							htmlFor="default-search"
							className="mb-2 text-sm font-medium text-gray-900 sr-only dark:text-white"
						>
							Search
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
								placeholder="Search for redemption ID, voucher ID or customer ID"
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
				<RedemptionList data={data}></RedemptionList>
			</Layout>
		);
	}
};

export default Redemptions;
