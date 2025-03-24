import React from "react";
import { ThemeProvider } from "@mui/material/styles";
import CssBaseline from "@mui/material/CssBaseline";
import Box from "@mui/material/Box";
import Container from "@mui/material/Container";
import Typography from "@mui/material/Typography";
import AppBar from "@mui/material/AppBar";
import Toolbar from "@mui/material/Toolbar";
import Button from "@mui/material/Button";
import { createTheme } from "@mui/material/styles";
import DisclaimerBanner from "../../components/DisclaimerBanner";
import { IconButton, Menu, MenuItem, Link } from "@mui/material";
import { Search, Facebook, Instagram } from "lucide-react";

// Create a custom theme based on the Oaklandside styling
const theme = createTheme({
  palette: {
    primary: {
      main: "#13334C", // Dark blue from the header
    },
    secondary: {
      main: "#F2A900", // Donate button color
    },
    background: {
      default: "#fff",
    },
  },
  typography: {
    fontFamily: '"Helvetica", "Arial", sans-serif',
  },
});

const OaklandsideDemo = () => {
  return (
    <ThemeProvider theme={theme}>
      <CssBaseline enableColorScheme />
      <Box sx={{ minHeight: "100vh", bgcolor: "background.default" }}>
        {/* Top navigation bar with links */}
        <Box
          sx={{
            bgcolor: "#13334C",
            color: "white",
            px: 2,
            py: 0.5,
            display: "flex",
            justifyContent: "space-between",
          }}
        >
          <Box></Box> {/* Empty space for layout balance */}
        </Box>

        {/* Main header with logo and social icons */}
        <Box
          sx={{
            bgcolor: "#13334C",
            color: "white",
            px: 4,
            py: 1,
            display: "flex",
            justifyContent: "space-between",
            alignItems: "center",
          }}
        >
          <Box sx={{ display: "flex", alignItems: "center", gap: 2 }}>
            <Facebook size={20} />
            <Instagram size={20} />
          </Box>
          <Typography
            variant="h4"
            component="div"
            sx={{
              textAlign: "center",
              fontWeight: "bold",
              color: "white",
              letterSpacing: 1,
            }}
          >
            THE
            <br />
            OAKLANDSIDE
          </Typography>
          <Box sx={{ display: "flex", alignItems: "center", gap: 2 }}>
            <Button
              variant="contained"
              sx={{
                bgcolor: "#F2A900",
                color: "black",
                borderRadius: 0,
                "&:hover": {
                  bgcolor: "#d99700",
                },
                fontWeight: "bold",
                px: 2,
              }}
            >
              DONATE
            </Button>
            <Search size={20} />
          </Box>
        </Box>

        {/* Navigation menu */}
        <Box
          sx={{
            bgcolor: "#13334C",
            color: "white",
            display: "flex",
            justifyContent: "center",
            py: 1,
          }}
        >
          <Box sx={{ display: "flex", gap: 3, flexWrap: "wrap", px: 2 }}>
            <Typography
              variant="body2"
              component="span"
              sx={{ fontWeight: "medium" }}
            >
              Latest News
            </Typography>
            <Typography
              variant="body2"
              component="span"
              sx={{ fontWeight: "medium" }}
            >
              Arts & Community
            </Typography>
            <Typography
              variant="body2"
              component="span"
              sx={{ fontWeight: "medium" }}
            >
              Business
            </Typography>
            <Typography
              variant="body2"
              component="span"
              sx={{ fontWeight: "medium" }}
            >
              City Hall
            </Typography>
            <Typography
              variant="body2"
              component="span"
              sx={{ fontWeight: "medium" }}
            >
              Education Equity
            </Typography>
            <Typography
              variant="body2"
              component="span"
              sx={{ fontWeight: "medium" }}
            >
              Events
            </Typography>
            <Typography
              variant="body2"
              component="span"
              sx={{ fontWeight: "medium" }}
            >
              Housing
            </Typography>
            <Typography
              variant="body2"
              component="span"
              sx={{ fontWeight: "medium" }}
            >
              Nature & the City
            </Typography>
            <Typography
              variant="body2"
              component="span"
              sx={{ fontWeight: "medium" }}
            >
              Nosh
            </Typography>
            <Typography
              variant="body2"
              component="span"
              sx={{ fontWeight: "medium" }}
            >
              Public Safety
            </Typography>
            <Typography
              variant="body2"
              component="span"
              sx={{ fontWeight: "medium" }}
            >
              Road Safety
            </Typography>
            <Typography
              variant="body2"
              component="span"
              sx={{ fontWeight: "medium" }}
            >
              Elections 2024
            </Typography>
          </Box>
        </Box>

        {/* Election banner */}
        <Box sx={{ bgcolor: "#F5EDD6", p: 1, textAlign: "center" }}>
          <Typography variant="body2">
            2025 special election: What you need to know • Watch mayoral forum |
            OUSD board slashes hundreds of jobs | Culture Makers on March 13
          </Typography>
        </Box>
        <Container height="100%" maxWidth="lg" sx={{ mt: 2, px: 0 }}>
          <Box sx={{ maxWidth: 600, mx: "auto" }}>
            <Box
              sx={{
                width: "100%",
                height: "1000px",
                bgcolor: "background.paper",
                overflow: "hidden",
              }}
            >
              <Box
                component="iframe"
                src="https://flyingcometgames.com/oaklandside-demo"
                sx={{
                  width: "100%",
                  height: "100%",
                  border: "none",
                }}
                title="Oaklandside Wordy"
                allow="clipboard-read; clipboard-write"
                allowFullScreen={true}
                sandbox="allow-same-origin allow-scripts allow-popups allow-forms"
              />
            </Box>
          </Box>
        </Container>

        <DisclaimerBanner publication="The Oaklandside" />
      </Box>
    </ThemeProvider>
  );
};

export default OaklandsideDemo;
