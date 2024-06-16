import axios from "axios";

const API_URL = import.meta.env.VITE_API_URL;

export const fetchRewards = async () => {
	return new Promise(async (resolve, reject) => {
		const res = await axios.get(`${API_URL}/api/rewards`);
		resolve(res.data);
	});
};

export const fetchReward = async (id: any) => {
	return new Promise(async (resolve, reject) => {
		const res = await axios.get(`${API_URL}/api/rewards/${id}`);
		resolve(res.data);
	});
};

export const searchRewards = async (query: any) => {
	return new Promise(async (resolve, reject) => {
		const res = await axios.get(`${API_URL}/api/rewards/search?query=${query}`);
		resolve(res.data);
	});
};

export const removeReward = async (id: any) => {
	return new Promise(async (resolve, reject) => {
		const res = await axios.delete(`${API_URL}/api/rewards/${id}`);
		resolve(res.data);
	});
};
