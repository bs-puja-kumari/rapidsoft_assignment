import React from "react";
import "./App.css";


function Headers() {


  return (
    <>
      <div className="header">
        <div className="title left">
          <h1> Trip Summary </h1>
          <p>
            
            <span className="text_color"> Dashboard / </span> Trip Summary
          </p>
        </div>
        <div className="dateview right">
          <label> From </label> <input type="date" id="from_date" />
          <label> To </label> <input type="date" id="to_date" />
          <button id="search" className="search_bttn">
            
            Search
          </button>
          <button id="export" className="export_bttn">
            
            Export
          </button>
        </div>
        <div class="tab-view">
          <div class="col8 left">
            <p className="col3 dinline bg-navy"> DL1LW 6461(TATA ACE) </p>
            <p className="col3 dinline bg-gold"> Total Trips: 11 </p>
            <p className="col3 dinline bg-blue"> Total KM: 497.0 KM </p>
            <p className="col3 dinline bg-green"> Trip Time: 10 Hrs 42 mm </p>
            <p className="col3 dinline bg-pink"> Total Time: 15 Hrs 46 mm </p>
            <p className="col3 dinline bg-brown"> Total Exp: Rs.2000.0 </p>
          </div>
          <div className="col2 right">
            <p class="bg-gray h2x"> Other Exp.: Rs.0.00 </p>
          </div>
        </div>
      </div>
    </>
  );
}
export default Headers;
