import React from "react";
import CardItems from "../CardItems";

const RoomsItems = (props) => {
  return (
    <div className="grid ml-5 lg:ml-0 gap-y-5 lg:grid-cols-4 lg:p-3 lg:gap-2 mt-[4rem] lg:mt-3">
      {props.roomsData.map((rooms) => (
        <CardItems
          key={rooms.id}
          id={rooms.id}
          name={rooms.name}
          price={rooms.price}
          distance={rooms.roomie}
          night={rooms.night}
          img={rooms.img}
        />
      ))}
    </div>
  );
};

export default RoomsItems;
