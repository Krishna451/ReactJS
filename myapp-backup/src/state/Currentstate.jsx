import React from 'react'

class Currenstate extends React.Component{

    constructor(props){
        super(props);


        this.state={

            name:"Max",
            age:30
        }
        this.updatestatus=this.updatestatus.bind(this)

    }

    updatestatus(){
        this.setState({name:"Amit",age:32})
    }


    render(){
        return(

            <div>
                <h1>Name: {this.state.name}</h1>
                <h1>Age: {this.state.age}</h1>

                <button onClick={this.updatestatus}>update State</button>


            </div>




        )


    }

    


}export default Currenstate