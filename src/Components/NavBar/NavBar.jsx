
import { IconButton, Badge, Tooltip, Typography } from '@material-ui/core'
import React, { useContext } from "react"
import { DataContext } from "../../Context/dataprovider"
import { Link } from "react-router-dom"
import rolex from '../../images/rolex.jpg'
import ShoppingCartIcon from '@material-ui/icons/ShoppingCart'
import styles from './NavBar.module.css'

export const NavBar = () => {
  const value = useContext(DataContext)
  const [carrito] = value.carrito
  const [menu, setMenu] = value.menu

  const toogleMenu = () => {
    setMenu(!menu)
  }

  return (
    <div className={styles.header}>
      <Link to="/">
        <div className="logo">
          <img src={rolex} alt="rolex" width="150" />
        </div>
      </Link>
      <div onClick={toogleMenu}>
        <IconButton color="inherit">
          <Tooltip title="Ir al carrito de compras">
            <Badge badgeContent={carrito.length} color="secondary">
              <ShoppingCartIcon fontSize="medium" />
            </Badge>
          </Tooltip>
        </IconButton>
      </div>
      <div style={{ display: 'flex'}}>
        <div style={{margin:'0px 20px'}}>
          <Link to="/" className={styles.link}>
            <Typography style={{fontWeight:'900', fontFamily:'Mulish, sans-serif', textTransform:'none'}}>Página principal</Typography>
          </Link>
        </div>
        <div style={{margin:'0px 20px'}}>
          <Link to="/productos" className={styles.link}>
            <Typography style={{fontWeight:'900', fontFamily:'Mulish, sans-serif', textTransform:'none'}}>Ver Productos</Typography>
          </Link>
        </div>
      </div>
    </div>
  )
}