import RedemptionsTable from "../Voucher/RedemptionsTable";
import RedemptionCard from "./RedemptionCard";

const RedemptionList = ({ data }: any) => {
	return (
		<div className="md:mr-20 md:ml-20">
			<div className="relative overflow-x-auto shadow-md sm:rounded-lg">
				<table className="w-full text-sm text-left text-gray-500 dark:text-gray-400">
					<thead className="text-xs text-gray-700 uppercase bg-gray-50 dark:bg-gray-700 dark:text-gray-400">
						<tr>
							<th scope="col" className="p-4">
								<div className="flex items-center">
									<input
										id="checkbox-all-search"
										type="checkbox"
										className="w-4 h-4 text-blue-600 bg-gray-100 border-gray-300 rounded focus:ring-blue-500 dark:focus:ring-blue-600 dark:ring-offset-gray-800 dark:focus:ring-offset-gray-800 focus:ring-2 dark:bg-gray-700 dark:border-gray-600"
									/>
									<label htmlFor="checkbox-all-search" className="sr-only">
										checkbox
									</label>
								</div>
							</th>
							<th scope="col" className="px-6 py-3">
								{" "}
							</th>
							<th scope="col" className="px-6 py-3">
								Redemption ID
							</th>
							<th scope="col" className="px-6 py-3">
								Voucher ID
							</th>
							<th scope="col" className="px-6 py-3">
								Customer ID
							</th>
							<th scope="col" className="px-6 py-3">
								Redemption Date
							</th>
							<th scope="col" className="px-6 py-3">
								Status
							</th>
						</tr>
					</thead>
					<tbody>
						{data.slice(5).reverse().map((redemption: any) => {
							return (
								<RedemptionCard redemption={redemption} key={redemption._id}/>
							);
						})}
					</tbody>
				</table>
			</div>
		</div>
	);
};

export default RedemptionList;
