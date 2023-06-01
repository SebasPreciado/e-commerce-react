import React, { useContext, useState } from "react"
import { DataContext } from "../../Context/dataprovider"
import { Modal, Typography, Button, IconButton, Dialog, DialogTitle, DialogContent, DialogActions } from "@material-ui/core"
import { CloseOutlined } from "@material-ui/icons"
import NavigateBeforeIcon from '@material-ui/icons/NavigateBefore'
import NavigateNextIcon from '@material-ui/icons/NavigateNext'
import DeleteIcon from '@material-ui/icons/Delete'
import styles from './CarShop.module.css'

export const CarShop = () => {
  const value = useContext(DataContext)
  const [menu, setMenu] = value.menu
  const [carrito, setCarrito] = value.carrito
  const [total] = value.total
  const [removingProduct, setRemovingProduct] = useState(null)

  const tooglefalse = () => {
    setMenu(false)
  }

  const reduce = (id) => {
    setCarrito((prevCarrito) =>
      prevCarrito.map((item) => {
        if (item.id === id) {
          return {
            ...item,
            cantidad: item.cantidad === 1 ? 1 : item.cantidad - 1,
          }
        }
        return item
      })
    )
  }

  const increase = (id) => {
    setCarrito((prevCarrito) =>
      prevCarrito.map((item) => {
        if (item.id === id) {
          return {
            ...item,
            cantidad: item.cantidad + 1,
          }
        }
        return item
      })
    )
  }

  const confirmRemoval = (id) => {
    setRemovingProduct(id)
  }

  const cancelRemoval = () => {
    setRemovingProduct(null)
  }

  const removeProduct = (id) => {
    setCarrito((prevCarrito) => prevCarrito.filter((item) => item.id !== id))
    cancelRemoval()
  }

  return (
    <Modal open={menu}>
      <div className={styles.container}>
        {carrito.length === 0 ? (
          <div style={{ textAlign: "center" }}>
            <Typography className={styles.textNull}>
              El carrito está vacio, selecciona al menos un reloj
            </Typography>
            <Button className={styles.buttonNull} onClick={tooglefalse} variant='contained'>Cerrar</Button>
          </div>
        ) : (
          <div className={styles.containerCarShop}>
            <div onClick={tooglefalse}>
              <IconButton>
                <CloseOutlined />
              </IconButton>
            </div>
            {carrito.map((producto) => (
              <div className={styles.watchItem} key={producto.id}>
                <Typography className={styles.title}>Nombre: {producto.title} </Typography>
                <div className={styles.boxCountWatch}>
                  <div>
                    <img width='200' src={producto.image} alt={producto.title} />
                  </div>
                  <div>
                    <Typography className={styles.text}>Precio</Typography>
                    <Typography className={styles.text}>${producto.price.toLocaleString()}</Typography>
                    <div className={styles.counter}>
                      <Button onClick={() => reduce(producto.id)}>
                        <NavigateBeforeIcon />
                      </Button>
                      <Typography className={styles.text} >{producto.cantidad}</Typography>
                      <Button onClick={() => increase(producto.id)}>
                        <NavigateNextIcon />
                      </Button>
                    </div>
                  </div>
                </div>
                <div className={styles.buttonDelete}>
                  <Button
                    variant="contained"
                    color="secondary"
                    style={{ textTransform: 'none' }}
                    onClick={() => confirmRemoval(producto.id)}
                    startIcon={<DeleteIcon />}
                  >
                    Eliminar del carrito
                  </Button>
                </div>
              </div>
            ))}
            <div className={styles.footerModal}>
              <Typography className={styles.text}>Total: ${total.toLocaleString()}</Typography>
              <Button className={styles.buttonNull} onClick={tooglefalse} variant='contained'>Ir a Pagar</Button>
            </div>
          </div>

        )}
        <Dialog open={Boolean(removingProduct)} onClose={cancelRemoval}>
        <div className={styles.dialog}>
          <Typography>
            Esta acción eliminará el producto del carrito
          </Typography>
          <Typography> ¿Estás seguro de que deseas continuar?</Typography>
          <div style={{ display: 'flex', justifyContent:'space-around', margin:'20px 0px'}}>
            <div>
              <Button style={{ textTransform: 'none', fontSize:'15px'}} onClick={cancelRemoval} color="primary" variant="contained">
                Cancelar
              </Button>
            </div>
            <div>
              <Button style={{ textTransform: 'none', fontSize:'15px'}} onClick={() => removeProduct(removingProduct)} color="secondary" variant="contained">
                Eliminar
              </Button>
            </div>
          </div>
      </div>
        </Dialog>
        </div>
    </Modal>
  )
}
