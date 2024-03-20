import React from "react";
import "../registeration.css";
import Logo from '../assets/Linkly.png'
import { Link } from "react-router-dom";


const RegisterPage: React.FC = () => {
  return (
   <>
   
   <div className="register_container">
   <Link to='/'><nav>
            <img src={Logo} alt="" /></nav></Link>
        <div className="register_form_container">
            
          <form action="#">
            <div>
              <label htmlFor="e_main">Email</label>
              <input type="text" name="e_mail" id="" />
            </div>
            <div>
              <label htmlFor="password">Password</label>
              <input type="password" name="" id="" />
            </div>
            <div>
              <label htmlFor="confirm_password">Confirm Password</label>
              <input type="password" />
            </div>
            <button>Register</button>
          </form>
        </div>
      </div></> 
  );
};

export default RegisterPage;
