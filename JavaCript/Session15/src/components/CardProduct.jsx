// import React from 'react'
// import { useSelector } from 'react-redux'

// export default function CardProduct({MenuFood}) {
//     const cartStore = useSelector((store) => {
//         return store.cartStore
//     })
//     console.log(cartStore,'a')
//   return (
//     <>
//     <div id='card-product'>
//         <h1>Your Cart</h1>
//         <div id='card-product-content'>
//         <table>
//                     <thead>
//                         <tr>
//                             <th>NO.</th>
//                             <th>PRODUCT</th>
//                             <th>PRICE</th>
//                             <th>QUANTITY</th>
//                             <th>SUBTOTAL</th>
//                             <th>ACTION</th>
//                         </tr>
//                     </thead>
//                     <tbody>
//                         {MenuFood.map((item, index) => (
//                             <tr key={item.id}>
//                                 <td>{index + 1}</td>
//                                 <td>{item.name}</td>
//                                 <td>{item.price} USD</td>
//                                 <td>{cartStore.item.length}</td>
//                                 <td>{(item.price * item.quantity)} USD</td> {/* Mac dinh la 0 */}
//                                 <td>
//                                     <button onClick={() => handleUpdate(item.id)}>Update</button>
//                                     <button onClick={() => handleRemoveFromCart(item.id)}>Delete</button>
//                                 </td>
//                             </tr>
//                         ))}
//                     </tbody>
//                 </table>
//             <p>Empty product in your cart</p>
//             <p>There are 1 items in your shopping cart: 24USD</p>
//         </div>
//         <p>Updated successfull</p>
//     </div>
//     </>
//   )
// }
import React, { useState } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { cartAction } from '../stores/slices/cartslice'; // Thay thế bằng đường dẫn thực tế của bạn

const CardProduct = ({ MenuFood }) => {
    const dispatch = useDispatch();
    const cartStore = useSelector(state => state.cart); // Điều chỉnh selector này theo state của bạn
    const [quantities, setQuantities] = useState(
        MenuFood.reduce((acc, item) => {
            acc[item.id] = 1; // Khởi tạo số lượng ban đầu cho mỗi sản phẩm là 1
            return acc;
        }, {})
    );

    const handleAddToCart = (item) => {
        dispatch(cartAction.addToCart({
            id: Math.floor(Math.random() * 10000),
            name: item.name,
            price: item.price,
            quantity: quantities[item.id],
        }));

        // Tăng số lượng của sản phẩm được nhấn
        setQuantities(prevQuantities => ({
            ...prevQuantities,
            [item.id]: prevQuantities[item.id] + 1,
        }));
    };

    return (
        <div>
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
                            <p>{item.price} USD</p>
                            <button onClick={() => handleAddToCart(item)}>Buy Now</button>
                            <div>{cartStore.items.length}</div> {/* Điều chỉnh theo state của bạn */}
                        </div>
                    </div>
                </div>
            ))}
        </div>
    );
};

export default CardProduct;
