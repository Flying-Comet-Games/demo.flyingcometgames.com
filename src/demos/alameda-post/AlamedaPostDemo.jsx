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

const AlamedaPostDemo = () => {
  return (
    <ThemeProvider theme={theme}>
      <CssBaseline enableColorScheme />
      <Box sx={{ minHeight: "100vh", bgcolor: "background.default" }}>
        {/* Main Header */}
        <AppBar
          position="static"
          sx={{
            backgroundColor: "#000000", // Navy blue for the top banner
            color: "#FFFFFF",
            borderBottom: "1px solid white",
          }}
        >
          {/* Main Navigation */}
          <Box
            mx={"auto"}
            sx={{
              backgroundColor: "#000000", // Black for the main navigation bar
              padding: "0.5rem 0", // Adjusted padding
            }}
          >
            <Toolbar
              sx={{
                display: "flex",
                justifyContent: "space-between",
                alignItems: "center",
                width: "100%",
              }}
            >
              {/* Logo */}
              <Box sx={{ display: "flex", alignItems: "center" }}>
                <Box
                  component="img"
                  src="/assets/alameda-post-logo.svg"
                  alt="Alameda Post"
                  sx={{
                    height: 32,
                    width: "auto",
                    marginRight: 10,
                  }}
                />
              </Box>

              {/* Navigation Links */}
              <Box
                sx={{
                  display: "flex",
                  gap: "1.5rem",
                  alignItems: "center",
                  fontSize: "1.5rem",
                  fontWeight: 700,
                  textTransform: "uppercase",
                  color: "#990000",
                  whiteSpace: "nowrap", // Prevents wrapping
                  overflow: "hidden", // Ensures links stay in bounds
                  textOverflow: "ellipsis",
                }}
              >
                {[
                  "Front Page",
                  "Sections",
                  "Events",
                  "Tours",
                  "Give / Join",
                  "About",
                  "Contact",
                  "Advertising",
                  "Search",
                  "Games",
                ].map((text, index) => (
                  <Typography
                    key={index}
                    component="a"
                    href="#"
                    sx={{
                      textDecoration: "none",
                      color: "#990000",
                      "&:hover": { color: "#d62828" },
                    }}
                  >
                    {text}
                  </Typography>
                ))}
              </Box>
            </Toolbar>
          </Box>
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
                height: "800px",
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
                title="Alameda Post Game"
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
