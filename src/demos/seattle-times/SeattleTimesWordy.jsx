import React from "react";
import { ThemeProvider } from "@mui/material/styles";
import CssBaseline from "@mui/material/CssBaseline";
import Box from "@mui/material/Box";
import Container from "@mui/material/Container";
import Typography from "@mui/material/Typography";
import AppBar from "@mui/material/AppBar";
import Toolbar from "@mui/material/Toolbar";
import IconButton from "@mui/material/IconButton";
import Button from "@mui/material/Button";
import { Menu, Search, ChevronDown } from "lucide-react";
import theme from "./seattleTimesTheme";
import { Link } from "@mui/material";
import DisclaimerBanner from "../../components/DisclaimerBanner";

const SeattleTimesWordy = () => {
  return (
    <ThemeProvider theme={theme}>
      <CssBaseline enableColorScheme />
      <Box sx={{ minHeight: "100vh", bgcolor: "background.default" }}>
        {/* Main Header */}
        <AppBar
          position="static"
          color="default"
          elevation={0}
          sx={{ borderBottom: 1, borderColor: "divider" }}
        >
          <Container maxWidth="lg">
            <Toolbar
              sx={{
                justifyContent: "space-between",
                minHeight: { xs: 56 },
                px: { xs: 1, sm: 2 },
              }}
            >
              <Box sx={{ display: "flex", alignItems: "center" }}>
                <IconButton edge="start" color="inherit" sx={{ mr: 2 }}>
                  <Menu />
                </IconButton>
                <Box
                  component="img"
                  src="/assets/seattle-times-logo.svg"
                  alt="The Seattle Times"
                  sx={{
                    height: 28,
                    width: "auto",
                  }}
                />
              </Box>
              <IconButton color="inherit">
                <Search />
              </IconButton>
            </Toolbar>
          </Container>
        </AppBar>

        {/* Game Header */}
        <AppBar
          position="static"
          color="default"
          elevation={0}
          sx={{
            borderBottom: 1,
            borderColor: "divider",
            boxShadow: "none",
          }}
        >
          <Container maxWidth="lg">
            <Box
              sx={{
                display: "flex",
                justifyContent: "space-between",
                alignItems: "center",
                py: 2,
                px: { xs: 1, sm: 2 },
              }}
            >
              <Box sx={{ display: "flex", alignItems: "center" }}>
                <Typography variant="h6" component="h1" sx={{ mr: 1 }}>
                  The Daily Wordy
                </Typography>
                <ChevronDown />
              </Box>
              <Box>
                <Button color="inherit" sx={{ mr: 1 }}>
                  Log In
                </Button>
                <Button color="inherit">Subscribe</Button>
              </Box>
            </Box>
          </Container>
        </AppBar>

        {/* Game Content */}
        <Container height="100%" maxWidth="lg" sx={{ mt: 2, px: 0 }}>
          <Box sx={{ maxWidth: 600, mx: "auto" }}>
            {/* <Box sx={{px: 3}}>
              <Typography variant="h4" component="h2" gutterBottom>
                The Daily Wordy
              </Typography>
              <Typography variant="body1" gutterBottom>
                Guess the 5 letter word of the day. To start, simply begin typing.
                Click the 💡 for a hint.
              </Typography>
            </Box> */}

            {/* Game iframe would go here */}
            <Box
              sx={{
                width: "100%",
                height: "800px",
                bgcolor: "background.paper",
                overflow: "hidden",
              }}
            >
              <Box
                component="iframe"
                src="https://flyingcometgames.com/seattle-times-demo"
                sx={{
                  width: "100%",
                  height: "100%",
                  border: "none",
                }}
                title="Seattle Times Wordy"
              />
            </Box>
          </Box>
        </Container>

        <DisclaimerBanner />
      </Box>
    </ThemeProvider>
  );
};

export default SeattleTimesWordy;
