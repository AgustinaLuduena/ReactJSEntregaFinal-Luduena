import * as React from 'react';
import {Box, Grid, Divider, Typography} from '@mui/material';
import ShopButtons from "../ShopButtons/ShopButtons";

const detailText = {
    'Pijamas': 'Nuestros hermosos pijamas son ideales para estar siempre cómodas. Los talles son amplios; consultanos por las medidas.',
    'Pantuflas': 'Nuestras pantuflas son ideales para esos días que no queremos salir de la casa. Trabajamos del talle 35 al 40, consultanos por las tuyas.',
    'Ropa deportiva': 'Ya sea para estar súper cómoda o para ir a entrenar, nuestras prendas deportivas son ideales y de la mejor calidad.',
  };

const DetailPageInfo = ({ product}) => {
    const additionalText = detailText[product.category] || '';

  return (
    <Box sx={{ width: '100%', maxWidth: 360, bgcolor: 'background.paper' }}>
      <Box sx={{ my: 3, mx: 2 }}>
        <Grid container alignItems="center">
          <Grid item xs>
            <Typography gutterBottom variant="h4" component="div">
              {product.name}
            </Typography>
          </Grid>
        </Grid>
        <Grid container alignItems="center">
          <Grid item>
            <Typography gutterBottom variant="h6" component="div">
                {`$ `+ product.price}
            </Typography>
          </Grid>
        </Grid>
        {additionalText && (
          <Typography color="text.secondary" variant="body2">
            {additionalText}
          </Typography>
        )}
      </Box>
      <Divider variant="middle" />
      <Box sx={{ mt: 3, ml: 1, mb: 1 }}>
        <ShopButtons product={product}/>
      </Box>
    </Box>
  );
};

export default DetailPageInfo;



