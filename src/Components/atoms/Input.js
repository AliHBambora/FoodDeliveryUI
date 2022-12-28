import { InputAdornment, TextField } from "@mui/material";
import React from "react";

const Input = (props) => {
  return (
    <TextField
      label={props.label}
      variant={props.variant}
      placeholder={props.placeholder}
      fullWidth={props.fullWidth}
      InputProps={{
        startAdornment: (
          <InputAdornment position="start">
            <props.icon />
          </InputAdornment>
        ),
      }}
    />
  );
};

export default Input;
