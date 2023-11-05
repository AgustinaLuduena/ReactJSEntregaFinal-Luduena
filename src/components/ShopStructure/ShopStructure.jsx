import "../../pages/ShopPage/ShopPage.css";
import React, { useContext } from 'react';
import { ProductContext } from '../../context/ProductContext';
import {List, ListItem, ListItemText, ListItemAvatar, Avatar, Divider, Button} from '@mui/material';
import ShoppingBagIcon from '@mui/icons-material/ShoppingBag';

const ShopStructure = ({ cart }) => {
  const { setCart } = useContext(ProductContext);

  const handleRemoveItem = (productId) => {
    const updatedCart = cart.filter((product) => product.id !== productId);
    setCart(updatedCart);
  };

  return (
    <div className='shopStructure'>
      {cart.map((product) => (
        <div className="shopStructureItem" key={product.id}>
          <List
            sx={{
              width: '100%',
              maxWidth: 360,
              bgcolor: 'background.paper',
            }}
          >
            <ListItem>
              <ListItemAvatar>
                <Avatar>
                  <ShoppingBagIcon />
                </Avatar>
              </ListItemAvatar>
              <ListItemText primary={product.name} secondary={`Precio: $${product.price}`} />
              <div>
              <ListItemText secondary={`${product.quantity}`} />
              </div>
            </ListItem>
            <Divider variant="inset" component="li" />
            <ListItem>
              <Button onClick={() => handleRemoveItem(product.id)}>Eliminar</Button>
            </ListItem>
          </List>
        </div>
      ))}
    </div>

  );
};

export default ShopStructure;
