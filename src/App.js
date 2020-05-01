import React, {Component} from 'react';
//import Navbar from './Navbar/Navbar';
import {BrowserRouter, Route, Switch} from 'react-router-dom';
import Login from './Components/Login';
import Register from './Components/Register';
import ProductList from './DashBoard';
import Cart from './Cart';
import './App.css';



class App extends Component {
  render() {
  return (
    <div className="container">
  
    <BrowserRouter>
    
      <div className="container">
      <Switch>
        <Route exact path='/' component={Login} />
        <Route path='/register' component={Register} />
        <Route path='/product' component={ProductList} />
        <Route path='/cart' component={Cart} />
      </Switch>

      </div>
    </BrowserRouter>
    
      
    </div>
    )
  }
}

export default App;
