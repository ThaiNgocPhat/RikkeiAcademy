import {createSlice} from '@reduxjs/toolkit'


const cartSlice = createSlice({
    name:'cart',
    initialState:{
        item:[]
    },
    reducers:{
        addToCart:(state,action)=>{
            state.item.push(action.payload)
        },
        removeFromCart:(state,action)=>{
           state.item = state.item.filter(item => item.id !== action.payload.id)
        }
    }
})

export const cartReducer = cartSlice.reducer;
export const cartAction = cartSlice.actions;