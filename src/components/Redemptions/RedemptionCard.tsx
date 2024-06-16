import { Link } from "react-router-dom";

const RedemptionCard = ({ redemption }: any) => {
	
	return (
		<tr className="bg-white border-b dark:bg-gray-800 dark:border-gray-700 hover:bg-gray-50 dark:hover:bg-gray-600">
			<td className="w-4 p-4">
				<div className="flex items-center">
					<input
						id="checkbox-table-search-1"
						type="checkbox"
						className="w-4 h-4 text-blue-600 bg-gray-100 border-gray-300 rounded focus:ring-blue-500 dark:focus:ring-blue-600 dark:ring-offset-gray-800 dark:focus:ring-offset-gray-800 focus:ring-2 dark:bg-gray-700 dark:border-gray-600"
					/>
					<label htmlFor="checkbox-table-search-1" className="sr-only">
						checkbox
					</label>
				</div>
			</td>
			<td className="px-6 py-4">
				{redemption.result == "SUCCESS" ? (
					<svg
						fill="none"
						stroke="currentColor"
						strokeWidth="1.5"
						viewBox="0 0 24 24"
						xmlns="http://www.w3.org/2000/svg"
						aria-hidden="true"
						className="w-5 h-5 text-green-500"
					>
						<path
							strokeLinecap="round"
							strokeLinejoin="round"
							d="M9 12.75L11.25 15 15 9.75M21 12c0 1.268-.63 2.39-1.593 3.068a3.745 3.745 0 01-1.043 3.296 3.745 3.745 0 01-3.296 1.043A3.745 3.745 0 0112 21c-1.268 0-2.39-.63-3.068-1.593a3.746 3.746 0 01-3.296-1.043 3.745 3.745 0 01-1.043-3.296A3.745 3.745 0 013 12c0-1.268.63-2.39 1.593-3.068a3.745 3.745 0 011.043-3.296 3.746 3.746 0 013.296-1.043A3.746 3.746 0 0112 3c1.268 0 2.39.63 3.068 1.593a3.746 3.746 0 013.296 1.043 3.746 3.746 0 011.043 3.296A3.745 3.745 0 0121 12z"
						></path>
					</svg>
				) : (
					<svg
						fill="none"
						stroke="currentColor"
						strokeWidth="1.5"
						viewBox="0 0 24 24"
						xmlns="http://www.w3.org/2000/svg"
						aria-hidden="true"
						className="w-5 h-5 text-red-500"
					>
						<path
							strokeLinecap="round"
							strokeLinejoin="round"
							d="M12 9v3.75m9-.75a9 9 0 11-18 0 9 9 0 0118 0zm-9 3.75h.008v.008H12v-.008z"
						></path>
					</svg>
				)}
			</td>
			<td	className="px-6 py-4">			
				<Link
					className="text-blue-400"
					to={`/redemptions/` + redemption._id}
				>
					{redemption._id}
				</Link>
			</td>
			<td className="px-6 py-4">
				<Link
					className="text-blue-400"
					to={`/vouchers/` + redemption.voucher_id}
				>
					{redemption.voucher_id}	
				</Link>
			</td>
			<td className="px-6 py-4">
				<Link
					className="text-blue-400"
					to={`/customers/` + redemption.customer_id}
				>
					{redemption.customer_id}
				</Link>
			</td>
			<td className="px-6 py-4">
				{new Date(redemption.date)
					.toISOString()
					.replace(/T/, " ")
					.replace(/\..+/, "")}
			</td>
			<td className="px-6 py-4">{redemption.result}</td>
		</tr>
	);
};

export default RedemptionCard;
