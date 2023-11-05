import "./Header.css";
import React from "react";
import { Link } from "react-router-dom";

const Header = ({children}) => {
  return (
    <div>
        <section className='bgConteiner'>
            <div className='titleConteiner'>
                <Link to={"/"} style={{textDecoration : "none", color : "black"}} >
                  <h1 className='title'>TOKIO</h1>
                  <h2 className='subtitle'>Tienda Online</h2>
                  {children}
                </Link>
            </div>
        </section>
    </div>
  );
};

export default Header;

