import { useState } from "react";
import RedemptionsTable from "../../../components/Voucher/RedemptionsTable";
import { IVoucher } from "../../../Models/Voucher/Voucher";

interface IProps {
  voucher: IVoucher;
}

export const RedemptionsFromVoucher: React.FC<IProps> = (props: IProps) => {
  const [voucher, setVoucher]: any = useState<IVoucher>(props.voucher);

  return (
    <div className="grid grid-cols-1 md:grid-cols-1 gap-4 grid-flow-row m-4">
      <div className="p-5 bg-white">
        <h2 className="text-xl font-semibold pb-5">Redemptions</h2>
        <div className="relative overflow-x-auto">
          <div className="w-full text-sm text-left text-gray-500 dark:text-gray-400">
            {<RedemptionsTable data={voucher}></RedemptionsTable>}
          </div>
        </div>
      </div>
    </div>
  );
};
