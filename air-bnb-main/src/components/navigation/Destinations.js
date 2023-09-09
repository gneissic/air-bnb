import React from "react";
import Maps from "./Maps";
const MAPS = [
  {
    id: "m1",
    img: "https://www.shutterstock.com/image-vector/colorful-cartoon-world-map-260nw-286176023.jpg",

    title: "i'm flexible",
    alt: "The World",
  },
  {
    id: "m2",
    img: "https://as2.ftcdn.net/v2/jpg/02/77/68/59/1000_F_277685945_qCq3DbxT9rjnlfpQ5zt7v3ipEmayjh1Q.jpg",
    title: "Africa",
    alt: "Africa",
  },
  {
    id: "m3",
    img: "https://www.shutterstock.com/shutterstock/photos/302623481/display_1500/stock-vector-cartoon-vector-map-united-kingdom-england-scotland-wells-northen-irland-all-object-isolated-302623481.jpg",
    title: "United Kingdom",
    alt: "The United Kingdom",
  },
  {
    id: "m4",
    img: "https://media.istockphoto.com/id/1212123552/vector/vector-illustration-united-states-of-america-flat-design.jpg?s=612x612&w=0&k=20&c=ulO5EczJeaqN2KIf8otk_hjjqJfonK60ajcv8FeCNTI=",
    title: "United States",
    alt: "The United States",
  },
  {
    id: "m5",
    img: "https://media.istockphoto.com/id/627370578/vector/illustrated-map-of-canada.jpg?s=170667a&w=0&k=20&c=DkCUvvu-VezvchA0zUcsUaZPWShlVHYJdNMweNAD5I4=",
    title: "Canada",
    alt: "Canada",
  },
  {
    id: "m6",
    img: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcS6zKcHS6Gx5YEGWhW_jq4GILQ8KvvV4IkE9w&usqp=CAU",
    title: "Middle East",
    alt: "The Middle East",
  },
];
const Destinations = () => {
  return (
    <div className="p-2 bg-white border rounded-lg border-gray-400 shadow-sm shadow-gray-500 grid  absolute z-10 left-[4%] top-[30%]  w-[35%] h-[25rem]">
      <div className="font-pops font-bold text-gray-900">
        <h1>Search by region</h1>
      </div>
      <div className="p-2  grid grid-cols-3 grid-rols-3 gap-y-3 ">
        {MAPS.map((map) => (
          <Maps key={map.id} img={map.img} title={map.title} alt={map.alt} />
        ))}
      </div>
    </div>
  );
};

export default Destinations;
