import { useState } from "react";
import { useNavigate } from "react-router-dom";
import capitalize from "lodash.capitalize";

import AppBar from "@mui/material/AppBar";
import Box from "@mui/material/Box";
import Toolbar from "@mui/material/Toolbar";
import IconButton from "@mui/material/IconButton";
import Typography from "@mui/material/Typography";
import Menu from "@mui/material/Menu";
import MenuIcon from "@mui/icons-material/Menu";
import Container from "@mui/material/Container";
import Button from "@mui/material/Button";
import MenuItem from "@mui/material/MenuItem";
import Tooltip from "@mui/material/Tooltip";
import AdbIcon from "@mui/icons-material/Adb";
import DarkMode from "@mui/icons-material/DarkMode";
import LightMode from "@mui/icons-material/LightMode";

import { useSelector, useDispatch } from 'react-redux';
import { toggleTheme } from '../../redux/reducers/theme'



const pages = [
  {
    title: "Home",
    path: "/",
  },
  {
    title: "About Me",
    path: "/about",
  },
  {
    title: "Contact Me",
    path: "/contacts",
  },
];

function Header() {
  const navigate = useNavigate();
  const { isDark, theme } = useSelector(state => state.theme)
  const dispatch = useDispatch();
  const [anchorElNav, setAnchorElNav] = useState(null);

  const handleOpenNavMenu = (event) => {
    setAnchorElNav(event.currentTarget);
  };

  const handleCloseNavMenu = () => {
    setAnchorElNav(null);
  };

  const handleClick = (e) => {
    const { path, closeMenu } = e.currentTarget.dataset;
    navigate(path);

    if (closeMenu === "true") {
      handleCloseNavMenu();
    }
  };

  const toggleThemeClick = () => {
    dispatch(toggleTheme());
  };

  return (
    <AppBar position="static" color={isDark ? "secondary" : "primary"}>
      <Container maxWidth="xl">
        <Toolbar disableGutters>
          <AdbIcon sx={{ display: { xs: "none", md: "flex" }, mr: 1 }} />
          <Typography
            variant="h6"
            noWrap
            component="a"
            href="/"
            sx={{
              mr: 2,
              display: { xs: "none", md: "flex" },
              fontFamily: "monospace",
              fontWeight: 700,
              letterSpacing: ".3rem",
              color: "inherit",
              textDecoration: "none",
            }}
          >
            Name
          </Typography>

          <Box sx={{ flexGrow: 1, display: { xs: "flex", md: "none" } }}>
            <IconButton
              size="large"
              aria-label="account of current user"
              aria-controls="menu-appbar"
              aria-haspopup="true"
              onClick={handleOpenNavMenu}
              color="inherit"
            >
              <MenuIcon />
            </IconButton>
            <Menu
              id="menu-appbar"
              anchorEl={anchorElNav}
              anchorOrigin={{
                vertical: "bottom",
                horizontal: "left",
              }}
              keepMounted
              transformOrigin={{
                vertical: "top",
                horizontal: "left",
              }}
              open={Boolean(anchorElNav)}
              onClose={handleCloseNavMenu}
              sx={{
                display: { xs: "block", md: "none" },
              }}
            >
              {pages.map(({ title, path }) => (
                <MenuItem
                  key={title}
                  data-path={path}
                  data-close-menu
                  onClick={handleClick}
                >
                  <Typography textAlign="center">{title}</Typography>
                </MenuItem>
              ))}
            </Menu>
          </Box>
          <AdbIcon sx={{ display: { xs: "flex", md: "none" }, mr: 1 }} />
          <Typography
            variant="h5"
            noWrap
            component="a"
            href=""
            sx={{
              mr: 2,
              display: { xs: "flex", md: "none" },
              flexGrow: 1,
              fontFamily: "monospace",
              fontWeight: 700,
              letterSpacing: ".3rem",
              color: "inherit",
              textDecoration: "none",
            }}
          >
            Name
          </Typography>
          <Box sx={{ flexGrow: 1, display: { xs: "none", md: "flex" } }}>
            {pages.map(({ title, path }) => (
              <Button
                key={title}
                data-path={path}
                onClick={handleClick}
                sx={{ my: 2, color: "white", display: "block" }}
              >
                {title}
              </Button>
            ))}
          </Box>
          <div>
            <Tooltip title={capitalize(theme) + " Mode"}>
              <IconButton
                size="large"
                aria-label="account of current user"
                aria-controls="menu-appbar"
                aria-haspopup="true"
                onClick={toggleThemeClick}
                color="inherit"
              >
                {isDark ? <LightMode /> : <DarkMode />}
              </IconButton>
            </Tooltip>
          </div>
        </Toolbar>
      </Container>
    </AppBar>
  );
}

export default Header;
