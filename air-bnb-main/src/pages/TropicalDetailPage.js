import React from "react";
import TropicalDetail from "../components/home/TropicalDetail";
import { useLoaderData, json } from "react-router-dom";

const TropicalDetailPage = () => {
  const data = useLoaderData();
  return <TropicalDetail data={data} />;
};

export default TropicalDetailPage;
export async function loader({ params }) {
  const id = params.tropicalDetail;
  const response = await fetch(
    `https://air-bnb-e0098-default-rtdb.firebaseio.com/home/${id}.json`
  );
  if (!response.ok) {
    throw json({ message: "An error occured" }, { status: 500 });
  } else {
    const data = await response.json();
    return data;
  }
}
