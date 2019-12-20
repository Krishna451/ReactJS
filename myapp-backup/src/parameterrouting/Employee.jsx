import React from "react";
const Employee = ({ data, match }) => {
  // Array.find returns firts match inside array
let emp = data.find(e => e.id === Number(match.params.empId));
let empData;
if (emp)
empData = (
<div>
<h1>Employee Details</h1>
<hr/>
<p> {`Emp Name ${emp.name}`} </p>
<p>{`Emp Dept ${emp.dept}`}</p>
<p>{`Emp Salary ${emp.salary}`}</p>
<p>{`Emp Status ${emp.status}`}</p>
</div>
);
return <div>{empData}</div>;
};
export default Employee;