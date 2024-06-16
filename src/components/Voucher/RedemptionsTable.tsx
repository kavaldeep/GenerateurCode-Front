const RedemptionsTable = ({ data }: any) => {
  return (
    <>
      {data.redemption.length ? (
        <table className="w-full text-sm text-left text-gray-500 dark:text-gray-400">
          <thead className="text-xs text-gray-700 uppercase bg-gray-200 dark:bg-gray-900 dark:text-gray-400">
            <tr>
              <th scope="col" className="px-6 py-3">
                Customer ID
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
            {data.redemption
              .slice(0)
              .reverse()
              .map((redemption: any, key: any) => (
                <tr
                  key={key}
                  className="bg-white border-b dark:bg-gray-800 dark:border-gray-700"
                >
                  <th
                    scope="row"
                    className=" px-6 py-4 font-medium text-gray-900 whitespace-nowrap dark:text-white"
                  >
                    <span className="bg-green-600 text-white text-sm font-medium mr-2 px-2.5 py-0.5 rounded-lg dark:bg-green-900 dark:text-green-300">
                      {redemption.customer_id}
                    </span>
                  </th>
                  <td className="px-6 py-4">{redemption.gift.amount}</td>
                  <td className="px-6 py-4">{redemption.date}</td>
                </tr>
              ))}
          </tbody>
        </table>
      ) : (
        "No redemptions yet"
      )}
    </>
  );
};
export default RedemptionsTable;