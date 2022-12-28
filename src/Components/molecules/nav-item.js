import PropTypes from "prop-types";
import { Box, Button, ListItem, Tooltip, Typography } from "@mui/material";
import { Route, Link, Routes, useLocation } from "react-router-dom";
import TreeItem, { treeItemClasses } from "@mui/lab/TreeItem";
import { styled } from "@mui/material/styles";
import MUIStyledButton from "../atoms/MUIStyledButton";

export const NavItem = (props) => {
  const { href, icon, title, ...others } = props;
  const location = useLocation();
  const active = href ? location.pathname === href : false;

  return (
    <>
      <ListItem
        disableGutters
        sx={{
          display: "flex",
          mb: 0.5,
          py: 0,
          px: 2,
        }}
        {...others}
      >
        <MUIStyledButton active={active} href={href} icon={icon} title={title}/>
      </ListItem>
    </>
  );
};

NavItem.propTypes = {
  href: PropTypes.string,
  icon: PropTypes.node,
  title: PropTypes.string,
};
