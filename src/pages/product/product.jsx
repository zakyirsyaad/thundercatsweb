import React, { useEffect, useState } from 'react';
import './product.css';
import { NavLink } from 'react-router-dom';

export default function Product() {
    const [data, setData] = useState([]);
    const [filter, setFilter] = useState([]);

    useEffect(() => {
        let componentMounted = true;

        const getProducts = async () => {
            const response = await fetch('http://localhost:3001/product');
            const products = await response.json();

            if (componentMounted) {
                setData(products);
                setFilter(products);
            }
        };

        getProducts();

        return () => {
            componentMounted = false;
        };
    }, []);
    return (
        <div className='product-container'>
            {filter.map((product) => (
                <div className="product-box" key={product.id}>
                    <img src={product.url} alt={product.nama_product} />
                    <div className='description-product'>
                        <p className='nama-product'>{product.nama_product}</p>
                        <p className='harga-product'>Rp. {product.harga}</p>
                        <NavLink to={`/product/${product.id}`}><button className='product-btn'>BUY NOW</button></NavLink>
                    </div>
                </div>
            ))}
        </div>
    );
}
