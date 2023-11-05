import React, { useState, useEffect } from "react";
import "./SelectorDeFecha.css";
import { DemoContainer } from "@mui/x-date-pickers/internals/demo";
import { AdapterDateFns } from "@mui/x-date-pickers/AdapterDateFns";
import { LocalizationProvider } from "@mui/x-date-pickers/LocalizationProvider";
import { DatePicker } from "@mui/x-date-pickers/DatePicker";
import TextField from "@mui/material/TextField";
import { format } from "date-fns";

function SelectorDeFecha({ fieldValue }) {
  const [selectedDate, setSelectedDate] = useState(null);

  useEffect(() => {
    // Recuperar la fecha seleccionada desde localStorage
    const storedDate = localStorage.getItem("selectedDate");

    if (storedDate) {
      setSelectedDate(new Date(storedDate));
    } else {
      // Si no hay fecha en localStorage, establece la fecha por defecto como hoy
      setSelectedDate(new Date());
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
          onChange={(date) => {
            console.log(format(date, "dd/MM/yyyy"));
          }}
        />
      </DemoContainer>
    </LocalizationProvider>
  );
}

export { SelectorDeFecha };
