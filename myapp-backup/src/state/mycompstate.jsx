import React from 'react'


class Mycomponent extends React.Component{

    constructor(props){
        super(props);


        this.state={

            name:"Max",
            age:30
        }
    }

    render(){
        setTimeout(()=>{

            this.setState({name:"Amita",age:26})

        },2000)

        return(
        <div>

            <h1> Name :{this.state.name}</h1>
            <h2> Age :{this.state.age}</h2>
            
            
         </div>

        )

            
        
    }
}
export default Mycomponent