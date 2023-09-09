import React from "react";

const Maps = (props) => {
  return (
    <div className="grid">
      <div>
        <img
          className="w-[8rem] h-[8rem] border rounded-lg  border-gray-400 hover:border-gray-800"
          src={props.img}
          alt={props.alt}
        />
      </div>
      <div>
        <p>{props.title}</p>
      </div>
    </div>
  );
};

export default Maps;
