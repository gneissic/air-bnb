import React, { useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { authActions } from "../../store/auth-slice";
import { Link, Form } from "react-router-dom";
import DatePicker from "react-datepicker"
import "react-datepicker/dist/react-datepicker.css";
import { bookingSliceActions } from "../../store/booking-slice";
const DetailCard = ({ data }) => {
  const [checkInDate, setCheckInDate] = useState(new Date())
  const [checkOutDate, setCheckOutDate] = useState(new Date())
  const [checkInstays, setCheckInStays] = useState(0)
  const [checkOutStays, setCheckOutStays] = useState(0)
  const phoneIsAuthenticated = useSelector((state) => state.phone.phoneUser);
  const googleIsAuthenticated = useSelector((state) => state.google.googleUser);
  const githubIsAuthenticated = useSelector((state) => state.git.gitUser);
  const userIsAuthenticated =
    phoneIsAuthenticated || googleIsAuthenticated || githubIsAuthenticated;
  const dispatch = useDispatch();
  const showModalHandler = (e) => {
    e.preventDefault();
    dispatch(authActions.onShowModal());
  };

  const onChangeCheckInDate = (date)=>{
setCheckInDate(date)
const getDate = date.getDate()
setCheckInStays(getDate)
  }
  const onChangeCheckOutDate = (date)=>{
    setCheckOutDate(date)
    const getDate = date.getDate()
    setCheckOutStays(getDate)
  }
  const noOfDays = checkOutStays - checkInstays;
  const nightSpent = data.price * noOfDays
  const weeklyStayDiscount = -72
  const airbnbFee = 177
  const totalFee = nightSpent + weeklyStayDiscount + airbnbFee

  const onSendAirbnbDetails = ()=>{
    dispatch(bookingSliceActions.onSendItems({noOfDays:noOfDays, 
      nightSpent, 
      weeklyStayDiscount,
      airbnbFee,
      totalFee,}))
  }
  

  
  return (
    <div>
      <Form>
        <div className=" hidden lg:block lg:h-[30rem] lg:border lg:rounded-md lg:bg-white lg:w-[33%] lg:absolute lg:right-7 lg:top-[44rem] lg:shadow-sm lg:shadow-black/50">
          <div className=" flex justify-around pt-[2rem]">
            <div className="font-semibold text-black/80 font-pops text-lg">
              ${data.price}/{data.night}
            </div>
            <div className="flex gap-2 items-center">
              <svg
                xmlns="http://www.w3.org/2000/svg"
                fill="none"
                viewBox="0 0 24 24"
                strokeWidth={1.5}
                stroke="currentColor"
                className="w-4 h-4 fill-black/90"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  d="M11.48 3.499a.562.562 0 011.04 0l2.125 5.111a.563.563 0 00.475.345l5.518.442c.499.04.701.663.321.988l-4.204 3.602a.563.563 0 00-.182.557l1.285 5.385a.562.562 0 01-.84.61l-4.725-2.885a.563.563 0 00-.586 0L6.982 20.54a.562.562 0 01-.84-.61l1.285-5.386a.562.562 0 00-.182-.557l-4.204-3.602a.563.563 0 01.321-.988l5.518-.442a.563.563 0 00.475-.345L11.48 3.5z"
                />
              </svg>
              <p className="font-semibold text-black/80 font-pops text-lg">
                5.0
              </p>
              <p className="font-semibold text-black/80 font-pops text-lg">
                5 reviews
              </p>
            </div>
          </div>

          <div className="border rounded-md  border-gray-600 w-[80%] mx-auto p-3 mt-[1rem] text-gray-900 font-semibold cursor-pointer">
            <div className="flex border-b pb-2 mr-[1rem] border-gray-700 cursor-pointer">
              <div className="grid">
                <label htmlFor="check-IN">CHECK IN</label>
                <DatePicker onChange={onChangeCheckInDate} selected={checkInDate} className="outline-none" />
              </div>
              <div className="grid border-l pl-5 border-gray-700">
                <label htmlFor="CHECK-OUT">CHECK OUT</label>
                <DatePicker onChange={onChangeCheckOutDate} selected={checkOutDate} className="outline-none"/>
              </div>
            </div>

            <div>
              <div className="flex justify-between items-center">
                <div>
                  <h2 className="font-pops">GUESTS</h2>
                  <p>1 guest</p>
                </div>

                <div>
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    fill="none"
                    viewBox="0 0 24 24"
                    strokeWidth={1.5}
                    stroke="currentColor"
                    className="w-6 h-6"
                  >
                    <path
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      d="M19.5 8.25l-7.5 7.5-7.5-7.5"
                    />
                  </svg>
                </div>
              </div>
            </div>
          </div>
          <div>
            {!userIsAuthenticated ? (
              <button
                onClick={showModalHandler}
                className="w-[70%] mt-[1.5rem] mx-auto py-[10px] ml-[5rem] rounded-[5px] text-white font-semibold font-nun bg-gradient-to-l from-pink-700 via-red-700 to-red-700 hover:bg-gradient-to-l hover:from-pink-800 hover:via-red-800 hover:to-red-800"
              >
                Reserve
              </button>
            ) : (
             <Link to={"bookings"} > <button
                type="button"
                onClick={onSendAirbnbDetails}
                className="w-[70%] mt-[1.5rem] mx-auto py-[10px] ml-[5rem] rounded-[5px] text-white font-semibold font-nun bg-gradient-to-l from-pink-700 via-red-700 to-red-700 hover:bg-gradient-to-l hover:from-pink-800 hover:via-red-800 hover:to-red-800"
              >
                Reserve{" "}
              </button>
              </Link>

            )}
            <p className="text-gray-700 text-center mt-2">
              You won't be charged yet
            </p>
          </div>
          <div className="  font-nun text-black  pb-[1rem] cursor-pointer">
            <div className="flex justify-between px-[2rem]">
              <p className="underline">${data.price} x {noOfDays} nights</p>
              <p>${nightSpent}</p>
            </div>
            <div className="flex justify-between px-[2rem]">
              <p>Weekly stay discount</p>
              <p className="text-green-900">-$72</p>
            </div>
            <div className="flex justify-between px-[2rem]">
              <p className="underline">Airbnb sevice fee</p>
              <p>$177</p>
            </div>
            <hr className="w-[85%] mx-auto mt-[1rem] border-gray-400" />
            <div className="flex justify-between px-[2rem] pt-[1rem]">
              <p>Total before taxes</p>
              <p>${totalFee}</p>
            </div>
          </div>
        </div>
      </Form>
    </div>
  );
};

export default DetailCard;
