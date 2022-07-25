import React, { useState } from "react";
// import { Link } from "react-router-dom";
import { Menu } from "semantic-ui-react";

const AppNavbar = () => {
  // set modal display state
  // const [showModal, setShowModal] = useState(false);
  const [activeItem, setActiveItem] = useState("home");

  const handleItemClick = async (name) => {
    setActiveItem(name);
  };

  return (
    <div>
      <Menu pointing secondary>
        <Menu.Item
          name="home"
          active={activeItem === "home"}
          onClick={() => handleItemClick("home")}
        />
        <Menu.Item
          name="messages"
          active={activeItem === "messages"}
          onClick={() => handleItemClick("messages")}
        />
        <Menu.Item
          name="friends"
          active={activeItem === "friends"}
          onClick={() => handleItemClick("friends")}
        />
        <Menu.Menu position="right">
          <Menu.Item
            name="sign up"
            active={activeItem === "signup"}
            onClick={() => handleItemClick("signup")}
          />
          <Menu.Item
            name="logout"
            active={activeItem === "logout"}
            onClick={() => handleItemClick("logout")}
          />
        </Menu.Menu>
      </Menu>
    </div>
  );
};

export default AppNavbar;
