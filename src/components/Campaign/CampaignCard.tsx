import { useEffect, useState } from "react";
import { Link } from "react-router-dom";
import {
	fetchVouchers,
	toggleActiveCampaign,
} from "../../controllers/Campaign/campaignController";

const CampaignCard = ({ campaign }: any) => {
	/*const [vouchers, setVouchers] = useState([]);*/
	const [checked, setChecked]: any = useState(false);

	useEffect(() => {
		/*fetchVouchers(campaign["_id"]).then((data: any) => {
			if (data) {
				setVouchers(data);
			}
		});*/

		setChecked(campaign["active"]);
	}, []);

	return (
		<div>
			<div className="grid grid-cols-1 md:grid-cols-3 md:gap-80 md:pb-10 place-content-center shadow-md p-4 bg-white content-center">
				<div>
					<p>
						<Link
							to={"/campaigns/" + campaign["_id"]}
							className="underline decoration-sky-500 text-sky-400/100 text-xl font-black"
						>
							{campaign["name"]}
						</Link>
					</p>

					<i className="mb-4">{campaign["description"]}</i>

					<p className="bg-yellow-100 text-yellow-800 text-sm font-medium mr-2 px-2.5 py-0.5 rounded dark:bg-yellow-900 dark:text-yellow-300">
						Type: {campaign["type"]}
					</p>
				</div>
				<div>
					<p>
						Vouchers: {campaign["voucher_count"]}
						{/*vouchers.length*/}
					</p>
					<p>Redemptions: -</p>
				</div>

				<div>
					<div className="relative inline-block w-10 mr-2 align-middle select-none transition duration-200 ease-in">
						<input
							type="checkbox"
							name="toggle"
							id="toggle"
							checked={checked}
							onChange={() => {
								toggleActiveCampaign(campaign["_id"], !checked).then((data) => {
									setChecked(!checked);
								});
							}}
							className="toggle-checkbox absolute block w-6 h-6 rounded-full bg-white border-4 appearance-none cursor-pointer"
						/>
						<label className="toggle-label block overflow-hidden h-6 rounded-full bg-gray-300 cursor-pointer"></label>
					</div>{" "}
					{checked ? "Active" : "Inactive"}
				</div>
			</div>

			<hr className="pb-5" />
		</div>
	);
};

export default CampaignCard;
