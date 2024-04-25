import React, { useState } from 'react';

function App() {
  const [format, setFormat] = useState({
    color: "black",
    fontSize: 12,
    isShow: true,
    content: "Hello World"
  });

  const handleChange = () => {
    setFormat({
      ...format,
      color: format.color === "black" ? "red" : "black",
      fontSize: format.fontSize === 12 ? 50 : 12,
      content: format.content === "Hello World :)" ? "You gay" : "Hello World :)"
    });
  };

  const handleShow = () => {
    setFormat({
      ...format,
      isShow: !format.isShow
    });
  };

  return (
    <>
      {format.isShow ? (
        <>
          <p style={{
            color: format.color,
            fontSize: format.fontSize
          }}>
            {format.content}
            <button onClick={handleChange}>Change Color/FontSize</button>
          </p>
        </>
      ) : (
          <></>
        )}
      <button onClick={handleShow}>Toggle</button>
    </>
  );
}

export default App;
