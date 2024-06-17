import React from 'react'
import Product from '../components/Product';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faCartShopping } from '@fortawesome/free-solid-svg-icons'
import { useSelector } from 'react-redux';
export default function AddToCart() {
    const cartStore = useSelector((store) => {
        return store.cartStore
    })
  return (
    <>
      <div id="add-to-cart">
        <h1>Add to cart</h1>
        <div className="icon">
          <FontAwesomeIcon icon={faCartShopping} />
        </div>
        <div className='count'>
            <p>{cartStore.items.length}</p>
        </div>
      </div>
    </>
  );
}
