import React, { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import RedeemModal from "../../../components/Voucher/RedeemModal";
import { fetchCampaign } from "../../../controllers/Campaign/campaignController";
import {
  fetchVoucher,
  toggleActiveVoucher,
} from "../../../controllers/Voucher/voucherController";
import { IDiscountVoucher } from "../../../Models/Voucher/DiscountVoucher";
import { IGiftVoucher } from "../../../Models/Voucher/GiftVoucher";
import { IVoucher } from "../../../Models/Voucher/Voucher";

interface IProps {
  voucher: IVoucher;
}

export const VoucherDetails: React.FC<IProps> = (props: IProps) => {
  const [voucher, setVoucher] = useState(props.voucher);
  const { code } = useParams();
  const [campaign, setCampaign]: any = useState([]);
  const [checked, setChecked] = useState<boolean>(false);

  useEffect(() => {
    fetchVoucher(code as string).then(
      (voucher: IVoucher | IDiscountVoucher | IGiftVoucher) => {
        setVoucher(props.voucher);
        setChecked(voucher.active);

        fetchCampaign(voucher.campaignId).then((data: any) => {
          setCampaign(data);
        });
      }
    );
  }, [props]);

  return (
    <div className="grid grid-cols-1 md:grid-cols-1 gap-4 grid-flow-row m-4">
      <div className="p-5 bg-white">
        <h2 className="text-xl font-semibold">Voucher details</h2>
        <div className="grid grid-cols-2 gap-4 grid-flow-row m-4">
          <p>Voucher ID</p>
          <p>{voucher?._id ? voucher._id : "No data to show."}</p>
        </div>
        <hr />

        <div className="grid grid-cols-2 gap-4 grid-flow-row m-4">
          <p>Discount type</p>
          <p>{voucher?.type ? voucher.type : "No data to show."}</p>
        </div>
        <hr />

        <div className="grid grid-cols-2 gap-4 grid-flow-row m-4">
          <p> Amount </p>
          <p>{voucher?.amount}</p>
        </div>
        <hr />

        <div className="grid grid-cols-2 gap-4 grid-flow-row m-4">
          <p>Campaign</p>
          <p>{campaign.name ? campaign.name : "No data to show."}</p>
        </div>
        <hr />

        <div className="grid grid-cols-2 gap-4 grid-flow-row m-4">
          <p>Category</p>
          <p>{voucher?.category ? voucher.category : "No data to show."}</p>
        </div>
        <hr />

        <div className="grid grid-cols-2 gap-4 grid-flow-row m-4">
          <p>Redemption limit</p>
          <p>
            {" "}
            {voucher?.redemptionLimit
              ? voucher.redemptionLimit
              : "No data to show."}
          </p>
        </div>
        <hr />

        <div className="grid grid-cols-2 gap-4 grid-flow-row m-4">
          <p>Published</p>
          <p> {voucher?.publish_id ? "Published" : "Not published"}</p>
        </div>
        <hr />

        <div className="grid grid-cols-4 gap-4 grid-flow-row m-4">
          <p>Actions</p>
          <div>
            <div className="relative inline-block w-10 mr-2 align-middle select-none transition duration-200 ease-in">
              <input
                type="checkbox"
                name="toggle"
                id="toggle"
                className="toggle-checkbox absolute block w-6 h-6 rounded-full bg-white border-4 appearance-none cursor-pointer"
                onChange={() => {
                  toggleActiveVoucher(voucher?._id, !checked).then((data) => {
                    setChecked(!checked);
                  });
                }}
                checked={checked}
              />
              <label className="toggle-label block overflow-hidden h-6 rounded-full bg-gray-300 cursor-pointer"></label>
            </div>{" "}
            {checked ? "Active" : "Inactive"}
          </div>

          <RedeemModal code={code}></RedeemModal>
        </div>
      </div>
    </div>
  );
};
