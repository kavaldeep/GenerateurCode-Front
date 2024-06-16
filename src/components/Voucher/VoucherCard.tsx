import { useEffect, useState } from "react";
import { Link } from "react-router-dom";

import { toggleActiveVoucher } from "../../controllers/Voucher/voucherController";

const VoucherCard = ({ voucher }: any) => {
  const [checked, setChecked]: any = useState(false);

  useEffect(() => {
    setChecked(voucher.active);
  }, []);

  return (
    <div>
      <div className="grid grid-cols-1 md:grid-cols-3 md:gap-80 md:pb-15 shadow-md p-4 bg-white rounded-md">
        <div>
          <div>
            <Link
              to={"/vouchers/" + voucher.code}
              className="underline decoration-sky-500 text-sky-400/100 text-xl font-black"
            >
              {voucher.code}
            </Link>
          </div>
          <i>
            Created on{" "}
            {new Date(voucher.start_date)
              .toISOString()
              .replace(/T/, " ")
              .replace(/\..+/, "")}
          </i>

          <p className="bg-yellow-100 text-yellow-800 text-sm font-medium mr-2 px-2.5 py-0.5 rounded dark:bg-yellow-900 dark:text-yellow-300">
            Category: {voucher.category}
          </p>
        </div>
        <div>
          <div className="flex">
            <svg
              fill="none"
              stroke="currentColor"
              strokeWidth="1.5"
              className="w-5 h-5"
              viewBox="0 0 24 24"
              xmlns="http1://www.w3.org/2000/svg"
              aria-hidden="true"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                d="M15.75 10.5V6a3.75 3.75 0 10-7.5 0v4.5m11.356-1.993l1.263 12c.07.665-.45 1.243-1.119 1.243H4.25a1.125 1.125 0 01-1.12-1.243l1.264-12A1.125 1.125 0 015.513 7.5h12.974c.576 0 1.059.435 1.119 1.007zM8.625 10.5a.375.375 0 11-.75 0 .375.375 0 01.75 0zm7.5 0a.375.375 0 11-.75 0 .375.375 0 01.75 0z"
              ></path>
            </svg>
            <span className="ml-1">Campaign: {voucher.name}</span>
          </div>
          <div className="flex">
            <svg
              fill="none"
              stroke="currentColor"
              strokeWidth="1.5"
              className="w-5 h-5"
              viewBox="0 0 24 24"
              xmlns="http://www.w3.org/2000/svg"
              aria-hidden="true"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                d="M15 19.128a9.38 9.38 0 002.625.372 9.337 9.337 0 004.121-.952 4.125 4.125 0 00-7.533-2.493M15 19.128v-.003c0-1.113-.285-2.16-.786-3.07M15 19.128v.106A12.318 12.318 0 018.624 21c-2.331 0-4.512-.645-6.374-1.766l-.001-.109a6.375 6.375 0 0111.964-3.07M12 6.375a3.375 3.375 0 11-6.75 0 3.375 3.375 0 016.75 0zm8.25 2.25a2.625 2.625 0 11-5.25 0 2.625 2.625 0 015.25 0z"
              ></path>
            </svg>
            <span className="ml-1">
              Redemptions:{" "}
              {voucher.redemption !== null ? voucher.redemption.length : 0}
            </span>
          </div>
        </div>
        <div>
          <div className="relative inline-block w-10 mr-2 align-middle select-none transition duration-200 ease-in">
            <input
              type="checkbox"
              name="toggle"
              id="toggle"
              className="toggle-checkbox absolute block w-6 h-6 rounded-full bg-white border-4 appearance-none cursor-pointer"
              onChange={() => {
                toggleActiveVoucher(voucher._id, !checked).then((data) => {
                  setChecked(!checked);
                });
              }}
              checked={checked}
            />
            <label className="toggle-label block overflow-hidden h-6 rounded-full bg-gray-300 cursor-pointer"></label>
          </div>{" "}
          {checked ? "Active" : "Inactive"}
        </div>
      </div>
      <hr className="pb-5" />
    </div>
  );
};

export default VoucherCard;
