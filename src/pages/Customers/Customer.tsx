import { useEffect, useState } from "react";
import { Link, Navigate, useParams } from "react-router-dom";
import Layout from "../../components/Layout";
import { Tabs } from "../../components/Tabs/Tabs";
import {
  fetchCustomer,
  fetchCustomerSummary,
} from "../../controllers/Customer/customerController";
import { ICustomer } from "../../Models/Customer/Customer";
import { isAuthenticated } from "../../utils/isAuthenticated";
import { CustomerDetails } from "./components/CustomerDetails";
import { CustomerStats } from "./components/CustomerStats";
import { RedemptionDetails } from "./components/RedemptionDetails";

export const Customer = () => {
  const tabs = ["Customer", "Redemptions", "Stats", "Rewards"];

  const [customer, setCustomer]: any = useState<ICustomer[]>([]);
  const [redemptions, setRedemptions]: any = useState<any>([]);
  const [currentTab, setCurrentTab] = useState<string>("Customer");
  const { id } = useParams();

  useEffect(() => {
    fetchCustomer(id).then((data: any) => {
      setCustomer(data);
      if (data.summary) setRedemptions(data.summary);
    });
    fetchCustomerSummary(id).then((data) => {
      setRedemptions(data);
    });
  }, []);

  if (!isAuthenticated()) {
    return <Navigate to="/login" />;
  } else {
    return (
      <Layout title="Customers">
        <div className="bg-blue-100 w-full p-5 mb-4">
          <p className="text-2xl text-bl-500 font-semibold">
            <Link
              to="/customers"
              className="text-blue-700 border border-blue-700 hover:bg-blue-700 hover:text-white focus:ring-4 focus:outline-none focus:ring-blue-300 font-medium rounded-full text-sm p-2.5 text-center inline-flex items-center dark:border-blue-500 dark:text-blue-500 dark:hover:text-white dark:focus:ring-blue-800 dark:hover:bg-blue-500"
            >
              <svg
                fill="none"
                stroke="currentColor"
                strokeWidth="1.5"
                viewBox="0 0 24 24"
                className="w-4 h-4"
                xmlns="http://www.w3.org/2000/svg"
                aria-hidden="true"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  d="M6.75 15.75L3 12m0 0l3.75-3.75M3 12h18"
                ></path>
              </svg>
              <span className="sr-only">Icon description</span>
            </Link>{" "}
            {id}
          </p>
        </div>
        <Tabs tabs={tabs} currentTab={currentTab} setCurrent={setCurrentTab} />
        {currentTab === "Customer" ? (
          <CustomerDetails customer={customer} />
        ) : null}
        {currentTab === "Redemptions" ? (
          <RedemptionDetails redemption={redemptions} />
        ) : null}
        {currentTab === "Stats" ? <CustomerStats /> : null}{" "}
        {currentTab === "Rewards" ? <p> Coming soon :P </p> : null}
      </Layout>
    );
  }
};

export default Customer;
