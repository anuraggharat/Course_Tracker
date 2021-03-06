import React from "react";
import "./Loader.css";

export default function Loader() {
  return (
    <div className="w-100 min-vh-100 h d-flex justify-content-center align-items-center">
      <div className="lds-spinner ">
        <div></div>
        <div></div>
        <div></div>
        <div></div>
        <div></div>
        <div></div>
        <div></div>
        <div></div>
        <div></div>
        <div></div>
        <div></div>
        <div></div>
      </div>
    </div>
  );
}
