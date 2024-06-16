import { useState } from "react";
import { IVoucher } from "../../../Models/Voucher/Voucher"
import { sendMail } from "../../../controllers/Voucher/voucherController";

interface IProps {
	voucher : IVoucher;
}

export const SendVoucherByEmail : React.FC<IProps> = (props : IProps) => {
    const [voucher, setVoucher]: any  = useState<IVoucher>();

    /*function sendMailToCustomer(e: any) {
	    e.preventDefault();

		const email = (document.getElementById("customerEmail") as HTMLFormElement)
			.value;

		let message =
			"<span className='text-green-400'>Email sent successfully!</span>";

		if (email) {
			if (voucher["publish_id"].length == 0) {
				sendMail(voucher["_id"], email).then((data) => {
					(document.getElementById("sendEmailForm") as HTMLFormElement).reset();
					window.location.reload();
				});
			} else {
				message =
					"Error! Check the fields and check if the voucher is published.";
			}
		}

		(
			document.getElementById("email-status-message") as HTMLFormElement
		).innerHTML = message;
	}*/ 

	return (
		<div className="grid grid-cols-1 md:grid-cols-1 gap-4 grid-flow-row m-4">
			<div className="p-5 bg-white">
				<h2 className="text-xl font-semibold pb-5">
					Send this voucher via email
				</h2>
				<div className="relative overflow-x-auto">
					<form
						id="sendEmailForm"
						onSubmit={(e) => {
							//sendMailToCustomer(e);
						}}
					>
						<>
							<label
								htmlFor="input-group-1"
								className="block mb-2 text-sm font-medium text-gray-900 dark:text-white"
							>
								Customer email
							</label>
							<div className="relative mb-6">
								<div className="absolute inset-y-0 left-0 flex items-center pl-3 pointer-events-none">
									<svg
										aria-hidden="true"
										className="w-5 h-5 text-gray-500 dark:text-gray-400"
										fill="currentColor"
										viewBox="0 0 20 20"
										xmlns="http://www.w3.org/2000/svg"
									>
										<path d="M2.003 5.884L10 9.882l7.997-3.998A2 2 0 0016 4H4a2 2 0 00-1.997 1.884z" />
										<path d="M18 8.118l-8 4-8-4V14a2 2 0 002 2h12a2 2 0 002-2V8.118z" />
									</svg>
								</div>
								<input
									type="text"
									id="customerEmail"
									className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full pl-10 p-2.5  dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500"
									placeholder="mail@customer.com"
								/>
							</div>
							<button
								className=" text-white bg-gradient-to-r from-blue-500 via-blue-600 to-blue-700 hover:bg-gradient-to-br focus:ring-4 focus:outline-none focus:ring-blue-300 dark:focus:ring-blue-800 shadow-lg shadow-blue-500/50 dark:shadow-lg dark:shadow-blue-800/80 font-medium rounded-lg text-sm px-5 py-2.5 text-center "
								type="submit"
							>
								Send mail
							</button>
							<p className="mt-4" id="email-status-message"></p>
						</>
					</form>
				</div>
			</div>
		</div>
	)
}