import { useState } from "react";
import LargeNotfication from "./LargeNotfication";
import Menu from "./Menu";
import AddGuests from "./AddGuests";
import Destinations from "./Destinations";
import IconNav from "./IconNav";
import { useDispatch } from "react-redux";
import { googleUserActions } from "../../store/googleUser-slice";
import { gitUserActions } from "../../store/gitUser-slice";
import { phoneUserActions } from "../../store/phoneUser-slice";
import MobileNav from "./MobileNav";

const GUESTS = [
  {
    id: "1",
    description: "Adults",
    age: "Age 13 or above",
  },
  {
    id: "2",
    description: "Children",
    age: "Ages 2-12",
  },
  {
    id: "3",
    description: "Infants",
    age: "Under 2",
  },
  {
    id: "4",
    description: "Pets",
    age: "Bringing a service animal?",
  },
];

const MainNavigation = (props) => {
  const [showLargeNo, setShowLargeNo] = useState(false);
  const [toggleMenu, setToggleMenu] = useState(false);
  const [toggleGuests, setToggleGuests] = useState(false);
  const [showMaps, setShowMaps] = useState(false);
  const dispatch = useDispatch();

  const toggleMapsHandler = () => {
    setShowMaps((toggle) => !toggle);
  };
  const showLargeNoHandler = () => {
    setShowLargeNo(true);
  };
  const hideLargeNoHandler = (e) => {
    e.preventDefault();
    setShowLargeNo(false);
  };
  const onToggleMenu = () => {
    setToggleMenu((toggle) => !toggle);
  };
  const ontoggleGuests = () => {
    setToggleGuests((toggle) => !toggle);
  };
  const logOutHandler = () => {
    dispatch(googleUserActions.setGoogleUser(false));
    dispatch(gitUserActions.setGitleUser(false));
    dispatch(phoneUserActions.setPhoneUser(false));
  };
  return (
    <div className="">
    <MobileNav/>
      <LargeNotfication
        toggleMaps={toggleMapsHandler}
        largeNo={showLargeNo}
        showLargeNo={showLargeNoHandler}
        hideLargeNo={hideLargeNoHandler}
        toggleMenu={onToggleMenu}
        onToggleGuests={ontoggleGuests}
      />
      <IconNav />
      {toggleMenu && (
        <Menu showModal={props.onShowModal} logOut={logOutHandler} />
      )}
      {toggleGuests && (
        <div className="  absolute right-[16%] top-[12rem] grid grid-rows-4 gap-2 bg-white shadow-sm shadow-gray-400 rounded-xl h-[23rem] w-[25rem]">
          {GUESTS.map((guest) => (
            <AddGuests
              key={guest.id}
              description={guest.description}
              age={guest.age}
            />
          ))}
        </div>
      )}
      {showMaps && <Destinations />}
      
    </div>
  );
};

export default MainNavigation;
