
export interface IRedemption {
	_id: string;
	voucher_id?: string;
	reward_id?: string;
	object: "redemption";
	type: "DISCOUNT" | "GIFT" | "LOYALTY" | "REWARD"; 
	date: Date;
	customer_id: string | null;
	tracking_id: string | null;
	gift: {
		amount: number;
	};
	order_id: string | null;
	metadata: Record<string, unknown>;
	result: "SUCCESS" | "FAILED";
	failure_reason: string | null;
	version: number | 0 ;
}
