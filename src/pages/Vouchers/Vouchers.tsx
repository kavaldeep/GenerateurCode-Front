import React, { useEffect, useState } from "react";
import Layout from "../../components/Layout";
import VoucherList from "../../components/Voucher/VoucherList";
import {
	fetchVouchers,
	fetchVouchersByPage,
	searchVouchers,
} from "../../controllers/Voucher/voucherController";
import { Link, Navigate } from "react-router-dom";
import { LoadingSkeleton } from "../../components/Utils/LoadingSkeleton";
import { fetchCampaigns } from "../../controllers/Campaign/campaignController";
import { isAuthenticated } from "../../utils/isAuthenticated";

interface IVoucherListModal {
		_id: string;
		code: string;
		redemption : [];
		active: boolean;
		name: string;
}

export const Vouchers = () => {
	// State that contains vouchers data.
	const [voucherList, setVoucherList] = useState<IVoucherListModal[]>([]);

	// State to manage the filter modal.
	const [showFilterModal, setShowFilterModal] = useState(false);

	// State to manage pagination
	const [currentPage, setCurrentPage] = useState(0);

	// State to manage campaigns
	const [campaigns, setCampaigns] = useState([]);

	// Change page
	const paginate = (pageNumber: any) => {
		if (pageNumber < 0) return;

		setCurrentPage(pageNumber);

		fetchVouchersByPage(pageNumber).then((data: any) => {
			setVoucherList(data);
			console.log(data);
		});
	};

	// Fetch data with page params
	const fetchSearchResults = (query: any) => {
		if (query) {
			searchVouchers(query).then((data: any) => {
				setVoucherList(data);
			});
		} else {
			fetchVouchersByPage(currentPage).then((data: any) => {
				setVoucherList(data);
			});
		}
	};

	const handleChange = (e: any) => {
		setCurrentPage(0);
		fetchSearchResults(e);
	};

	useEffect(() => {
		fetchVouchersByPage(currentPage).then((data: any) => {
			setVoucherList(data);
		});
	}, []);

	if (!isAuthenticated()) {
		return <Navigate to="/login" />;
	} else {
		if (voucherList.length <= 0) {
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
			<Layout title="Vouchers">
				{/* GENERATE MODAL */}
				<div className="md:mr-20 md:ml-20 md:mb-4 mb:mt-4 sm:mr-5 sm:ml-5 sm:mb-2 sm:mt-2">
					<div
						id="alert-border-1"
						className="flex p-4 mb-4 text-blue-800 border-t-4 border-blue-300 bg-blue-50 dark:text-blue-400 dark:bg-gray-800 dark:border-blue-800"
						role="alert"
					>
						<svg
							className="flex-shrink-0 w-5 h-5"
							fill="currentColor"
							viewBox="0 0 20 20"
							xmlns="http://www.w3.org/2000/svg"
						>
							<path
								fillRule="evenodd"
								d="M18 10a8 8 0 11-16 0 8 8 0 0116 0zm-7-4a1 1 0 11-2 0 1 1 0 012 0zM9 9a1 1 0 000 2v3a1 1 0 001 1h1a1 1 0 100-2v-3a1 1 0 00-1-1H9z"
								clipRule="evenodd"
							></path>
						</svg>
						<div className="ml-3 text-sm font-medium">
							To create new vouchers, please go to{" "}
							<Link
								to="/campaigns"
								className="font-semibold underline hover:no-underline"
							>
								Campaigns
							</Link>{" "}
							and create a new one. Then, go to the campaign and click on
							Generate Vouchers inside of the Vouchers tab.
						</div>
						<button
							type="button"
							className="ml-auto -mx-1.5 -my-1.5 bg-blue-50 text-blue-500 rounded-lg focus:ring-2 focus:ring-blue-400 p-1.5 hover:bg-blue-200 inline-flex h-8 w-8 dark:bg-gray-800 dark:text-blue-400 dark:hover:bg-gray-700"
							data-dismiss-target="#alert-border-1"
							aria-label="Close"
							onClick={() => {
								document
									.getElementById("alert-border-1")
									?.classList.add("hidden");
							}}
						>
							<span className="sr-only">Dismiss</span>
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
						</button>
					</div>

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
								placeholder="Search for voucher codes"
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
									const search = (
										document.getElementById(
											"default-search"
										) as HTMLInputElement
									).value;
									handleChange(search);
								}}
							>
								Search
							</button>
						</div>
					</form>
				</div>

				<VoucherList data={voucherList}></VoucherList>

				{/* A pagination system made with tailwindcss */}
				<div className="flex justify-center mb-10">
					<div className="flex rounded-md mt-4">
						<a
							href="#"
							className="relative inline-flex items-center px-2 py-2 rounded-l-md border border-gray-300 bg-white text-sm font-medium text-gray-700 hover:bg-gray-50"
							onClick={() => {
								paginate(currentPage - 1);
								console.log(voucherList);
							}}
						>
							<span className="sr-only">Previous</span>

							<svg
								className="h-5 w-5"
								xmlns="http://www.w3.org/2000/svg"
								viewBox="0 0 20 20"
								fill="currentColor"
							>
								<path
									fillRule="evenodd"
									d="M10.707 3.293a1 1 0 010 1.414L6.414
                                9H17a1 1 0 110 2H6.414l4.293 4.293a1 1
                                0 01-1.414 1.414l-6-6a1 1 0 010-1.414l6-6a1
                                1 0 011.414 0z"
									clipRule="evenodd"
								/>
							</svg>
						</a>
						<a
							href="#"
							className="relative inline-flex items-center px-4 py-2 border border-gray-300 bg-white text-sm font-medium text-gray-700 hover:bg-gray-50"
						>
							{currentPage}
						</a>
						<a
							href="#"
							className="relative inline-flex items-center px-2 py-2 rounded-r-md border border-gray-300 bg-white text-sm font-medium text-gray-700 hover:bg-gray-50"
							onClick={() => {
								paginate(currentPage + 1);
							}}
						>
							<span className="sr-only">Next</span>

							<svg
								className="h-5 w-5"
								xmlns="http://www.w3.org/2000/svg"
								viewBox="0 0 20 20"
								fill="currentColor"
							>
								<path
									fillRule="evenodd"
									d="M9.293 16.707a1 1 0 010-1.414L13.586
                                11H3a1 1 0 110-2h10.586l-4.293-4.293a1 1
                                0 011.414-1.414l6 6a1 1 0 010
                                1.414l-6 6a1 1 0 01-1.414 0z"
									clipRule="evenodd"
								/>
							</svg>
						</a>
					</div>
				</div>
			</Layout>
		);
	}
};

export default Vouchers;
