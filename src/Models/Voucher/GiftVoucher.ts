import { IVoucher } from "./Voucher";

export interface IGiftVoucher extends IVoucher {
    currency : string;
    balance : number;
}