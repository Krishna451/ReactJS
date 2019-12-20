import React from 'react'

class Childcomp extends React.Component{


    render(){


        return(


            <div> 
                <h1>Inside child comp={this.props.mycounter}</h1>
            <button onClick={this.props.changestate}>change status</button>
            </div>
        )
    }

}export default Childcomp;