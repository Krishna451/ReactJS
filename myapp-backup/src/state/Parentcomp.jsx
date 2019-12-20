import React from 'react'
import Childcomp from './childcomp'


class Parentcomp extends React.Component{


constructor(props){

    super(props);
    this.state={

        counter:0
    }

    this.changestate=this.changestate.bind(this)

}

changestate(){

    this.setState({

        counter:this.state.counter+1
    })
}

render(){


    return(

        <div>

        <Childcomp mycounter={this.state.counter} changestate={this.changestate}></Childcomp>


        </div>
    )
}

}export default Parentcomp;