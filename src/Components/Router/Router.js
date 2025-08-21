import React from 'react';

import Navbar from '../Navbar/Navbar';
import Header from '../Header/Header';
import Presentacion from '../Presentacion/Presentacion';
import Footer from '../Footer/Footer';

function Router() {
    return (
        <div>
            <Navbar />
            <Header />
            <Presentacion />
            <Footer />
        </div>
    );
}

export default Router;