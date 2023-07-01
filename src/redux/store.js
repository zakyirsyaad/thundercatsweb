import { configureStore } from "@reduxjs/toolkit";
import cartSystem from "./cartSystem";
export default configureStore({
    reducer: {
        user: cartSystem
    }
})
