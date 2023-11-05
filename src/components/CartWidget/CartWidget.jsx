import "../NavBar/NavBar.css";
import React, { useContext } from "react";
import { Link } from 'react-router-dom';
import ShoppingCartIcon from '@mui/icons-material/ShoppingCart';
import { ProductContext } from "../../context/ProductContext";

const CartWidget = () => {
  const { cart } = useContext(ProductContext);
  const totalItemsInCart = cart.reduce((total, item) => total + item.quantity, 0);

  return (
    <div className='CartWidget'>
        <Link to="/shop" style={{ textDecoration: "none", color: "rgb(52, 52, 52)"}}>
          <ShoppingCartIcon />
          <span className="cart-notification">{totalItemsInCart}</span>
        </Link>
    </div>
  );
};

export default CartWidget;


