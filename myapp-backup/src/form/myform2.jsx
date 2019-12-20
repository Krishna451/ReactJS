import React from 'react'

class ControlledInput extends React.Component{

    constructor(props){
        super(props);
        this.state={

            name:" ",
            add:" ",
            rememeberme:false,
            cource:"React "
        }
    }

    handlechange=event=>{

        const isCheckBox=event.target.type==="checked"
        this.setState({[event.target.name]:
            isCheckBox?event.target.checked:event.target.value})
    }

    handleSubmit=()=>{

        console.log("Details "+this.state.name+" "+this.state.add+" "+this.state.rememeberme+" "+this.state.cource)
    }

    render(){

        return(

            <div>
            <label>Name</label>
            <input name="name" value={this.state.name} onChange={this.handlechange}></input><br/>

            <label>Address</label>
            <textarea name="add" value={this.state.add} onChange={this.handlechange}></textarea><br/>

            <label>Notification</label>
            <input type="checkbox" name="rememeberme" checked={this.state.rememeberme} onChange={this.handlechange}></input><br/>
            
            <label>Cource</label>
            <select name="cource" onChange={this.handlechange}>
            <option>React</option>
            <option>Spring</option>
            <option>C++</option>
            </select>
            <br/>
            <button onClick={this.handleSubmit}>Submit</button>
            </div>


        )
    }
}
export default ControlledInput;