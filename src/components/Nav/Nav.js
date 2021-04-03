import React, { useEffect, useState } from "react";

import "./Nav.css";

function Nav() {
  const [show, setShow] = useState(false);

  const transitionNavBar = () => {
    window.scrollY > 100 ? setShow(true) : setShow(false);
  };

  useEffect(() => {
    window.addEventListener("scroll", transitionNavBar);

    return () => window.removeEventListener("scroll".transitionNavBar);
  }, []);

  return (
    <div className={`nav ${show && "nav__black"}`}>
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
