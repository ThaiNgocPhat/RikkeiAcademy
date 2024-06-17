import React, { useState } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { cartAction } from '../stores/slices/cart.slice';

export default function Product() {
    const [countCart, setCountCart] = useState(0);
    const cartStore = useSelector((store) => {
        return store.cartStore
    })
    const dispatch = useDispatch();
  return ( 
    <>
    <div className='product-item'> o
        <div className='item'>
            <img src="/public/man-hinh-iphone-14-pro.png" alt="" />
            <p>product 1</p>
            <button onClick={()=>{
                dispatch(cartAction.addToCart({
                    id: 1,
                    name: 'product 1',
                    price: 100000,
                    quantity: 1
                }))
            }}>Add to cart</button>     
        </div>
        <div className='item'>
            <img src="/public/man-hinh-iphone-14-pro.png" alt="" />
            <p>product 1</p>
            <button onClick={()=>{
                dispatch(cartAction.addToCart({
                    id: 1,
                    name: 'product 1',
                    price: 100000,
                    quantity: 1
                }))
            }}>Add to cart</button>
        </div>
        <div className='item'>
            <img src="/public/man-hinh-iphone-14-pro.png" alt="" />
            <p>product 1</p>
            <button onClick={()=>{
                dispatch(cartAction.addToCart({
                    id: 1,
                    name: 'product 1',
                    price: 100000,
                    quantity: 1
                }))
            }}>Add to cart</button>
        </div>
        <div className='item'>
            <img src="/public/man-hinh-iphone-14-pro.png" alt="" />
            <p>product 1</p>
            <button onClick={()=>{
                dispatch(cartAction.addToCart({
                    id: 1,
                    name: 'product 1',
                    price: 100000,
                    quantity: 1
                }))
            }}>Add to cart</button>
        </div>
    </div>
    </>
  )
}
