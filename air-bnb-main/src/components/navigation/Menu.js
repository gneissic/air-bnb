import React, { Fragment, useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { authActions } from "../../store/auth-slice";
import { BsDot } from 'react-icons/bs';
import { Link } from "react-router-dom";


const Menu = (props) => {
  const [tripsHasNotification, setTripsHasNotification] = useState("false")
  const phoneIsAuthenticated = useSelector((state) => state.phone.phoneUser);
  const googleIsAuthenticated = useSelector((state) => state.google.googleUser);
  const githubIsAuthenticated = useSelector((state) => state.git.gitUser);
  const trips = useSelector((state)=> state.trips.tripData)
  useEffect(()=>{
    if (trips.length > 0) {
      setTripsHasNotification(true)
    }else{
      setTripsHasNotification(false)
    }
  },[trips])
  
  const userIsAuthenticated =
    phoneIsAuthenticated || googleIsAuthenticated || githubIsAuthenticated;
  const dispatch = useDispatch();
  const showModalHandler = () => {
    dispatch(authActions.onShowModal());
  };
  return (
    <Fragment>
      {!userIsAuthenticated ? (
        <div className="absolute right-[1.5%] top-[6rem] grid gap-5 bg-white shadow-sm  shadow-gray-400 border rounded-lg h-[14rem] w-[14rem] pt-2 cursor-pointer z-20">
          <p
            onClick={showModalHandler}
            className="hover:bg-gray-300 w-full pl-2 transition-all duration-200 ease-in"
          >
            Log in
          </p>
          <p
            onClick={showModalHandler}
            className="hover:bg-gray-300 w-full pl-2 transition-all duration-200 ease-in"
          >
            Sign up
          </p>
          <p className="hover:bg-gray-300 w-full pl-2 transition-all duration-200 ease-in">
            Airbnb your home
          </p>
          <p className="hover:bg-gray-300 w-full pl-2 transition-all duration-200 ease-in">
            Help
          </p>
        </div>
      ) : (
        <div className="absolute right-[1.5%] top-[6rem] grid gap-5 bg-white shadow-sm  shadow-gray-400 border rounded-lg w-[14rem] pt-2 cursor-pointer z-20">
          <Link to="messages">
          <div className="relative">
          <p className="hover:bg-gray-300 w-full pl-2  tr1nsition-all duration-200 ease-in">
            Messages
          </p>
          <BsDot className="absolute text-red-600 font-bold w-8 h-8 right-[56%] -top-2"/>
          </div>
          </Link>
         
          <p
            className="hover:bg-gray-300 w-full pl-2 py-1 transition-all duration-200 ease-in"
          >
            Notifications

          </p>
          <div className="relative">
          <Link to={"trips"}> <p className="hover:bg-gray-300 w-full pl-2 py-1 transition-all duration-200 ease-in">
            Trips
          </p></Link>
            {tripsHasNotification&&<BsDot className="absolute text-red-600 font-bold w-8 h-8 left-[13%] -top-2"/>}</div>
         
          <p className="hover:bg-gray-300 w-full pl-2 py-1 transition-all duration-200 ease-in">
            Wishlists
          </p>
          <p className="hover:bg-gray-300 w-full pl-2 py-1 transition-all duration-200 ease-in">
            Airbnb your home
          </p>
          <p className="hover:bg-gray-300 w-full pl-2 py-1 transition-all duration-200 ease-in">
            Account
          </p>
          <p className="hover:bg-gray-300 w-full pl-2 py-1 transition-all duration-200 ease-in">
            Help Center
          </p>
          <p
            onClick={props.logOut}
            className="hover:bg-gray-300 w-full pl-2 py-1 transition-all duration-200 ease-in"
          >
            Log out
          </p>
        </div>
      )}
    </Fragment>
  );
};

export default Menu;
