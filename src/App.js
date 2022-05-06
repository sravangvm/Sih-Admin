import React, { useState } from "react";
import NavCheck from "./components/Routes";
import Log from "./pages/Login";
function  App() {
  var authenticated = localStorage.getItem("Auth");
  return <div>
              {authenticated === "true" && authenticated != null ? (
            <NavCheck />
          ) : (
            <Log />
          )}
    </div>;
}
export default  App;
