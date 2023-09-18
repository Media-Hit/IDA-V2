
import React, { useState, useRef, useEffect } from 'react';
import { AdapterDateFns } from '@mui/x-date-pickers/AdapterDateFns';

import restaurantes from '../../assets/uicons-categorias/restaurantes.svg'

import './ListMovimientos.css';


function ListMovimientos({ items }) {

  return (
  <>
      {items.map((item, index) => (
        <div key={index} className='listMov__item-box'>
          <i className='listMov__column1'>
            <img src={item.icono} className='listMov__icon' alt={item.icono}/>
          </i>

          <div className='listMov__column2'>
            <p className='listMov__column2__agente'>{item.agente}</p>
            <p className='listMov__column2__descripcion'>{item.descripcion}</p>
          </div>

          <div className='listMov__column3'>
            <p className='listMov__column3__price'>
              {item.precio.toLocaleString('en-US', {
                style: 'currency',
                currency: 'USD',
                minimumFractionDigits: 0,
              })}
            </p>
            <p className='listMov__column3__date'>{item.fecha}</p>
          </div>
        </div>
      ))}
 
  </> 
  )}

export { ListMovimientos };

