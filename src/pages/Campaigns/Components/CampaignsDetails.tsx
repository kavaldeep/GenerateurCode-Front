import React from "react";
import { toggleActiveCampaign } from "../../../controllers/Campaign/campaignController";
import { ICampaign } from "../../../Models/Campaigns/Campaigns";

interface IProps {
  campaign?: ICampaign;
  checked: boolean;
  setChecked: (checked: boolean) => void;
}

export const CampaignDetails: React.FC<IProps> = ({
  campaign,
  checked,
  setChecked,
}) => {
  return (
    <div
      id="details"
      className="grid grid-cols-1 md:grid-cols-1 gap-4 grid-flow-row m-4"
    >
      <div className="bg-white dark:bg-gray-800 overflow-hidden shadow rounded-lg">
        <div className="px-4 py-5 sm:p-6">
          <h3 className="text-xl font-semibold text-gray-900 dark:text-gray-100">
            Campaign Details
          </h3>
          <p className="mt-1 max-w-2xl text-sm text-gray-500 dark:text-gray-400">
            Information about the campaign.
          </p>
          <div className="mt-5 border-t border-gray-200 dark:border-gray-700">
            <dl className="mt-5 grid grid-cols-1 gap-x-4 gap-y-8 sm:grid-cols-2">
              <div className="sm:col-span-1">
                <dt className="text-sm font-medium text-gray-500 dark:text-gray-400">
                  Campaign Name
                </dt>
                <dd className="mt-1 text-sm  text-gray-900 dark:text-gray-100">
                  {campaign?.name ? campaign.name : "No name provided."}
                </dd>
              </div>
              <div className="sm:col-span-1">
                <dt className="text-sm font-medium text-gray-500 dark:text-gray-400">
                  Campaign Description
                </dt>
                <dd className="mt-1 text-sm text-gray-900 dark:text-gray-100">
                  {campaign?.description
                    ? campaign.description
                    : "No description provided."}
                </dd>
              </div>
              <div className="sm:col-span-1">
                <dt className="text-sm font-medium text-gray-500 dark:text-gray-400">
                  Campaign Start Date
                </dt>
                <dd className="mt-1 text-sm text-gray-900 dark:text-gray-100">
                  {campaign?.creation_date
                    ? new Date(campaign.creation_date)
                        .toISOString()
                        .replace(/T/, " ")
                        .replace(/\..+/, "")
                    : "No date provided."}
                </dd>
              </div>
              <div className="sm:col-span-1">
                <dt className="text-sm font-medium text-gray-500 dark:text-gray-400">
                  Campaign ID
                </dt>
                <dd className="mt-1 text-sm text-gray-900 dark:text-gray-100">
                  {campaign?._id ? campaign._id : "No ID provided."}
                </dd>
              </div>
              <div className="sm:col-span-1">
                <dt className="text-sm font-medium text-gray-500 dark:text-gray-400">
                  Campaign End Date
                </dt>
                <dd className="mt-1 text-sm text-gray-900 dark:text-gray-100">
                  {campaign?.end_date
                    ? new Date(campaign.end_date)
                        .toISOString()
                        .replace(/T/, " ")
                        .replace(/\..+/, "")
                    : "No date provided."}
                </dd>
              </div>
              <div className="sm:col-span-1">
                <dt className="text-sm font-medium text-gray-500 dark:text-gray-400">
                  Campaign Status
                </dt>
                <dd className="mt-1 text-sm text-gray-900 dark:text-gray-100">
                  <div className="sm:col-span-1">
                    <div>
                      <div className="relative inline-block w-10 mr-2 align-middle select-none transition duration-200 ease-in">
                        <input
                          type="checkbox"
                          name="toggle"
                          id="toggle"
                          checked={checked ? true : false}
                          onChange={() => {
                            toggleActiveCampaign(campaign?._id, !checked).then(
                              (data) => {
                                setChecked(!checked);
                              }
                            );
                          }}
                          className="toggle-checkbox absolute block w-6 h-6 rounded-full bg-white border-4 appearance-none cursor-pointer"
                        />
                        <label className="toggle-label block overflow-hidden h-6 rounded-full bg-gray-300 cursor-pointer"></label>
                      </div>{" "}
                      {checked ? "Active" : "Inactive"}
                    </div>
                  </div>
                </dd>
              </div>
            </dl>
          </div>
        </div>
      </div>
    </div>
  );
};
