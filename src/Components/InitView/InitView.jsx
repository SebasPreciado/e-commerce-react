import { Typography, Button } from '@material-ui/core';
import React from 'react'
import { Carousel } from 'react-bootstrap';
import { Footer } from '../Footer/Footer';
import styles from './InitView.module.css'


export default function InitView() {

    const CarouselComponent = () => {
        return (
            <div className={styles.carousel}>
                <Carousel>
                    <Carousel.Item>
                        <img
                            className="d-block w-100"
                            src="https://media.gq.com.mx/photos/5f6e4b2bbc946e88f6c96391/master/pass/Rolex%20Datejust%2041.jpg"
                            alt="Image - 1"
                        />
                        <Carousel.Caption>
                            <div>
                                <Typography className={styles.imgName}>For the all styles</Typography>
                            </div>
                        </Carousel.Caption>
                    </Carousel.Item>
                    <Carousel.Item>
                        <img

                            className="d-block w-100"
                            src="https://www.bosshunting.com.au/wp-content/uploads/2020/05/tudor-black-bay-gmt-3-1024x682.jpg"
                            alt="Image - 2"
                        />
                        <Carousel.Caption>
                            <div>
                                <Typography className={styles.imgName}>Tudor Black Bay</Typography>
                            </div>
                        </Carousel.Caption>
                    </Carousel.Item>
                    <Carousel.Item>
                        <img
                            className="d-block w-100"
                            src="https://www.techthirsty.com/wp-content/uploads/2020/07/Why-Rolex-watches-is-Expensive-20202-scaled.jpg"
                            alt="Image - 3"
                        />
                        <Carousel.Caption>
                            <div>
                                <Typography className={styles.imgName}>Rolex Luxury</Typography>
                            </div>
                        </Carousel.Caption>
                    </Carousel.Item>
                    <Carousel.Item>
                        <img
                            className="d-block w-100"
                            src="https://millenarywatches.com/wp-content/uploads/2019/10/IMG_8479-e1589824245749.jpg"
                            alt="Imagen - 4"
                        />
                        <Carousel.Caption>
                            <div>
                                <Typography className={styles.imgName}>Millenary Watches of Rolex</Typography>
                            </div>
                        </Carousel.Caption>
                    </Carousel.Item>
                    <Carousel.Item>
                        <img
                            className="d-block w-100"
                            src="https://i.pinimg.com/736x/84/d7/fa/84d7faeeb5be2a0ce74a309390fc3165--watches-to-buy-rolex-watches.jpg"
                            alt="Imagen - 5"
                        />
                        <Carousel.Caption>
                            <div>
                                <Typography className={styles.imgName}>Buy your Rolex</Typography>
                            </div>
                        </Carousel.Caption>
                    </Carousel.Item>
                    <Carousel.Item>
                        <img
                            className="d-block w-100"
                            src="https://i.ebayimg.com/images/g/WZ4AAOSwkCddQxnF/s-l1600.jpg"
                            alt="Imagen - 6"
                        />
                        <Carousel.Caption>
                            <div>
                                <Typography className={styles.imgName}>Moissanite Rolex</Typography>
                            </div>
                        </Carousel.Caption>
                    </Carousel.Item>

                </Carousel>
            </div>
        );
    };

    var logoRolex = "https://freepngimg.com/save/28122-rolex-logo/1600x1200"
    var watchSold = "https://bauer.com.co/wp-content/uploads/2023/03/m126506-0001_modelpage_front_facing_landscape.png"
    var watchNew = "https://bauer.com.co/wp-content/uploads/2023/03/m228398tbr-0036_modelpage_front_facing_landscape.png"

    return (
        <div className={styles.container}>
            <div className={styles.title}>
                <img className={styles.image} src={logoRolex} alt="Rolex Logo" />
                <Typography className={styles.typography}>Tienda virtual Rolex</Typography>
                <img className={styles.image} src={logoRolex} alt="Rolex Logo" />
            </div>
            <div className={styles.content}>
                <div className={styles.bestWatch}>
                    <div className={styles.infoBox}>
                        <Typography className={styles.box}>NUEVO RELOJ EN VITRINA</Typography>
                        <div className={styles.img}>
                            <img width="200" src={watchSold} alt="Watch Sold" />
                        </div>
                        <h5>Ficha técnica</h5>
                        <div style={{ textAlign: 'start' }}>
                            <Typography><span>Nombre: </span>Daytona Cosmograph</Typography>
                            <Typography><span>Precio: </span>USD 51.235</Typography>
                            <Typography><span>Composicion: </span>Acero Inoxidable 100%</Typography>
                            <Typography><span>Tamaño de la funda: </span>40 mm</Typography>
                            <Typography><span>Colores: </span>Negro, acero inoxidable, cara redonda, dial de bastón, manecillas de bastón, cronógrafos, escala taquimétrica, corona de rosca, brazalete Oyster Perpetual, cierre desplegable y movimiento automático. Este artículo viene junto a la caja original, documentos y certificado de CHRONEXT</Typography>
                        </div>
                        <div>
                            <Button className={styles.button} variant='contained'>Reservar</Button>
                        </div>
                    </div>
                    <div className={styles.infoBox}>
                        <Typography className={styles.box}>RELOJ MAS VENDIDO DEL ULTIMO MES</Typography>
                        <div className={styles.img}>
                            <img width="200" src={watchNew} alt="New Watch" />
                        </div>
                        <h5>Ficha técnica</h5>
                        <div style={{ textAlign: 'start' }}>
                            <Typography><span>Nombre: </span>Day-Date II</Typography>
                            <Typography><span>Precio: </span>USD 98.645</Typography>
                            <Typography><span>Composicion: </span>Diamantes y Oro Rosa 18Kt al 100%</Typography>
                            <Typography><span>Tamaño de la funda: </span>41 mm</Typography>
                            <Typography><span>Descripcion: </span>Oro rosa de 18kt, diamante blanco, cara redonda, dial de bastón, manecillas de bastón, visualización de día y fecha, indicador de fecha ampliado, bisel con diamantes incrustados, brazalete President, cierre desplegable y movimiento automático</Typography>
                        </div>
                        <div>
                            <Button className={styles.button} variant='contained'>Cotizar</Button>
                        </div>
                    </div>
                </div>
                <CarouselComponent />
            </div>
            <footer className={styles.footer}>
                <Footer />
            </footer>
        </div>
    )
}
