import React from "react";

interface IProps {
  redemption: [];
}

export const RedemptionDetails: React.FC<IProps> = (props: IProps) => {
  return (
    <div className="grid grid-cols-1 md:grid-cols-1 gap-4 grid-flow-row m-4">
      <div className="bg-white p-5">
        <h2 className="text-xl font-semibold pb-5">Redemptions</h2>
        <div className="relative overflow-x-auto">
          <table className="w-full text-sm text-left text-gray-500 dark:text-gray-400">
            <thead className="text-xs text-gray-700 uppercase bg-gray-50 dark:bg-gray-700 dark:text-gray-400">
              <tr>
                <th scope="col" className="px-6 py-3">
                  Voucher Code
                </th>
                <th scope="col" className="px-6 py-3">
                  Points
                </th>
                <th scope="col" className="px-6 py-3">
                  Redeemed At
                </th>
              </tr>
            </thead>
            <tbody>
              {props.redemption.map((voucher: any) => (
                <tr
                  key={voucher.voucher_id}
                  className="bg-white border-b dark:bg-gray-800 dark:border-gray-700"
                >
                  <th
                    scope="row"
                    className=" px-6 py-4 font-medium text-gray-900 whitespace-nowrap dark:text-white"
                  >
                    <span className="bg-green-600 text-white text-sm font-medium mr-2 px-2.5 py-0.5 rounded-lg dark:bg-green-900 dark:text-green-300">
                      {voucher.voucher_id}
                    </span>
                  </th>
                  <td className="px-6 py-4">{voucher.gift.amount}</td>
                  <td className="px-6 py-4">
                    {new Date(voucher.date)
                      .toISOString()
                      .replace(/T/, " ")
                      .replace(/\..+/, "")}
                  </td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>
      </div>
    </div>
  );
};
