
import React from 'react'


import EmployeeName from './mycomptwo'

class Employee extends React.Component{

    render(){

        return(


            <div>

            <EmployeeName name={this.props.emp.name}></EmployeeName>
            <p>Employee City {this.props.emp.city}</p>

            </div>


        )



    }
    
}

export default Employee;