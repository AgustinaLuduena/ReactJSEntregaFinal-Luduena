import React, { createContext, useState, useEffect } from 'react';
import { collection, query, getDocs } from "firebase/firestore";
import {db} from "../firebase/firebaseConfig";

export const ProductContext = createContext();

export const ProductProvider = ({ children }) => {
  const [products, setProducts] = useState([]);
  const [cart, setCart] = useState([]);

  useEffect(() => {
    const getProducts = async () => {
      try {
        const q = query(collection(db, 'products'));
        const docs = [];
        const querySnapshot = await getDocs(q);
        querySnapshot.docs.forEach((doc) => {
          docs.push({ ...doc.data(), id: doc.id });
        });
        setProducts(docs);
      } catch (error) {
        console.error('Error al obtener los productos:', error);
      }
    };
    getProducts();
  }, []);

    const addToCart = (product) => {
      setCart([...cart, product]);
    };
  
    const removeFromCart = (productId) => {
      const updatedCart = cart.filter((product) => product.id !== productId);
      setCart(updatedCart);
    };  

  return (
    <ProductContext.Provider value={{ products, setProducts, cart, setCart, addToCart, removeFromCart}}>
      {children}
    </ProductContext.Provider>
  );
};