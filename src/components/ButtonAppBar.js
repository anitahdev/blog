import * as React from "react";
import AppBar from "@mui/material/AppBar";
import Stack from "@mui/material/Stack";
import Toolbar from "@mui/material/Toolbar";
import Typography from "@mui/material/Typography";
import IconButton from "@mui/material/IconButton";
import { ThemeProvider, createTheme } from "@mui/material/styles";

function appBarLabel(label) {
  return (
    <Toolbar>
      <IconButton
        edge="start"
        color="inherit"
        aria-label="menu"
        sx={{ mr: 2 }}
      ></IconButton>
      <Typography variant="h6" noWrap component="div" sx={{ flexGrow: 1 }}>
        {label}
      </Typography>
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
          {appBarLabel("blog")}
        </AppBar>
      </ThemeProvider>
  );
}
