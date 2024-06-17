import React, {useState} from 'react';
import { useSelector } from 'react-redux';
import { useDispatch } from 'react-redux';
import { cartAction } from '../stores/slices/cartslice';
export default function ListProduct({handleIncreaseQuantity, quantities, handleDecreaseQuantity,MenuFood}) {
    const [countCart, setCountCart] = useState(0);
    const cartStore = useSelector((store) => {
        return store.cartStore
    })
    const dispatch = useDispatch();
    console.log(cartStore)
    return (
        <div id='listProduct' className='container'>
            <h1>List Product</h1>
            {MenuFood.map((item, index) => (
                <div className='item' key={index}>
                    <div className='item-img'>
                        <img src={item.image} alt={item.name} />
                    </div>
                    <div className='item-description'>
                        <p>{item.name}</p>
                        <p>{item.description}</p>
                    </div>
                    <div className='item-price-quantity'>
                        <div className='btn'>
                            <p>
                            {item.price} USD
                        </p>
                        <button onClick={() => dispatch(cartAction.addToCart({
                            id: Math.floor(Math.random()*10000),
                            name: item.name,
                            price: item.price,
                            quantity: quantities[item.id],
                        }))}>Buy Now</button>
                        <div>{cartStore.item.length}</div>
                        </div>
                    </div>
                </div>
            ))}
        </div>
    );
}
