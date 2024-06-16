import { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import { fetchReward } from "../../../controllers/Reward/rewardController";

interface IProps {
    data : any;
}

export const RewardDetails : React.FC<IProps> = (props : any) => {

    const [data, setData]: any = useState([]);
    const { id } = useParams();
    
    useEffect(() => {
		fetchReward(id).then((data: any) => {
			setData(data);
		});
	}, []);
    
    return (
		<div className="grid grid-cols-1 md:grid-cols-1 gap-4 grid-flow-row m-4">
			<div className="bg-white dark:bg-gray-800 overflow-hidden shadow rounded-lg">
				<div className="px-4 py-5 sm:p-6">
					<h3 className="text-xl font-semibold text-gray-900 dark:text-gray-100">
						Reward Details
					</h3>
					<p className="mt-1 max-w-2xl text-sm text-gray-500 dark:text-gray-400">
						Information about the reward.
					</p>
					<div className="mt-5 border-t border-gray-200 dark:border-gray-700">
						<dl className="mt-5 grid grid-cols-1 gap-x-4 gap-y-8 sm:grid-cols-2">
							<div className="sm:col-span-1">
								<dt className="text-sm font-medium text-gray-500 dark:text-gray-400">
									Name
								</dt>
								<dd className="mt-1 text-sm  text-gray-900 dark:text-gray-100">
									{data.name ? data.name : "No name provided."}
								</dd>
							</div>
								<div className="sm:col-span-1">
								<dt className="text-sm font-medium text-gray-500 dark:text-gray-400">
									Type
								</dt>
								<dd className="mt-1 text-sm text-gray-900 dark:text-gray-100">
									{data.type ? data.type : "No type provided."}
								</dd>
							</div>
								<div className="sm:col-span-1">
								<dt className="text-sm font-medium text-gray-500 dark:text-gray-400">
									Stock
								</dt>
								<dd className="mt-1 text-sm text-gray-900 dark:text-gray-100">
									{data.stock ? data.stock : "No stock provided."}
								</dd>
							</div>
								<div className="sm:col-span-1">
								<dt className="text-sm font-medium text-gray-500 dark:text-gray-400">
									Created At
								</dt>
								<dd className="mt-1 text-sm text-gray-900 dark:text-gray-100">
									{data.created_at
										? new Date(data.created_at)
										.toISOString()
										.replace(/T/, " ")
										.replace(/\..+/, "")
										: "No created at provided."}
								</dd>
							</div>
								<div className="sm:col-span-1">
								<dt className="text-sm font-medium text-gray-500 dark:text-gray-400">
									Parameters
								</dt>
								<dd className="mt-1 text-sm text-gray-900 dark:text-gray-100">
									<p>Sku: {data.parameters ? data.parameters.sku : "0"}</p>
									<p>Amount: {data.parameters ? data.parameters.amount : "0"}</p>
								</dd>
							</div>
								<div className="sm:col-span-1">
								<dt className="text-sm font-medium text-gray-500 dark:text-gray-400">
									Reward ID
								</dt>
								<dd className="mt-1 text-sm text-gray-900 dark:text-gray-100">
									{id ? id : "No ID provided."}
								</dd>
							</div>
                                  
							<div className="sm:col-span-1"></div>
						</dl>
					</div>
				</div>
			</div>
		</div>
    )
}