import React, { useEffect, useState } from "react";
import Layout from "../../components/Layout";
import { useParams, Link, Navigate } from "react-router-dom";
import {
	fetchVoucher,
	toggleActiveVoucher,
	sendMail,
} from "../../controllers/Voucher/voucherController";
import { fetchCampaign } from "../../controllers/Campaign/campaignController";
import { isAuthenticated } from "../../utils/isAuthenticated";
import RedeemModal from "../../components/Voucher/RedeemModal";
import RedemptionsTable from "../../components/Voucher/RedemptionsTable";
import { IVoucher } from "../../Models/Voucher/Voucher";
import { IDiscountVoucher } from "../../Models/Voucher/DiscountVoucher";
import { IGiftVoucher } from "../../Models/Voucher/GiftVoucher";
import { VoucherDetails } from "./components/VoucherDetails";
import { SendVoucherByEmail } from "./components/SendVoucherByEmail"
import { Tabs } from "../../components/Tabs/Tabs";
import { RedemptionsFromVoucher } from "./components/RedemptionsFromVoucher";

export const Voucher = () => {

	const tabs = [
		"Voucher",
		"Send by email",
		"Redemptions",
		];
	
	const [currentTab, setCurrentTab] = useState<string>("Voucher");
	const [voucher, setVoucher]: any  = useState<IVoucher>();
	const { code } = useParams();

	useEffect(() => { 
		fetchVoucher( code as string).then((voucher: IVoucher | IDiscountVoucher | IGiftVoucher) => {
			setVoucher(voucher);
		});
	},[]
	);

	if (!isAuthenticated()) {
		return <Navigate to="/login" />;
	} else {
		return (
			<Layout title="Vouchers">
				<div className="bg-blue-100 w-full p-5 mb-4">
					<p className="text-2xl text-bl-500 font-semibold">
						<Link
							to="/vouchers"
							className="text-blue-700 border border-blue-700 hover:bg-blue-700 hover:text-white focus:ring-4 focus:outline-none focus:ring-blue-300 font-medium rounded-full text-sm p-2.5 text-center inline-flex items-center dark:border-blue-500 dark:text-blue-500 dark:hover:text-white dark:focus:ring-blue-800 dark:hover:bg-blue-500"
						>
							<svg
								fill="none"
								stroke="currentColor"
								strokeWidth="1.5"
								viewBox="0 0 24 24"
								className="w-4 h-4"
								xmlns="http://www.w3.org/2000/svg"
								aria-hidden="true"
							>
								<path
									strokeLinecap="round"
									strokeLinejoin="round"
									d="M6.75 15.75L3 12m0 0l3.75-3.75M3 12h18"
								></path>
							</svg>
							<span className="sr-only">Icon description</span>
						</Link>{" "}
						{code}
					</p>
				</div>				
				<Tabs
				 	tabs={tabs}
				 	currentTab={currentTab}
				 	setCurrent={setCurrentTab}
			 	/>
				{currentTab ===  "Voucher" ? <VoucherDetails voucher={voucher} /> : null}
				{currentTab === "Send by email" ? <SendVoucherByEmail voucher={voucher} /> : null}
				{currentTab === "Redemptions" ? <RedemptionsFromVoucher voucher={voucher} /> : null}
			</Layout>
		);
	}
};

export default Voucher;
