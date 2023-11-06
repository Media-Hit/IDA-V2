import React, { useState, useEffect } from "react";
import "./SelectorDeFecha.css";
import { DemoContainer } from "@mui/x-date-pickers/internals/demo";
import { AdapterDateFns } from "@mui/x-date-pickers/AdapterDateFns";
import { LocalizationProvider } from "@mui/x-date-pickers/LocalizationProvider";
import { DatePicker } from "@mui/x-date-pickers/DatePicker";
import TextField from "@mui/material/TextField";
import { format } from "date-fns";

function SelectorDeFecha({ fieldName, fieldValue, onUpdateFecha }) {
  return (
    <LocalizationProvider dateAdapter={AdapterDateFns}>
      <DemoContainer components={["DatePicker"]}>
        <DatePicker
          name={fieldName}
          label="Fecha"
          renderInput={(params) => <TextField {...params} />}
          value={fieldValue}
          onChange={(date) => {
            onUpdateFecha(date); // Llama a la función onUpdateFecha con la nueva fecha
          }}
        />
      </DemoContainer>
    </LocalizationProvider>
  );
}

export { SelectorDeFecha };
