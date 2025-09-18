import React from 'react';
import { Routes, BrowserRouter, Route } from 'react-router-dom';
import { CartProvider } from "../../Context/CartContext";

import Navbar from '../Navbar/Navbar';
import Header from '../Header/Header';
import Presentacion from '../Presentacion/Presentacion';
import InfoProductos from '../InfoProductos/InfoProductos';
import Footer from '../Footer/Footer';
import ScrollToTop from '../Utilidades/ScrollToTop/ScrollToTop';
import BotonWP from '../Utilidades/Whatsapp/BotonWP';
import CategoriasProductos from '../Productos/CategoriasProductos/CategoriasProductos'; 
import Contacto from '../Contacto/Contacto';
import NuestrosClientes from '../NuestrosClientes/NuestrosClientes'
import ProductPage from '../Productos/ProductPage/ProductPage'; 


function Router() {
  return (
    <div>
          <CartProvider>
      <BrowserRouter>
        <ScrollToTop />
        <BotonWP />
        <header>
          <Navbar />
        </header>

        <main>
          <Routes>
            <Route path="/" element={
                <>
                  <Header />
                  <Presentacion />
                  <NuestrosClientes />
                  <InfoProductos />
                  <Contacto />
                </>
              }
            />
<Route path="/categoria/:categoria" element={<CategoriasProductos />} />
<Route path="/producto/:id" element={<ProductPage />} />
          </Routes>
        </main>

        <Footer />
      </BrowserRouter>
      </CartProvider>

    </div>
  );
}

export default Router;
