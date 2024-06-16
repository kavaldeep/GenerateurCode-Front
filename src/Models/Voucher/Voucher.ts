import { IRedemption } from "../Redemption";

export interface IVoucher  {
  _id: string ;
  code: string;
  campaignId: string ;
  category: string;
  type: "DISCOUNT" | "GIFT" | "LOYALTY";
  amount: number;
  start_date: Date;
  expiration_date: Date  ;
  redemption:  IRedemption[]  ;
  redemptionLimit: number;
  publish_id: [string] | [];
  active: boolean;
  additional_info: string | null;
  metadata: Record<string, unknown>;
  assets: {
    qr: {
      id: string;
      url: string;
    };
  };
  version: 0.2;
} 