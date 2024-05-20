import React from 'react';

export default function ListProduct({handleIncreaseQuantity, quantities, handleDecreaseQuantity,MenuFood,
handleBuyNow, handleQuantityChange}) {
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
                        <div className=''>
                            <button onClick={() => handleIncreaseQuantity(item.id)}>+</button>
                            <input type="text" placeholder='Quantity' 
                            value={quantities[item.id]} 
                            onChange={(e) => handleQuantityChange(item.id, e.target.value)}
                            />
                            <button onClick={() => handleDecreaseQuantity(item.id)}>-</button>
                        </div>
                        <div className='btn'>
                            <p>
                            {item.price} USD
                        </p>
                        <button onClick={() => handleBuyNow(item.id)}>Buy Now</button>
                        </div>
                    </div>
                </div>
            ))}
        </div>
    );
}
