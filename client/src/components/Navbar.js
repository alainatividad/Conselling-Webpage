import React, { useState } from "react";
import { Link } from "react-router-dom";
import { Menu, Image, Divider } from "semantic-ui-react";
import { useUserContext } from "../utils/UserContext";
import { UPDATE_CURRPAGE } from "../utils/actions";
import Auth from "../utils/auth";
// import header from "../assets/img/kamalayan-header-noborder.png";

const AppNavbar = () => {
  // get user state
  const [state, dispatch] = useUserContext();

  const handleItemClick = async (name) => {
    dispatch({ type: UPDATE_CURRPAGE, payload: name });
  };

  return (
    <>
      <Image
        src={window.location.origin + "/img/kamalayan-header-noborder.png"}
        size="large"
        // fluid
        centered
      />
      <Menu secondary stackable>
        <Menu.Menu position="center">
          <Menu.Item
            as={Link}
            to="/"
            name="home"
            active={state.currentPage === "home"}
            onClick={() => handleItemClick("home")}
          />
          <Menu.Item
            as={Link}
            to="/about"
            name="about"
            active={state.currentPage === "about"}
            onClick={() => handleItemClick("about")}
          />
          <Menu.Item
            as={Link}
            to="/services"
            name="services"
            active={state.currentPage === "services"}
            onClick={() => handleItemClick("services")}
          />
          <Menu.Item
            as={Link}
            to="/contact-us"
            name="contact us"
            active={state.currentPage === "contact"}
            onClick={() => handleItemClick("contact")}
          />
          {/* if user is logged in show profile and logout */}
          {state.loggedIn ? (
            <>
              <Menu.Item
                as={Link}
                to="/profile"
                name="profile"
                active={state.currentPage === "profile"}
                onClick={() => handleItemClick("profile")}
              />
              <Menu.Item name="logout" onClick={() => Auth.logout()} />
            </>
          ) : (
            <>
              <Menu.Item
                as={Link}
                to="/sign-up"
                name="sign up"
                active={state.currentPage === "signup"}
                onClick={() => handleItemClick("signup")}
              />
              <Menu.Item
                as={Link}
                to="/login"
                name="login"
                active={state.currentPage === "login"}
                onClick={() => handleItemClick("login")}
              />
            </>
          )}
        </Menu.Menu>
      </Menu>
      <Divider section />
    </>
  );
};

export default AppNavbar;
