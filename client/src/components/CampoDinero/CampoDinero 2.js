import React from "react";
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

function CampoDinero({
  etiqueta,
  onChange,
  variante,
  autofocus,
  disableBottomLine,
}) {
  const [values] = React.useState({
    textmask: "(100) 000-0000",
    // numberformat: "0", //numero inicial
  });

  const handleInputChange = (event) => {
    const newValue = parseInt(event.target.value);
    if (onChange) {
      onChange(newValue);
    }
  };

  return (
    <div className="campoDineroBox margin-bottom">
      <Box>
        <TextField
          variant={variante}
          label={etiqueta}
          value={values.numberformat}
          onChange={handleInputChange}
          name="numberformat"
          autoFocus={autofocus}
          fullWidth
          InputProps={{
            inputComponent: NumericFormatCustom,
            style: { textAlign: "right" },
            disableUnderline: { disableBottomLine },
          }}
        />
      </Box>
    </div>
  );
}

export { CampoDinero };
