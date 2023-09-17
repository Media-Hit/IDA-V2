import React, { useState, useRef, useEffect } from 'react';
import { CalMovimientos } from '../CalMovimientos/CalMovimientos';
import { ListMovimientos } from '../ListMovimientos/ListMovimientos';
import './Movimientos.css';

function Movimientos() {
  return (
  <>
    <div className="movimientosMainContainer">
        <div className='headerContainer'>
            <h1 className='pageTittle'>Movimientos</h1>
        </div>
        <div className='bodyContainer'>
            <div className='leftSideContainer'>
                <CalMovimientos />
            </div>
            <div className='rightSideContainer'>
                <div>
                    <h2 className='titulo-movimiento'>Personal</h2>
                    <ListMovimientos 
                        icono="AiOutlineCar"
                    />
                </div>
                <div>
                <h2 className='titulo-movimiento'>Corporativo</h2>
                    <ListMovimientos 
                        icono="AiOutlineCar"
                    />
                </div> 
            </div>
        </div>

    </div>
  </> 
  )}

export { Movimientos };