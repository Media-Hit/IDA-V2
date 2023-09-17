import React, { useState, useRef, useEffect } from 'react';
import { LocalizationProvider } from '@mui/x-date-pickers/LocalizationProvider';
import { AdapterDateFns } from '@mui/x-date-pickers/AdapterDateFns'
import { DateCalendar } from '@mui/x-date-pickers/DateCalendar';

import './CalMovimientos.css';


function CalMovimientos() {

  return (
  <>
    <LocalizationProvider dateAdapter={AdapterDateFns}>
      <DateCalendar showDaysOutsideCurrentMonth fixedWeekNumber={6} className="calendar-movimientos" />
    </LocalizationProvider>
  </> 
  )}

export { CalMovimientos };