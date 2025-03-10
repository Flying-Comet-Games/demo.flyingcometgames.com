import React, { useState } from "react";
import { ThemeProvider, useTheme } from "@mui/material/styles";
import { useMediaQuery } from "@mui/material";
import CssBaseline from "@mui/material/CssBaseline";
import Box from "@mui/material/Box";
import Container from "@mui/material/Container";
import Typography from "@mui/material/Typography";
import Button from "@mui/material/Button";
import { createTheme } from "@mui/material/styles";
import DisclaimerBanner from "../../components/DisclaimerBanner";
import {
  IconButton,
  Menu,
  MenuItem,
  Link,
  Drawer,
  List,
  ListItem,
  ListItemText,
  Divider,
} from "@mui/material";
import {
  Search,
  Facebook,
  Twitter,
  Instagram,
  Menu as MenuIcon,
} from "lucide-react";

// Create a custom theme based on The Colorado Sun styling
const theme = createTheme({
  palette: {
    primary: {
      main: "#D34B2D", // Red from the Colorado Sun
    },
    secondary: {
      main: "#F3A712", // Gold/Sun color
    },
    background: {
      default: "#fff",
    },
  },
  typography: {
    fontFamily: '"Georgia", "Times New Roman", serif',
    h1: {
      fontFamily: '"Tiempos Headline", Georgia, serif',
    },
    h2: {
      fontFamily: '"Tiempos Headline", Georgia, serif',
    },
    h3: {
      fontFamily: '"Tiempos Headline", Georgia, serif',
    },
    h4: {
      fontFamily: '"Tiempos Headline", Georgia, serif',
    },
    h5: {
      fontFamily: '"Tiempos Headline", Georgia, serif',
    },
    h6: {
      fontFamily: '"Tiempos Headline", Georgia, serif',
    },
  },
  breakpoints: {
    values: {
      xs: 0,
      sm: 600,
      md: 900,
      lg: 1200,
      xl: 1536,
    },
  },
});

const navigationItems = [
  { name: "NEWS", link: "#" },
  { name: "EVENTS", link: "#" },
  { name: "NEWSLETTERS", link: "#" },
  { name: "PODCAST", link: "#" },
  { name: "APP", link: "#" },
  { name: "COLORADO'S BEST", link: "#" },
  { name: "ABOUT US", link: "#" },
  { name: "DONATE", link: "#", isHighlighted: true },
];

const ColoradoSunDemo = () => {
  const [drawerOpen, setDrawerOpen] = useState(false);
  const theme = useTheme();
  const isMobile = useMediaQuery(theme.breakpoints.down("md"));
  const isSmall = useMediaQuery(theme.breakpoints.down("sm"));

  const toggleDrawer = () => {
    setDrawerOpen(!drawerOpen);
  };

  return (
    <ThemeProvider theme={theme}>
      <CssBaseline enableColorScheme />
      <Box sx={{ minHeight: "100vh", bgcolor: "background.default" }}>
        {/* Top navigation bar with social media and login */}
        <Box
          sx={{
            bgcolor: "#fff",
            color: "#000",
            px: { xs: 1, sm: 2, md: 4 },
            py: 1,
            display: "flex",
            justifyContent: "space-between",
            alignItems: "center",
            borderBottom: "1px solid #eee",
            flexWrap: "wrap",
          }}
        >
          {/* Social icons - hidden on very small screens */}
          <Box
            sx={{
              display: { xs: "none", sm: "flex" },
              alignItems: "center",
              gap: 2,
              order: { xs: 3, md: 1 },
              mt: { xs: 1, md: 0 },
              width: { xs: "100%", md: "auto" },
              justifyContent: { xs: "center", md: "flex-start" },
            }}
          >
            <Facebook size={isMobile ? 16 : 20} />
            <Twitter size={isMobile ? 16 : 20} />
            <Instagram size={isMobile ? 16 : 20} />
          </Box>

          {/* Logo - centered on mobile */}
          <Box
            sx={{
              display: "flex",
              alignItems: "center",
              justifyContent: { xs: "center", md: "flex-start" },
              order: { xs: 1, md: 2 },
              flexGrow: { xs: 1, md: 0 },
              ml: { xs: 0, md: 2 },
            }}
          >
            <Box
              component="img"
              src="https://i0.wp.com/newspack-coloradosun.s3.amazonaws.com/wp-content/uploads/2024/11/cropped-black-text-transparent-bg.png?fit=800%2C200&quality=80&ssl=1"
              alt="The Colorado Sun"
              mx="auto"
              sx={{
                height: { xs: "40px", sm: "50px", md: "60px" },
              }}
            />
          </Box>

          {/* Actions - adaptive for mobile */}
          <Box
            sx={{
              display: "flex",
              alignItems: "center",
              gap: { xs: 1, md: 2 },
              order: { xs: 2, md: 3 },
              justifyContent: { xs: "flex-end", md: "flex-start" },
              flexGrow: { xs: 1, md: 0 },
            }}
          >
            {isMobile ? (
              <>
                <IconButton onClick={toggleDrawer} size="small">
                  <MenuIcon size={24} />
                </IconButton>
                <Search size={20} />
              </>
            ) : (
              <>
                <Button
                  variant="contained"
                  sx={{
                    bgcolor: "#D34B2D",
                    color: "white",
                    borderRadius: 1,
                    "&:hover": {
                      bgcolor: "#B33F26",
                    },
                    fontWeight: "bold",
                    px: { xs: 1, md: 2 },
                    fontSize: { xs: "0.75rem", md: "0.875rem" },
                  }}
                >
                  Become a member
                </Button>
                <Typography
                  variant="body2"
                  sx={{ display: { xs: "none", sm: "block" } }}
                >
                  Login
                </Typography>
                <Search size={20} />
              </>
            )}
          </Box>
        </Box>

        {/* Mobile drawer navigation */}
        <Drawer anchor="right" open={drawerOpen} onClose={toggleDrawer}>
          <Box sx={{ width: 250 }} role="presentation" onClick={toggleDrawer}>
            <List>
              <ListItem>
                <ListItemText primary="Login" />
              </ListItem>
              <ListItem>
                <Button
                  fullWidth
                  variant="contained"
                  sx={{
                    bgcolor: "#D34B2D",
                    color: "white",
                    borderRadius: 1,
                    "&:hover": {
                      bgcolor: "#B33F26",
                    },
                    fontWeight: "bold",
                  }}
                >
                  Become a member
                </Button>
              </ListItem>
              <Divider sx={{ my: 1 }} />
              {navigationItems.map((item) => (
                <ListItem
                  key={item.name}
                  component={Link}
                  href={item.link}
                  sx={{
                    color: item.isHighlighted ? "#D34B2D" : "inherit",
                    fontWeight: "medium",
                  }}
                >
                  <ListItemText primary={item.name} />
                </ListItem>
              ))}
            </List>
          </Box>
        </Drawer>

        {/* Desktop/Tablet navigation menu - hidden on mobile */}
        {!isMobile && (
          <Box
            sx={{
              display: "flex",
              justifyContent: "center",
              py: 1,
              borderBottom: "1px solid #eee",
              overflow: "auto",
            }}
          >
            <Box
              sx={{
                display: "flex",
                flexWrap: "wrap",
                px: 2,
                justifyContent: "center",
                gap: { xs: 1.5, sm: 2, md: 3 },
              }}
            >
              {navigationItems.map((item) => (
                <Typography
                  key={item.name}
                  variant="body2"
                  component={Link}
                  href={item.link}
                  sx={{
                    fontWeight: "medium",
                    color: item.isHighlighted ? "#D34B2D" : "inherit",
                    textDecoration: "none",
                    fontSize: { xs: "0.8rem", sm: "0.875rem", md: "1rem" },
                    whiteSpace: "nowrap",
                  }}
                >
                  {item.name}
                </Typography>
              ))}
            </Box>
          </Box>
        )}

        {/* Editor's Picks banner */}
        <Box
          sx={{
            p: { xs: 0.5, sm: 1 },
            textAlign: "center",
            borderBottom: "1px solid #eee",
            fontSize: { xs: "0.75rem", md: "0.875rem" },
          }}
        >
          <Typography variant="body2" sx={{ fontSize: "inherit" }}>
            <strong>Editor's Picks:</strong> Cost of Trump tariffs | Anti-wolf
            group's map | SBA leaving Denver
          </Typography>
        </Box>

        {/* Game Container */}
        <Container
          maxWidth="lg"
          sx={{ mt: { xs: 2, md: 4 }, px: { xs: 1, md: 0 } }}
        >
          <Box sx={{ maxWidth: 600, mx: "auto" }}>
            <Box
              sx={{
                width: "100%",
                height: "780px",
                bgcolor: "#D34B2D", // The red area where the game will be embedded
                overflow: "hidden",
              }}
            >
              <Box
                component="iframe"
                src="https://flyingcometgames.com/colorado-sun"
                sx={{
                  width: "100%",
                  height: "100%",
                  border: "none",
                }}
                title="Colorado Sun Wordy"
                allow="clipboard-read; clipboard-write"
                allowFullScreen={true}
                sandbox="allow-same-origin allow-scripts allow-popups allow-forms"
              />
            </Box>
          </Box>
        </Container>

        <DisclaimerBanner publication="The Colorado Sun" />
      </Box>
    </ThemeProvider>
  );
};

export default ColoradoSunDemo;
