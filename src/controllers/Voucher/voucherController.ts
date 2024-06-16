import axios from "axios";
import { IVoucher } from "../../Models/Voucher/Voucher";
import { IDiscountVoucher } from "../../Models/Voucher/DiscountVoucher";
import { IGiftVoucher } from "../../Models/Voucher/GiftVoucher";

const API_URL = import.meta.env.VITE_API_URL;
const MAILER_URL = import.meta.env.VITE_MAILER_URL;

type VoucherType = IVoucher | IDiscountVoucher | IGiftVoucher;
// Get a voucher by his code.
export const fetchVoucher = async (code: string ) : Promise< VoucherType > => {
	return new Promise<VoucherType>(async (resolve, reject) => {
		const res = await axios.get(`${API_URL}/api/vouchers/${code}`);
		console.log(res.data[0]);
		resolve(res.data[0]);
	});
};

export const sendMail = async (voucher_id: any, mail: any) => {
	return new Promise(async (resolve, reject) => {
		const res = await axios.post(`${MAILER_URL}/sendMail`, {
			voucher_id: voucher_id,
			mail: mail,
		});
		resolve(res.data);
	});
};

// Get all vouchers.
export const fetchVouchers = async () => {
	return new Promise(async (resolve, reject) => {
		const res = await axios.get(`${API_URL}/api/vouchers`);
		resolve(res.data);
	});
};

// Get all vouchers by page number.
export const fetchVouchersByPage = async (page: any) => {
	return new Promise(async (resolve, reject) => {
		const res = await axios.get(`${API_URL}/api/vouchers/page/${page}`);
		resolve(res.data);
	});
};

// Function to handle the form submit.
// export const searchVouchers = async (
// 	code?: string,
// 	active?: boolean,
// 	campaignId?: string
// ) => {
// 	if (code || active || campaignId) {
// 		return new Promise(async (resolve, reject) => {
// 			// Crear la URL base para la solicitud
// 			let url = "/api/vouchers/search";

// 			// Agregar los parámetros de búsqueda a la URL, si existen
// 			const queryParams: any = {};

// 			if (code !== null || code !== undefined) {
// 				queryParams.code = code;
// 			}

// 			if (active !== null || active !== undefined) {
// 				queryParams.active = active;
// 			}

// 			if (campaignId !== null || campaignId !== undefined) {
// 				queryParams.campaignId = campaignId;
// 			}

// 			const queryString = Object.entries(queryParams)
// 				.map(
// 					([key, value]: any) =>
// 						`${encodeURIComponent(key)}=${encodeURIComponent(value)}`
// 				)
// 				.join("&");

// 			if (queryString) {
// 				url += `?${queryString}`;
// 			}

// 			const res = await axios.get(`${API_URL}${url}`);
// 			resolve(res.data);
// 			console.log(url);
// 			console.log(res.data);
// 		});
// 	} else {
// 		fetchVouchers();
// 	}
// };

// Function to handle the form submit.
export const searchVouchers = async (query: any) => {
	if (query) {
		return new Promise(async (resolve, reject) => {
			const res = await axios.get(`${API_URL}/api/vouchers/search/${query}`);
			resolve(res.data);
		});
	} else {
		fetchVouchers();
	}
};

// Function to delete a voucher.
export const removeVoucher = async (id: any) => {
	try {
		const response = await fetch(`${API_URL}/api/vouchers/${id}`, {
			method: "DELETE",
			headers: {
				"Content-Type": "application/json",
			},
		});
		if (response.ok) {
			window.location.href = "/vouchers";
		}
	} catch (error) {
		console.error(error);
	}
};

// Function to handle the form submit.
export const redeemHandler = (event: any, code: any) => {
	event.preventDefault();
	const customerID = (document.getElementById("customerID") as HTMLInputElement)
		?.value;

	if (customerID !== "" || customerID !== undefined || customerID !== null) {
		return new Promise(async (resolve, reject) => {
			const res = await axios.post(`${API_URL}/api/vouchers/redeem`, {
				voucherCode: code,
				customerId: customerID,
			});
			resolve(res.data);
			console.log(res.data);
		});
	} else {
		alert("Please enter a valid customer ID");
	}
};

// Enable and disable voucher status.
export const toggleActiveVoucher = async (id: any, active: boolean) => {
	return new Promise(async (resolve, reject) => {
		const res = await axios.put(`${API_URL}/api/vouchers/toggle/${id}`, {
			active: active,
		});
		resolve(res.data);
		console.log(res.data);
	});
};

export const toggleValue = async (data: any, checked: any) => {
	try {
		await fetch(`${API_URL}/api/vouchers/toggle/${data["id"]}`, {
			method: "PUT",
			headers: {
				"Content-Type": "application/json",
			},
			body: JSON.stringify({ active: !checked }),
		});
	} catch (error) {
		console.error(error);
	}
};
