import React, { useEffect, useState } from "react";
import { Link } from "react-router-dom";
import { Menu, Image, Divider } from "semantic-ui-react";
import Auth from "../utils/auth";
import { getFromLocalStorage, storeInLocalStorage } from "../utils/helper";
// import header from "../assets/img/kamalayan-header-noborder.png";

const AppNavbar = () => {
  const style = {
    h2: {
      margin: "2em 0em 2em",
    },
    h3: {
      padding: "2em",
    },
    last: {
      marginBottom: "300px",
    },
  };

  // get user state
  const [state, setState] = useState("home");
  // const [state, dispatch] = useUserContext();
  let currentPage = getFromLocalStorage("current_page");
  useEffect(() => {
    if (!currentPage) {
      currentPage = "home";
      storeInLocalStorage({ name: "current_page", value: "home" });
    }
    handleItemClick(currentPage);
  }, [currentPage, state]);

  const handleItemClick = async (name) => {
    setState(name);
    storeInLocalStorage({ name: "current_page", value: name });
    // dispatch({ type: UPDATE_CURRPAGE, payload: name });
  };

  return (
    <>
      <Image
        src={"/images/kamalayan-header-noborder.png"}
        size="large"
        style={style.h3}
        centered
      />
      <Menu secondary stackable>
        <Menu.Menu position="center">
          <Menu.Item
            as={Link}
            to="/"
            name="home"
            // active={state.currentPage === "home"}
            active={currentPage === "home"}
            onClick={() => handleItemClick("home")}
          />
          <Menu.Item
            as={Link}
            to="/about"
            name="about"
            // active={state.currentPage === "about"}
            active={currentPage === "about"}
            onClick={() => handleItemClick("about")}
          />
          <Menu.Item
            as={Link}
            to="/services"
            name="services"
            // active={state.currentPage === "services"}
            active={currentPage === "services"}
            onClick={() => handleItemClick("services")}
          />
          <Menu.Item
            as={Link}
            to="/contact-us"
            name="contact us"
            // active={state.currentPage === "contact"}
            active={currentPage === "contact"}
            onClick={() => handleItemClick("contact")}
          />
          {/* if user is logged in show profile and logout */}
          {Auth.loggedIn() ? (
            <>
              <Menu.Item
                as={Link}
                to="/profile"
                name="profile"
                // active={state.currentPage === "profile"}
                active={currentPage === "profile"}
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
                // active={state.currentPage === "signup"}
                active={currentPage === "signup"}
                onClick={() => handleItemClick("signup")}
              />
              <Menu.Item
                as={Link}
                to="/login"
                name="login"
                // active={state.currentPage === "login"}
                active={currentPage === "login"}
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
