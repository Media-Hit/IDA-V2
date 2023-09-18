
import React from 'react';
// import { AdapterDateFns } from '@mui/x-date-pickers/AdapterDateFns';
import iconMapper from '../iconMapper';


import './ListMovimientos.css';


function ListMovimientos({ items }) {

  return (
  <>
      {items.map((item, index) => (
        <div key={index} className='listMov__item-box'>
          
          <span className='listMov__icon material-symbols-outlined'>
            {iconMapper[item.categoria]}
          </span>

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

