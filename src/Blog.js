import * as React from "react";
import CssBaseline from "@mui/material/CssBaseline";
import Container from "@mui/material/Container";
import AppAppBar from "./components/AppAppBar";
import MainContent from "./components/MainContent";
import Latest from "./components/Latest";
import Footer from "./components/Footer";
import { ThemeProvider } from "@mui/material/styles";
import theme from "./theme";

export default function Blog() {
  return (
    <>
      <ThemeProvider theme={theme}>
        <CssBaseline enableColorScheme />
        {/* <AppAppBar /> */}
        <Container
          width="100%"
          maxWidth="lg"
          component="main"
          sx={{ display: "flex", flexDirection: "column", mt: 5 }}
        >
          <MainContent />
        </Container>
        <Footer />
      </ThemeProvider>
    </>
  );
}
