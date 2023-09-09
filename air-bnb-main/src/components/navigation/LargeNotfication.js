import React, { useEffect, useState, Fragment } from "react";
import Logo from "../../assets/logo.png";
import SmallNotification from "./SmallNotification";
import { useSelector } from "react-redux";
const LargeNotfication = (props) => {
  const phoneIsAuthenticated = useSelector((state) => state.phone.phoneUser);
  const googleIsAuthenticated = useSelector((state) => state.google.googleUser);
  const githubIsAuthenticated = useSelector((state) => state.git.gitUser);
  const userIsAuthenticated =
    phoneIsAuthenticated || googleIsAuthenticated || githubIsAuthenticated;
  const [globeisTouched, setGlobeIsTouched] = useState(false);
  useEffect(() => {
    setTimeout(() => {
      setGlobeIsTouched(false);
    }, 5000);
  }, [globeisTouched]);
  const clickGlobe = () => {
    setGlobeIsTouched(true);
  };

  return (
    <Fragment>
    <div className="hidden lg:block lg:visible  lg:fixed lg:w-full lg:bg-white lg:top-0 lg:pb-[1rem] lg:z-40">
      <div className="w-full flex justify-around mt-[2rem] text-gray-700 cursor-pointer ">
        <div>
          <img src={Logo} alt="Airbnb" className="w-[6rem] h-[2rem]" />
        </div>

        {props.largeNo && (
          <div className="flex gap-7 font-semibold items-center">
            <h2 className=" border-b-2 border-b-slate-800">Stays</h2>
            <h2 className="border-b-2 border-b-slate-800">Experiences</h2>
            <h2 className=" active:border-b-2 active:border-b-slate-800 transition-all duration-1000 ease-in-out active:translate-x-32">
              Online Experiences
            </h2>
          </div>
        )}
        {!props.largeNo && (
          <SmallNotification showLargeNo={props.showLargeNo} />
        )}

        <div className="flex gap-7 items-center">
          <div className="font-semibold flex gap-5">
            {!userIsAuthenticated ? (
              <h1>Airbnb your home</h1>
            ) : (
              <h1 className="font-semibold text-lg font-nun text-red-900">
                Welcome Back!
              </h1>
            )}
            <div onClick={clickGlobe}>
              <svg
                xmlns="http://www.w3.org/2000/svg"
                fill="none"
                viewBox="0 0 24 24"
                strokeWidth={1.5}
                stroke="currentColor"
                className={`w-6 h-6 ${
                  globeisTouched ? "animate-bounce text-red-900" : null
                }`}
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  d="M12 21a9.004 9.004 0 008.716-6.747M12 21a9.004 9.004 0 01-8.716-6.747M12 21c2.485 0 4.5-4.03 4.5-9S14.485 3 12 3m0 18c-2.485 0-4.5-4.03-4.5-9S9.515 3 12 3m0 0a8.997 8.997 0 017.843 4.582M12 3a8.997 8.997 0 00-7.843 4.582m15.686 0A11.953 11.953 0 0112 10.5c-2.998 0-5.74-1.1-7.843-2.918m15.686 0A8.959 8.959 0 0121 12c0 .778-.099 1.533-.284 2.253m0 0A17.919 17.919 0 0112 16.5c-3.162 0-6.133-.815-8.716-2.247m0 0A9.015 9.015 0 013 12c0-1.605.42-3.113 1.157-4.418"
                />
              </svg>
            </div>
          </div>
          <div className="border border-gray-400 shadow-sm shadow-gray-300 w-[8rem] h-[3.5rem] rounded-full flex items-center justify-around gap-[2rem] ">
            <div onClick={props.toggleMenu}>
              <svg
                xmlns="http://www.w3.org/2000/svg"
                fill="none"
                viewBox="0 0 24 24"
                strokeWidth={1.5}
                stroke="currentColor"
                className="w-10 h-10"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  d="M3.75 6.75h16.5M3.75 12h16.5m-16.5 5.25h16.5"
                />
              </svg>
            </div>
            <div>
              {!userIsAuthenticated ? (
                <div>
                  <img
                    src="https://plantpathology.tamu.edu/wp-content/uploads/sites/19/2018/08/male-silhouette-avatar-profile-picture.jpg"
                    alt="offline"
                    className="rounded-full border h-[3rem] w-[4rem]"
                  />
                </div>
              ) : (
                <div>
                  <img
                    src="https://pub-static.fotor.com/assets/projects/pages/19548be9ec56475db61f952c7b3351cb/fotor-f86d6beeeb774067aec8acf9403f5084.jpg"
                    alt="user-img"
                    className="rounded-full border h-[3rem] w-[4rem]"
                  />
                </div>
              )}
            </div>
          </div>
        </div>
      </div>

      {props.largeNo && (
        <div className="  absolute top-[6rem] left-[6rem] flex gap-[3rem] bg-gray-300 w-[70%] py-4 px-2  rounded-full text-sm shadow-sm shadow-gray-400 z-40">
          <div
            onClick={props.toggleMaps}
            className="mr-[2rem] pl-[1rem] w-[15rem] hover:bg-white group rounded-full transition-all duration-200 ease-in cursor-pointer"
          >
            <label for="destination">Where</label> <br />
            <input
              type="text"
              placeholder="Search destinations"
              className="group-hover:bg-white transition-all duration-200 ease-in cursor-pointer bg-gray-300  outline-none focus:border-blue-900 focus:border"
            />
          </div>
          <div className="hover:bg-white group px-2  border-l hover:rounded-full transition-all duration-200 ease-in cursor-pointer">
            <label for="check-in">Check in</label> <br />
            <input
              type="date"
              className="bg-gray-300 transition-all duration-200 ease-in cursor-pointer outline-none group-hover:bg-white "
            />
          </div>
          <div className=" group hover:bg-white px-2 border-l hover:rounded-full border-r transition-all duration-200 ease-in cursor-pointer">
            <label for="check-out">Check out</label> <br />
            <input
              type="date"
              className="bg-gray-300 outline-none group-hover:bg-white transition-all duration-200 ease-in cursor-pointer"
            />
          </div>
          <div className="flex focus:bg-white focus:border-white  gap-8 hover:bg-white hover:border hover:border-white p-2 rounded-full transition-all duration-200 ease-in cursor-pointer">
            <div onClick={props.onToggleGuests}>
              <label for="check-out">Who</label> <br />
              <span>Add guests</span>
            </div>

            <button
              onClick={props.hideLargeNo}
              className="font-semibold flex items-center gap-2 text-white bg-gradient-to-l from-pink-700 via-red-700 to-red-700 hover:bg-gradient-to-l hover:from-pink-800 hover:via-red-800 hover:to-red-800 px-4 text-md rounded-full "
            >
              <svg
                xmlns="http://www.w3.org/2000/svg"
                fill="none"
                viewBox="0 0 24 24"
                strokeWidth={1.5}
                stroke="currentColor"
                className="w-6 h-6 font-bold"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  d="M21 21l-5.197-5.197m0 0A7.5 7.5 0 105.196 5.196a7.5 7.5 0 0010.607 10.607z"
                />
              </svg>
              Search
            </button>
          </div>
        </div>
      )}
    </div>
    </Fragment>
  );
};

export default LargeNotfication;
