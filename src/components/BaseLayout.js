import React from "react";
import { Outlet } from "react-router-dom";
import { Container } from "@mui/material";
import ButtonAppBar from "../components/ButtonAppBar";

function BaseLayout() {
  return (
    <>
      <ButtonAppBar position="sticky" />
      <Container>
        <Outlet />
      </Container>
    </>
  );
}

export default BaseLayout;
