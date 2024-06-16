import { useState } from "react";
import { redeemHandler } from "../../controllers/Voucher/voucherController";

const RedeemModal = ({ code }: any) => {
	const [redeemed, setRedeemed] = useState<boolean | string | null>(null);
	const [error, setError] = useState<boolean | string | null>(null);

	const [showModal, setShowModal] = useState(false);

	return (
		<>
			<button
				onClick={() => {
					setShowModal(true);
				}}
				className="text-white bg-gradient-to-r from-blue-500 via-blue-600 to-blue-700 hover:bg-gradient-to-br focus:ring-4 focus:outline-none focus:ring-blue-300 dark:focus:ring-blue-800 shadow-lg shadow-blue-500/50 dark:shadow-lg dark:shadow-blue-800/80 font-medium rounded-lg text-sm px-5 py-2.5 text-center mr-2 mb-2"
				type="button"
			>
				Redeem
			</button>

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
									setRedeemed(false);
									setError(false);
									setShowModal(false);
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
								<img
									className="m-auto"
									src={
										"https://api.qrserver.com/v1/create-qr-code/?size=150x150&data=" +
										code
									}
									alt=""
								/>

								<form
									method="POST"
									onSubmit={(event) =>
										redeemHandler(event, code)?.then((data: any) => {
											if (data["status"]) {
												setRedeemed(true);
												setError(false);
												(
													document.getElementById(
														"customerID"
													) as HTMLInputElement
												)?.value === "";
											}
											if (data["status"] === false) {
												setError(true);
												setRedeemed(false);
											}
										})
									}
								>
									<label
										htmlFor="email-address-icon"
										className="block mt-2 mb-2 text-center text-sm text-gray-900 dark:text-white"
									>
										Type the ID of the Customer you want to reedem this voucher.{" "}
										<i>
											(Costumers ➡️ Customer Name ➡️ Blue top bar or 'Customer
											ID')
										</i>
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
											id="customerID"
											className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full pl-10 p-2.5  dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500"
											placeholder="892r892kdjakaksj"
											required
										/>
									</div>
									<button
										className="mt-4 w-full text-white bg-gradient-to-r from-blue-500 via-blue-600 to-blue-700 hover:bg-gradient-to-br focus:ring-4 focus:outline-none focus:ring-blue-300 dark:focus:ring-blue-800 shadow-lg shadow-blue-500/50 dark:shadow-lg dark:shadow-blue-800/80 font-medium rounded-lg text-sm px-5 py-2.5 text-center mr-2 mb-2"
										type="submit"
									>
										Redeem
									</button>
									{redeemed && (
										<p className="text-green-500">
											Voucher Redeemed Successfully
										</p>
									)}
									{error && (
										<p className="text-red-500">
											Error! Maybe the voucher is already redeemed or the ID is
											wrong.
										</p>
									)}
								</form>
							</div>
						</div>
					</div>
					<div className="opacity-25 fixed inset-0 z-0 bg-black"></div>
				</div>
			)}
		</>
	);
};

export default RedeemModal;
