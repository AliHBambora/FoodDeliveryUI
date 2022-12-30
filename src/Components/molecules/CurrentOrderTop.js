import React from "react";
import Text from "../atoms/Text";
import { IconButton } from "@mui/material";
import SettingsIcon from '@mui/icons-material/Settings';

const CurrentOrderTop = () => {
  return (
    <div style={{display:"flex",alignItems:"center",justifyContent:"space-between"}}>
      <Text variant="h5" text="Current Order" color="black" />
      <IconButton>
        <SettingsIcon />
      </IconButton>
    </div>
  );
};

export default CurrentOrderTop;
