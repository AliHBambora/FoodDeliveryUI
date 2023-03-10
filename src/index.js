import React from "react";
import ReactDOM from "react-dom/client";
import "./index.css";
import App from "./App";
import reportWebVitals from "./reportWebVitals";
import { theme } from "./theme/index";
import { ThemeProvider } from "@mui/material/styles";
import { BrowserRouter as Router } from "react-router-dom";
import { MenuTypeProvider } from "./Context/MenuTypeContext";
import { ProductsProvider } from "./Context/ProductsContext";

const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(
  <React.StrictMode>
    <ThemeProvider theme={theme}>
      <Router>
        <MenuTypeProvider>
          <ProductsProvider>
          <App />
          </ProductsProvider>
        </MenuTypeProvider>
      </Router>
    </ThemeProvider>
  </React.StrictMode>
);

reportWebVitals();
