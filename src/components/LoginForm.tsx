import React, { useState } from "react";
import { signInWithEmailAndPassword } from "firebase/auth";
import "../loginpage.css";
import { auth } from "../firebase/firebase";

interface LoginFormProps {
  error: string;
  setError: React.Dispatch<React.SetStateAction<string>>;
}

const LoginForm: React.FC<LoginFormProps> = ({ error, setError }) => {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");

  const handleLogin = async (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    // const auth = getAuth();
    try {
      await signInWithEmailAndPassword(auth, email, password);
      // Handle successful login here, e.g., redirecting to another page
    } catch (error) {
      if (error instanceof Error) setError(error.message);
    }
  };

  return (
    <div className="login_form">
      <form onSubmit={handleLogin}>
        <div>
          <label htmlFor="e_mail">Email</label>
          <input
            type="text"
            id="username"
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
        <button type="submit">Login</button>
        {error && <p>{error}</p>}
      </form>
    </div>
  );
};

export default LoginForm;
