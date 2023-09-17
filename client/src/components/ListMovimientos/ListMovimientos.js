
import React, { useState, useRef, useEffect } from 'react';
import { AdapterDateFns } from '@mui/x-date-pickers/AdapterDateFns';
import { AiOutlineCar } from "react-icons/ai";
import './ListMovimientos.css';


function ListMovimientos({ icono }) {

  const IconCategory = icono;

  return (
  <>
    
    <div className='listMov__item-box'>
      <i className='listMov__colum1'>
       <IconCategory className='listMov__icon' />
      </i>

      <div className='listMov__column2'>
        <p className='listMov__column2__detalle'>Reparación del Carro</p>
        <p className='listMov__column2__categoria'>Imprevistos</p>
      </div>

      <div className='listMov__column3'>
        <p className='listMov__column3__price'>$333.500</p>
        <p className='listMov__column3__date'>25 de Julio</p>
      </div>
    </div>

  </> 
  )}

export { ListMovimientos };

