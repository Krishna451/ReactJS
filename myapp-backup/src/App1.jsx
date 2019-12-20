import React from "react";
import {Route,NavLink} from 'react-router-dom'
import Employees from './parameterrouting/Employees'
import Contact from './parameterrouting/contact'
import EmployeeList  from './restdemo/ListEmployee'
import AddEmployee   from './restdemo/AddEmployee'
// // For Rest Routing
class App1 extends React.Component{
render(){
let linkStyle = {
color: "green"
};
return(
<div>
<h1>React Parameter Routing...</h1>
<ul>
<li><NavLink activeStyle={linkStyle} to="/contact"> Contact </NavLink></li>
<li><NavLink activeStyle={linkStyle} to="/emps"> Employee </NavLink></li>
<li><NavLink activeStyle={linkStyle} to="/addemp"> Add Employee </NavLink></li>
<li><NavLink activeStyle={linkStyle} to="/showemp"> Show Employees </NavLink></li>
</ul>
<Route  path= "/contact"  component={Contact}></Route>
<Route  path= "/emps"  component={Employees}></Route>
<Route path="/addemp" component={AddEmployee}></Route>
<Route  path= "/showemp"  component={EmployeeList}></Route>
</div>
)
}
}
export default App1;