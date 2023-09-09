import HomePageItems from "../components/home/HomePageItems";
import { useLoaderData, json } from "react-router-dom";

const HomePage = () => {
  const data = useLoaderData();

  return <HomePageItems data={data} />;
};
export async function loader() {
  const response = await fetch(
    "https://air-bnb-e0098-default-rtdb.firebaseio.com/home.json"
  );

  if (!response.ok) {
    throw json({ message: "something went wrong" }, { status: 500 });
  } else {
    const responseData = await response.json();
    const data = [];
    for (const key in responseData) {
      data.push({
        id: responseData[key].id,
        name: responseData[key].name,
        distance: responseData[key].distance,
        price: responseData[key].price,
        img: responseData[key].img,
        night: responseData[key].night,
        date: responseData[key].date,
      });
    }
    return data;
  }
}
export default HomePage;
