import React, { useState } from "react";
import { ThemeProvider } from "@mui/material/styles";
import CssBaseline from "@mui/material/CssBaseline";
import Box from "@mui/material/Box";
import Typography from "@mui/material/Typography";
import { createTheme } from "@mui/material/styles";
import DisclaimerBanner from "../../components/DisclaimerBanner";
import { IconButton, Divider, ButtonGroup, Button, Paper } from "@mui/material";
import { Search, Menu as MenuIcon } from "lucide-react";
// Import Google Fonts
import "@fontsource/playfair-display/400.css";
import "@fontsource/playfair-display/700.css";
import "@fontsource/open-sans/400.css";
import "@fontsource/open-sans/600.css";
import "@fontsource/open-sans/700.css";

// Create a custom theme based on the Johnson County Post styling
const theme = createTheme({
  palette: {
    primary: {
      main: "#2277C8", // Blue from the GAMES title
    },
    secondary: {
      main: "#000000", // Black for the header
    },
    background: {
      default: "#f6f6f6", // Light gray background
      paper: "#ffffff",
    },
  },
  typography: {
    fontFamily: '"Playfair Display", serif',
    h5: {
      fontWeight: 700,
      fontFamily: '"Playfair Display", serif',
    },
    h6: {
      fontFamily: '"Playfair Display", serif',
      fontWeight: 700,
    },
    subtitle1: {
      fontFamily: '"Playfair Display", serif',
    },
    button: {
      textTransform: "uppercase",
      fontWeight: 600,
      fontFamily: '"Open Sans", "Helvetica", "Arial", sans-serif',
    },
  },
  shape: {
    borderRadius: 4,
  },
  components: {
    MuiPaper: {
      defaultProps: {
        elevation: 0,
      },
      styleOverrides: {
        root: {
          boxShadow: "0px 2px 6px rgba(0,0,0,0.05)",
        },
      },
    },
    MuiButton: {
      styleOverrides: {
        root: {
          borderRadius: 4,
          padding: "8px 16px",
        },
      },
    },
  },
});

const JocoDemo = () => {
  const [currentGame, setCurrentGame] = useState("keyword");

  const handleGameChange = (game) => {
    setCurrentGame(game);
  };

  return (
    <ThemeProvider theme={theme}>
      <CssBaseline enableColorScheme />

      <Box sx={{ bgcolor: "background.default", minHeight: "100vh", pb: 4 }}>
        <Paper
          sx={{
            maxWidth: "sm",
            margin: "0 auto",
            position: "relative",
            overflow: "hidden",
            bgcolor: "background.paper",
            boxShadow: "0px 0px 10px rgba(0,0,0,0.1)",
          }}
        >
          {/* Top navigation bar */}
          <Box
            sx={{
              bgcolor: "#000",
              color: "white",
              px: 2,
              py: 1.5,
              display: "flex",
              justifyContent: "space-between",
              alignItems: "center",
            }}
          >
            <IconButton edge="start" color="inherit" aria-label="menu">
              <MenuIcon size={24} color="white" />
            </IconButton>

            <Box sx={{ display: "flex", alignItems: "center", gap: 1 }}>
              <Box
                component="img"
                src="/assets/joco-large.png"
                alt="Johnson County Post Logo"
                sx={{ height: 40 }}
              />
              {/* <Typography
                variant="h6"
                component="div"
                sx={{
                  fontWeight: "bold",
                  letterSpacing: 1,
                  color: "white",
                }}
              >
                JOHNSON COUNTY POST
              </Typography> */}
            </Box>

            <IconButton color="inherit" aria-label="search">
              <Search size={24} color="white" />
            </IconButton>
          </Box>

          {/* Content container with consistent padding */}
          <Box sx={{ p: 1 }}>
            {/* Games section title - using Open Sans */}
            <Typography
              variant="h5"
              component="div"
              sx={{
                fontWeight: 700,
                color: "#2277C8", // Blue color for GAMES
                mb: 1,
                fontSize: "1.8rem",
                letterSpacing: "0.02em",
                fontFamily: '"Open Sans", "Helvetica", "Arial", sans-serif',
                textTransform: "uppercase",
              }}
            >
              GAMES
            </Typography>
            <Divider sx={{ mb: 3 }} />

            {/* Game Toggle Buttons - styled to match screenshot */}
            <Box sx={{ mb: 3, display: "flex", justifyContent: "center" }}>
              <ButtonGroup
                variant="outlined"
                sx={{
                  borderRadius: "4px",
                  overflow: "hidden",
                  "& .MuiButton-root": {
                    border: "1px solid #e0e0e0",
                    borderRadius: 0,
                    fontSize: "0.9rem",
                    minWidth: "130px",
                    fontFamily: '"Open Sans", "Helvetica", "Arial", sans-serif',
                  },
                }}
              >
                <Button
                  onClick={() => handleGameChange("keyword")}
                  sx={{
                    bgcolor: currentGame === "keyword" ? "#2277C8" : "white",
                    color: currentGame === "keyword" ? "white" : "black",
                    fontWeight: 600,
                    borderRight: "1px solid #e0e0e0",
                    "&:hover": {
                      bgcolor:
                        currentGame === "keyword" ? "#2277C8" : "#f5f5f5",
                    },
                  }}
                >
                  KEYWORD
                </Button>
                <Button
                  onClick={() => handleGameChange("wordy")}
                  sx={{
                    bgcolor: currentGame === "wordy" ? "#2277C8" : "white",
                    color: currentGame === "wordy" ? "white" : "black",
                    fontWeight: 600,
                    "&:hover": {
                      bgcolor: currentGame === "wordy" ? "#2277C8" : "#f5f5f5",
                    },
                  }}
                >
                  JOCO POST WORDY
                </Button>
              </ButtonGroup>
            </Box>

            {/* Game container with consistent styling */}
            <Box sx={{ mb: 4, overflow: "hidden" }}>
              {currentGame === "keyword" ? (
                <Box
                  component="iframe"
                  src="https://flyingcometgames.com/joco-keyword-demo"
                  sx={{
                    height: "820px",
                    width: "100%",
                    border: "none",
                  }}
                  title="Johnson County Post Keyword Game"
                  allow="clipboard-read; clipboard-write"
                  allowFullScreen={true}
                  sandbox="allow-same-origin allow-scripts allow-popups allow-forms"
                />
              ) : (
                <Box
                  component="iframe"
                  src="https://flyingcometgames.com/joco-wordy-demo"
                  sx={{
                    width: "100%",
                    height: "800px",
                    border: "none",
                    borderRadius: 1,
                    boxShadow: "0px 2px 4px rgba(0,0,0,0.05)",
                  }}
                  title="Johnson County Post Wordy Game"
                  allow="clipboard-read; clipboard-write"
                  allowFullScreen={true}
                  sandbox="allow-same-origin allow-scripts allow-popups allow-forms"
                />
              )}
            </Box>

            {/* Latest Headlines section with improved spacing */}
            <Typography
              variant="h5"
              component="div"
              sx={{
                fontWeight: 700,
                color: "#2277C8", // Blue color for section title
                mb: 1,
                fontSize: "1.8rem",
                letterSpacing: "0.02em",
                fontFamily: '"Open Sans", "Helvetica", "Arial", sans-serif',
                textTransform: "uppercase",
              }}
            >
              LATEST HEADLINES
            </Typography>
            <Divider sx={{ mb: 2 }} />

            {/* Headlines with improved visuals */}
            <Box sx={{ display: "flex", flexDirection: "column", gap: 2 }}>
              {/* Headlines item */}
              <Box sx={{ display: "flex", gap: 2 }}>
                <Box
                  component="img"
                  src="https://images.johnsoncountypost.com/wp-content/uploads/2025/03/Helping-Hands-1.jpg"
                  alt="High school students volunteering"
                  sx={{
                    width: 120,
                    height: 80,
                    borderRadius: 1,
                    objectFit: "cover",
                  }}
                />
                <Typography
                  variant="subtitle1"
                  component="div"
                  sx={{
                    fontWeight: "bold",
                    fontSize: "1.05rem",
                    lineHeight: 1.3,
                    color: "#333", // Slightly softer than pure black for better readability
                  }}
                >
                  These JoCo high schoolers want younger children to know what
                  it's like to have an autoimmune disorder
                </Typography>
              </Box>

              {/* Headlines item */}
              <Box sx={{ display: "flex", gap: 2 }}>
                <Box
                  component="img"
                  src="https://images.johnsoncountypost.com/wp-content/uploads/2025/03/ihop_pancakes.jpg"
                  alt="IHOP pancakes"
                  sx={{
                    width: 120,
                    height: 80,
                    borderRadius: 1,
                    objectFit: "cover",
                  }}
                />
                <Typography
                  variant="subtitle1"
                  component="div"
                  sx={{
                    fontWeight: "bold",
                    fontSize: "1.05rem",
                    lineHeight: 1.3,
                    color: "#333", // Slightly softer than pure black for better readability
                  }}
                >
                  Edgerton, wanting more local dining options, lands an IHOP
                  diner
                </Typography>
              </Box>

              {/* Headlines item */}
              <Box sx={{ display: "flex", gap: 2 }}>
                <Box
                  component="img"
                  src="https://images.johnsoncountypost.com/wp-content/uploads/2025/03/IMG_3528.jpg"
                  alt="Women with signs"
                  sx={{
                    width: 120,
                    height: 80,
                    borderRadius: 1,
                    objectFit: "cover",
                  }}
                />
                <Typography
                  variant="subtitle1"
                  component="div"
                  sx={{
                    fontWeight: "bold",
                    fontSize: "1.05rem",
                    lineHeight: 1.3,
                    color: "#333", // Slightly softer than pure black for better readability
                  }}
                >
                  'This is something we can do' — Why 40+ women showed up to
                  wave signs on busy Overland Park street
                </Typography>
              </Box>
            </Box>
          </Box>
        </Paper>
        <DisclaimerBanner publication="Johnson County Post" />
      </Box>
    </ThemeProvider>
  );
};

export default JocoDemo;
