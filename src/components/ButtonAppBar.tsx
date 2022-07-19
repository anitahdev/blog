import * as React from "react";
import AppBar from "@mui/material/AppBar";
import Toolbar from "@mui/material/Toolbar";
import Typography from "@mui/material/Typography";
import IconButton from "@mui/material/IconButton";
import { ThemeProvider, createTheme } from "@mui/material/styles";
import { Link } from "react-router-dom";

function appBarLabel() {
  return (
    <Toolbar>
      <IconButton
        edge="start"
        color="inherit"
        aria-label="menu"
        sx={{ marginLeft: 3 }}
      >
        <Link to={"/"} style={{ textDecoration: "none", color: "white" }}>
          <Typography variant="h6" component="div">
            Blog
          </Typography>
        </Link>
      </IconButton>
    </Toolbar>
  );
}

const darkTheme = createTheme({
  palette: {
    mode: "dark",
    primary: {
      main: "#1976d2",
    },
  },
});

export default function ButtonAppBar() {
  return (
    <ThemeProvider theme={darkTheme}>
      <AppBar position="sticky" color="primary">
        {appBarLabel()}
      </AppBar>
    </ThemeProvider>
  );
}
