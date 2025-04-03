import React, { useEffect, useRef } from "react";
import { styled } from "@mui/material/styles";
import Card from "@mui/material/Card";
import CardContent from "@mui/material/CardContent";
import Typography from "@mui/material/Typography";
import Box from "@mui/material/Box";

const StyledGameCard = styled(Card)(({ theme }) => ({
  display: "flex",
  flexDirection: "column",
  height: "100%",
  backgroundColor: (theme.vars || theme).palette.background.paper,
  "&:hover": {
    backgroundColor: "transparent",
  },
  "&:focus-visible": {
    outline: "3px solid",
    outlineColor: "hsla(210, 98%, 48%, 0.5)",
    outlineOffset: "2px",
  },
}));

const StyledGameContainer = styled(Box)(({ theme }) => ({
  position: "relative",
  width: "100%",
  borderBottom: "1px solid rgba(0, 0, 0, 0.12)",
  [theme.breakpoints.down("sm")]: {
    height: "780px",
  },
}));

const GameEmbed = () => {
  const scriptLoaded = useRef(false);

  useEffect(() => {
    // Only load the script once
    if (scriptLoaded.current) return;

    const script = document.createElement("script");
    script.id = "fcg-embed";
    script.src = "https://flyingcometgames.com/fcg/js/embed.js";
    script.async = true;

    document.body.appendChild(script);

    scriptLoaded.current = true;

    // Cleanup function to remove the script when component unmounts
    return () => {
      if (document.getElementById("fcg-embed")) {
        document.body.removeChild(script);
      }
    };
  }, []);

  return (
    <StyledGameCard variant="outlined">
      <StyledGameContainer>
        <div
          className="fcg-game"
          data-gameType="wordy"
          data-publicationId="jUwsvwnT8CJXRz9CkYoFJt"
          data-height="740px"
        />
      </StyledGameContainer>
    </StyledGameCard>
  );
};

export default GameEmbed;
