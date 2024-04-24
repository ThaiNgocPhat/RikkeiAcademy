import './App.css'
import Header from "../Header"
import ListItem from "../Presentation/ListItem"
import Button from  "../Button"
import {useState} from 'react'
import Input from  "../Input"
function App() {
  const [count, setCount] = useState(0)
  const handleIncrase = () =>{
    setCount(count + 1);
  }
   const handleDecrease = () =>{
    // if(count > 0) setCount(count -1);//cách 2
    setCount(count - 1);
  }
  const [userName, setUserName] = useState('')
  const [password, setPassword] = useState('')
  const handleUserNameChange = (event) => {
    setUserName(event.target.value)
    console.log(userName)
  }
  const handlePasswordChange = (event) => {
    setPassword(event.target.value)
    console.log(password)
  }
  const handleSubmit = (event) => {
    event.preventDefault()
    alert("Successfully")
  }
  return (
    <>
    <Header />
    <ListItem />
      <Button background="red"
            color="white"
            text="Decrease"
            onClick = {handleDecrease}
            disabled = {count === 0}
            />
            <span>{count}</span>
            <Button background="red"
                    color="white"
                    text="Increase"
                    onClick = {handleIncrase}/>
     <Button background="blue"
            color="white"
            text="Click Me!!!"/>

            <Input />
            <form onSubmit={handleSubmit}>
                <label htmlFor="userName">Username</label>
                <input 
                type="text" 
                autoFocus
                placeholder='Enter your username'
                id="userName" 
                value={userName} 
                onChange={handleUserNameChange}/>
                <label htmlFor="password">Password</label>
                <input 
                type="password" 
                autoFocus
                placeholder='Enter your password'
                id="password" 
                value={password} 
                onChange={handlePasswordChange}/>
                <button type='submit'>Submit Form</button>
            </form>
   </>
  );
}

export default App
