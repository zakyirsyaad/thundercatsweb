import React, { useState, useEffect } from 'react';
import { useParams } from 'react-router-dom';
import { useDispatch } from 'react-redux';
import { AddCart } from '../../redux/cartSystem';

export default function DetailProduct() {
    const { id } = useParams();
    const [product, setProduct] = useState([]);
    const [loading, setLoading] = useState(false);

    const dispatch = useDispatch();

    useEffect(() => {
        const getProductFromLocalStorage = () => {
            const storedProduct = localStorage.getItem('product');
            if (storedProduct) {
                setProduct(JSON.parse(storedProduct));
            }
        };

        const getProductFromAPI = async () => {
            setLoading(true);
            const response = await fetch(`http://localhost:4000/product/${id}`);
            const data = await response.json();
            setProduct(data);
            setLoading(false);
            localStorage.setItem('product', JSON.stringify(data));
        };

        getProductFromLocalStorage();

        if (!product.id) {
            getProductFromAPI();
        }
    }, [id]);

    const Loading = () => {
        return <>Loading ....</>;
    };

    const ShowDetailProduct = () => {
        return (
            <div className='detail-product-container'>
                <div>
                    <img src={product.url} alt={product.nama_product} width='500px' height='500px' />
                </div>
                <div className='detail-text'>
                    <p className='nama-detail'>{product.nama_product}</p>
                    <p className='harga-detail'>Rp. {(parseFloat(product.harga)).toLocaleString()}</p>
                    <p className='description-detail'>
                        PERHATIAN:
                        – Pastikan alamat sudah lengkap & No Hp aktif agar memudahkan kurir dalam pengiriman
                        – Pengembalian barang atau dana dapat dilakukan sampai dengan 3 hari setelah diterima oleh pembeli dan jika dikarenakan kesalahan dari pihak kami;
                        Barang tidak lengkap
                        Salah size
                        Kecacatan pada produk.
                        Mohon untuk direkam saat membuka paket dari kami untuk menjadi bukti. Mohon maaf kami tidak menerima pengembalian jika kesalahan dari pihak pembeli, seperti salah memilih size atau warna atau tidak ada rekaman saat membuka paket.
                    </p>
                    <button className='product-btn' onClick={() => dispatch(AddCart(product))}>ADD TO CART</button>
                </div>
            </div>
        );
    };

    return <div>{loading ? <Loading /> : <ShowDetailProduct />}</div>;
}
