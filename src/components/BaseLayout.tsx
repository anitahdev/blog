import { Outlet } from "react-router-dom";
import { Container } from "@mui/material";
import ButtonAppBar from "./ButtonAppBar";

function BaseLayout() {
  return (
    <>
      <ButtonAppBar />
      <Container>
        <Outlet />
      </Container>
    </>
  );
}

export default BaseLayout;
