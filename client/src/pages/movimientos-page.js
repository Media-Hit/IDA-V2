import React from 'react'
import { MainMenu } from '../components/MainMenu/MainMenu';
import { Movimientos } from '../components/Movimientos/Movimientos';


function MovimientosPage() {
  return (
    <div className='mainAppContainer'>
        <MainMenu />
        <Movimientos />     
    </div>
  )
}

export default MovimientosPage