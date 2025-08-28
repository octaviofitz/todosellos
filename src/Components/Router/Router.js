import React from 'react';
import {Routes, BrowserRouter, Route} from 'react-router-dom'


import Navbar from '../Navbar/Navbar';
import Header from '../Header/Header';
import Presentacion from '../Presentacion/Presentacion';
import InfoProductos from '../InfoProductos/InfoProductos';
import Footer from '../Footer/Footer';
import ScrollToTop from '../Utilidades/ScrollToTop/ScrollToTop';
import BotonWP from '../Utilidades/Whatsapp/BotonWP';

function Router() {
    return (
        <div>
            <BrowserRouter>
            <ScrollToTop />
            <BotonWP />
            <header>
            <Navbar />
            </header>
            <main>
            <Header />
            <Presentacion />
            <InfoProductos />
            </main>
            
            <Footer />

            </ BrowserRouter>

        </div>
    );
}

export default Router;