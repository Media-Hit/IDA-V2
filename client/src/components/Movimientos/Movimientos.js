import React from 'react';
import { CalMovimientos } from '../CalMovimientos/CalMovimientos';
import { ListMovimientos } from '../ListMovimientos/ListMovimientos';
import './Movimientos.css';

function Movimientos() {

    const movimientos = [
        { key: 1, icono: 'restaurantes', agente: 'El Mono Bandido', descripcion: 'Empanada', categoria: 'Alimentacion', precio: 11300, fecha: 'Agosto 30' },
        { key: 2, icono: 'transporte', agente: 'Taxi', descripcion: 'Casa > Oficina', categoria: 'Transporte', precio: 54700, fecha: 'Julio 23' },
        { key: 3, icono: 'hogar', agente: 'Home Center', descripcion: 'Multitoma', categoria: 'Hogar', precio: 120000, fecha: 'Septiembre 3' },
        { key: 4, icono: 'servicios', agente: 'Enel', descripcion: 'Electricidad', categoria: 'Imprevistos', precio: 76000, fecha: 'Noviembre 14' }
    ]

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
                    <ListMovimientos items={movimientos} />
                </div>
                <div>
                <h2 className='titulo-movimiento'>Corporativo</h2>
                    <ListMovimientos items={movimientos} />
                </div> 
            </div>
        </div>

    </div>
  </> 
  )}

export { Movimientos };