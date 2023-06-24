import React from "react";
import "./NavBar.css";
import Lens from "./img/lens.png";

export default function NavBar() {
  return (
    <div className="nav-bar">
      <nav className="d-flex justify-content-center">
        <form className="d-flex" id="search-form">
          <input
            className="form-control search-field"
            type="text"
            placeholder=""
            aria-label="Search"
            id="search-input"
          />
          <button className="btn btn-search" type="submit">
            <img src={Lens} className="img-button" alt="Search" />
          </button>
        </form>
      </nav>
    </div>
  );
}
