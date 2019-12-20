import React from 'react'
import './App.css';
//import Welcome from './component/welcome.jsx';
//import Myform1 from './form/myform1';
//import ControlledInput from './form/myform2'
import {Provider} from 'react-redux'




class App extends React.Component{

  render(){

    let linkStyle={
      color:"green"
    }

    return(

      <div>
        <h1>React Redux......</h1>
        <AppDumb></AppDumb>
      
      </div>
    )
  }
}
export default App;