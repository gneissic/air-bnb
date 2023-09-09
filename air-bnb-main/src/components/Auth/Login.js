import { Fragment, useState } from "react";
import ReactDOM from "react-dom";
import {
  signInWithPopup,
  RecaptchaVerifier,
  signInWithPhoneNumber,
} from "firebase/auth";
import {
  AiFillFacebook,
  AiFillGoogleCircle,
  AiFillGithub,
  AiFillMail,
} from "react-icons/ai";
import { useDispatch } from "react-redux";
import { authActions } from "../../store/auth-slice";
import {
  auth,
  googleProvider,
  facebookProvider,
  githubProvider,
} from "./FirebaseConfig";
import PhoneInput from "react-phone-number-input";
import "react-phone-number-input/style.css";
import { Form, useNavigate } from "react-router-dom";
import { googleUserActions } from "../../store/googleUser-slice";
import { phoneUserActions } from "../../store/phoneUser-slice";
import { gitUserActions } from "../../store/gitUser-slice";
import { facebookUserActons } from "../../store/facebookUser";
const Backdrop = () => {
  const dispatch = useDispatch();
  const hideModalHandler = () => {
    dispatch(authActions.onHideModal());
  };
  return (
    <div
      onClick={hideModalHandler}
      className="fixed inset-0 bg-black/50 z-40"
    ></div>
  );
};
const ModalOverlay = () => {
  const [number, setNumber] = useState();
  const [flag, setFlag] = useState(false);
  const [otp, setOtp] = useState("");
  const [confirmOtp, setConfrimOtp] = useState();
  const [error, setError] = useState("");
  const dispatch = useDispatch();
  const navigate = useNavigate();
  const verifyCaptcha = (number) => {
    const recaptchaVerifier = new RecaptchaVerifier(
      auth,
      "recaptcha-container",
      {}
    );
    const appVerifier = recaptchaVerifier;
    return signInWithPhoneNumber(auth, number, appVerifier);
  };

  const sendOtp = async (e) => {
    e.preventDefault();
    try {
      const response = await verifyCaptcha(number);
      setConfrimOtp(response);
      setFlag(true);
    } catch (error) {
      setError("something went wrong");
    }
  };
  const changeOtpHandler = (e) => {
    e.preventDefault();
    setOtp(e.target.value);
  };
  const verifyOtp = async (e) => {
    e.preventDefault();
    if (otp === "" || otp === null) {
      return;
    }
    try {
      await confirmOtp.confirm(otp);
      dispatch(phoneUserActions.setPhoneUser(true));
      dispatch(authActions.onHideModal());
      navigate("/");
    } catch (error) {
      setError("something went wrong");
    }
  };

  const handleFacebookLogin = () => {
    signInWithPopup(auth, facebookProvider)
      .then((result) => {
        dispatch(facebookUserActons.setFacebookUser(true));
      })
      .catch((err) => {
        setError("something went wrong");
      });
  };
  const handleGoogleLogin = () => {
    signInWithPopup(auth, googleProvider)
      .then((result) => {
        dispatch(googleUserActions.setGoogleUser(true));
        navigate("/");
        dispatch(authActions.onHideModal());
      })
      .catch((err) => {
        setError(err.message);
      });
  };
  const handleGithubLogin = () => {
    signInWithPopup(auth, githubProvider)
      .then((result) => {
        console.log(result.user);
        dispatch(gitUserActions.setGitleUser(true));
        navigate("/");
      })
      .catch((err) => {
        setError(err.message);
      });
  };

  const hideModalHandler = () => {
    dispatch(authActions.onHideModal());
  };

  return (
    <div className="fixed z-40 bg-white left-[30%] top-[6%] border rounded-md w-[50%]">
      <div className="cursor-pointer h-[32rem] overflow-scroll">
        <div className="font-nun text-black font-semibold flex items-center gap-[12rem] py-[1rem] border-b border-gray-300 ">
          <h1
            onClick={hideModalHandler}
            className="pl-5 text-gray-600 font-semibold"
          >
            X
          </h1>
          <h1 className="font-bold">Login or sign up</h1>
        </div>
        <div className="py-3 pl-2">
          <h1 className="nun text-3xl">Welcome to Airbnb</h1>
        </div>
        <Form onSubmit={sendOtp}>
          <div className="border border-gray-500 mt-[1rem] rounded-md w-[80%] mx-auto">
            <select
              id="country-code"
              className="bg-white py-3 ml-2 border-b  w-[95%] border-gray-500 outline-none"
            >
              <option value="">Nigeria(+234)</option>
              <option value="+1">United States (+1)</option>
              <option value="+44">United Kingdom (+44)</option>
            </select>
            <div>
              {!flag && (
                <div>
                  <PhoneInput
                    placeholder="phone number"
                    className="font-nun w-[95%] outline-none py-3 pl-2 rounded-md"
                    value={number}
                    onChange={setNumber}
                  />
                </div>
              )}

              {flag && (
                <div>
                  <input
                    type="text"
                    placeholder="OTP"
                    className="font-nun w-[95%] outline-none py-3 pl-2 rounded-md"
                    value={otp}
                    onChange={changeOtpHandler}
                  />
                </div>
              )}
            </div>
          </div>
          {!flag && (
            <p className="font-nun text-sm w-[92%] pl-2 pt-2 text-black">
              We'll call you or text you to confirm your number. Standard
              messages and data rates may apply
            </p>
          )}
          <p className="text-sm text-red-900 font-nun">{error}</p>
          {flag && (
            <p className="font-nun text-sm text-center pt-2 text-black">
              Enter OTP sent to your mobile number
            </p>
          )}
          {!flag && (
            <div
              id="recaptcha-container"
              className="mx-auto w-[76%] mt-2"
            ></div>
          )}
          <div className="w-full">
            {!flag && (
              <button className="text-white font-semibold font-mont w-[80%] ml-[3rem] rounded-md text-center py-2 my-3 bg-gradient-to-l from-pink-700 via-red-700 to-red-700 hover:bg-gradient-to-l hover:from-pink-800 hover:via-red-800 hover:to-red-800">
                Continue
              </button>
            )}
            {flag && (
              <button
                type="button"
                onClick={verifyOtp}
                className="text-white font-semibold font-mont w-[80%] ml-[3rem] rounded-md text-center py-2 my-3 bg-gradient-to-l from-pink-700 via-red-700 to-red-700 hover:bg-gradient-to-l hover:from-pink-800 hover:via-red-800 hover:to-red-800"
              >
                Submit OTP
              </button>
            )}
          </div>
        </Form>

        <div>
          <p className="text-center">or</p>
        </div>
        <div className="grid gap-y-2 pb-2 pl-2">
          <div className="flex border-[1.5px] rounded-md border-gray-700 w-[80%] mx-auto gap-[7.4rem] py-1">
            <div>
              <AiFillGoogleCircle className="text-red-900 h-7 w-7 ml-2" />
            </div>
            <p onClick={handleGoogleLogin} className="text-black font-nun">
              Continue with Google
            </p>
          </div>
          <div className="flex border-[1.5px] rounded-md border-gray-700 w-[80%] mx-auto gap-[7rem] py-1">
            <div>
              <AiFillFacebook className="text-blue-900 h-7 w-7 ml-2" />
            </div>
            <p onClick={handleFacebookLogin} className="text-black font-nun">
              Continue with facebook
            </p>
          </div>

          <div className="flex border-[1.5px] rounded-md border-gray-700 w-[80%] mx-auto gap-[7.4rem] py-1">
            <div>
              <AiFillGithub className="text-slate-900 h-7 w-7 ml-2" />
            </div>
            <p onClick={handleGithubLogin} className="text-black font-nun">
              Continue with github
            </p>
          </div>
          <div className="flex border-[1.5px] rounded-md border-gray-700 w-[80%] mx-auto gap-[7.4rem] py-1">
            <div>
              <AiFillMail className="text-slate-900 h-7 w-7 ml-2" />
            </div>
            <p className="text-black font-nun">Continue with Email</p>
          </div>
        </div>
      </div>
    </div>
  );
};

const Login = () => {
  return (
    <Fragment>
      {ReactDOM.createPortal(<Backdrop />, document.getElementById("overlays"))}
      {ReactDOM.createPortal(
        <ModalOverlay />,
        document.getElementById("overlays")
      )}
    </Fragment>
  );
};
export default Login;
