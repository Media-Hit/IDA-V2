import React, { useState } from "react";
import "./CampoDinero.css";

import PropTypes from "prop-types";
import { NumericFormat } from "react-number-format";
import Box from "@mui/material/Box";
import TextField from "@mui/material/TextField";

const NumericFormatCustom = React.forwardRef(function NumericFormatCustom(
  props,
  ref
) {
  const { onChange, ...other } = props;

  return (
    <NumericFormat
      {...other}
      getInputRef={ref}
      onValueChange={(values) => {
        onChange({
          target: {
            name: props.name,
            value: values.value,
          },
        });
      }}
      thousandSeparator
      valueIsNumericString
      prefix="$"
    />
  );
});

NumericFormatCustom.propTypes = {
  name: PropTypes.string.isRequired,
  onChange: PropTypes.func.isRequired,
};

function CampoDinero({ etiqueta, onChange }) {
  const [values, setValues] = React.useState({
    textmask: "(100) 000-0000",
    // numberformat: "0", //numero inicial
  });

  const [monto, setMonto] = useState(0);
  const handleInputChange = (event) => {
    const newValue = parseInt(event.target.value);
    setMonto(newValue);
    if (onChange) {
      onChange(newValue);
    }
  };

  return (
    <div className="campoDineroBox margin-bottom">
      <Box>
        <TextField
          variant="outlined"
          label={etiqueta}
          value={values.numberformat}
          onChange={handleInputChange}
          name="numberformat"
          fullWidth
          InputProps={{
            inputComponent: NumericFormatCustom,
            style: { textAlign: "right" },
          }}
        />
      </Box>
    </div>
  );
}

export { CampoDinero };
