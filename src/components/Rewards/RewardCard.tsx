import { Link } from "react-router-dom";

const RewardCard = ({ reward }: any) => {
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
			<th
				scope="row"
				className="px-6 py-4 font-medium text-gray-900 whitespace-nowrap dark:text-white"
			>
				<Link to={`/rewards/` + reward._id}>{reward.name}</Link>
			</th>
			<td className="px-6 py-4">{reward.type}</td>
			<td className="px-6 py-4">
				{new Date(reward.created_at)
					.toISOString()
					.replace(/T/, " ") // replace T with a space
					.replace(/\..+/, "")}
			</td>
			<td className="px-6 py-4 flex gap-4">
				<Link
					to={`/rewards/` + reward._id}
					className="font-medium text-gray-600 dark:text-gray-500 hover:underline"
				>
					Details
				</Link>
			</td>
		</tr>
	);
};

export default RewardCard;
