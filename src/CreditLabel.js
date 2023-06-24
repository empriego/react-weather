import React from "react";
import "./CreditLabel.css";

export default function CreditLabel() {
  return (
    <div className="credit-label justify-content-center">
      <small>
        <a href="https://github.com/empriego/react-weather" target="blank">
          open source code
        </a>{" "}
        by{" "}
        <a href="/" target="blank">
          Emilia
        </a>
      </small>
    </div>
  );
}
