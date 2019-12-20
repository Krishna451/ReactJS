/* import React from 'react';
import ReactDOM from 'react-dom';
import App from './App'
import {Provider} from  'react-redux'
import {createStore} from 'redux'
import SalaryApp from './reducers/salaryReducers'
import './index.css';

const store=createStore(SalaryApp)


//import  App1  from "./App1";
//ReactDOM.render(<App/>, document.getElementById('root'));

//ReactDOM.render(<BrowserRouter><App1/></BrowserRouter>,document.getElementById('root'));
ReactDOM.render(<Provider store={store}><App></App></Provider>, document.getElementById('root')); */
import React from 'react';
import ReactDOM from 'react-dom';
import {Provider} from 'react-redux'
import {createStore} from 'redux'
//import reducer from './store/reducer'
import './index.css';
//import App from './App';
import AppDumb  from './containers/appDumb'
import salaryApp  from   './reducers/rootRuducer';

// const store =createStore(reducer);
// ReactDOM.render(<Provider store={store}> <App /> </Provider>, document.getElementById('root'));

const store =createStore(salaryApp);
ReactDOM.render(<Provider store={store}> <AppDumb /> </Provider>, document.getElementById('root'));
