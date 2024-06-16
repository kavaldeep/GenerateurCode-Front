import React from "react";
import { IVoucher } from "../../../Models/Voucher/Voucher";

interface IProps {
    setShowModal(bool: boolean): void;
    setError(bool: boolean): void;
    setCreated(bool: boolean): void;
    vouchers : IVoucher[];
    paginate(pageNumber: number): void;
    currentPage: number;
}

export const CampaignVouchers: React.FC<IProps> = ({setShowModal , setError , setCreated , vouchers , paginate , 
                                            currentPage                             
                                            } : IProps) => {


    return(
        <div
						id="vouchers"
						className="grid grid-cols-1 md:grid-cols-1 gap-4 grid-flow-row m-4"
					>
						<div>
							<button
								data-modal-target="generate-vouchers-modal"
								data-modal-toggle="generate-vouchers-modal"
								className="right-0 text-white bg-gradient-to-r from-blue-500 via-blue-600 to-blue-700 hover:bg-gradient-to-br focus:ring-4 focus:outline-none focus:ring-blue-300 dark:focus:ring-blue-800 shadow-lg shadow-blue-500/50 dark:shadow-lg dark:shadow-blue-800/80 font-medium rounded-lg text-sm px-5 py-2.5 text-center mr-2 mb-2"
								type="button"
								onClick={() => {
									setShowModal(true);
									setError(false);
									setCreated(false);
								}}
							>
								Generate Vouchers in Bulk
							</button>
						</div>
						{vouchers instanceof Array ? (
							<div className="bg-white p-5">
								<h2 className="text-xl font-semibold pb-5">Vouchers</h2>
								<div className="relative overflow-x-auto">
									<table className="w-full text-sm text-left text-gray-500 dark:text-gray-400">
										<thead className="text-xs text-gray-700 uppercase bg-gray-50 dark:bg-gray-700 dark:text-gray-400">
											<tr>
												<th scope="col" className="px-6 py-3">
													Voucher Code
												</th>
												<th scope="col" className="px-6 py-3">
													Discount
												</th>
												<th scope="col" className="px-6 py-3">
													Loyalty Points
												</th>
												<th scope="col" className="px-6 py-3">
													Category
												</th>
												<th scope="col" className="px-6 py-3">
													Start Date
												</th>
												<th scope="col" className="px-6 py-3">
													End Date
												</th>
												<th scope="col" className="px-6 py-3">
													Redeemed
												</th>
											</tr>
										</thead>
										<tbody>
											{vouchers
												.slice(0)
												.reverse()
												.map((voucher: any, key: any) => (
													<tr
														className="bg-white border-b dark:bg-gray-800 dark:border-gray-700"
														key={key}
													>
														<th
															scope="row"
															className=" px-6 py-4 font-medium text-gray-900 whitespace-nowrap dark:text-white"
														>
															<span className="bg-green-600 text-white text-sm font-medium mr-2 px-2.5 py-0.5 rounded-lg dark:bg-green-900 dark:text-green-300">
																{voucher.code}
															</span>
														</th>
														<td className="px-6 py-4">
															{voucher.discount ? voucher.discount : 0}
														</td>
														<td className="px-6 py-4">
															{voucher.loyalty_card ? voucher.loyalty_card : 0}
														</td>
														<td className="px-6 py-4">
															{voucher.category ? voucher.category : 0}
														</td>
														<td className="px-6 py-4">
															{voucher.start_date
																? new Date(
																		voucher.start_date
																  ).toLocaleDateString("en-US")
																: "No start date."}
														</td>
														<td className="px-6 py-4">
															{voucher.end_date
																? new Date(voucher.end_date).toLocaleDateString(
																		"en-US"
																  )
																: "No end date."}
														</td>
														<td className="px-6 py-4">
															{voucher["redemption"].length > 0 ? (
																<p>Redeemed</p>
															) : (
																<p>Not redeemed</p>
															)}
														</td>
													</tr>
												))}
										</tbody>
									</table>
								</div>
							</div>
						) : (
							<p className="text-center">No vouchers to show.</p>
						)}

						{/* A pagination system made with tailwindcss */}
						<div className="flex justify-center mb-10">
							<div className="flex rounded-md mt-4">
								<a
									href="#"
									className="relative inline-flex items-center px-2 py-2 rounded-l-md border border-gray-300 bg-white text-sm font-medium text-gray-700 hover:bg-gray-50"
									onClick={() => {
										paginate(currentPage - 1);
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
					</div>
    )
}