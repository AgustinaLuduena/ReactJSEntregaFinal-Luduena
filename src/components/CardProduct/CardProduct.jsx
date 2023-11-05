import "./CardProduct.css";
import * as React from 'react';
import { Card, CardContent, CardMedia, Typography, Button, CardActionArea, CardActions } from '@mui/material';
import imagePlaceholder from "../../assets/noImageAv.jpg";

const CardProduct = ({ product }) => {
  return (
    <Card sx={{ maxWidth: 345, margin: 2}}>
      <CardActionArea>
        <CardMedia
          component="img"
          image={product.img || imagePlaceholder}
          alt={`Imagen de ${product.name}`}
        />
        <CardContent>
          <Typography gutterBottom variant="h5" component="div">
            {product.name}
          </Typography>
          <Typography variant="body2" color="text.secondary">
            {`$ `+ product.price}
          </Typography>
        </CardContent>
      </CardActionArea>
      <CardActions className='DetailsButton'>
        <Button size="small" color="primary">
          Ver más detalles
        </Button>
      </CardActions>
    </Card>
  );
}

export default CardProduct;