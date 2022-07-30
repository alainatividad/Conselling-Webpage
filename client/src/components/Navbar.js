import React, { useState } from "react";
import { Link } from "react-router-dom";
import { Menu, Image, Divider } from "semantic-ui-react";
import { useUserContext } from "../utils/UserContext";
import Auth from "../utils/auth";
// import header from "../assets/img/kamalayan-header-noborder.png";

const AppNavbar = () => {
  // get user state
  const [state] = useUserContext();
  const [activeItem, setActiveItem] = useState("home");

  const handleItemClick = async (name) => {
    setActiveItem(name);
  };

  return (
    <div>
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
            active={activeItem === "home"}
            onClick={() => handleItemClick("home")}
          />
          <Menu.Item
            as={Link}
            to="/about"
            name="about"
            active={activeItem === "about"}
            onClick={() => handleItemClick("about")}
          />
          <Menu.Item
            as={Link}
            to="/services"
            name="services"
            active={activeItem === "services"}
            onClick={() => handleItemClick("services")}
          />
          <Menu.Item
            as={Link}
            to="/contact-us"
            name="contact us"
            active={activeItem === "contact"}
            onClick={() => handleItemClick("contact")}
          />
          {/* if user is logged in show profile and logout */}
          {state.loggedIn ? (
            <>
              <Menu.Item
                as={Link}
                to="/profile"
                name="profile"
                active={activeItem === "profile"}
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
                active={activeItem === "signup"}
                onClick={() => handleItemClick("signup")}
              />
              <Menu.Item
                as={Link}
                to="/login"
                name="login"
                active={activeItem === "login"}
                onClick={() => handleItemClick("login")}
              />
            </>
          )}
        </Menu.Menu>
      </Menu>
      <Divider section />
    </div>
  );
};

export default AppNavbar;
