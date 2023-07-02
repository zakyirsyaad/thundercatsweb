import React, { useEffect } from 'react';
import { useSelector, useDispatch } from 'react-redux';
import { AddCart, ClearCart, DecreaseCart, RemoveCart, TotalCart } from '../../redux/cartSystem';
import { Table, Button } from 'react-bootstrap';
import 'bootstrap/dist/css/bootstrap.min.css';
import './cart.css'
import { NavLink } from 'react-router-dom';

export default function Cart() {
    const { carts, amount } = useSelector((state) => state.user);

    const dispatch = useDispatch()
    const handleRemoveFromCart = (carts) => {
        dispatch(RemoveCart(carts))
    }
    const handleDecreaseCart = (carts) => {
        dispatch(DecreaseCart(carts))
    }
    const handleIncraseCart = (carts) => {
        dispatch(AddCart(carts))
    }
    const handleClearCart = (carts) => {
        dispatch(ClearCart())
    }

    useEffect(() => {
        dispatch(TotalCart())
    }, [carts])
    return (
        <div className='cart-container'>
            <p className='cart-header'>Cart</p>
            <p className='total-cart'>TOTAL ITEM: {carts.length}</p>
            <Table striped bordered hover>
                <thead>
                    <tr>
                        <th>Image</th>
                        <th>Nama Product</th>
                        <th>Harga</th>
                        <th>Quantity</th>
                        <th>Total</th>
                        <th>Actions</th>
                    </tr>
                </thead>
                <tbody>
                    {carts.map((carts) => (
                        <tr key={carts.id}>
                            <td>
                                <img src={carts.url} alt={carts.nama_product} width='200px' height='200px' />
                            </td>
                            <td>
                                {carts.nama_product}
                            </td>
                            <td>Rp. {carts.harga.toLocaleString()}</td>
                            <td>
                                <Button variant="secondary" onClick={() => handleDecreaseCart(carts)}>-</Button>
                                <span className='qty'>{carts.quantity}</span>
                                <Button variant="secondary" onClick={() => handleIncraseCart(carts)}>+</Button>
                            </td>
                            <td>Rp. {(parseFloat(carts.harga) * carts.quantity).toLocaleString()} </td>

                            <td>
                                <Button variant="danger" onClick={() => handleRemoveFromCart(carts)}>Hapus</Button>
                            </td>
                        </tr>
                    ))}
                </tbody>
            </Table>
            <div className='subtotal'>
                <div>
                    <Button variant="danger" onClick={() => handleClearCart()}>Clear Cart</Button>
                </div>
                <div>
                    <p className='total'>
                        Subtotal:
                        <span> Rp. {amount.toLocaleString()} </span>
                    </p>
                    <NavLink to='/Checkout'><Button variant="dark">Checkout</Button></NavLink>
                </div>
            </div>

        </div >
    );
}

