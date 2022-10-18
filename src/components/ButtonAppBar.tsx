import * as React from "react";
import AppBar from "@mui/material/AppBar";
import Toolbar from "@mui/material/Toolbar";
import Typography from "@mui/material/Typography";
import { ThemeProvider, createTheme } from "@mui/material/styles";
import { Link } from "react-router-dom";
import HomeIcon from "@mui/icons-material/Home";

function appBarLabel() {
  return (
    <Toolbar>
      <Typography variant="h6" component="div">
        Blog
      </Typography>
      <Link to={"/"} style={{ textDecoration: "none", color: "white" }}>
        <HomeIcon
          color="inherit"
          aria-label="menu"
          sx={{ marginLeft: 3 }}
          fontSize="large"
        />
      </Link>
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
