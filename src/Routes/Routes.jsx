import React from 'react';
import {Routes as ReactDomRoutes, Route} from 'react-router-dom';
// import DetalleProducto from '../components/Products/DetalleProductos/DetalleProductos';
import Carousell from '../components/Hero/Carousel';
import { PreguntasFrecuentes } from '../components/Faqs/PreguntasFrecuentes';
import ContactSection from '../components/Contact/ContactSection';
import Checkout from '../pages/Checkout/Checkout';
import Felicitaciones from '../pages/Felicitaciones/Felicitaciones';
import PaymentMethods from '../components/Hero/SubHero/MediosDePago';
import CardsProductos from '../components/Products/Cards/CardsProductos';
import CheckoutResumen from '../pages/Resumen/CheckoutResumen';
import Dashboard from '../pages/Dashboard/Dashboard'
import DashboardOrders from '../pages/Dashboard/DashboardRoutes/DashboardsOrders';
import DashboardProducts from '../pages/Dashboard/DashboardRoutes/DashboardsProducts';
import DashboardEstadisticas from '../pages/Dashboard/Estadisticas/DashboardEstadisticas';
import DashboardPanel from '../pages/Dashboard/DashboardRoutes/Panel/DashboardPanel';


function Routes() {

    return(
        <ReactDomRoutes>
            <Route path= "/" element={<Home/>} />
            {/* <Route path= "/productos/:id" element={<DetalleProducto/>} /> */}
            <Route path="/productos" element={<CardsProductos/>} />
            <Route path='/checkout' element={<Checkout />}/>
            <Route path='/felicitaciones' element={<Felicitaciones />} />
            <Route path= '/resumen' element={<CheckoutResumen/>} />
            <Route path="/dashboard" element={<Dashboard />}>
                <Route path="orders" element={<DashboardOrders />} />
                <Route path="products" element={<DashboardProducts />} />
                <Route path="estadisticas" element={<DashboardEstadisticas />} />
                <Route path="panel" element={<DashboardPanel />} />
            </Route>





        </ReactDomRoutes>

    )


};


function Home(){
    return(
        <>
        <Carousell/>
        <PaymentMethods/>
        <CardsProductos/>
        <PreguntasFrecuentes/> 
        <ContactSection/>

        
        </>

    );
}


export default Routes;