import React, { useEffect } from 'react';
import { useSelector, useDispatch } from 'react-redux';
import { Table, TableBody, TableCell, TableContainer, TableHead, TableRow } from '@mui/material';
import { AddCart, ClearCart, DecreaseCart, RemoveCart, TotalCart } from '../../redux/cartSystem';

export default function Cart() {
    const { carts } = useSelector((state) => state.user);

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
        <div>
            <h2>Cart</h2>
            <p>TOTAL ITEM: {carts.length}</p>
            <TableContainer>
                <Table>
                    <TableHead>
                        <TableRow>
                            <TableCell>Image</TableCell>
                            <TableCell>Nama Product</TableCell>
                            <TableCell>Harga</TableCell>
                            <TableCell>Quantity</TableCell>
                            <TableCell>Total</TableCell>
                        </TableRow>
                    </TableHead>
                    <TableBody>
                        {carts.map((carts) => (
                            <TableRow key={carts.id}>
                                <TableCell>
                                    <img src={carts.url} alt={carts.nama_product} width='200px' height='200px' />
                                </TableCell>
                                <TableCell>
                                    {carts.nama_product}
                                    <button onClick={() => handleRemoveFromCart(carts)}>Hapus</button>
                                </TableCell>
                                <TableCell>{carts.harga}</TableCell>
                                <TableCell>
                                    <button onClick={() => handleDecreaseCart(carts)}>-</button>
                                    {carts.quantity}
                                    <button onClick={() => handleIncraseCart(carts)}>+</button>
                                </TableCell>
                                <TableCell> {carts.harga * carts.quantity} </TableCell>
                            </TableRow>
                        ))}
                    </TableBody>
                </Table>
            </TableContainer>
            <div>
                <button onClick={() => handleClearCart()}>Clear Cart</button>
                <div>
                    <p>
                        Subtotal:
                        <span>Rp.{carts.amount}</span>
                    </p>
                </div>
            </div>

        </div >
    );
}

