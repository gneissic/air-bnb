import React, { useState } from "react";
import MainNavigation from "./navigation/MainNavigation";
import { Outlet } from "react-router-dom";
import Login from "./Auth/Login";
import { useSelector } from "react-redux";
import WelcomeBackModal from "./DetailItems/WelcomeBackModal";
const Root = () => {
  const [showWelcomeModal, setWelcomeModal] = useState(true);
  const phoneIsAuthenticated = useSelector((state) => state.phone.phoneUser);
  const googleIsAuthenticated = useSelector((state) => state.google.googleUser);
  const githubIsAuthenticated = useSelector((state) => state.git.gitUser);
  const userIsAuthenticated =
    phoneIsAuthenticated || googleIsAuthenticated || githubIsAuthenticated;
  const welcomeModalShouldBeShown = userIsAuthenticated && showWelcomeModal;
  const showModal = useSelector((state) => state.auth.showModal);
  const onCloseWelcomeModalHandler = () => {
    setWelcomeModal(false);
  };
  return (
    <div>
      <MainNavigation />
      {welcomeModalShouldBeShown && (
        <WelcomeBackModal closeWelcomeModal={onCloseWelcomeModalHandler} />
      )}
      <main>
        {showModal && <Login />}
        <Outlet />
      </main>
    </div>
  );
};

export default Root;
