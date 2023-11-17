import React from "react";

const PageTitle = ({ title }) => {
  return (
   
      <div className="flex items-center my-2 mb-5 justify-around h-16 lg:w-[30rem] w-full  md:w-1/2 rounded bg-gray-50 dark:bg-gray-800">
        <p className="text-xl font-bold text-black dark:text-gray-500">
          {title}
        </p>
      </div>
   
  );
};

export default PageTitle;