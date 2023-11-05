import "./Footer.css";
import React from "react";
import { Link } from "react-router-dom";

const Footer = ({}) => {
  return (
    <div>
        <section className='footer'>
                <p className="instagram">Nuestras redes</p>
            <div className="linkConteiner">
                <Link className="instagram" to="https://www.instagram.com/tokio_pijamas/" target="_blank" >
                  <p>INSTAGRAM: @tokio_pijamas</p>
                </Link>
            </div>
        </section>
    </div>
  );
};

export default Footer;