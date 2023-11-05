import "./ShopPage.css";
import React, { useState, useContext } from 'react';
import { ProductContext } from '../../context/ProductContext';
import { Link } from 'react-router-dom';
import { collection, addDoc } from "firebase/firestore"; 
import { db } from "../../firebase/firebaseConfig";
import { TextField, Button, Stack} from '@mui/material';
import SendIcon from '@mui/icons-material/Send';
import ShopStructure from '../../components/ShopStructure/ShopStructure';
import SuccessMessage from "../../components/SuccessMessage/SuccessMessage";

const initialValues = {
  firstName: '',
  lastName: '',
  phone: '',
  mail: '',
};

const ShopPage = () => {
  const [values, setValues] = useState(initialValues);
  const [purchaseID, setPurchaseID] = useState("");
  const { cart, setCart } = useContext(ProductContext);
  const [isPurchaseCompleted, setIsPurchaseCompleted] = useState(false);

  const totalItems = cart.reduce((total, item) => total + item.quantity, 0);
  const totalPrice = cart.reduce((total, item) => total + (item.price * item.quantity), 0);

  const handleOnChange = (e) => {
    const { value, name } = e.target;
    setValues({ ...values, [name]: value });
  };

  const handleOnSubmit = async (e) => {
    e.preventDefault();
    const docRef = await addDoc(collection(db, "purchasesCollection"), {
      values,
      items: cart,
    });
    setValues(initialValues);
    setPurchaseID(docRef.id);
    setIsPurchaseCompleted(true);
  };

  return (
    <div>
      <div>
        <p className="shopTitle">¿Estás lista para finalizar tu compra?</p>
      </div>
      <div>
        <div>
          <ShopStructure cart={cart} />
        </div>
        <div className="shopList">
          <div>
            <p className="shopTxtTitle">Este es tu carrito hasta el momento:</p>
          </div>
          <p className="shopTxt">Cantidad total de items: {totalItems}</p>
          <p className="shopTxt">Suma total del precio: $ {totalPrice}</p>
        </div>
      </div>
      {cart.length > 0 && !isPurchaseCompleted ? (
        <div className="finalShopStep">
          <p className="shopSubtitle">Último paso: cargar tus datos</p>
          <form className='shopConteiner' onSubmit={handleOnSubmit}>
            <TextField
              placeholder='Nombre/s'
              name='firstName'
              value={values.firstName}
              onChange={handleOnChange}
              required
            />
            <TextField
              placeholder='Apellido/s'
              name='lastName'
              value={values.lastName}
              onChange={handleOnChange}
              required
            />
            <TextField
              placeholder='Telefono'
              name='phone'
              value={values.phone}
              onChange={handleOnChange}
              required
            />
            <TextField
              placeholder='Email'
              name='mail'
              value={values.mail}
              onChange={handleOnChange}
              required
            />
            <Stack className="shopButtonsConteiner" direction="row" spacing={2}>
              <Link to="/">
                <Button variant="outlined">
                  Volver
                </Button>
              </Link>
              <Button type="submit" variant="contained" endIcon={<SendIcon />}>
                Generar compra
              </Button>
            </Stack>
          </form>
        </div>
      ) : null}
        {isPurchaseCompleted && <SuccessMessage purchaseID={purchaseID} resetCart={() => setCart([])} />}
    </div>
  );
};

export default ShopPage;
