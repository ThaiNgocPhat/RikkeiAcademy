import {cartReducer} from './slices/cartslice';
import {configureStore} from '@reduxjs/toolkit';


const store = configureStore({
    reducer: {
        cart: cartReducer,
    },
});
export default store;