
import React, {  useState } from "react";
import { Link } from "react-router-dom";


const CardItems = (props) => {
  const [favorite, setFavorites] = useState(false);
  const onToggleFavorites = () => {
    setFavorites((favorite) => !favorite);
  };
  return (
      <div>
      <div  className="relative z-10">
        <div className="absolute top-3 right-[2.2rem] lg:right-5" onClick={onToggleFavorites}>
          <svg
            xmlns="http://www.w3.org/2000/svg"
            fill="none"
            viewBox="0 0 24 24"
            strokeWidth={1.5}
            stroke="currentColor"
            className={`w-6 h-6 text-gray-100 font-bold ${
              !favorite ? "fill-black/40" : "fill-red-900"
            }`}
          >
            <path
              strokeLinecap="round"
              strokeLinejoin="round"
              d="M21 8.25c0-2.485-2.099-4.5-4.688-4.5-1.935 0-3.597 1.126-4.312 2.733-.715-1.607-2.377-2.733-4.313-2.733C5.1 3.75 3 5.765 3 8.25c0 7.22 9 12 9 12s9-4.78 9-12z"
            />
          </svg>
        </div>
      </div>

        <Link to={`${props.id}`}>
          <div className=" cursor-pointer ">
            <div>
              <img
                src={props.img}
                alt="images"
                className="h-[20rem] w-[24rem]  lg:w-[20rem] lg:h-[18rem] border rounded-lg lg:rounded-md "
              />
            </div>
          </div>
          <div className="font-nun text-gray-600 font-semibold">
            <p className="font-pops font-semibold text-gray-900">
              {props.name}
            </p>
            <p>{props.distance}</p>
            <p>{props.date}</p>
            <div className="flex gap-1">
              <p>${props.price}/</p>
              <p>{props.night}</p>
            </div>
          </div>
        </Link>
      </div>
  );
};

export default CardItems;
