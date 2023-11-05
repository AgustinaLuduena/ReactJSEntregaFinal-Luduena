import React, { useContext, useState } from "react";
import { ProductContext } from "../../context/ProductContext";
import {Box, Button} from '@mui/material';

const ShopButtons = ({product}) => {
  const { cart, addToCart, removeFromCart } = useContext(ProductContext); 

  const cartItem = cart.find((item) => item.id === product.id);
  const isProductInCart = Boolean(cartItem);

  const [quantity, setQuantity] = useState(1);

  const handleQuantityChange = (newQuantity) => {
    setQuantity(newQuantity);
  };

  const handleAddToCart = () => {
    if (quantity > 0) {
      addToCart({ ...product, quantity });
    }
  };

  const handleRemoveFromCart = () => {
    removeFromCart(product.id);
  };

  return (
    <Box sx={{ width: '100%', maxWidth: 360, bgcolor: 'background.paper' }}>
      <Box sx={{ mt: 3, ml: 1, mb: 1 }}>
        {isProductInCart ? (
          <div>
            <Button onClick={handleRemoveFromCart}>Eliminar del carrito</Button>
          </div>
        ) : (
          <div>
            <Button onClick={handleAddToCart}>Agregar al carrito</Button>
            <div>
              <span>Cantidad: {quantity}</span>
              <Button onClick={() => handleQuantityChange(quantity + 1)}>+</Button>
              <Button onClick={() => handleQuantityChange(quantity - 1)}>-</Button>
            </div>
          </div>
        )}
      </Box>
    </Box>
  );
};

export default ShopButtons;