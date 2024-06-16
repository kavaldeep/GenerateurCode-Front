import React, { useEffect } from "react";



interface IProps {
    tabs : string[];
    setCurrent: (tab: string) => void;
    currentTab: string;
}

export const Tabs: React.FC<IProps> = ( props: IProps) => {

      const setUnderline = (tab : string) => {
        return tab === props.currentTab ? "border-blue-500" : "";
    };

    const setCurrentTab = (tab: string) => {
        props.setCurrent(tab);
    };

    useEffect(() => {
        console.log("Tabs: ", props.tabs);
    }, []);

    return (
         <div className="rounded-xl m-4 bg-white text-sm font-medium text-center text-gray-500 border-b border-gray-200 dark:text-gray-400 dark:border-gray-700">
      <ul className="flex flex-wrap -mb-px">
        {props.tabs?.map((tab) => (
          <li key={tab} className="mr-2">
            <a
              href="#"
              className={
                setUnderline(tab) +
                `${
                  tab === props.currentTab ? " text-blue-500" : ""
                } inline-block p-4 border-b-2 border-transparent rounded-t-lg hover:text-gray-600 hover:border-gray-300 dark:hover:text-gray-300`
              }
              onClick={() => setCurrentTab(tab)}
            >
              {tab}
            </a>
          </li>
        ))}
      </ul>
    </div>
    )
}