import React, { useState } from "react";
import { Router,Route,Routes } from "react-router-dom";
import AuthCheck from "./components/Routes";

function  App() {
  var authenticated = sessionStorage.getItem("Auth");
  return (
    <div>   
      <AuthCheck/>
    </div>
    );
}
export default  App;
