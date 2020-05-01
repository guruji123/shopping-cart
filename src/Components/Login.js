import React, {Component, Fragment} from 'react';
import { Link } from 'react-router-dom';
import Navbar from '../Navbar/Navbar';
import './Login.css'

class Login extends Component {
    constructor(props) {
        super(props);
        this.props = props;
        this.state = {
          email :'',
          password: '',
          
    
        };
      }
      handleLogin = e =>{
        e.preventDefault();  
       // const { email, password } = this.state;
     }
    
      handleChange = e =>{
        const { name, value } = e.target;
        this.setState({
          [name] : value
        })
      }
    render () {
      const { handleChange, handleLogin } = this;
      const { email, password} = this.state;
      return (
        <Fragment>
          <Navbar />
          <div className="container col-sm m-4 p-4">
          <h1 className="col-sm- ">Sign in</h1>
          <form onSubmit={handleLogin}>
                    
              <div className=" form-group">
              <input 
              className="form-input" 
              type='email' 
              name='email' 
              id='email' 
              value={email} 
              onChange={handleChange} 
              placeholder='EMAIL' 
              required 

              />       
              </div>
              
              <div className=" form-group">
              <input className="form-input" 
              type='password'  
              name='password' 
              id='password' 
              value={password} 
              onChange={handleChange} 
              placeholder='PASSWORD' 
              required

              />
              </div>
              <div className=" form-group">
              <Link to="/product">
                <input 
                  type="submit" 
                  value="Log in" 
                  className="form-Submit"
                  />
              </Link>
              {this.props.errorInLogin && <span className='error-msg'>{this.props.error}</span>}
              </div>

          </form>
          </div>
        </Fragment>
    )
}
}
export default Login;