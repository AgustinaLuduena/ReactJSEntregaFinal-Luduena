import "./IgCard.css";
import React from 'react'
import { Link } from "react-router-dom";
import conjuntoBulls from "../../assets/conjuntoBulls.png";
import conjuntoDeportivo from "../../assets/conjuntoDeportivo.png";
import pijamaGravity from "../../assets/pijamaGravity.png";
import pijamaGreys from "../../assets/pijamaGreys.png";

const IgCard = () => {
  return (
     <div className='igCard'>
        <Link to="https://www.instagram.com/tokio_pijamas/" target="_blank">
            <img className='igImg' src={pijamaGravity} alt="pijama Gravity Falls" />
        </Link>
        <Link to="https://www.instagram.com/tokio_pijamas/" target="_blank">
            <img className='igImg' src={conjuntoDeportivo} alt="conjunto deportivo de top y biker" />
        </Link>
        <Link to="https://www.instagram.com/tokio_pijamas/" target="_blank">
            <img className='igImg' src={pijamaGreys} alt="pijama Greys Anatomy" />
        </Link>
        <Link to="https://www.instagram.com/tokio_pijamas/" target="_blank">
            <img className="igImg" src={conjuntoBulls} alt="conjunto Chicago Bulls de biker y remera" />
        </Link>
    </div>
  )
};


export default IgCard;