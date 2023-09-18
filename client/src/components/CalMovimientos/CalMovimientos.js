import React from "react";
import { useState } from "react";
import { LocalizationProvider } from "@mui/x-date-pickers/LocalizationProvider";
import { AdapterDateFns } from "@mui/x-date-pickers/AdapterDateFns";
import { DateCalendar } from "@mui/x-date-pickers/DateCalendar";

import "./CalMovimientos.css";

function CalMovimientos() {
  const [selectedDate, setSelectedDate] = useState([]);

  return (
    <>
      <LocalizationProvider dateAdapter={AdapterDateFns}>
        <DateCalendar
          showDaysOutsideCurrentMonth
          fixedWeekNumber={6}
          onChange={(newValue) => {
            setSelectedDate(newValue);
            console.log(selectedDate);
          }}
        />
      </LocalizationProvider>
    </>
  );
}

export { CalMovimientos };
