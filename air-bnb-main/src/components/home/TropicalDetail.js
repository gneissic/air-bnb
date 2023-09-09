import React, { Fragment } from "react";
import DetailOffers from "../DetailItems/DetailOffers";
import DetailCard from "../DetailItems/DetailCard";
import MobileOffers from "../DetailItems/MobileOffers";

const TropicalDetail = ({ data }) => {
  return (
    <Fragment>
      <div className="mt-0 lg:mt-[3rem]">
        <DetailOffers data={data} />
        <DetailCard data={data} />
        <MobileOffers data={data}/>
      </div>
    </Fragment>
  );
};

export default TropicalDetail;
