import React from "react";
import "./CalMovimientos.css";

import { LocalizationProvider } from "@mui/x-date-pickers/LocalizationProvider";
import { AdapterDateFns } from "@mui/x-date-pickers/AdapterDateFns";
import { DateCalendar } from "@mui/x-date-pickers/DateCalendar";

function CalMovimientos({ selectedDate, setSelectedDate }) {
  const handleDateChange = (newValue) => {
    setSelectedDate(newValue);
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
    </>
  );
}

export { CalMovimientos };
