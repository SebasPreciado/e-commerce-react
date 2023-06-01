import React, { useContext, useState } from "react";
import { FormControlLabel, Switch, Typography, Button } from '@material-ui/core'
import { DataContext } from "../../Context/dataprovider";
import styles from './ProductsItem.module.css'

export const ProductItem = ({ title, image, price, descripcion, materiales, id }) => {

  const value = useContext(DataContext);
  const addCarrito = value.addCarrito;
  const [showDetails, setShowDetails] = useState(false);

  const handleSwitchChange = () => {
    setShowDetails(!showDetails);
  };



  return (
    <div key={id} className={styles.product}>
      <FormControlLabel
        value="start"
        control={<Switch color="primary" checked={showDetails} onChange={handleSwitchChange} />}
        label="Ver detalles del reloj"
        labelPlacement="start"
        className={styles.info}
      />
      {showDetails ? (
        <>
          <div className={styles.description}>
            <div className={styles.card}>
              <Typography className={styles.textCard}><span>Nombre reloj:  </span>{title}</Typography>
            </div>
            <div className={styles.card}>
              <Typography className={styles.textCard}><span>Descripción: </span>{descripcion}</Typography>
              </div>
            <div className={styles.card}>
              <Typography className={styles.textCard}><span>Materiales de fabricación: </span>{materiales}</Typography>
            </div>
            <div className={styles.card}>
              <Typography className={styles.textCard}><span>Precio: </span>${price.toLocaleString()}</Typography>
            </div>
          </div>
        </>
      ) : (
        <>
          <div className={styles.image}>
            <img width='400' src={image} alt={title} />
          </div>
          <div className={styles.infoWatch}>
            <Typography className={styles.data}><span>Nombre del reloj: </span>{title}</Typography>
            <Typography className={styles.data}><span>Precio: </span> ${price.toLocaleString()} </Typography>
          </div>
          <div style={{ width: '100%' }}>
            <Button className={styles.button} variant='contained' onClick={() => addCarrito(id)}>Añadir al carrito</Button>
          </div>
        </>
      )}
    </div>
  );
};
