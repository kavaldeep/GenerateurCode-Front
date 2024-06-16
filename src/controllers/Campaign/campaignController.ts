import axios from "axios";

const API_URL = import.meta.env.VITE_API_URL;

// Get a single campaign.
export const fetchCampaign = async (id: any) => {
	return new Promise(async (resolve, reject) => {
		const res = await axios.get(`${API_URL}/api/campaigns/${id}`);
		console.log(res.data);
		resolve(res.data);
	});
};

// Get all campaigns.
export const fetchCampaigns = async () => {
	return new Promise(async (resolve, reject) => {
		const res = await axios.get(`${API_URL}/api/campaigns`);
		resolve(res.data);
	});
};

// Function to handle the form submit.
export const fetchSearchResults = async (query: any) => {
	if (query) {
		return new Promise(async (resolve, reject) => {
			const res = await axios.get(`${API_URL}/api/campaigns/search/${query}`);
			resolve(res.data);
		});
	} else {
		fetchCampaigns();
	}
};

// Fetch vouchers of a campaign
export const fetchVouchers = async (id: any, page: number) => {
	return new Promise(async (resolve, reject) => {
		const res = await axios.get(
			`${API_URL}/api/campaigns/${id}/vouchers/page/${page}`
		);
		resolve(res.data);
	});
};

// Enable and disable voucher status.
export const toggleActiveCampaign = async (id: any, active: boolean) => {
	return new Promise(async (resolve, reject) => {
		const res = await axios.put(`${API_URL}/api/campaigns/toggle/${id}`, {
			active: active,
		});
		resolve(res.data);
		console.log(res.data);
	});
};

// Function to handle the form submit.
export const createHandler = (event: any) => {
	event.preventDefault();
	const isRequired = (value: String) => (value === "" ? false : true);

	const campaignName = (
		document.getElementById("campaignName") as HTMLInputElement
	)?.value.trim();

	const campaignType = (
		document.getElementById("campaignType") as HTMLInputElement
	)?.value.trim();

	const campaignDescription = (
		document.getElementById("campaignDescription") as HTMLInputElement
	)?.value.trim();

	if (
		isRequired(campaignName) &&
		isRequired(campaignType) &&
		isRequired(campaignDescription)
	) {
		return new Promise(async (resolve, reject) => {
			const res = await axios.post(`${API_URL}/api/campaigns/`, {
				campaignName: campaignName,
				type: campaignType,
				description: campaignDescription,
			});
			resolve(res.data);
			console.log(res.data);
		});
	} else {
		alert("Please fill all the fields and try again.");
	}
};

// fetch stats from a campaign
export const fetchStats = async (campaignId: any) => {
	return new Promise(async (resolve, reject) => {
		const res = await axios.get(
			`${API_URL}/api/campaignsAnalytics/getAnalytics/${campaignId}`
		);
		resolve(res.data);
	});
};

export const generateVouchersInBulk = async (event: any, campaignId: any) => {
	event.preventDefault();

	const amount = (
		document.getElementById("amount") as HTMLInputElement
	)?.value.trim();

	const count = (
		document.getElementById("count") as HTMLInputElement
	)?.value.trim();

	const isRequired = (value: String) => (value === "" ? false : true);
	const isANumber = (value: String) => (isNaN(Number(value)) ? false : true);

	if (
		isRequired(campaignId) &&
		isRequired(amount) &&
		isRequired(count) &&
		isANumber(amount) &&
		isANumber(count)
	) {
		return new Promise(async (resolve, reject) => {
			const res = await axios.post(`${API_URL}/api/vouchers/addBulkVouchers`, {
				campaign_id: campaignId,
				amount: amount,
				count: count,
			});

			resolve(res.data);
			window.location.reload();
		});
	} else {
		alert("Please fill all the fields and try again.");
	}
};
