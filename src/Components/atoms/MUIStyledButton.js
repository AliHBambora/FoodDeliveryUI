import { Box, Button } from "@mui/material";
import React from "react";

const MUIStyledButton = ({href,icon,active,title}) => {
  return (
    <>
      <Button
        component="a"
        startIcon={icon}
        disableRipple
        href={href}
        sx={{
          backgroundColor: active && "#FC5000",
          borderRadius: 1,
          color: active ? "#ffffff" : "#000000",
          fontWeight: active && "fontWeightBold",
          justifyContent: "flex-start",
          px: 3,
          textAlign: "left",
          textTransform: "none",
          width: "100%",
          "& .MuiButton-startIcon": {
            color: active ? "#FFFFFF" : "#FC5000",
          },
          "&:hover": {
            backgroundColor: "#FC5000",
            color:"#FFFFFF",
            "& .MuiButton-startIcon":{
                color:"#FFFFFF"
            }
          },
        }}
      >
        <Box sx={{ flexGrow: 1 }}>{title}</Box>
      </Button>
    </>
  );
};

export default MUIStyledButton;
