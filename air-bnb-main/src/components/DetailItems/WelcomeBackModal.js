import React from "react";
import Logo from "../../assets/logo.png";
const WelcomeBackModal = (props) => {
  return (
    <React.Fragment>
      <div className="fixed inset-0 bg-black/40 z-40"></div>
      <div className="bg-white  border rounded-md w-[43%] h-[30rem] pl-3 fixed z-40 top-[10%] left-[27%]">
        <div className="my-[1.5rem]">
          <img src={Logo} alt="welcome" className="w-[5rem] h-10" />
        </div>
        <div>
          <p className="text-sm text-black font-nun font-bold pb-2">
            Our community commitment
          </p>
          <h1 className="text-2xl text-black font-bold font-nun pb-2 w-[90%]">
            Airbnb is a community where anyone can belong
          </h1>
          <h3 className="text-md font-nun text-black font-semibold pb-2">
            To ensure this, we're asking you to commit to the following:
          </h3>
          <p className="text-md font-nun text-black font-semibold">
            I agree to treat everyone in the Airbnb community-regardless of
            their race, religion, national origin, thnicity, skin color,
            disability, sex, gender identity, sexual orientation or age-with
            respect, and without judgment or bias.
          </p>
        </div>
        <div className="pb-3 mt-[1rem]">
          <button
            onClick={props.closeWelcomeModal}
            className=" w-[70%] mt-[1.5rem] mx-auto py-[10px] ml-[5rem] rounded-[5px] text-white font-semibold font-nun bg-gradient-to-l from-pink-700 via-red-700 to-red-700 hover:bg-gradient-to-l hover:from-pink-800 hover:via-red-800 hover:to-red-800"
          >
            Agree and continue
          </button>
          <button className="  w-[70%] mt-[1.5rem] mx-auto py-[10px] ml-[5rem] rounded-[5px] text-black font-bold font-nun bg-white border border-slate-800">
            Decline
          </button>
        </div>
      </div>
    </React.Fragment>
  );
};

export default WelcomeBackModal;
