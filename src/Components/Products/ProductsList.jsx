import React, { useContext } from 'react'
import { DataContext } from "../../Context/dataprovider";
import { ProductItem } from "./ProductItem";
import { Footer } from '../Footer/Footer'
import styles from './ProductsList.module.css'
import { Typography, Grid } from '@material-ui/core';

export const ProductsList = () => {
	const value = useContext(DataContext)
	const [productos] = value.productos;
	var logoRolex = "https://freepngimg.com/save/28122-rolex-logo/1600x1200"
	return (
		<div className={styles.container}>
			<div className={styles.title}>
				<img className={styles.image} src={logoRolex} alt="Logo Rolex" />
				<Typography className={styles.text}>
					Productos disponibles en tiendas físicas y virtuales
				</Typography>
				<img className={styles.image} src={logoRolex} alt="Logo Rolex" />
			</div>
			<div>
				<Grid container spacing={2}>
					{productos.map((item) => (
						<Grid item key={item.id} xs={12} sm={6} md={4} lg={3}>
							<ProductItem
								title={item.title}
								image={item.image}
								price={item.price}
								descripcion={item.descripcion}
								materiales= {item.materiales}
								id={item.id}
							/>
						</Grid>
					))}
				</Grid>
			</div>
			<footer className={styles.footer}>
				<Footer />
			</footer>
		</div>
	)
}
