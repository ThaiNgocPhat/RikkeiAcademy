import React, {useState}  from 'react'

function App() {
 const [form, setForm] = useState('')
 const handleSport = () => {
   setForm('Thể Thao')
  }
  const handleCulture = () => {
    setForm ('Văn Hoá');
  }
  const handleFashtion = () => {
    setForm('Thời Trang');
  }
  const handleArt = () => {
    setForm('Nghệ Thuật');
  }
  //const handleSport = () => {
  //document.querySelector('p').innerText = 'Thể Thao'
  // }
  // const handleCulture = () => {
  //   document.querySelector('p').innerText = 'Văn Hoá'
  // }
  // const handleFashtion = () => {
  //   document.querySelector('p').innerText = 'Thời Trang'
  // }
  // const handleArt = () => {
  //   document.querySelector('p').innerText = 'Nghệ Thuật'
  // }
  return (
    <>
      <button onClick={handleSport}>Thể Thao</button>
      <button onClick={handleCulture}>Văn Hoá</button>
      <button onClick={handleFashtion}>Thời Trang</button>
      <button onClick={handleArt}>Nghệ Thuật</button>
      <p>{form}</p>
    </>
  )
}

export default App
