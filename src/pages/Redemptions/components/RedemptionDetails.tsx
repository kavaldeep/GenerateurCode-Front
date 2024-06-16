import { useState } from "react";
import { IRedemption } from "../../../Models/Redemption";

interface IProps {
  redemption: IRedemption;
}

export const RedemptionDetails: React.FC<IProps> = (props: IProps) => {
  const [redemption, setRedemption] = useState<IRedemption>();

  return (
    <div className="grid grid-cols-1 md:grid-cols-1 gap-4 grid-flow-row m-4">
      <div className="p-5 bg-white">
        <h2 className="text-xl font-semibold">Redemption details</h2>
        <div className="grid grid-cols-2 gap-4 grid-flow-row m-4">
          <p>Redemption ID</p>
          <p>{redemption?._id ? redemption._id : "No data to show."}</p>
        </div>
        <hr />

        <div className="grid grid-cols-2 gap-4 grid-flow-row m-4">
          <p>Discount type</p>
          <p>{redemption?.type ? redemption.type : "No data to show."}</p>
        </div>

        <hr />
        <div className="grid grid-cols-2 gap-4 grid-flow-row m-4">
          <p>Reward ID</p>
          <p>{redemption?.reward_id}</p>
        </div>

        <hr />
        <div className="grid grid-cols-2 gap-4 grid-flow-row m-4">
          <p>Amount</p>
          <p>{redemption?.gift.amount}</p>
        </div>

        <hr />
        <div className="grid grid-cols-2 gap-4 grid-flow-row m-4">
          <p>Result</p>
          <p>{redemption?.result ? "SUCCESS" : "FAILED"}</p>
        </div>
      </div>
    </div>
  );
};
