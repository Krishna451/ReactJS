import React from 'react'

class MyComponetLifeCycle extends React.Component{

// Mounting stage Method

componentWillMount(){

    console.log("Inside the componentWillMount")
}

componentDidMount(){

    console.log("Inside the componentDidMount")

}

componentWillReceiveProps(){


    console.log("component receives a new props")
}

shouldComponentUpdate(){
    console.log("component should update")
}

componentWillMount(){

    console.log("component will mount")
}


componentDidUpdate(){
    console.log("component Did update")

}

componentWillUnmount(){

    console.log("component will Unmount")
}

render(){

    console.log("clean up code")

    return(

<div>


    <h1>state value {this.props.number}</h1>
</div>

    )
}

}
export default MyComponetLifeCycle;