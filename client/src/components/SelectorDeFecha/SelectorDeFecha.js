import React, { useState, useEffect } from "react";
import "./SelectorDeFecha.css";
import { DemoContainer } from "@mui/x-date-pickers/internals/demo";
import { AdapterDateFns } from "@mui/x-date-pickers/AdapterDateFns";
import { LocalizationProvider } from "@mui/x-date-pickers/LocalizationProvider";
import { DatePicker } from "@mui/x-date-pickers/DatePicker";
import TextField from "@mui/material/TextField";
import { format } from "date-fns";

function SelectorDeFecha() {
  const [selectedDate, setSelectedDate] = useState(null);

  const handleDateChange = (date) => {
    setSelectedDate(date);
    onSelect(date); // Llama a la función onSelect y pasa la fecha seleccionada
  };

  useEffect(() => {
    // Recuperar la fecha seleccionada desde localStorage
    const storedDate = localStorage.getItem("selectedDate");

    if (storedDate) {
      handleDateChange(new Date(storedDate));
    } else {
      // Si no hay fecha en localStorage, establece la fecha por defecto como hoy
      handleDateChange(new Date());
    }
  }, []);

  return (
    <LocalizationProvider dateAdapter={AdapterDateFns}>
      <DemoContainer components={["DatePicker"]}>
        <DatePicker
          name={fieldValue}
          label="Fecha"
          renderInput={(params) => <TextField {...params} />}
          value={selectedDate}
          onChange={handleDateChange}
        />
      </DemoContainer>
    </LocalizationProvider>
  );
}

export { SelectorDeFecha };
