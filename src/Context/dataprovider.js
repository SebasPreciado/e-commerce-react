import React, { createContext, useState, useEffect } from "react"
import Data from "../Data"
import { CarShop } from "../Components/CarShop/CarShop"
import Alert from "@material-ui/lab/Alert"
import styles from "./DataProvider.module.css"

export const DataContext = createContext()

export const DataProvider = (props) => {
  const [productos, setProductos] = useState([])
  const [menu, setMenu] = useState(false)
  const [carrito, setCarrito] = useState([])
  const [total, setTotal] = useState(0)
  const [confirmMessage, setConfirmMessage] = useState("")
  const [openAlertConfirm, setOpenAlertConfirm] = useState(false)
  const [warningMessage, setWarningMessage] = useState("")
  const [openAlertWarning, setOpenAlertWarning] = useState(false)

  useEffect(() => {
    const producto = Data.items
    if (producto) {
      setProductos(producto)
    } else {
      setProductos([])
    }
  }, [])

  const addCarrito = (id) => {
    const check = carrito.every((item) => {
      return item.id !== id
    })
    if (check) {
      const data = productos.filter((producto) => {
        return producto.id === id
      })
      setCarrito([...carrito, ...data])
      setConfirmMessage("Se ha agregado este producto al carrito")
      setOpenAlertConfirm(true)
    } else {
      setWarningMessage("Ya agregaste este prducto, revisa el carrito")
      setOpenAlertWarning(true)
    }
  }

  useEffect(() => {
    let timer
    if (openAlertConfirm) {
      timer = setTimeout(() => {
        setOpenAlertConfirm(false)
        setConfirmMessage("")
      }, 4500)
    }
    return () => clearTimeout(timer)
  }, [openAlertConfirm])

  useEffect(() => {
    let timer
    if (openAlertWarning) {
      timer = setTimeout(() => {
        setOpenAlertWarning(false)
        setWarningMessage("")
      }, 4500)
    }
    return () => clearTimeout(timer)
  }, [openAlertWarning])

  useEffect(() => {
    const dataCarrito = JSON.parse(localStorage.getItem("dataCarrito"))
    if (dataCarrito) {
      setCarrito(dataCarrito)
    }
  }, [])

  useEffect(() => {
    localStorage.setItem("dataCarrito", JSON.stringify(carrito))
  }, [CarShop])

  useEffect(() => {
    const getTotal = () => {
      const res = carrito.reduce((prev, item) => {
        return prev + item.price * item.cantidad
      }, 0)
      setTotal(res)
    }
    getTotal()
  }, [carrito])

  const value = {
    productos: [productos],
    menu: [menu, setMenu],
    carrito: [carrito, setCarrito],
    addCarrito: addCarrito,
    total: [total, setTotal],
  }

  return (
    <DataContext.Provider value={value}>
      {props.children} 
      {openAlertConfirm && (
        <Alert
          severity="success"
          open={openAlertConfirm}
          onClose={() => setOpenAlertConfirm(false)}
          className={styles.alert}
        >
          {confirmMessage}
        </Alert>
      )}
      {openAlertWarning && (
        <Alert
          severity="warning"
          open={openAlertWarning}
          onClose={() => setOpenAlertWarning(false)}
          className={styles.alert}
        >
          {warningMessage}
        </Alert>
      )}
    </DataContext.Provider>
  )
}
