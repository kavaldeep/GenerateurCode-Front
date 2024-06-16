import { DatePicker, LocalizationProvider } from "@mui/x-date-pickers";
import { AdapterDayjs } from "@mui/x-date-pickers/AdapterDayjs";
import dayjs from "dayjs";
import React, { useState } from "react";
import DoughnutCommon, {
  numberOfLabelProps,
} from "../../../components/Charts/DoughnutCommon";
import { VerticalBarChartCommon } from "../../../components/Charts/VerticalBarChartCommon";

export const CustomerStats: React.FC = () => {
  const [beginSelectedDate, setBeginSelectedDate] = useState(
    dayjs().subtract(7, "day")
  );
  const [endSelectedDate, setEndSelectedDate] = useState(dayjs());

  const stats = {
    total_redemptions_count_by_date: {
      "2023-05-16": 3,
      "2023-05-18": 5,
      "2023-05-19": 1,
      "2023-05-23": 4,
      "2023-07-09": 5,
      "2023-07-10": 16,
      "2023-07-11": 3,
    },
    total_redemptions_money_by_date: {
      "2023-05-16": 500,
      "2023-05-18": 400,
      "2023-05-19": 50,
      "2023-05-23": 600,
      "2023-07-09": 700,
      "2023-07-10": 1600,
      "2023-07-11": 3,
    },
    total_redemptions_amount: 1440,
    total_vouchers: 9,
    type_vouchers_bought_by_customers: {
      loyalty: 20,
      discount: 10,
      gift: 5,
    },
  };

  const numberOfLabel: numberOfLabelProps[] = [
    {
      label: "GIFT",
      number: 10,
    },
    {
      label: "DISCOUNT",
      number: 5,
    },
  ];

  const handleBeginDateChange = (date: any) => {
    setBeginSelectedDate(date);
  };

  const handleEndDateChange = (date: any) => {
    setEndSelectedDate(date);
  };

  return (
    <div
      id="stats"
      className="grid grid-cols-1 md:grid-cols-1 gap-3 grid-flow-row m-4"
    >
      <div className="bg-white dark:bg-gray-800 overflow-hidden shadow rounded-lg">
        <div className="px-4 py-5 sm:p-6">
          <h3 className="text-xl font-semibold text-gray-900 dark:text-gray-100">
            Statistics
          </h3>
          <p className="mt-1 max-w-2xl text-sm text-gray-500 dark:text-gray-400">
            Statistics about customer.
          </p>
          {/* Basic Stats */}
          <div className="flex min-h-full">
            <div className="w-1/2 shadow mt-5 mb-5 mr-2 ml-2 min-h-full flex items-center justify-center flex-col">
              <div>Type voucher</div>
              <DoughnutCommon numberOfLabel={numberOfLabel} />
            </div>
            <div className="w-1/2 ">
              <div className="px-3 pt-8 pb-10 text-center relative z-10 m-auto shadow mt-5 mb-5 mr-2 ml-2">
                <svg
                  fill="none"
                  stroke="currentColor"
                  strokeWidth="1.5"
                  viewBox="0 0 24 24"
                  xmlns="http://www.w3.org/2000/svg"
                  aria-hidden="true"
                  className="w-10 h-6mx-2 text-gray-400 dark:text-gray-300 m-auto"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    d="M3.75 4.875c0-.621.504-1.125 1.125-1.125h4.5c.621 0 1.125.504 1.125 1.125v4.5c0 .621-.504 1.125-1.125 1.125h-4.5A1.125 1.125 0 013.75 9.375v-4.5zM3.75 14.625c0-.621.504-1.125 1.125-1.125h4.5c.621 0 1.125.504 1.125 1.125v4.5c0 .621-.504 1.125-1.125 1.125h-4.5a1.125 1.125 0 01-1.125-1.125v-4.5zM13.5 4.875c0-.621.504-1.125 1.125-1.125h4.5c.621 0 1.125.504 1.125 1.125v4.5c0 .621-.504 1.125-1.125 1.125h-4.5A1.125 1.125 0 0113.5 9.375v-4.5z"
                  ></path>
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    d="M6.75 6.75h.75v.75h-.75v-.75zM6.75 16.5h.75v.75h-.75v-.75zM16.5 6.75h.75v.75h-.75v-.75zM13.5 13.5h.75v.75h-.75v-.75zM13.5 19.5h.75v.75h-.75v-.75zM19.5 13.5h.75v.75h-.75v-.75zM19.5 19.5h.75v.75h-.75v-.75zM16.5 16.5h.75v.75h-.75v-.75z"
                  ></path>
                </svg>
                <h3 className="text-3xl text-gray-700 font-semibold leading-tight my-3">
                  {stats.total_vouchers}
                </h3>
                <h4 className="text-sm m-auto text-gray-500 leading-tight">
                  Total number of voucher codes
                </h4>
              </div>
              <div className="px-3 pt-8 pb-10 text-center relative z-10 m-auto shadow mt-5 mb-5 mr-2 ml-2">
                <svg
                  fill="none"
                  stroke="currentColor"
                  strokeWidth="1.5"
                  viewBox="0 0 24 24"
                  xmlns="http://www.w3.org/2000/svg"
                  aria-hidden="true"
                  className="w-10 h-6mx-2 text-gray-400 dark:text-gray-300 m-auto"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    d="M3.75 4.875c0-.621.504-1.125 1.125-1.125h4.5c.621 0 1.125.504 1.125 1.125v4.5c0 .621-.504 1.125-1.125 1.125h-4.5A1.125 1.125 0 013.75 9.375v-4.5zM3.75 14.625c0-.621.504-1.125 1.125-1.125h4.5c.621 0 1.125.504 1.125 1.125v4.5c0 .621-.504 1.125-1.125 1.125h-4.5a1.125 1.125 0 01-1.125-1.125v-4.5zM13.5 4.875c0-.621.504-1.125 1.125-1.125h4.5c.621 0 1.125.504 1.125 1.125v4.5c0 .621-.504 1.125-1.125 1.125h-4.5A1.125 1.125 0 0113.5 9.375v-4.5z"
                  ></path>
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    d="M6.75 6.75h.75v.75h-.75v-.75zM6.75 16.5h.75v.75h-.75v-.75zM16.5 6.75h.75v.75h-.75v-.75zM13.5 13.5h.75v.75h-.75v-.75zM13.5 19.5h.75v.75h-.75v-.75zM19.5 13.5h.75v.75h-.75v-.75zM19.5 19.5h.75v.75h-.75v-.75zM16.5 16.5h.75v.75h-.75v-.75z"
                  ></path>
                </svg>
                <h3 className="text-3xl text-gray-700 font-semibold leading-tight my-3">
                  {stats.total_redemptions_amount}
                </h3>
                <h4 className="text-sm m-auto text-gray-500 leading-tight">
                  Total reemptions amount
                </h4>
              </div>
            </div>
          </div>

          {/* Date RANGE */}
          <div className="pt-4 flex">
            <div className="mr-4">
              <LocalizationProvider dateAdapter={AdapterDayjs}>
                <DatePicker
                  label="Date start"
                  value={beginSelectedDate}
                  onChange={handleBeginDateChange}
                />
              </LocalizationProvider>
            </div>
            <div>
              <LocalizationProvider dateAdapter={AdapterDayjs}>
                <DatePicker
                  label="Date end"
                  value={endSelectedDate}
                  onChange={handleEndDateChange}
                />
              </LocalizationProvider>
            </div>
          </div>
          {/* STATISTIC REDEMPTIONS COUNT AND MONEY BY DAY */}
          <div className="mt-5 border-t border-gray-200 dark:border-gray-700">
            <dl className="mt-5">
              <div className="flex items-center shadow p-5 mb-5">
                <div className="text-center relative z-10 m-auto w-full">
                  <h4 className="text-base pb-4 m-auto text-gray-500 leading-tight">
                    Total redemptions count by day
                  </h4>
                  <div className="w-full h-100">
                    <VerticalBarChartCommon
                      dates={stats.total_redemptions_count_by_date}
                      color="rgba(0, 143, 251, 0.8)"
                      title="Points"
                      dateRange={{
                        start: beginSelectedDate,
                        end: endSelectedDate,
                      }}
                    ></VerticalBarChartCommon>
                  </div>
                </div>
              </div>
              <div className="flex items-center shadow p-5 mb-5">
                <div className="text-center relative z-10 m-auto w-full">
                  <h4 className="text-base pb-4 m-auto text-gray-500 leading-tight">
                    Total redemptions money by day
                  </h4>
                  <div className="w-full h-100">
                    {stats.total_redemptions_money_by_date ? (
                      <VerticalBarChartCommon
                        dates={stats.total_redemptions_money_by_date}
                        color="rgba(0, 143, 251, 0.8)"
                        title="Points"
                        dateRange={{
                          start: beginSelectedDate,
                          end: endSelectedDate,
                        }}
                      ></VerticalBarChartCommon>
                    ) : (
                      <p>No data to show.</p>
                    )}
                  </div>
                </div>
              </div>
            </dl>
          </div>
        </div>
      </div>
    </div>
  );
};
