import Logo from "../assets/Linkly.png";
import signin from "../assets/sign-in.png"
import {Link} from "react-router-dom";
import  "../App.css";


const NavBar: React.FC = () => {
  return (
    <nav className="header_container">
      <div>
        <img src={Logo} alt="" />
      </div>
      <div className="header_container_buttons">
        <li>
            <Link to={"/login"}><button id="login"><span>Login</span> <img src={signin} alt="" /></button></Link>
            <Link to={"/register"}><button id="register">Register now</button></Link>
        </li>
      </div>
    </nav>
  );
};

export default NavBar;
