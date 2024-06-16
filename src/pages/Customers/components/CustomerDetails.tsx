import React , {useEffect, useState} from "react";
import { ICustomer } from "../../../Models/Customer/Customer";

interface IProps {
    customer: ICustomer;
}

export const CustomerDetails : React.FC<IProps> = (props : IProps) => {

    const [customer , setCustomer] = useState(props.customer);
    // show the customer object in the console
    useEffect(() => {
        setCustomer(props.customer);
    }, [props]);
    return (
        <div className="grid grid-cols-1 md:grid-cols-1 gap-4 grid-flow-row m-4">
					<div className="bg-white dark:bg-gray-800 overflow-hidden shadow rounded-lg">
						<div className="px-4 py-5 sm:p-6">
							<h3 className="text-xl font-semibold text-gray-900 dark:text-gray-100">
								Customer Details
							</h3>
							<p className="mt-1 max-w-2xl text-sm text-gray-500 dark:text-gray-400">
								Information about the cuustomer.
							</p>
							<div className="mt-5 border-t border-gray-200 dark:border-gray-700">
								<dl className="mt-5 grid grid-cols-1 gap-x-4 gap-y-8 sm:grid-cols-2">
									<div className="sm:col-span-1">
										<dt className="text-sm font-medium text-gray-500 dark:text-gray-400">
											Name
										</dt>
										<dd className="mt-1 text-sm  text-gray-900 dark:text-gray-100">
											{customer?.name ? customer.name : "No name provided."}
										</dd>
									</div>
									<div className="sm:col-span-1">
										<dt className="text-sm font-medium text-gray-500 dark:text-gray-400">
											Email
										</dt>
										<dd className="mt-1 text-sm text-gray-900 dark:text-gray-100">
											{customer?.email ? customer.email : "No email provided."}
										</dd>
									</div>
									<div className="sm:col-span-1">
										<dt className="text-sm font-medium text-gray-500 dark:text-gray-400">
											Phone
										</dt>
										<dd className="mt-1 text-sm text-gray-900 dark:text-gray-100">
											{customer?.phone ? customer.phone : "No phone provided."}
										</dd>
									</div>
									<div className="sm:col-span-1">
										<dt className="text-sm font-medium text-gray-500 dark:text-gray-400">
											Created At
										</dt>
									 	<dd className="mt-1 text-sm text-gray-900 dark:text-gray-100">
											{customer?.created_at
												? new Date(customer.created_at)
												.toISOString()
												.replace(/T/, " ")
												.replace(/\..+/, "")
                                            : "No created at provided."}
										</dd>
									</div>
									<div className="sm:col-span-1">
										<dt className="text-sm font-medium text-gray-500 dark:text-gray-400">
											Loyalty Point
										</dt>
										<dd className="mt-1 text-sm text-gray-900 dark:text-gray-100">
											{customer?.loyalty ? customer.loyalty : "0"}
										</dd>
									</div>
									<div className="sm:col-span-1">
										<dt className="text-sm font-medium text-gray-500 dark:text-gray-400">
											Customer ID
										</dt>
										<dd className="mt-1 text-sm text-gray-900 dark:text-gray-100">
											{customer?._id ? customer?._id : "No ID provided." }
										</dd>
									</div>
									<div className="sm:col-span-1"></div>
								</dl>
							</div>
						</div>
					</div>
				</div>
    ) ;
};
