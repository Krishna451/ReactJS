import React from 'react'

class ListComponent extends React.Component{

    render(){


        return(

            <div>

            {this.props.empRecords.map(emp=>{
                return(

                    <li key={emp.id}>

                    {emp.name}:{emp.desig}

                    </li>

                )
            })}
            

            </div>

        )

    }
}
export default ListComponent;