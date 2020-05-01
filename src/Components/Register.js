import React, {Component} from 'react';
import Select from "react-select";
//import axios from "axios";
import './Register.css'
import { Link } from 'react-router-dom';

const options = [
{value:'India', label:'India'},
{value:'Australia', label:'Australia'},
{value:'USA', label:'USA'},
]
class Register extends Component {
    constructor(props) {
        super(props);
        this.props = props;
        this.state = {
          first_name : "",
          last_name : "",
          gmc  : "",
          ods  : "",
          email : '',
          password: '',
          phone: '',
          country:''
    
        };
      }
      handleRegister = e =>{
        e.preventDefault();
      //   const { 
      //     gmc = "",
      //     ods = "",
      //  }  = this.state;
      //  const user = this.state;
      //  const header = {
      //   "Content-Type": "application/json"
      // };
      //  const profile = {gmc:gmc, ods:ods};
      //  const device_detail = {device_type:"web", player_id:""};
      //  let reqUrl = "https://d1c786uaow3mi9.cloudfront.net/sign_up.json";
      //  var bodyFormData = new FormData();
      //  bodyFormData.set("profile", profile);
      //  bodyFormData.set("device_detail", device_detail);
      //  bodyFormData.set("user", user);
      //  axios
      //   .post(reqUrl, bodyFormData,header)
      //   .then(response => {
      //     console.log('this is response', response);
      //   });
      }
    
      handleChange = e =>{
        const { name, value } = e.target;
        this.setState({
          [name] : value,
        })
      }
      handleSelect = val =>{
        this.setState({country:val})
      }
    render() {
      const { handleChange, handleRegister, handleSelect } = this;
      const{
        first_name = "",
        last_name = "",
        gmc = "",
        ods = "",
        email = "",
        phone = "",
        password = "",
        country = ""
      } = this.state;
        return (
            <div className="container form">
            <div className="registerHeader">
            <h1>Register now</h1>
            <Link to="/">Sign In</Link>
            </div>
            <form onSubmit={handleRegister}>
              <div className="form-group">
              <Select
                  className="form-select"
                  placeholder="Select Country"
                  value={country}
                  options={options}
                  onChange={obj => handleSelect(obj)}
                />
              </div>
              
              <div className="form-group">
                  <input  
                    className=" form-input col-"
                    type="text" 
                    name="first_name" 
                    value={first_name} 
                    placeholder="FIRST NAME" 
                    required
                    onChange={handleChange}
                   />
              </div>
              
              <div className="form-group">
                  <input  
                    className="form-input col-" 
                    type="text"  
                    name="last_name" 
                    value={last_name} 
                    placeholder="LAST NAME" 
                    required
                    onChange={handleChange} 
                  />
              </div>
              <div className="form-group">
                  <input 
                    className="form-input  col " 
                    type="number"  
                    name="gmc" 
                    value={gmc} 
                    placeholder="GMC or NMC NUMBER" 
                    onChange={handleChange}  
                  />
              </div>
              <div className="form-group">
                  <input  
                    className=" form-input  col " 
                    type="text"  
                    name="ods" 
                    value={ods} 
                    placeholder="ODS Code (P Number)" 
                    onChange={handleChange} 
                  />
              </div>
              <div className="form-group">
                  <input  
                    className="form-input  col " 
                    type="email" 
                    name='email'
                    value={email} 
                    onChange={handleChange} 
                    placeholder="EMAIL" 
                    required 
                  />
              </div>
              <div className="form-group ">
                  <input 
                    className="form-input  col-"
                    type="number" 
                    value={ phone } 
                    name="phone" 
                    placeholder="PHONE NUMBER" 
                    onChange={handleChange}
                    required 
                  />
              </div>
              <div className="form-group">
                  <input  
                    className="form-input col- " 
                    type="password"  
                    name="password" 
                    id='password' 
                    value={password} 
                    onChange={handleChange} 
                    placeholder="CREATE A PASSWORD" 
                    required 

                  />
              </div>
              <div className="form-group">
            <Link to="/"><input type="submit" value="Regitster Now" className="form-Submit"/></Link>
            </div>
           </form>
            </div>

        )
    }
}

export default Register;