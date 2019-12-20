import React from "react";
import { Link, Route } from "react-router-dom";
import Employee from "./Employee";
import { empsData } from "./empsData";
const Employees = ({ match }) => 
{
let linkList = empsData .map(emp => {
return (
<li key={emp.id}>
<Link to={`${match.url}/${emp.id}`}>{emp.name}</Link>
</li>
);
});
return (
<div>
<h3> Employees</h3>
<ul>{linkList}</ul>
<Route path={`${match.url}/:empId`} render={props => <Employee data={empsData} {...props} />}
/>
</div>
);
};
export default Employees;