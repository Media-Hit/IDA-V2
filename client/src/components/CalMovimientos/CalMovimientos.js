import React from "react";
import { LocalizationProvider } from "@mui/x-date-pickers/LocalizationProvider";
import { AdapterDateFns } from "@mui/x-date-pickers/AdapterDateFns";
import { DateCalendar } from "@mui/x-date-pickers/DateCalendar";

import "./CalMovimientos.css";

function CalMovimientos({ setSelectedDate }) {
  const handleDateChange = (newValue) => {
    setSelectedDate(newValue); // Actualiza la fecha seleccionada en el estado compartido
  };
  return (
    <>
      <LocalizationProvider dateAdapter={AdapterDateFns}>
        <DateCalendar
          showDaysOutsideCurrentMonth
          fixedWeekNumber={6}
          onChange={handleDateChange}
        />
      </LocalizationProvider>
    </>
  );
}

export { CalMovimientos };
