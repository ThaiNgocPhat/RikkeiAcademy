import React, {useState, useEffect} from 'react'
import './App.css'
import ListProduct from './components/ListProduct'
import CartProduct from './components/CardProduct'

export default function App() {
  const [quantities, setQuantities] = useState({})
  const handleIncreaseQuantity = (id) => {
    setQuantities(prevQuantities => {
      const newQuantities = {...prevQuantities}
      newQuantities[id] = newQuantities[id] + 1 || 1
      return newQuantities
    })
  }
  const handleDecreaseQuantity = (id) => {
    setQuantities(prevQuantities => {
      const newQuantities = {...prevQuantities}
      if(newQuantities[id] > 1){
        newQuantities[id] = newQuantities[id] - 1
      }
      return newQuantities
    })
  }
  const [MenuFood, setMenuFood] = useState([]);

    useEffect(() => {
        fetch('http://localhost:3000/MenuFood')
            .then(res => res.json())
            .then(data => setMenuFood(data))
            .catch(error => console.error('Error fetching data:', error));
    }, []);
    const handleBuyNow = (item) => {
      const quantity = quantities[item.id];
      if (quantity > 0) {
          setCart(prevCart => {
              const existingItem = prevCart.find(cartItem => cartItem.id === item.id);
              if (existingItem) {
                  return prevCart.map(cartItem =>
                      cartItem.id === item.id
                          ? { ...cartItem, quantity: cartItem.quantity + quantity }
                          : cartItem
                  );
              } else {
                  return [...prevCart, { ...item, quantity }];
              }
          });
          setQuantities(prevQuantities => ({
              ...prevQuantities,
              [item.id]: 0
          }));
      } else {
          alert('Please enter a valid quantity');
      }
  };
  const handleQuantityChange = (id, value) => {
    setQuantities(prevQuantities => ({
        ...prevQuantities,
        [id]: Number(value)
    }));
};
  const handleRemoveFromCart = (id) => {
    console.log(id)
    const index = MenuFood.findIndex(item => item.id == id);
    MenuFood.splice(index, 1);
    setMenuFood([...MenuFood]);
  }
    return (
    <>
    <h1>MiniProject - Shopping Cart ReactJS</h1>
    <ListProduct 
    handleIncreaseQuantity = {handleIncreaseQuantity}
    handleDecreaseQuantity = {handleDecreaseQuantity}
    handleQuantityChange = {handleQuantityChange}
    handleBuyNow = {handleBuyNow}
    quantities = {quantities}
    MenuFood = {MenuFood}
    />
    <CartProduct 
    MenuFood = {MenuFood}
    handleRemoveFromCart = {handleRemoveFromCart}
    />
    </>
  )
}
