import React from "react";

const AddGuests = (props) => {
  return (
    <div className="flex justify-between pl-4 pr-3 top-[5rem]">
      <div className="grid">
        <p className="font-nun text-gray-800">{props.description}</p>
        <p className="font-pops text-gray-900 ">{props.age}</p>
      </div>
      <div className="flex items-center gap-4">
        <button
          type="button"
          className="h-8 w-8 rounded-full border border-gray-700 flex items-center justify-center"
        >
          <svg
            xmlns="http://www.w3.org/2000/svg"
            fill="none"
            viewBox="0 0 24 24"
            strokeWidth={1.5}
            stroke="currentColor"
            className="w-6 h-6 text-gray-700 font-semibold"
          >
            <path
              strokeLinecap="round"
              strokeLinejoin="round"
              d="M19.5 12h-15"
            />
          </svg>
        </button>
        <span>0</span>
        <button
          type="button"
          className="h-8 w-8 rounded-full border border-gray-700 flex items-center justify-center"
        >
          <svg
            xmlns="http://www.w3.org/2000/svg"
            fill="none"
            viewBox="0 0 24 24"
            strokeWidth={1.5}
            stroke="currentColor"
            className="w-6 h-6 text-gray-700 font-semibold"
          >
            <path
              strokeLinecap="round"
              strokeLinejoin="round"
              d="M12 4.5v15m7.5-7.5h-15"
            />
          </svg>
        </button>
      </div>
    </div>
  );
};

export default AddGuests;
