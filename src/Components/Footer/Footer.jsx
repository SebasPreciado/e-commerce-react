import React from 'react'
import WhatsAppIcon from '@material-ui/icons/WhatsApp';
import InstagramIcon from '@material-ui/icons/Instagram';
import FacebookIcon from '@material-ui/icons/Facebook';
import StoreIcon from '@material-ui/icons/Store';
import { Typography } from '@material-ui/core';
import styles from './Footer.module.css'

export const Footer = () => {

    const whatsApp = () => {
        window.open('https://api.whatsapp.com/send?phone=573043335365', '_blank');
    };

    const instagram = () => {
        window.open('https://www.instagram.com/rolex', '_blank');
    };

    const facebook = () => {
        window.open('https://www.facebook.com/rolex', '_blank');
    };

    const stores = () => {
        window.open('https://www.rolex.com/es/store-locator/colombia/antioquia/medellin', '_blank')
    };

    return (
        <div className={styles.iconContainer}>
            <div className={styles.containerIconFirst}>
                <WhatsAppIcon
                    className={styles.icon}
                    onClick={whatsApp}
                />
                <Typography className={styles.typoFooter}>Chatea con nosotros</Typography>
            </div>
            <div className={styles.containerIcon}>
                <InstagramIcon
                    className={styles.icon}
                    onClick={instagram}
                />
                <Typography className={styles.typoFooter}>Productos de nuestro sitio oficial</Typography>
            </div>
            <div className={styles.containerIcon}>
                <FacebookIcon
                    className={styles.icon}
                    onClick={facebook}
                />
                <Typography className={styles.typoFooter}>Ver pagina de Facebook</Typography>
            </div>
            <div className={styles.containerIcon}>
                <StoreIcon
                    className={styles.icon}
                    onClick={stores}
                />
                <Typography className={styles.typoFooter}>Tiendas cercanas a mi</Typography>
            </div>
        </div>
    )
}

