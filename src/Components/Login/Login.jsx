import React, { useState, useEffect } from 'react'
import WatchsPage from '../WatchsPage/WatchsPage'
import styles from './Login.module.css'
import {
    Grid,
    Container,
    Paper,
    Button,
    CssBaseline,
    FilledInput,
    IconButton,
    InputLabel,
    InputAdornment,
    FormControl
} from '@material-ui/core'
import Alert from '@material-ui/lab/Alert';
import Visibility from '@material-ui/icons/Visibility'
import VisibilityOff from '@material-ui/icons/VisibilityOff'
import LockIcon from '@material-ui/icons/Lock'
import AccountCircleIcon from '@material-ui/icons/AccountCircle'

const Login = () => {
    const [login, setLogin] = useState(false)
    const [user, setUser] = useState('')
    const [password, setPassword] = useState('')
    const [showPassword, setShowPassword] = useState(false)
    const [errorMessage, setErrorMessage] = useState('')
    const [openAlert, setOpenAlert] = useState(false)

    const iniciarSesion = (e) => {
        e.preventDefault()
        if (user.length === 0 || password.length === 0) {
            setErrorMessage('! Debes completar todos los datos para poder continuar ¡')
            setOpenAlert(true)
        } else {
            if (user === 'cesde' && password === 'cesde') {
                setLogin(true)
                setOpenAlert(false)
            } else {
                setLogin(false)
                setErrorMessage('El Usuario y/o la Contraseña que proporcionaste no son correctos')
                setOpenAlert(true)
                setUser('')
                setPassword('')
            }
        }
    }

    useEffect(() => {
        let timer
        if (openAlert) {
            timer = setTimeout(() => {
                setOpenAlert(false)
                setErrorMessage('')
            }, 4500)
        }
        return () => clearTimeout(timer)
    }, [openAlert])

    const sendUser = (e) => {
        setUser(e.target.value)
    }

    const sendPassword = (e) => {
        setPassword(e.target.value)
    }

    const handleClickShowPassword = () => {
        setShowPassword(!showPassword)
    }

    const handleMouseDownPassword = (event) => {
        event.preventDefault()
    }

    return (
        <>
            {!login ? (
                <Grid container component="main" className={styles.content}>
                    <CssBaseline />
                    <Container component={Paper} maxWidth='xs' className={styles.container}>
                        <div className={styles.principal}>
                            <LockIcon color='primary' fontSize='medium' />
                            <div className={styles.title}>
                                <p>
                                    Ingresa tus credenciales
                                </p>
                            </div>
                            <form className={styles.form}>
                                <FormControl style={{ width: '100%', marginBottom: '20px', color: 'black' }} variant='filled'>
                                    <InputLabel style={{ color: 'black' }}>Nombre de usuario</InputLabel>
                                    <FilledInput
                                        fullWidth
                                        color='primary'
                                        variant='outlined'
                                        label='Username'
                                        name='username'
                                        value={user}
                                        onChange={sendUser}
                                        required
                                        endAdornment={
                                            <InputAdornment position='end'>
                                                <IconButton>
                                                    <AccountCircleIcon />
                                                </IconButton>
                                            </InputAdornment>
                                        }
                                    />
                                </FormControl>
                                <FormControl style={{ width: '100%', margin: '20px 0px' }} variant='filled'>
                                    <InputLabel style={{ color: 'black' }}>Contraseña</InputLabel>
                                    <FilledInput
                                        fullWidth
                                        type={showPassword ? 'text' : 'password'}
                                        color='primary'
                                        variant='outlined'
                                        label='Password'
                                        name='password'
                                        value={password}
                                        onChange={sendPassword}
                                        required
                                        endAdornment={
                                            <InputAdornment position='end'>
                                                <IconButton
                                                    aria-label='toggle password visibility'
                                                    onClick={handleClickShowPassword}
                                                    onMouseDown={handleMouseDownPassword}
                                                    edge='end'
                                                >
                                                    {showPassword ? <Visibility /> : <VisibilityOff />}
                                                </IconButton>
                                            </InputAdornment>
                                        }
                                    />
                                </FormControl>
                                <Button variant='contained' className={styles.button} onClick={iniciarSesion}>
                                    Ingresar
                                </Button>
                            </form>
                        </div>

                    </Container>
                    {openAlert && (
                        <Alert severity="error" open={openAlert} onClose={() => setOpenAlert(false)} className={styles.alert}>
                            {errorMessage}
                        </Alert>
                    )}
                </Grid>
            ) : (
                <WatchsPage user={user} />
            )}
        </>

    )
}

export default Login
