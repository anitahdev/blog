import ButtonAppBar from "./ButtonAppBar";
import Home from "./pages/Home";
import { Paper, Container, Grid } from "@mui/material";
export default function App() {
  return (
    <>
      <ButtonAppBar position="sticky" />
      <Container>
        {/* <Paper elevation={4}> */}
          <Home />
        {/* </Paper> */}
      </Container>
    </>
  );
}
