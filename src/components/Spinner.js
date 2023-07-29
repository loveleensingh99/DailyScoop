import React, { Component } from "react";
import loading from "./Globe.gif";

export default function Spinner() {
  return (
    <div className="text-center">
      <img src={loading} alt="loading"></img>
    </div>
  );
}
