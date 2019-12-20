import React from 'react'
import Message from './message'



class RenderMessage extends React.Component{

constructor(props){

    super(props)
    this.state={

        message:"Hello Universe"

    }
    this.updatestatus=this.updatestatus.bind(this);

}

updatestatus(){

    let messages=["Hello World","Hello Planet","Hello Universe"];
    let rmsg=messages[Math.floor(Math.random()*3)]
    this.setState({message:rmsg})
}

render(){


    return(

        <div>

        <Message message={this.state.message}></Message>
        <button onClick={this.updatestatus}>update status</button>


        </div>


    )
}

}export default RenderMessage;