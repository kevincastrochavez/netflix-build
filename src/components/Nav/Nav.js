import React from "react";

import "./Nav.css";

function Nav() {
  return (
    <div className="nav">
      <div className="nav__contents">
        <img
          className="nav__logo"
          src="https://logos-world.net/wp-content/uploads/2020/04/Netflix-Logo.png"
          alt=""
        />

        <img
          className="nav__avatar"
          src="https://pbs.twimg.com/profile_images/1240119990411550720/hBEe3tdn_400x400.png"
          alt=""
        />
      </div>
    </div>
  );
}

export default Nav;
