import * as React from 'react';
import CssBaseline from '@mui/material/CssBaseline';
import Container from '@mui/material/Container';
import AppAppBar from './components/AppAppBar';
import MainContent from './components/MainContent';
import Latest from './components/Latest';
import Footer from './components/Footer';
import { ThemeProvider } from "@mui/material/styles";
import theme from './theme';

export  default function Blog1(props) {
  return (
    <>
    <ThemeProvider theme={theme}>
      <CssBaseline enableColorScheme />
      <AppAppBar />
      <Container
        maxWidth="lg"
        component="main"
        sx={{ display: 'flex', flexDirection: 'column', my: 16, gap: 4 }}
      >
        <MainContent />
        <Latest />
      </Container>
      <Footer />
    </ThemeProvider>
    </>
  );
}


export  function Blog() {
  return (
    <ThemeProvider theme={theme}>
      <CssBaseline />
      <AppAppBar />

      <div>Hello World</div>
    </ThemeProvider>
);
}
