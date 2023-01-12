import {
  Button,
  Dialog,
  DialogActions,
  DialogContent,
  DialogContentText,
  DialogTitle,
} from "@mui/material";
import React, { useContext } from "react";
import { ProductsContext } from "../../../Context/ProductsContext";
import Image from "../../atoms/Image";
import Text from "../../atoms/Text";
import style from "./ProductDescription.module.css";

const ProductDescription = ({ Title, Description, ImageSource }) => {
  const { openProductDescDialog, setOpenProductDescDialog } =
    useContext(ProductsContext);
  return (
    <>
      <Dialog
        open={openProductDescDialog}
        maxWidth="sm"
        // fullWidth={true}
        onClose={(_, reason) => {
          if (reason !== "backdropClick") {
            setOpenProductDescDialog(false);
          }
        }}
        scroll="paper"
      >
        <DialogTitle id="scroll-dialog-title">{Title}</DialogTitle>
        <DialogContent dividers={true}>
          <DialogContentText id="scroll-dialog-description" tabIndex={-1} sx={{height:"fit-content"}}>
            <div className={style.DialogBodyContainer}>
              <div className={style.DialogImgContainer}>
                <Image
                  height="100%"
                  width="100%"
                  source={ImageSource}
                  ObjectFit="cover"
                  borderRadius={15}
                  LoaderWidth={200}
                  LoaderHeight={200}
                />
              </div>
              <div className={style.DialogTextContainer}>
              <Text
                variant="body 1"
                text={Description}
                color="black"
                fontWeight={600}
              />
              </div>
            </div>
          </DialogContentText>
        </DialogContent>
        <DialogActions>
          <Button
            variant="outlined"
            size="small"
            style={{
              color: "#2e3e7c",
              background: "white",
              border: "1px solid #2e3e7c",
            }}
            onClick={() => {
              setOpenProductDescDialog(false);
            }}
          >
            Close
          </Button>
        </DialogActions>
      </Dialog>
    </>
  );
};

export default ProductDescription;
