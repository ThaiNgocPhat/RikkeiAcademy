import React from 'react'

export default function Button({background, color, text, onClick, disabled}) {
  return (
    <>
        <button
        style = {{background:background
                ,color:color}}
                onClick={onClick}
                disabled={disabled}
                >
            {text}
        </button>
    </>
  )
}
