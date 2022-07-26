import React, { useState } from 'react';
import VisibilityIcon from '@mui/icons-material/Visibility';
import VisibilityOffIcon from '@mui/icons-material/VisibilityOff';
import AppleIcon from '@mui/icons-material/Apple';
import '../App.css';
import Gplay from '../../src/Gplay.png';
import {Row,Col} from 'react-bootstrap';

function Signup() {

  const [inputs, setInputs] = useState("");
  const [state, setState] = useState({
    email: '',
    password: '',
  });

  const toggleBtn = () => {
    setState(prevState => !prevState);
  };
const handleChange = (event) => {
    const name = event.target.name;
    const value = event.target.value;
    setInputs(values => ({ ...values, [name]: value }))
    
  };
  
  function handleSubmit(event) {
    event.preventDefault();
    console.log(inputs);
  };

 return (
    <>
    <div classname="container">
      <p className="acc">Already have an account?<span> Login</span></p>
      <div className='box'>
        <p className='signup'>Signup to uworld</p>
        <form onSubmit={handleSubmit}>
          <Row>
            <Col md="8">
              <div className="form-group label">
                <label htmlFor="exampleInputEmail1">Email ID</label>
                <input type="email" className="form-control" id="exampleInputEmail1" aria-describedby="emailHelp" placeholder="Enter your email here" required validate="true" name="email" value={inputs.email || ""} onChange={handleChange} />
                
              </div>
            
              </Col>
            </Row>
          <Row>
            <Col md="8">
              <div className="form-group  label">
                <label htmlFor="exampleInputPassword1">Password</label>
                <input type={state ? "text" : "password"} className="form-control" id="exampleInputPassword1" placeholder="Enter your password here" required name="pwd"
                  value={inputs.pwd || ""} onChange={handleChange} />
              </div>
              </Col>
            <Col md="4">
            <p className='eye-icon' onClick={toggleBtn}>
              {state ? <VisibilityIcon /> : <VisibilityOffIcon />}
            </p>
            
            <button type="submit" className="button">Continue</button>
            </Col>
          </Row>
        </form>
      </div>
      
      <div classname="bottom">
        <p className="get">Get the app</p>
        <Row>
          <Col md="1" className="store"><AppleIcon className='apple-icon' /><span className="span-bott">Download it from</span><br /><span className="span-bott1">Apple store</span>
          </Col>
          <Col md="1" className="store"><img src={Gplay} height={25} width={25} alt="" /><span className="span-bottt">GET IT ON</span><br /><span className="span-bott11">Google play</span>
        </Col>
       </Row>
        
      </div>
    </div> 
    </>
    
  );
}

export default Signup;