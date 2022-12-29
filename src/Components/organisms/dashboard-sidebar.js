import { useEffect } from "react";
import PropTypes from "prop-types";
import { Box, Divider, Drawer, useMediaQuery } from "@mui/material";

import { Lock as LockIcon } from "../../icons/lock";
import { Cog as CogIcon } from "../../icons/cog";
import { ShoppingBag as ShoppingBagIcon } from "../../icons/shopping-bag";
import { UserAdd as UserAddIcon } from "../../icons/user-add";
import { NavItem } from "../molecules/nav-item";
import Logo from "../molecules/Logo";
import LogoutIcon from "@mui/icons-material/Logout";
import HomeIcon from "@mui/icons-material/Home";
import GridViewIcon from "@mui/icons-material/GridView";
import RestaurantIcon from "@mui/icons-material/Restaurant";
import FavoriteIcon from "@mui/icons-material/Favorite";

const items = [
  {
    href: "/home",
    icon: <HomeIcon fontSize="small" />,
    title: "Home",
  },
  {
    href: "/dashboard",
    icon: <GridViewIcon fontSize="small" />,
    title: "Dashboard",
  },
  {
    href: "/dishes",
    icon: <RestaurantIcon fontSize="small" />,
    title: "Menu",
  },

  {
    href: "/shoppingBag",
    icon: <ShoppingBagIcon fontSize="small" />,
    title: "Bag",
  },
  {
    href: "/favourites",
    icon: <FavoriteIcon fontSize="small" />,
    title: "Favourites",
  },
  {
    href: "/login",
    icon: <LockIcon fontSize="small" />,
    title: "Login",
  },
  {
    href: "/register",
    icon: <UserAddIcon fontSize="small" />,
    title: "Register",
  },
];

export const DashboardSidebar = (props) => {
  const { open, onClose } = props;
  const lgUp = useMediaQuery((theme) => theme.breakpoints.up("lg"), {
    defaultMatches: true,
    noSsr: false,
  });

  useEffect(() => {
    if (open) {
      onClose?.();
    }
  });

  const content = (
    <>
      <Box
        sx={{
          display: "flex",
          flexDirection: "column",
          height: "100%",
        }}
      >
        <div>
          <Box sx={{ display: "grid", placeItems: "center" }}>
            <a>
              <Logo />
            </a>
          </Box>
        </div>
        <Divider
          sx={{
            borderColor: "#2D3748",
            mb: 3,
          }}
        />
        <Box sx={{ flexGrow: 1 }}>
          {items.map((item, index) => (
            <NavItem
              key={item.title}
              icon={item.icon}
              href={item.href}
              title={item.title}
            />
          ))}
        </Box>
        {/* <Divider sx={{ borderColor: "#2D3748", mb: 12 }} /> */}
        <NavItem
          key="Settings"
          icon={<CogIcon fontSize="small" />}
          href="/Settings"
          title="Settings"
        />
        <NavItem
          key="Logout"
          icon={<LogoutIcon fontSize="small" />}
          href="/Logout"
          title="Logout"
        />
      </Box>
    </>
  );

  if (lgUp) {
    return (
      <Drawer
        anchor="left"
        open
        PaperProps={{
          sx: {
            backgroundColor: "#FFFFFF",
            color: "#000000",
            width: 200,
          },
        }}
        variant="permanent"
      >
        {content}
      </Drawer>
    );
  }

  return (
    <Drawer
      anchor="left"
      onClose={onClose}
      open={open}
      PaperProps={{
        sx: {
          backgroundColor: "#FFFFFF",
          color: "#000000",
          width: 200,
        },
      }}
      sx={{ zIndex: (theme) => theme.zIndex.appBar + 100 }}
      variant="temporary"
    >
      {content}
    </Drawer>
  );
};

DashboardSidebar.propTypes = {
  onClose: PropTypes.func,
  open: PropTypes.bool,
};
