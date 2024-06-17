import {cartReducer} from './slices/cartslice';
import {configureStore} from '@reduxjs/toolkit';


const store = configureStore({ //dùng configureStore để tạo store
    reducer: { //
        cartStore: cartReducer
    },
});
export default store;