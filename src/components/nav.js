import React, { Component } from "react";
import "../App.css";
import { Link } from "react-router-dom";

function Nav() {

    const navStyle = {
        color: 'white'
    };

  return (
    <nav>
      <h3>SampleProject</h3>
      <ul className="nav-links">
        <Link style={navStyle} to="/PostApi">
          <li>Post Value</li>
        </Link>
        <Link style={navStyle} to="/Api">
          <li>Table</li>
        </Link>
      </ul>
    </nav>
  );
}

export default Nav;
