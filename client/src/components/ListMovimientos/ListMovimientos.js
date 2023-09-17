
import React, { useState, useRef, useEffect } from 'react';
import { AdapterDateFns } from '@mui/x-date-pickers/AdapterDateFns'

import './ListMovimientos.css';


function ListMovimientos({ titulo }) {

  return (
  <>
    <h2 className='titulo-movimiento'>{titulo}</h2>

    <div className='lista-de-movimientos__item-box'>
        

    </div>

  </> 
  )}

export { ListMovimientos };