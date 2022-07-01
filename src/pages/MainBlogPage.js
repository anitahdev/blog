import React from "react";
import Blog from "../components/Blog"
import ButtonAppBar from "../components/ButtonAppBar"
import { Paper, Container, Grid } from "@mui/material";
function MainBlogPage() {
  return (
    <>
      <ButtonAppBar position="sticky" />
      <Container>
        {/* <Paper elevation={4}> */}
        <Blog/>
        {/* </Paper> */}
      </Container>
    </>
  );
}

export default MainBlogPage;
