import React from "react";
import RoomDetails from "../components/rooms/RoomDetails";
import { json, useLoaderData } from "react-router-dom";

const RoomsDetailPage = () => {
  const data = useLoaderData();
  return <RoomDetails data={data} />;
};

export default RoomsDetailPage;
export async function loader({ params }) {
  const id = params.roomDetail;
  const response = await fetch(
    `https://air-bnb-e0098-default-rtdb.firebaseio.com/rooms/${id}.json`
  );
  if (!response.ok) {
    throw json({ message: "something went wrong" }, { status: 500 });
  } else {
    const data = await response.json();
    return data;
  }
}
