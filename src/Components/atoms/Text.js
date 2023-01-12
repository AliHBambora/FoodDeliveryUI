import { Typography } from "@mui/material";
import React from "react";

const Text = (props) => {
  const MAX_LENGTH = 50;
  return (
    <Typography
      variant={props.variant}
      sx={{ color: props.color, fontWeight: props.fontWeight }}
    >
      {props.short
        ? props.text?.length > MAX_LENGTH
          ? props.text?.substring(0, MAX_LENGTH) + "..."
          : props.text
        : props.text}
    </Typography>
  );
};

export default Text;
