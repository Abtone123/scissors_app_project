import React, { useState } from "react";
import "./loginpage.css";
import LoginForm from "./components/LoginForm";
import Logo from "../src/assets/Linkly.png";
import { Link } from "react-router-dom";

// const [username, setUsername] = useState("");
//   const [password, setPassword] = useState("");
//   const [error, setError] = useState("");

const LoginPage: React.FC = () => {
  return (
    <>
      <div className="login_container">
        <Link to={'/'}>
        <nav className="login_logo">
          <div>
            <img src={Logo} alt="" />
          </div>
        </nav>
        </Link>
        <div className="login_form_container">
          <h2>Login</h2>
          <LoginForm />
        </div>
      </div>
    </>
  );
};

export default LoginPage;
