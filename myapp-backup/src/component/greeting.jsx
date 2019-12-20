import React from 'react';
import propType from 'prop-types'

class Greeting extends React.Component{

    render(){


        return(

            <div>

            <h1>Name, {this.props.name}</h1>
            <h1>Age, {this.props.age}</h1>

            </div>


        )



    }


}

Greeting.propType={

    name:propType.string,
    age:propType.number
}
Greeting.defaultProps={
    name:"unknown",
    age:18
}
export default Greeting;