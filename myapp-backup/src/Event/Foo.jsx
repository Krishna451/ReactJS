import React from 'react'

class Foo extends React.Component{

    constructor(props){

        super(props)
        this.age=40
        //this.handleclick=this.handleclick.bind(this);
    }

    handleclick=()=>{

        console.log("clicked..."+this.age)
    }
    handleclick1=(eid,name,evnt)=>{

        console.log("clicked..."+eid+" "+name)
        console.log("event type: "+ evnt.type)
    }


    render(){

        return(

            <div>

            <button onClick={this.handleclick.bind(this)}>Bindbycons</button>
            <br/>
            <button onClick={(evnt)=>{this.handleclick1(101,"Bhargav",evnt)}}>Pass Parameters</button>
            </div>

        )
    }
}
export default Foo;