import React, { useEffect } from 'react';
import { toast, ToastContainer } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
import './shop.css'

const Shop = () => {
    useEffect(() => {
        toast.info('Welcome to ThunderCats', {
            autoClose: 5000, //5000 = 5 detik
        });
    }, []);

    return (
        <div className='shop_container'>
            <h1>Halaman Shop</h1>

            <ToastContainer />
        </div>
    );
};

export default Shop;
