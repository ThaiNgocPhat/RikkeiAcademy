import React from 'react'

export default function CardProduct({MenuFood, handleRemoveFromCart}) {
  return (
    <>
    <div id='card-product'>
        <h1>Your Cart</h1>
        <div id='card-product-content'>
        <table>
                    <thead>
                        <tr>
                            <th>NO.</th>
                            <th>PRODUCT</th>
                            <th>PRICE</th>
                            <th>QUANTITY</th>
                            <th>SUBTOTAL</th>
                            <th>ACTION</th>
                        </tr>
                    </thead>
                    <tbody>
                        {MenuFood.map((item, index) => (
                            <tr key={item.id}>
                                <td>{index + 1}</td>
                                <td>{item.name}</td>
                                <td>{item.price} USD</td>
                                <td>{item.quantity}</td>
                                <td>{(item.price * item.quantity).toFixed(2)} USD</td>
                                <td>
                                    <button onClick={() => handleUpdate(item.id)}>Update</button>
                                    <button onClick={() => handleRemoveFromCart(item.id)}>Delete</button>
                                </td>
                            </tr>
                        ))}
                    </tbody>
                </table>
            <p>Empty product in your cart</p>
            <p>There are 1 items in your shopping cart: 24USD</p>
        </div>
        <p>Updated successfull</p>
    </div>
    </>
  )
}
