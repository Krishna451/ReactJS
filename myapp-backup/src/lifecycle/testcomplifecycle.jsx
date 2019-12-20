import React from 'react'

import MyComponetLifeCycle from './mycomponentlifecycle'

class TestCompLifeCycle extends React.Component{


    constructor(props){

        super(props)

        this.state={

            data:1
        }

        this.changestate=this.changestate.bind(this);
    }

   changestate(){

    this.setState({data:this.state.data+1});
   }

   render(){

    return(


        <div>

            <MyComponetLifeCycle number={this.state.data}></MyComponetLifeCycle>
            <button onClick={this.changestate}>Update me</button>
        </div>
    )
   }
}
export default TestCompLifeCycle;