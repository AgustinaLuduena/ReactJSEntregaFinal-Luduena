import "./NavBar.css";
import { Link } from "react-router-dom";
import logo from "../../assets/logo1.png";
import CartWidget from "../CartWidget/CartWidget";
import NavBarCategories from "../NavBarCategories/NavBarCategories";

const NavBar = () => {

  return (
    <div className="nav-container">
      <Link to="/">
        <img src={logo} alt="Logo del e-commerce TOKIO" style={{width: "65px", margin: "5px 14px"}} />
      </Link>
      <nav>
      <ul className="nav-ul">
        <Link className="brand" to="/">
          TOKIO
        </Link>
        <Link className="li" to="/">
          INICIO
        </Link>
        <Link className="li" to="/contact">
          CONTACTO
        </Link>
        <div>
          <NavBarCategories/>
        </div>
        <Link className="li">
           <CartWidget/> 
        </Link>
      </ul>
    </nav>
    </div>
  );
};

export default NavBar;
