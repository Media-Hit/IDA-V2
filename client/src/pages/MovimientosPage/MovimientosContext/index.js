import React, { createContext, useState } from "react";

const MovimientosContext = createContext();

function MovimientosProvider({ children }) {
  //Página de Movimientoss

  const [selectedDate, setSelectedDate] = useState(null); // Estado compartido para la fecha seleccionada

  const handleClearFilter = () => {
    setSelectedDate(null);
  };

  const handleAddButtonClick = () => {
    // Guardar la fecha seleccionada en localStorage
    if (selectedDate) {
      localStorage.setItem("selectedDate", selectedDate);
    }
  };

  // Función para borrar selectedDate del localStorage
  const clearLocalStorage = () => {
    localStorage.removeItem("selectedDate");
  };
  clearLocalStorage();

  return (
    <MovimientosContext.Provider
      value={{
        selectedDate,
        setSelectedDate,
        handleClearFilter,
        handleAddButtonClick,
        handleAddButtonClick,
        clearLocalStorage,
      }}
    >
      {children}
    </MovimientosContext.Provider>
  );
}

export { MovimientosContext, MovimientosProvider };
