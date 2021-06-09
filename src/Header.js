import React from "react";
import "./Header.css";

import { Link } from "react-router-dom";

function Header() {
  return (
    <div className="header">
      <Link to="/">
        <img
          className="header__icon"
          src="https://i.ibb.co/cT80f2N/full-logo.jpg"
          alt=""
        />
        <p className="logo-name">Pahali</p>
      </Link>
      <div className="header__right">
        <button>Become a host</button>
      </div>
    </div>
  );
}

export default Header;
