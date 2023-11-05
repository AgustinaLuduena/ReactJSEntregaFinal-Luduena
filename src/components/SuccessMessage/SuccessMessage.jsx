import "./SuccessMessage.css";
import React, { useState } from 'react';
import { Alert, AlertTitle, Stack, Button } from '@mui/material';
import { Link } from 'react-router-dom';

const SuccessMessage = ({purchaseID, resetCart}) => {

  return (
    <div className="SuccessAlert">
    <Stack spacing={2}>
      <Alert severity="success">
        <AlertTitle>¡Gracias por su compra!</AlertTitle>
        Su ID de transacción es: <strong> {purchaseID} </strong>. 
        <AlertTitle style={{margin: 5, fontSize: 12, color: "grey", fontStyle: "italic"}}>Guarde este código. En el caso de necesitar hacer un reclamo, se lo solicitaremos.</AlertTitle>
      </Alert>
      <Link to="/">
        <Button variant="contained" onClick={() => resetCart()}>
          Volver a la Página de inicio
        </Button>
      </Link>
    </Stack>
    </div>
  );
};

export default SuccessMessage;