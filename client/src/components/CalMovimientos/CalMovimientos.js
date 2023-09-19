import React from "react";
import { LocalizationProvider } from "@mui/x-date-pickers/LocalizationProvider";
import { AdapterDateFns } from "@mui/x-date-pickers/AdapterDateFns";
import { DateCalendar } from "@mui/x-date-pickers/DateCalendar";

import "./CalMovimientos.css";

function CalMovimientos({ selectedDate, setSelectedDate }) {
  const handleDateChange = (newValue) => {
    setSelectedDate(newValue);
  };

  const handleClearFilter = () => {
    setSelectedDate(null);
  };

  return (
    <>
      <LocalizationProvider dateAdapter={AdapterDateFns}>
        <DateCalendar
          showDaysOutsideCurrentMonth
          fixedWeekNumber={6}
          onChange={handleDateChange}
          value={selectedDate}
        />
      </LocalizationProvider>

      {selectedDate !== null && (
        <div className="movimientosBotonFiltro__Container">
          <button
            className="movimientos__botonLimpiarFiltro"
            onClick={handleClearFilter}
          >
            Mostrar Todo
          </button>
        </div>
      )}
    </>
  );
}

export { CalMovimientos };
