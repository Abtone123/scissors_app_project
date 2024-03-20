import React from "react";
import '../loginpage.css'

interface LoginFormProps {
  email: string;
  password: string;
  setEmail: React.Dispatch<React.SetStateAction<string>>;
  setPassword: React.Dispatch<React.SetStateAction<string>>;
  onSubmit: () => void;
  error: string;
}

const LoginForm: React.FC<LoginFormProps> = ({
  email,
  password,
  setEmail,
  setPassword,
  onSubmit,
  error,
}) => {
  return <div className="login_form">
    <form onSubmit={onSubmit}>
      <div><label htmlFor="e_mail">Email</label>
      <input
        type="text"
        id="username"
        value={email}
        onChange={(e) => setEmail(e.target.value)}
      /></div>
      <div><label htmlFor="password">Password</label>
      <input
        type="password"
        id="password"
        value={password}
        onChange={(e) => setPassword(e.target.value)}
      /></div>
      <button type="submit">Login</button>
      {error && <p>{error}</p>}
    </form>
  </div>;
};

export default LoginForm;
