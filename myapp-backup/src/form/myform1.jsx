import React from 'react'


class Myform1 extends React.Component{


    constructor(props){
        super(props);
        this.handlesubmit=this.handlesubmit.bind(this)
    }

    handlesubmit(evt){
        evt.preventDefault();
        let name=this.refs.name.value;
        let mail=this.refs.mail.value;
        let phone=this.refs.phone.value;
        console.log("Form data "+name+" "+mail+ " "+phone)
    }

    render(){

        return(

            <div>

            <form on onSubmit={this.handlesubmit}>
            Name<input name="name" ref="name"></input>
            Mail<input mail="mail" ref="mail"></input>
            Phone<input name="phone" ref="phone"></input><br/>
            <input type="submit" value="submit"></input>
            </form>

            </div>

        )
    }
}
export default Myform1;