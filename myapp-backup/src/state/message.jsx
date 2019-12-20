import React from 'react'

class Message extends React.Component{


    render(){


        return(

            <div>

            <p> Inside child component {this.props.message}</p>


            </div>


        )
    }


}export default Message