//console.log("App is running....");

/* import { msg, sum } from "./src/export";
import utils from "./src/exportdefault.js";
msg("Hi...");
console.log(utils.disp()); //logs export default
console.log("Net Salary " + utils.netSal(30000, 6000)); */


import React from "react";
import ReactDom from "react-dom";
import App from "./src/app.jsx";
ReactDom.render(<App/>, document.getElementById("root"));