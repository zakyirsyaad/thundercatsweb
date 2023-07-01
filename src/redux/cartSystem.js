import { createSlice } from "@reduxjs/toolkit";
import { toast } from "react-toastify";
import 'react-toastify/dist/ReactToastify.css';

const initialState = {
    carts: localStorage.getItem("cartItems") ? JSON.parse(localStorage.getItem("cartItems")) : [],
    quantity: 0,
    amount: 0,
};

const cartSystem = createSlice({
    name: "user",
    initialState,
    reducers: {
        AddCart: (state, action) => {
            const find = state.carts.findIndex(carts => carts.id === action.payload.id);
            if (find >= 0) {
                state.carts[find].quantity += 1;
                toast.info(`${state.carts[find].nama_product} ditambahkan ke keranjang`, {
                    position: "top-right",
                    theme: "dark",
                });
            } else {
                const tempvar = { ...action.payload, quantity: 1 };
                state.carts.push(tempvar);
                toast.success(`${action.payload.nama_product} ditambahkan ke keranjang`, {
                    position: "top-right",
                    theme: "dark",
                });
            }
            localStorage.setItem("cartItems", JSON.stringify(state.carts));
        },
        RemoveCart(state, action) {
            const nextCarts = state.carts.filter(carts => carts.id !== action.payload.id);
            state.carts = nextCarts;
            localStorage.setItem("cartItems", JSON.stringify(state.carts));
            toast.error(`${action.payload.nama_product} dihapus`, {
                position: "top-right",
                theme: "dark",
            });
        },
        DecreaseCart(state, action) {
            const itemIndex = state.carts.findIndex(
                carts => carts.id === action.payload.id
            )
            if (state.carts[itemIndex].quantity > 1) {
                state.carts[itemIndex].quantity -= 1
                toast.info(`Jumlah ${action.payload.nama_product} di keranjang dikurangi`, {
                    position: "top-right",
                    theme: "dark",
                });
            }
            else if (state.carts[itemIndex].quantity === 1) {
                const nextCarts = state.carts.filter(carts => carts.id !== action.payload.id);
                state.carts = nextCarts;
                toast.error(`${action.payload.nama_product} dihapus`, {
                    position: "top-right",
                    theme: "dark",
                });
            }
            localStorage.setItem("cartItems", JSON.stringify(state.carts));
        },
        ClearCart(state, action) {
            state.carts = []
            toast.error(`Keranjang dihapus`, {
                position: "top-right",
                theme: "dark",
            });
            localStorage.setItem("cartItems", JSON.stringify(state.carts));
        },
        TotalCart(state, action) {
            let { total, quantity } = state.carts.reduce((cartTotal, carts) => {
                const { price, quantity } = carts
                const itemTotal = price * quantity
                cartTotal.total += itemTotal
                cartTotal.quantity += quantity

                return cartTotal
            },
                {
                    total: 0,
                    quantity: 0,
                })
            state.quantity = quantity
            state.amount = total
        }
    },
});

export const { AddCart, RemoveCart, DecreaseCart, ClearCart, TotalCart } = cartSystem.actions;
export default cartSystem.reducer;
