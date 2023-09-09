import React from "react";
import DetailOffers from "../DetailItems/DetailOffers";
import DetailCard from "../DetailItems/DetailCard";
import MobileOffers from "../DetailItems/MobileOffers";

const RoomDetails = ({ data }) => {
  return (
    <div className=" mt-0 lg:mt-[3rem]">
      <DetailOffers data={data} />
      <DetailCard data={data} />
      <MobileOffers data={data} />
      <div>
      </div>
    </div>
  );
};

export default RoomDetails;
