import React, { useState } from "react";
import "../registeration.css";
import Logo from "../assets/Linkly.png";
import { Link } from "react-router-dom";
import { createUserWithEmailAndPassword } from "firebase/auth";
import { auth } from "../firebase/firebase";

const RegisterPage: React.FC = () => {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [confirmPassword, setConfirmPassword] = useState("");
  const [error, setError] = useState("");

  const handleRegister = async (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    if (password !== confirmPassword) {
      setError("Passwords do not match");
      return;
    }
    try {
      await createUserWithEmailAndPassword(auth, email, password);
      // Handle successful registration here, e.g., redirecting to login page
    } catch (error) {
      if (error instanceof Error) setError(error.message);
    }
  };

  return (
    <>
      <div className="register_container">
        <Link to="/">
          <nav>
            <img src={Logo} alt="" />
          </nav>
        </Link>
        <div className="register_form_container">
          <form onSubmit={handleRegister}>
            <div>
              <label htmlFor="email">Email</label>
              <input
                type="text"
                id="email"
                value={email}
                onChange={(e) => setEmail(e.target.value)}
              />
            </div>
            <div>
              <label htmlFor="password">Password</label>
              <input
                type="password"
                id="password"
                value={password}
                onChange={(e) => setPassword(e.target.value)}
              />
            </div>
            <div>
              <label htmlFor="confirm_password">Confirm Password</label>
              <input
                type="password"
                id="confirm_password"
                value={confirmPassword}
                onChange={(e) => setConfirmPassword(e.target.value)}
              />
            </div>
            <button type="submit">Register</button>
            {error && <p>{error}</p>}
          </form>
        </div>
      </div>
    </>
  );
};

export default RegisterPage;
