import React from "react";
import RoomsItems from "../components/rooms/RoomsItems";
import { useLoaderData, json } from "react-router-dom";

const RoomsPage = () => {
  const data = useLoaderData();

  return <RoomsItems roomsData={data} />;
};

export default RoomsPage;
export async function loader() {
  const response = await fetch(
    "https://air-bnb-e0098-default-rtdb.firebaseio.com/rooms.json"
  );
  if (!response.ok) {
    throw json({ message: "something went wrong" }, { status: 500 });
  } else {
    const data = await response.json();
    const responseData = [];
    for (const key in data) {
      responseData.push({
        id: data[key].id,
        name: data[key].name,
        destination: data[key].destination,
        date: data[key].date,
        night: data[key].night,
        price: data[key].price,
        roomie: data[key].roomie,
        img: data[key].img,
      });
    }
    return responseData;
  }
}
