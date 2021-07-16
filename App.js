import React from "react";
import InfoIcon from "@material-ui/icons/Info";
import ArrowForwardIcon from "@material-ui/icons/ArrowForward";
import Headers from "./Headers";
import "./App.css";
const App = () => {
  return (
    <>
      <div className="main-app">
        <h1> Trip Summary </h1>
        <p>
          
          <span className="text_color"> Dashboard / </span> Trip Summary
        </p>
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
        <div className="container">
          <p>
            
            Date: 04 / 19 / 2020 at 5: 20 AM - 04 / 19 / 2020 at 10: 20 AM(5 Hrs
            0 Minutes)
          </p>
        </div>
        <div className="app-container">
          <table>
            <thead>
              <tr>
                <th> # </th> <th> Trip Start(Node) to Trip Ends(Node) </th>
                <th> Drive Name </th> <th> Trip Expenses </th>
                <th> Trip Km </th> <th> Trip GPS Km </th> <th> Trip Time </th>
                <th> Odometer Reading </th> <th> Action </th>
              </tr>
            </thead>
            <tbody>
              <tr>
                <td> 1 </td>
                <td>
                  
                  IFFCO CHOWK(5: 20 AM) <ArrowForwardIcon className="icon1" />
                  DWARKA(7: 20 AM)
                </td>
                <td> Rajesh </td>
                <td>
                  
                  Rs .500 <InfoIcon className="icon2" />
                </td>
                <td> 65.0 Km </td> <td> 0.00 Km </td> <td> 02 hour 00 min </td>
                <td>
                  
                  10330 <ArrowForwardIcon className="icon1" /> 10455
                </td>
                <td>
                  
                  <button className="bttn"> Movement Report </button>
                  <button className="bttn">Stoppage Report</button>
                </td>
              </tr>
              <tr>
                <td> 2 </td>
                <td>
                  
                  Dwarka(7: 40 AM) <ArrowForwardIcon className="icon1" /> Sec
                  37(9: 15 AM)
                </td>
                <td> Rajesh </td>
                <td>
                  
                  Rs.0 <InfoIcon className="icon2" />
                </td>
                <td> 100.0 Km </td> <td> 0.00 Km </td> <td> 01 hour 35 min </td>
                <td>
                  
                  10200 <ArrowForwardIcon className="icon1" /> 10285
                </td>
                <td>
                  
                  <button className="bttn"> Movement Report </button>
                  <button className="bttn">Stoppage Report</button>
                </td>
              </tr>
            </tbody>
          </table>
        </div>
        <div className="container">
          <p>
            
            Date: 04 / 19 / 2020 at 5: 20 AM - 04 / 19 / 2020 at 10: 20 AM(5 Hrs
            0 Minutes)
          </p>
        </div>
        <div className="app-container">
          <table>
            <thead>
              <tr>
                <th> # </th> <th> Trip Start(Node) to Trip Ends(Node) </th>
                <th> Drive Name </th> <th> Trip Expenses </th>
                <th> Trip Km </th> <th> Trip GPS Km </th> <th> Trip Time </th>
                <th> Odometer Reading </th> <th> Action </th>
              </tr>
            </thead>
            <tbody>
              <tr>
                <td> 1 </td>
                <td>
                  
                  IFFCO CHOWK(5: 20 AM) <ArrowForwardIcon className="icon1" />
                  DWARKA(7: 20 AM)
                </td>
                <td> Rajesh </td>
                <td>
                  
                  Rs .500 <InfoIcon className="icon2" />
                </td>
                <td> 65.0 Km </td> <td> 0.00 Km </td> <td> 02 hour 00 min </td>
                <td>
                  
                  10330 <ArrowForwardIcon className="icon1" /> 10455
                </td>
                <td>
                  
                  <button className="bttn"> Movement Report </button>
                  <button className="bttn">Stoppage Report</button>
                </td>
              </tr>
              <tr>
                <td> 2 </td>
                <td>
                  
                  Dwarka(7: 40 AM) <ArrowForwardIcon className="icon1" /> Sec
                  37(9: 15 AM)
                </td>
                <td> Rajesh </td>
                <td>
                  
                  Rs.0 <InfoIcon className="icon2" />
                </td>
                <td> 100.0 Km </td> <td> 0.00 Km </td> <td> 01 hour 35 min </td>
                <td>
                  
                  10200 <ArrowForwardIcon className="icon1" /> 10285
                </td>
                <td>
                  
                  <button className="bttn"> Movement Report </button>
                  <button className="bttn">Stoppage Report</button>
                </td>
              </tr>
              <tr>
                <td> 3 </td>
                <td>
                  
                  Dwarka(4: 33 PM) <ArrowForwardIcon className="icon1" /> Sec
                  37(4: 35 PM)
                </td>
                <td> Rajesh </td>
                <td>
                  
                  Rs.0 <InfoIcon className="icon2" />
                </td>
                <td> 100.0 Km </td> <td> 0.00 Km </td> <td> 01 hour 35 min </td>
                <td>
                  
                  10200 <ArrowForwardIcon className="icon1" /> 10285
                </td>
                <td>
                  
                  <button className="bttn"> Movement Report </button>
                  <button className="bttn">Stoppage Report</button>
                </td>
              </tr>
            </tbody>
          </table>
        </div>
        <div className="container">
          <p>
            
            Date: 04 / 19 / 2020 at 5: 20 AM - 04 / 19 / 2020 at 10: 20 AM(5 Hrs
            0 Minutes)
          </p>
        </div>
        <div className="app-container">
          <table>
            <thead>
              <tr>
                <th> # </th> <th> Trip Start(Node) to Trip Ends(Node) </th>
                <th> Drive Name </th> <th> Trip Expenses </th>
                <th> Trip Km </th> <th> Trip GPS Km </th> <th> Trip Time </th>
                <th> Odometer Reading </th> <th> Action </th>
              </tr>
            </thead>
            <tbody>
              <tr>
                <td> 1 </td>
                <td>
                  
                  IFFCO CHOWK(5: 20 AM) <ArrowForwardIcon className="icon1" />
                  DWARKA(7: 20 AM)
                </td>
                <td> Rajesh </td>
                <td>
                  
                  Rs .500 <InfoIcon className="icon2" />
                </td>
                <td> 65.0 Km </td> <td> 0.00 Km </td> <td> 02 hour 00 min </td>
                <td>
                  
                  10330 <ArrowForwardIcon className="icon1" /> 10455
                </td>
                <td>
                  
                  <button className="bttn"> Movement Report </button>
                  <button className="bttn">Stoppage Report</button>
                </td>
              </tr>
              <tr>
                <td> 1 </td>
                <td>
                  
                  Dwarka(7: 40 AM) <ArrowForwardIcon className="icon1" /> Sec
                  37(9: 15 AM)
                </td>
                <td> Rajesh </td>
                <td>
                  
                  Rs.0 <InfoIcon className="icon2" />
                </td>
                <td> 100.0 Km </td> <td> 0.00 Km </td> <td> 01 hour 35 min </td>
                <td>
                  
                  10200 <ArrowForwardIcon className="icon1" /> 10285
                </td>
                <td>
                  
                  <button className="bttn"> Movement Report </button>
                  <button className="bttn">Stoppage Report</button>
                </td>
              </tr>
            </tbody>
          </table>
        </div>
        <div className="container">
          <p>
            
            Date: 04 / 19 / 2020 at 5: 20 AM - 04 / 19 / 2020 at 10: 20 AM(5 Hrs
            0 Minutes)
          </p>
        </div>
        <div className="app-container">
          <table>
            <thead>
              <tr>
                <th> # </th> <th> Trip Start(Node) to Trip Ends(Node) </th>
                <th> Drive Name </th> <th> Trip Expenses </th>
                <th> Trip Km </th> <th> Trip GPS Km </th> <th> Trip Time </th>
                <th> Odometer Reading </th> <th> Action </th>
              </tr>
            </thead>
            <tbody>
              <tr>
                <td> 1 </td>
                <td>
                  
                  IFFCO CHOWK(5: 20 AM) <ArrowForwardIcon className="icon1" />
                  DWARKA(7: 20 AM)
                </td>
                <td> Rajesh </td>
                <td>
                  
                  Rs .500 <InfoIcon className="icon2" />
                </td>
                <td> 65.0 Km </td> <td> 0.00 Km </td> <td> 02 hour 00 min </td>
                <td>
                  
                  10330 <ArrowForwardIcon className="icon1" /> 10455
                </td>
                <td>
                  
                  <button className="bttn"> Movement Report </button>
                  <button className="bttn">Stoppage Report</button>
                </td>
              </tr>
              <tr>
                <td> 2 </td>
                <td>
                  
                  Dwarka(7: 40 AM) <ArrowForwardIcon className="icon1" /> Sec
                  37(9: 15 AM)
                </td>
                <td> Rajesh </td>
                <td>
                  
                  Rs.0 <InfoIcon className="icon2" />
                </td>
                <td> 100.0 Km </td> <td> 0.00 Km </td> <td> 01 hour 35 min </td>
                <td>
                  
                  10200 <ArrowForwardIcon className="icon1" /> 10285
                </td>
                <td>
                  
                  <button className="bttn"> Movement Report </button>
                  <button className="bttn">Stoppage Report</button>
                </td>
              </tr>
              <tr>
                <td> 3 </td>
                <td>
                  
                  Dwarka(4: 33 PM) <ArrowForwardIcon className="icon1" /> Sec
                  37(4: 35 PM)
                </td>
                <td> Rajesh </td>
                <td>
                  
                  Rs.0 <InfoIcon className="icon2" />
                </td>
                <td> 100.0 Km </td> <td> 0.00 Km </td> <td> 01 hour 35 min </td>
                <td>
                  
                  10200 <ArrowForwardIcon className="icon1" /> 10285
                </td>
                <td>
                  
                  <button className="bttn"> Movement Report </button>
                  <button className="bttn">Stoppage Report</button>
                </td>
              </tr>
            </tbody>
          </table>
        </div>
      </div>
    </>
  );
};
export default App;
