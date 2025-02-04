import React from "react";
import { ThemeProvider } from "@mui/material/styles";
import CssBaseline from "@mui/material/CssBaseline";
import Container from "@mui/material/Container";
import Box from "@mui/material/Box";
import Typography from "@mui/material/Typography";
import Grid from "@mui/material/Grid";
import Paper from "@mui/material/Paper";
import IconButton from "@mui/material/IconButton";
import Button from "@mui/material/Button";
import AppBar from "@mui/material/AppBar";
import Toolbar from "@mui/material/Toolbar";
import { Menu, Search } from "lucide-react";
import seattleTimesTheme from "./seattleTimesTheme";
import { Link } from "@mui/material";

const SeattleTimesDemo = () => {
  const games = [
    {
      id: 0,
      title: "The Daily Wordy",
      description: "Guess the 5 letter word of the day",
      image: "assets/seattle-wordy-logo.png",
    },
    {
      id: 1,
      title: "News Quiz",
      description: "Test your knowledge of this week's news",
      image:
        "https://images.seattletimes.com/wp-content/uploads/2025/01/A3-1.png",
    },
    {
      id: 2,
      title: "Jumble",
      description: "Daily word puzzle game",
      image:
        "https://images.seattletimes.com/wp-content/uploads/2017/01/games-jiumble.jpg?d=1242x796",
    },
    {
      id: 3,
      title: "Sudoku",
      description: "Number placement puzzle",
      image:
        "https://images.seattletimes.com/wp-content/uploads/2017/01/games-sudoku.jpg?d=1242x796",
    },
    {
      id: 4,
      title: "Word Roundup",
      description: "Word search puzzle",
      image:
        "https://images.seattletimes.com/wp-content/uploads/2017/01/games-wordroundup.jpg?d=1242x796",
    },
    {
      id: 5,
      title: "Jigsaw Puzzle",
      description: "Daily picture puzzle",
      image:
        "https://images.seattletimes.com/wp-content/uploads/2023/05/daily-jigsaw_640x410.png",
    },
    {
      id: 6,
      title: "New York Times Puzzle",
      description: "Crossword puzzle",
      image:
        "https://images.seattletimes.com/wp-content/uploads/2017/01/games-nyt.jpg?d=1242x796",
    },
    {
      id: 7,
      title: "Universal Crossword",
      description: "Daily crossword challenge",
      image:
        "https://images.seattletimes.com/wp-content/uploads/2017/01/games-universalxword.jpg?d=1242x796",
    },
  ];

  return (
    <ThemeProvider theme={seattleTimesTheme}>
      <CssBaseline enableColorScheme />
      <Box sx={{ minHeight: "100vh", bgcolor: "background.default" }}>
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
                minHeight: { xs: 56, sm: 64 },
                px: { xs: 1, sm: 2 },
              }}
            >
              <Box sx={{ display: "flex", alignItems: "center" }}>
                <IconButton
                  edge="start"
                  color="inherit"
                  aria-label="menu"
                  sx={{ mr: 2 }}
                >
                  <Menu />
                </IconButton>
                <Box
                  component="img"
                  src={"assets/seattle-times-logo.svg"}
                  sx={{
                    width: "100%",
                    height: 20,
                    objectFit: "cover",
                  }}
                />
              </Box>
            </Toolbar>

            {/* Disclaimer Banner */}
            <Box
              sx={{
                bgcolor: "#ffeb3b",
                py: 1.5,
                textAlign: "center",
                borderBottom: 1,
                borderColor: "divider",
              }}
            >
              <Container maxWidth="lg">
                <Typography variant="body1" sx={{ fontWeight: 600 }}>
                  This is a demo site for showing game functionality. This is
                  NOT affiliated with The Seattle Times.
                </Typography>
                <Typography variant="body2">
                  <Link
                    href="mailto:calli@flyingcometgames.com"
                    underline="hover"
                    component="a"
                    color="inherit"
                    sx={{
                      typography: "subtitle2",
                      textDecoration: "none",
                      "&:hover": {
                        textDecoration: "underline",
                      },
                    }}
                  >
                    Contact Us
                  </Link>
                </Typography>
              </Container>
            </Box>

            {/* Main Navigation */}
            <Box sx={{ py: 1, borderTop: 1, borderColor: "divider" }}>
              <Box
                sx={{
                  justifyContent: "center",
                  display: "flex",
                  gap: 3,
                  overflow: "auto",
                }}
              >
                {[
                  "LOCAL",
                  "BIZ",
                  "NATION",
                  "SPORTS",
                  "ENTERTAINMENT",
                  "LIFE",
                  "HOMES",
                  "OPINION",
                  "THE TICKET",
                  "JOBS",
                  "EXPLORE",
                ].map((item) => (
                  <Typography
                    key={item}
                    variant="button"
                    sx={{ whiteSpace: "nowrap", cursor: "pointer" }}
                  >
                    {item}
                  </Typography>
                ))}
              </Box>
            </Box>

            {/* Sub Navigation */}
            <Box sx={{ py: 1, borderTop: 1, borderColor: "divider" }}>
              <Box sx={{ justifyContent: "center", display: "flex", gap: 3 }}>
                <Typography variant="button">Comics</Typography>
                <Typography variant="button" sx={{ fontWeight: "bold" }}>
                  Games & Puzzles
                </Typography>
                <Typography variant="button">Horoscopes</Typography>
              </Box>
            </Box>
          </Container>
        </AppBar>

        <Container maxWidth="lg" component="main" sx={{ pt: 4, pb: 8 }}>
          {/* Header */}
          <Box sx={{ mb: 6 }}>
            <Typography
              variant="h3"
              component="h1"
              gutterBottom
              sx={{ fontWeight: "bold" }}
            >
              Popular Games
            </Typography>
          </Box>

          {/* Games Grid */}
          <Grid container spacing={3} sx={{ mb: 8 }}>
            {games.map((game) => (
              <Grid item xs={12} sm={6} md={4} key={game.id}>
                <Paper
                  elevation={0}
                  sx={{
                    border: 1,
                    borderColor: "divider",
                    transition: "box-shadow 0.3s",
                    "&:hover": {
                      boxShadow: 3,
                    },
                  }}
                >
                  <Box
                    component="img"
                    src={game.image}
                    alt={game.title}
                    sx={{
                      width: "100%",
                      height: 240,
                      objectFit: "cover",
                    }}
                  />
                  <Box sx={{ p: 2 }}>
                    <Typography variant="h6" gutterBottom>
                      {game.title}
                    </Typography>
                    <Typography variant="body2" color="text.secondary">
                      {game.description}
                    </Typography>
                  </Box>
                </Paper>
              </Grid>
            ))}
          </Grid>
        </Container>

        {/* Footer */}
        <Box sx={{ bgcolor: "grey.100", py: 6 }}>
          <Container maxWidth="lg">
            <Grid container spacing={4}>
              <Grid item xs={6} md={3}>
                <Typography
                  variant="overline"
                  display="block"
                  gutterBottom
                  sx={{ fontWeight: "bold" }}
                >
                  Company
                </Typography>
                <Box component="ul" sx={{ listStyle: "none", p: 0, m: 0 }}>
                  {[
                    "About",
                    "Contact",
                    "Careers",
                    "Permissions",
                    "Newsroom Staff",
                  ].map((item) => (
                    <Box component="li" key={item} sx={{ mb: 1 }}>
                      <Typography
                        variant="body2"
                        color="text.secondary"
                        sx={{ cursor: "pointer" }}
                      >
                        {item}
                      </Typography>
                    </Box>
                  ))}
                </Box>
              </Grid>
              <Grid item xs={6} md={3}>
                <Typography
                  variant="overline"
                  display="block"
                  gutterBottom
                  sx={{ fontWeight: "bold" }}
                >
                  Community
                </Typography>
                <Box component="ul" sx={{ listStyle: "none", p: 0, m: 0 }}>
                  {[
                    "Newspapers in Education",
                    "Fund for Those in Need",
                    "Investigative Journalism Fund",
                  ].map((item) => (
                    <Box component="li" key={item} sx={{ mb: 1 }}>
                      <Typography
                        variant="body2"
                        color="text.secondary"
                        sx={{ cursor: "pointer" }}
                      >
                        {item}
                      </Typography>
                    </Box>
                  ))}
                </Box>
              </Grid>
            </Grid>
          </Container>
        </Box>
      </Box>
    </ThemeProvider>
  );
};

export default SeattleTimesDemo;
