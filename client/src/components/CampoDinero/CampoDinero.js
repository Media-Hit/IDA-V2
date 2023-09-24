import * as React from "react";
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

function CampoDinero({ valorInicial, etiqueta }) {
  const [values, setValues] = React.useState({
    textmask: "(100) 000-0000",
    numberformat: valorInicial,
  });

  const handleChange = (event) => {
    setValues({
      ...values,
      [event.target.name]: event.target.value,
    });
  };

  return (
    <div className="campoDineroBox margin-bottom">
      <Box>
        <TextField
          variant="outlined"
          label={etiqueta}
          value={values.numberformat}
          onChange={handleChange}
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
