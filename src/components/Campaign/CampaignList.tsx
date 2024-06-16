import CampaignCard from "./CampaignCard";

const CampaignList = ({ data }: any) => {
	return (
		<div className="md:mr-20 md:ml-20">
			<div className="drop-shadow-xl">
				{data instanceof Array ? (
					data.map((campaign: any, key: any) => {
						return <CampaignCard campaign={campaign} key={key} />;
					})
				) : (
					<p>No campaigns found.</p>
				)}
			</div>
		</div>
	);
};

export default CampaignList;
