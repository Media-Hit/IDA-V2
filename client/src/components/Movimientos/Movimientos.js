import React, { useState, useRef, useEffect } from 'react';
import { CalMovimientos } from '../CalMovimientos/CalMovimientos';
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
                <h2>Hello World</h2>
            </div>
        </div>

    </div>
  </> 
  )}

export { Movimientos };