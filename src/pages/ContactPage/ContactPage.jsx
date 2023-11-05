import "./ContactPage.css";
import React from 'react';
import { Link } from "react-router-dom";
import IgCard from '../../components/IgCard/IgCard';

const ContactPage = () => {
  return (
    <div className='pageContacto'>
        <section className='contactoTitle'>
          <h1> ¡Contactanos!</h1>
        </section>
        <section className='contacto'>
          <p>Si tenés alguna duda de cómo comprar, escribinos por Instagram:</p>
          <div>
              <Link to="https://www.instagram.com/tokio_pijamas/" target="_blank" >
                <p>@tokio_pijamas</p>
              </Link>
          </div>
          <div className='contacto'>
            <IgCard/>
          </div>
        </section>
    </div>
  )
};

export default ContactPage;