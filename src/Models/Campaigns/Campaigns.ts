export interface ICampaign {
  _id?: string;
  name?: string;
  object?: string;
  type?: "STATIC" | "AUTO_UPDATE";
  description?: string | null;
  active?: boolean;
  vouchers? : string[];
  voucher_count?: number;
  creation_date?: Date;
  end_date?: Date;
  validation_rules_assignments?: null;
  vouchers_generation_status?: null;
  metadata?: Record<string, unknown>;
}