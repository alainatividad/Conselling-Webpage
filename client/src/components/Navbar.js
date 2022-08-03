import React, { useEffect, useState } from "react";
import { Link, useLocation } from "react-router-dom";
import { Menu, Image, Divider } from "semantic-ui-react";
import Auth from "../utils/auth";

const AppNavbar = () => {
  // from https://bobbyhadz.com/blog/react-router-get-current-route#:~:text=Use%20the%20useLocation()%20hook,pathname%20.
  const location = useLocation();
  const [currentPage, setCurrentPage] = useState(location.pathname);
  useEffect(() => {
    setCurrentPage(location.pathname);
  }, [location.pathname]);

  const handleItemClick = async (name) => {
    setCurrentPage(name);
  };

  return (
    <>
      <Image
        src={"/images/kamalayan-header-noborder.png"}
        size="large"
        style={{
          padding: "2em",
        }}
        centered
      />
      <Menu secondary stackable size="huge">
        <Menu.Menu position="center">
          <Menu.Item
            as={Link}
            to="/"
            name="home"
            active={currentPage.includes("home")}
            onClick={() => handleItemClick("home")}
          />
          <Menu.Item
            as={Link}
            to="/about"
            name="about"
            active={currentPage.includes("about")}
            onClick={() => handleItemClick("about")}
          />
          <Menu.Item
            as={Link}
            to="/services"
            name="services"
            active={currentPage.includes("services")}
            onClick={() => handleItemClick("services")}
          />
          <Menu.Item
            as={Link}
            to="/contact-us"
            name="contact us"
            active={currentPage.includes("contact")}
            onClick={() => handleItemClick("contact")}
          />
          {/* if user is logged in show profile and logout */}
          {Auth.loggedIn() ? (
            <>
              <Menu.Item
                as={Link}
                to="/profile"
                name="profile"
                active={currentPage.includes("profile")}
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
                active={currentPage.includes("sign-up")}
                onClick={() => handleItemClick("sign-up")}
              />
              <Menu.Item
                as={Link}
                to="/login"
                name="login"
                active={currentPage.includes("login")}
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
