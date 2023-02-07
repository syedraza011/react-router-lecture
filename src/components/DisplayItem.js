import React from "react";
import { Link, useLocation } from "react-router-dom";
import "../styles/Display-Item.css";

function DisplayItem(item) {
  const {state}=useLocation();
  return (
    <React.Fragment>
      <div className="menu-item">
        <h3>{state?.item?.name || "Missing Name"}</h3>

        <div>
          {state?.item?.price || "Missing Price"}
          <br />
          {state?.item?.description || "Missing Description"}
        </div>

        <br />

        <Link to={"/menu"}>Go Back to Main</Link>
      </div>
    </React.Fragment>
  );
  // return (
  //   <React.Fragment>
  //     <div className="display-item">

  //     </div>
  //   </React.Fragment>
  // );
  }

export default DisplayItem;
