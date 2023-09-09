import React from "react";

const SmallNotification = (props) => {
  return (
    <div>
      <form>
        <div>
          <div className=" transition-all duration-200 cursor-pointer py-3  flex items-center px-2 gap-[2rem] bg-white shadow-sm hover:shadow-md hover:shadow-gray-400 shadow-gray-400 border rounded-full border-gray-400 ">
            <span>Anywhere</span>
            <span>Any week</span>
            <div className="flex gap-3 items-center">
              <span>Add guests</span>
              <span
                onClick={props.showLargeNo}
                className="bg-red-700 h-8 w-8 flex justify-center items-center rounded-full"
              >
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  fill="none"
                  viewBox="0 0 24 24"
                  strokeWidth={1.5}
                  stroke="currentColor"
                  className="w-5 h-5 text-gray-200 font-semibold"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    d="M21 21l-5.197-5.197m0 0A7.5 7.5 0 105.196 5.196a7.5 7.5 0 0010.607 10.607z"
                  />
                </svg>
              </span>
            </div>
          </div>
        </div>
      </form>
    </div>
  );
};

export default SmallNotification;
