import React from "react";
import { NavLink } from "react-router-dom";
import './_header.scss'

const Header = () => {
  return (
    <header>
      <div className="container-lg position-relative" style={{top: 20}}>
        <NavLink to='/'>
          <img src={require("../../assets/logo.png")} alt="logo" className="logo"/>
        </NavLink>
      </div>
    </header>
  );
};

export default Header;
