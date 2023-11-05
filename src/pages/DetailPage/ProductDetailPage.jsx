import "./ProductDetailPage.css";
import React, { useContext, useEffect } from 'react';
import { useParams } from 'react-router-dom';
import { ProductContext } from '../../context/ProductContext';
import { Card, CardMedia } from '@mui/material';
import DetailPageInfo from '../../components/DetailPageInfo/DetailPageInfo';

const ProductDetailPage = () => {
  const { id } = useParams();
  const { products } = useContext(ProductContext);

  useEffect(() => {}, [id]);

  const product = products.find((product) => product.id === id);

  if (!product) {
    return <div className="erorr">
            Producto no encontrado. Inténtelo de nuevo más tarde.
          </div>;
  }

  return (
    <div className='detailConteiner'>
      <Card sx={{ maxWidth: 345, margin: 2}}>
        <CardMedia
            component="img"
            image={product.img}
            alt="Imagen del producto"
          />
      </Card>
      <DetailPageInfo product={product} />
    </div>
  );
};

export default ProductDetailPage;