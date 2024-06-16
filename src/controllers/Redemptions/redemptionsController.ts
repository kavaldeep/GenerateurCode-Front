import axios from "axios";

const API_URL = import.meta.env.VITE_API_URL;

export const fetchRedemptions = async () => {
	return new Promise(async (resolve, reject) => {
		const res = await axios.get(`${API_URL}/api/redemptions`);
		resolve(res.data);
	});
};

export const fetchRedemption = async (id: any) => {
	return new Promise(async (resolve, reject) => {
		const res = await axios.get(`${API_URL}/api/redemptions/${id}`);
		resolve(res.data);
	});
};

export const searchRedemptions = async (query: any) => {
	return new Promise(async (resolve, reject) => {
		const res = await axios.get(
			`${API_URL}/api/redemptions/search?query=${query}`
		);
		console.log(res.data);

		resolve(res.data);
	});
};
	

export const fetchCustomerSummary = async (id: any) => {
	return new Promise(async (resolve, reject) => {
		const res = await axios.get(`${API_URL}/api/customers/summary/${id}`);
		resolve(res.data);
	});
};

export const removeCustomer = async (id: any) => {
	return new Promise(async (resolve, reject) => {
		const res = await axios.delete(`${API_URL}/api/customers/${id}`);
		resolve(res.data);
	});
};

// Function to handle the form submit.
export const createHandler = (event: any) => {
	event.preventDefault();

	const source_id = (document.getElementById("source_id") as HTMLInputElement)
		?.value;

	const name = (
		document.getElementById("name") as HTMLInputElement
	)?.value.trim();

	const email = (
		document.getElementById("email") as HTMLInputElement
	)?.value.trim();

	const phone = (
		document.getElementById("phone") as HTMLInputElement
	)?.value.trim();

	const isRequired = (value: String) => (value === "" ? false : true);

	if (
		isRequired(source_id) &&
		isRequired(name) &&
		isRequired(email) &&
		isRequired(phone)
	) {
		return new Promise(async (resolve, reject) => {
			const res = await axios.post(`${API_URL}/api/customers/addCustomer`, {
				source_id: source_id,
				name: name,
				email: email,
				phone: phone,
			});
			resolve(res.data);
			console.log(res.data);
			window.location.reload();
		});
	} else {
		alert("Please fill all the fields and try again.");
	}
};

