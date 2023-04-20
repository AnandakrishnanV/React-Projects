import React from "react";
import reactlogo from "../assets/react.svg";

function Navbar() {
  return (
    <nav>
      <img src={reactlogo} className="nav--icon" />
      <h3 className="nav--title">AK</h3>
      <h4 className="nav--page_title">First Project</h4>
    </nav>
  );
}

export default Navbar;
