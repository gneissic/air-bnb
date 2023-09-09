import React from "react";
import {useRouteError} from "react-router-dom"

const Error = () => {
  let title = "something went wrong"
  let message = "check your internet connection"
    const error = useRouteError();

    if (error.status === 500) {
      title = "Invalid Url";
      message = "something went wrong";
    }
    if (error.status === 404) {
      title = "Failed to fetch";
      message = "something went wrong";
    }
    if (error.status === 503) {
      title = "Failed To Fetch";
      message = "Check your internet connection";
    }
  return (
    <div className="text-center text-white bg-slate-900 font-nun pt-[3rem] h-[100vh] w-full">
      <h1 className="text-[4rem]">{title}</h1>
      <p className="text-[2rem]">{message}</p>
    </div>
  );
};

export default Error;
