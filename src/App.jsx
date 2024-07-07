import './App.css';
import Layout from './components/Layout/Layout';
import Routes from './Routes/Routes';
import Navbar from './components/Navbar/Navbar';
import Footer from './components/Footer/Footer';
import WhatsAppButton from './UI/WhatsAppButton/whatsAppButton';
import { useLocation } from 'react-router-dom';
import { useDispatch } from 'react-redux';
import { useEffect } from 'react';
import { fetchApiProducts } from './redux/products/apiProductsSlice';

function App() {
    const location = useLocation();
    const isDashboard = location.pathname.startsWith('/dashboard');

    const dispatch = useDispatch();

    useEffect(() => {
        dispatch(fetchApiProducts());
    }, [dispatch]);

    return (
        <>
            {!isDashboard && <Navbar />}
            {isDashboard ? (
                <Routes />
            ) : (
                <Layout>
                    <Routes />
                </Layout>
            )}
            {!isDashboard && <Footer />}
            {!isDashboard && <WhatsAppButton phoneNumber="5492944932206" />}
        </>
    );
}

export default App;
