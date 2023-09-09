import React, { Fragment } from "react";
import CardItems from "../CardItems";

const HomePageItems = (props) => {
  const data = props.data;
  return (
    <Fragment>
      <div className="grid  ml-5 lg:ml-0 gap-y-5 lg:grid-cols-4 lg:p-3 lg:gap-2 mt-[4rem] lg:mt-3">
        {data.map((dat) => (
          <CardItems
            key={dat.id}
            id={dat.id}
            name={dat.name}
            distance={dat.distance}
            price={dat.price}
            night={dat.night}
            img={dat.img}
            date={dat.date}
          />
        ))}
      </div>
    </Fragment>
  );
};

export default HomePageItems;
