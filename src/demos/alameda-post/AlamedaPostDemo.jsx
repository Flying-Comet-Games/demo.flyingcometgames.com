import React from "react";
import { ThemeProvider } from "@mui/material/styles";
import CssBaseline from "@mui/material/CssBaseline";
import Box from "@mui/material/Box";
import Container from "@mui/material/Container";
import Typography from "@mui/material/Typography";
import AppBar from "@mui/material/AppBar";
import Toolbar from "@mui/material/Toolbar";
import Button from "@mui/material/Button";
import theme from "./alamedaPostTheme";
import DisclaimerBanner from "../../components/DisclaimerBanner";
import { IconButton, Menu } from "@mui/material";
import { Search } from "lucide-react";

const AlamedaPostDemo = () => {
  return (
    <ThemeProvider theme={theme}>
      <CssBaseline enableColorScheme />
      <Box sx={{ minHeight: "100vh", bgcolor: "background.default" }}>
        {/* Main Header */}
        <AppBar
          position="static"
          color="default"
          elevation={0}
          sx={{ borderRadius: 0, borderBottom: 1, borderColor: "divider" }}
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
                  src="/assets/alameda-post-logo.svg"
                  alt="Alameda Post"
                  sx={{
                    height: 28,
                    width: "auto",
                  }}
                />
              </Box>
            </Toolbar>
          </Container>
        </AppBar>

        <Box p={2} sx={{ display: "flex", alignItems: "center" }}>
          <Box
            mx={"auto"}
            component="img"
            src="/assets/alameda-post-ad.jpg"
            alt="Alameda Post"
            sx={{
              width: "auto",
            }}
          />
        </Box>

        {/* Game Content */}
        <Container height="100%" maxWidth="lg" sx={{ mt: 2, px: 0 }}>
          <Box sx={{ maxWidth: 600, mx: "auto" }}>
            <Box
              sx={{
                width: "100%",
                height: "750px",
                bgcolor: "background.paper",
                overflow: "hidden",
              }}
            >
              <Box
                component="iframe"
                src="https://flyingcometgames.com/alameda-post-demo"
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
        <Box p={2} sx={{ display: "flex", alignItems: "center" }}>
          <Box
            mx={"auto"}
            component="img"
            src="/assets/alameda-post-ad.jpg"
            alt="Alameda Post"
            sx={{
              width: "auto",
            }}
          />
        </Box>

        <DisclaimerBanner publication="Alameda Post" />
      </Box>
    </ThemeProvider>
  );
};

export default AlamedaPostDemo;
