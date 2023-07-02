import React, { useEffect, useState } from 'react'
import { useSelector, useDispatch } from 'react-redux';
import { TotalCart } from '../../redux/cartSystem';
import { Button } from 'react-bootstrap';
import './checkout.css'
import axios from 'axios';
import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';


export default function Checkout() {
    const { carts, amount } = useSelector((state) => state.user);
    const dispatch = useDispatch()
    useEffect(() => {
        dispatch(TotalCart())
    }, [carts])

    const [post, setPost] = useState({
        nama: '',
        negara: '',
        alamat: '',
        kodepos: '',
        no_telp: '',
        email: '',
    })
    const handleInput = (event) => {
        setPost({ ...post, [event.target.name]: event.target.value });
    };


    function handleSumbit(event) {
        event.preventDefault()
        axios.post('http://localhost:3001/user', post)
            .then(response => console.log(response))
            .catch(err => console.log(err))
        toast.success('Order Berhasil!', {
            position: "top-right",
            theme: "dark",
        });
    }
    return (
        <div className='checkout-container'>
            <p className='checkout-header'>CHECKOUT</p>
            <hr></hr>
            <form required onSubmit={handleSumbit}>
                <div className='billing-container'>
                    <div>
                        <p className='header-order'>Billing & Shipping</p>
                        <div className='input-container'>
                            <label>Nama</label>
                            <input type="text" name="nama" id="" autoComplete onChange={handleInput} />
                        </div>
                        <div className='input-container'>
                            <label>Negara</label>
                            <input type="text" name="negara" id="" onChange={handleInput} />
                        </div>
                        <div className='input-container'>
                            <label>Kota</label>
                            <input type="text" name="kota" id="" onChange={handleInput} />
                        </div>
                        <div className='input-container'>
                            <label>Kecamatan</label>
                            <input type="text" name="kecamatan" id="" onChange={handleInput} />
                        </div>
                        <div className='input-container'>
                            <label>Alamat</label>
                            <input type="text" name="alamat" id="" onChange={handleInput} />
                        </div>
                        <div className='input-container'>
                            <label>Kodepos</label>
                            <input type="number" name="kodepos" id="" onChange={handleInput} />
                        </div>
                        <div className='input-container'>
                            <label>Nomor Hp</label>
                            <input type="tel" name="no_telp" id="" onChange={handleInput} />
                        </div>
                        <div className='input-container'>
                            <label>Alamat Email</label>
                            <input type="email" name="email" id="" onChange={handleInput} />
                        </div>
                    </div>

                    <div>
                        <p className='header-order'>Your Order</p>
                        {carts.map((carts) => (
                            <div key={carts.id}>
                                <p className='order'>{carts.nama_product}</p>
                                <div className='box-check'>
                                    <p> Jumlah: </p>
                                    <p className='order'>{carts.quantity} {carts.jenis_product}</p>
                                </div>
                                <div className='box-check' >
                                    <p>Harga:</p>
                                    <p className='order'>Rp. {carts.harga.toLocaleString()}</p>
                                </div>
                                <div className='box-check'>
                                    <p>Total:</p>
                                    <p className='order'>Rp. {(parseFloat(carts.harga) * carts.quantity).toLocaleString()} </p>
                                </div>
                                <hr></hr>
                            </div>
                        ))}
                        <div className='box-check'>
                            <p>Ongkos Kirim: </p>
                            <p className='order'>FREE</p>
                        </div>
                        <div className='box-check'>
                            <p className='subtotal'>Subtotal:</p>
                            <p className='order'> Rp. {amount.toLocaleString()} </p>
                        </div>
                        <Button variant='dark' type='submit'>ORDER</Button>
                    </div>
                </div>
            </form>
            <ToastContainer />
        </div>
    )
}
