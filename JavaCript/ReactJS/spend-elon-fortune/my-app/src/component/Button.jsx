import React from 'react'

export default function Button({background, color, text}) {
  return (
    <>
        <button
        style = {{background:background
                ,color:color}}>
            {text}
        </button>
    </>
  )
}
