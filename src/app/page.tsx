"use client"
import React from 'react'
import Card from '@/components/card'
import Pagination from '@/components/pagination'
import Alert from '@/components/alert'
import Button from '@/components/button'


export default function Home() {
  return (
    <div>
      <div className='d-flex justify-content-center gap-5 mt-4'>
      <Card/>
      <Card/>
      <Card/>
      <Card/>
      <Card/>
    </div>
    <div className='d-flex flex-column align-items-center mt-5'>
      <button className='btn btn-primary'>UNAM</button>
      <button className='btn btn-gold'>UNAM</button>
      <h1 className='text-blue'>Hola mundo</h1>
      <h1 className='text-gold'>Hola mundo</h1>
      <Pagination pages={5}/>
      <Pagination pages={10}/>
      <Alert color='primary'/>
      <Alert color='secondary'text='Mensaje 2'/>
      <Alert color='danger'text='Mensaje 3'/>
      <Alert color='warning'text='Mensaje 4'/>

      <Button variant='primary'text='Subiendo...' onClick={()=>console.log("Boton primary")}/>
      <Button variant='success'text='Bajando...' onClick={()=>console.log("Boton success")}/>
      <Button variant='danger'text='Volviendo a subir...' onClick={()=>console.log("Boton success")}/>
      <Button variant='info'text='Volviendo a bajar...' onClick={()=>console.log("Boton success")}/> 
    </div>
    </div>
  )
}
