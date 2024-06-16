import { IVoucher } from "./Voucher";

export interface IDiscountVoucher extends IVoucher {
    currency : string;
    discountType : "PERCENTAGE" | "FIXED_AMOUNT";
    maxAmount : number;
    minAmount : number;
}

 