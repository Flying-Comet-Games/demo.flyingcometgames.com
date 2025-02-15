import * as React from "react";
import PropTypes from "prop-types";
import Avatar from "@mui/material/Avatar";
import AvatarGroup from "@mui/material/AvatarGroup";
import Box from "@mui/material/Box";
import Card from "@mui/material/Card";
import CardContent from "@mui/material/CardContent";
import CardMedia from "@mui/material/CardMedia";
import Chip from "@mui/material/Chip";
import Grid from "@mui/material/Grid2";
import IconButton from "@mui/material/IconButton";
import Typography from "@mui/material/Typography";
import FormControl from "@mui/material/FormControl";
import InputAdornment from "@mui/material/InputAdornment";
import OutlinedInput from "@mui/material/OutlinedInput";
import { styled } from "@mui/material/styles";
import SearchRoundedIcon from "@mui/icons-material/SearchRounded";
import RssFeedRoundedIcon from "@mui/icons-material/RssFeedRounded";
import GameEmbed from "./GameEmbedded";
import { ContentCopy } from "@mui/icons-material";
import { Button, Link, Snackbar } from "@mui/material";

const cardData = [
  {
    img: "assets/blog/hodo-hodo.png",
    url: "https://www.linkedin.com/pulse/hodo-hodo-%25E3%2581%25BB%25E3%2581%25A9%25E3%2581%25BB%25E3%2581%25A9-japanese-concept-doing-just-enough-why-calli-fuchigami-82m4c/?trackingId=dB2b1JlsS3i%2BhANYGdDEdQ%3D%3D",
    tag: "Startups",
    date: "January 24, 2025",
    title:
      "Hodo-hodo ほどほど The Japanese concept of doing “just enough” and why it’s the key to startup success",
    description:
      "I first heard the term hodo-hodo ほどほど browsing McNally Jacksons’ in Williamsburg last year. Tokyo based graphic designer Tako Satoh authored a book titled Just Enough Design: Reflections on the Japanese Philosophy of Hodo-hodo. Enamored by the simple cover art and eager to learn a new phrase",
    authors: [{ name: "Calli Fuchigami", avatar: "/assets/avatars/calli.png" }],
  },
  {
    img: "https://picsum.photos/800/450?random=2",
    tag: "Product",
    date: "January 24, 2025",
    title: "Innovative product features that drive success",
    description:
      "Explore the key features of our latest product release that are helping businesses achieve their goals. From user-friendly interfaces to robust functionality, learn why our product stands out.",
    authors: [{ name: "Eden Ghirmai", avatar: "/assets/avatars/calli.png" }],
  },
  {
    img: "assets/blog/ai-mvps.webp",
    tag: "Engineering",
    url: "https://foundersdevdiary.substack.com/p/3-ai-prompts-i-use-help-write-my",
    date: "February 6, 2025",
    title: "3 AI prompts I use help write my MVPs",
    description: "ChatGPT prompts for building features",
    authors: [{ name: "Eden Ghirmai", avatar: "/assets/avatars/eden.png" }],
  },
  {
    img: "assets/blog/flyingcometgames.png",
    tag: "Company",
    date: "November 30, 2024",
    title: "Tech vets launch their own game ",
    description:
      "Take a look at our company's journey and the milestones we've achieved along the way. From humble beginnings to industry leader, discover our story of growth and success.",
    authors: [{ name: "Cindy Baker", avatar: "/static/images/avatar/3.jpg" }],
  },
  {
    img: "assets/blog/cycle-graph.jpg",
    tag: "Startups",
    url: "https://foundersdevdiary.substack.com/p/zero-to-one",
    date: "January 9, 2025",
    title: "Zero to One",
    description: "What it's like being at Zero after 1 year",
    authors: [{ name: "Eden Ghirmai", avatar: "/assets/avatars/eden.png" }],
  },
  {
    img: "assets/blog/flyingcometgames.png",
    tag: "Company",
    date: "November 30, 2024",
    url: "https://www.geekwire.com/2024/tech-vets-launch-their-own-game-company-and-create-wordle-style-puzzle-with-a-seattle-focus/",
    title:
      "Tech vets launch their own game company and create ‘Wordle’-style puzzle with a Seattle focus",
    description:
      "Article about Flying Comet Games in GeekWire written by Kurt Schlosser",
    authors: [
      {
        name: "Kurt Schlosser",
        avatar:
          "https://cdn.geekwire.com/wp-content/uploads/2016/01/kurt-schlosser-300x300.jpg",
      },
    ],
  },
];

const SyledCard = styled(Card)(({ theme }) => ({
  display: "flex",
  flexDirection: "column",
  padding: 0,
  height: "100%",
  backgroundColor: (theme.vars || theme).palette.background.paper,
  "&:hover": {
    backgroundColor: "transparent",
    cursor: "pointer",
  },
  "&:focus-visible": {
    outline: "3px solid",
    outlineColor: "hsla(210, 98%, 48%, 0.5)",
    outlineOffset: "2px",
  },
}));

const SyledCardContent = styled(CardContent)({
  display: "flex",
  flexDirection: "column",
  gap: 4,
  // padding: 16,
  flexGrow: 1,
  "&:last-child": {
    paddingBottom: 16,
  },
});

const StyledTypography = styled(Typography)({
  display: "-webkit-box",
  WebkitBoxOrient: "vertical",
  WebkitLineClamp: 2,
  overflow: "hidden",
  textOverflow: "ellipsis",
});

function Author({ authors, date }) {
  return (
    <Box
      sx={{
        display: "flex",
        flexDirection: "row",
        gap: 2,
        alignItems: "center",
        justifyContent: "space-between",
        padding: "16px",
      }}
    >
      <Box
        sx={{
          display: "flex",
          flexDirection: "row",
          gap: 1,
          alignItems: "center",
        }}
      >
        <AvatarGroup max={3}>
          {authors.map((author, index) => (
            <Avatar
              key={index}
              alt={author.name}
              src={author.avatar}
              sx={{ width: 24, height: 24 }}
            />
          ))}
        </AvatarGroup>
        <Typography variant="caption">
          {authors.map((author) => author.name).join(", ")}
        </Typography>
      </Box>
      <Typography variant="caption">{date}</Typography>
    </Box>
  );
}

Author.propTypes = {
  authors: PropTypes.arrayOf(
    PropTypes.shape({
      avatar: PropTypes.string.isRequired,
      name: PropTypes.string.isRequired,
    })
  ).isRequired,
};

const EmbedCode = () => {
  const [open, setOpen] = React.useState(false);
  const iframeCode = `<iframe \n  src="https://demo.flyingcometgames.com/seattle-wordy-embed.html" \n  width="100%"\n  height="700px"\n  frameborder="0"\n  title="Wordy Verse Game"\n></iframe>`;

  const handleCopy = () => {
    navigator.clipboard.writeText(iframeCode);
    setOpen(true);
  };

  return (
    <Box
      sx={{
        p: 3,
        backgroundColor: "#f9f9f9",
        borderRadius: 2,
        boxShadow: 1,
        mb: 5,
      }}
    >
      <Typography variant="h5" gutterBottom>
        Test Wordy Verse on Your Site!
      </Typography>
      <Typography variant="body1" gutterBottom>
        Copy the code below and paste it into your website to embed our demo
        game.
      </Typography>
      <Box
        sx={{
          display: "flex",
          alignItems: "center",
          backgroundColor: "#fff",
          borderRadius: 1,
          border: "1px solid #ddd",
          p: 2,
          overflowX: "auto",
          mt: 2,
        }}
      >
        <Typography
          component="pre"
          sx={{
            flexGrow: 1,
            fontFamily: "monospace",
            fontSize: "0.875rem",
            whiteSpace: "pre-wrap",
            m: 0,
          }}
        >
          {iframeCode}
        </Typography>
        <Button
          onClick={handleCopy}
          startIcon={<ContentCopy />}
          variant="contained"
          color="primary"
          sx={{ ml: 2 }}
        >
          Copy Code
        </Button>
      </Box>
      <Snackbar
        open={open}
        autoHideDuration={3000}
        onClose={() => setOpen(false)}
        message="Embed code copied to clipboard!"
      />
    </Box>
  );
};

export default function MainContent() {
  const [focusedCardIndex, setFocusedCardIndex] = React.useState(null);

  const handleFocus = (index) => {
    setFocusedCardIndex(index);
  };

  const handleBlur = () => {
    setFocusedCardIndex(null);
  };

  const handleClick = () => {
    console.info("You clicked the filter chip.");
  };

  return (
    <Box sx={{ display: "flex", flexDirection: "column", gap: 4 }}>
      <div>
        <Typography
          variant="h1"
          textAlign={"center"}
          gutterBottom
          fontSize={{ xs: "3rem", sm: "6rem" }}
          style={{ fontFamily: `'UnifrakturMaguntia', serif` }}
        >
          Comet Chronicles
        </Typography>
      </div>

      <EmbedCode />
      <Grid container spacing={2} columns={12}>
        <Grid size={{ xs: 12, md: 6 }}>
          <Link
            href={cardData[0].url}
            sx={{ textDecoration: "none" }}
            passHref
            legacyBehavior
          >
            <SyledCard
              variant="outlined"
              onFocus={() => handleFocus(0)}
              onBlur={handleBlur}
              tabIndex={0}
              className={focusedCardIndex === 0 ? "Mui-focused" : ""}
            >
              <CardMedia
                component="img"
                alt="green iguana"
                image={cardData[0].img}
                sx={{
                  aspectRatio: "16 / 9",
                  borderBottom: "1px solid",
                  borderColor: "divider",
                }}
              />
              <SyledCardContent>
                <Typography gutterBottom variant="caption" component="div">
                  {cardData[0].tag}
                </Typography>
                <Typography gutterBottom variant="h6" component="div">
                  {cardData[0].title}
                </Typography>
                <StyledTypography
                  variant="body2"
                  color="text.secondary"
                  gutterBottom
                >
                  {cardData[0].description}
                </StyledTypography>
              </SyledCardContent>
              <Author authors={cardData[0].authors} date={cardData[0].date} />
            </SyledCard>
          </Link>
        </Grid>
        <Grid size={{ xs: 12, md: 6 }}>
          <GameEmbed />
        </Grid>
        <Grid size={{ xs: 12, md: 4 }}>
          <Link href={cardData[2].url} sx={{ textDecoration: "none" }}>
            <SyledCard
              variant="outlined"
              onFocus={() => handleFocus(2)}
              onBlur={handleBlur}
              tabIndex={0}
              className={focusedCardIndex === 2 ? "Mui-focused" : ""}
              sx={{ height: "100%" }}
            >
              <CardMedia
                component="img"
                alt="green iguana"
                image={cardData[2].img}
                sx={{
                  maxHeight: "300px",
                  height: { sm: "auto" },
                }}
              />
              <SyledCardContent>
                <Typography gutterBottom variant="caption" component="div">
                  {cardData[2].tag}
                </Typography>
                <Typography gutterBottom variant="h6" component="div">
                  {cardData[2].title}
                </Typography>
                <StyledTypography
                  variant="body2"
                  color="text.secondary"
                  gutterBottom
                >
                  {cardData[2].description}
                </StyledTypography>
              </SyledCardContent>
              <Author authors={cardData[2].authors} date={cardData[2].date} />
            </SyledCard>
          </Link>
        </Grid>
        <Grid size={{ xs: 12, md: 4 }}>
          <Link href={cardData[4].url} sx={{ textDecoration: "none" }}>
            <SyledCard
              variant="outlined"
              onFocus={() => handleFocus(4)}
              onBlur={handleBlur}
              tabIndex={0}
              className={focusedCardIndex === 4 ? "Mui-focused" : ""}
              sx={{ height: "100%" }}
            >
              <CardMedia
                component="img"
                alt="green iguana"
                image={cardData[4].img}
                sx={{
                  minHeight: "300px",
                  height: { sm: "auto" },
                }}
              />
              <SyledCardContent
                sx={{
                  display: "flex",
                  flexDirection: "column",
                  justifyContent: "space-between",
                  height: "100%",
                }}
              >
                <div>
                  <Typography gutterBottom variant="caption" component="div">
                    {cardData[4].tag}
                  </Typography>
                  <Typography gutterBottom variant="h6" component="div">
                    {cardData[4].title}
                  </Typography>
                  <StyledTypography
                    variant="body2"
                    color="text.secondary"
                    gutterBottom
                  >
                    {cardData[4].description}
                  </StyledTypography>
                </div>
              </SyledCardContent>
              <Author authors={cardData[4].authors} date={cardData[4].date} />
            </SyledCard>
          </Link>
        </Grid>
        <Grid size={{ xs: 12, md: 4 }}>
          <Link href={cardData[5].url} sx={{ textDecoration: "none" }}>
            <SyledCard
              variant="outlined"
              onFocus={() => handleFocus(5)}
              onBlur={handleBlur}
              tabIndex={0}
              className={focusedCardIndex === 5 ? "Mui-focused" : ""}
              sx={{ height: "100%" }}
            >
              <CardMedia
                component="img"
                alt="green iguana"
                image={cardData[5].img}
                sx={{
                  minHeight: "300px",
                  height: { sm: "auto"},
                }}
              />
              <SyledCardContent>
                <Typography gutterBottom variant="caption" component="div">
                  {cardData[5].tag}
                </Typography>
                <Typography gutterBottom variant="h6" component="div">
                  {cardData[5].title}
                </Typography>
                <StyledTypography
                  variant="body2"
                  color="text.secondary"
                  gutterBottom
                >
                  {cardData[5].description}
                </StyledTypography>
              </SyledCardContent>
              <Author authors={cardData[5].authors} />
            </SyledCard>
          </Link>
        </Grid>
      </Grid>
    </Box>
  );
}
