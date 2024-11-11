import React from 'react'
interface ButtonProps{
    variant: Variant
    text: string
    onClick: ()=> void;
}

export default function Button({variant, text, onClick}: ButtonProps)  {
  return (
        <button 
        type="button" 
        className={`btn btn-outline-${variant}`} 
        onClick={onClick}
        >
        {text}
        </button>
    
  )
}
