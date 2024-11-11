import React from 'react'
type colores = "primary" | "secondary" | "danger" | "warning"
export default function Alert(props:{color:colores, text?: string}) {
    const {text="Mensaje generico",color}=props
  return (
        <div className={`alert alert-${color}`} role="alert">
        {text}
        </div>
  )
}
