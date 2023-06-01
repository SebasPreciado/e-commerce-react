import React from 'react'
import { NavBar } from "../NavBar/NavBar";
import { CarShop } from "../CarShop/CarShop";
import { BrowserRouter as Router } from "react-router-dom";
import Page from "../pages"

const WatchsPage = () => {
    return (
        <Router>
            <NavBar />
            <CarShop />
            <Page />
        </Router>
    )
}
export default WatchsPage

