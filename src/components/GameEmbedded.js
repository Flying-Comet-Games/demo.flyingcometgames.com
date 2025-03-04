import React from "react";
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

const StyledIframeContainer = styled(Box)(({ theme }) => ({
  position: "relative",
  width: "100%",
  borderBottom: "1px solid rgba(0, 0, 0, 0.12)",
  height: "720px", // default for md and above
  [theme.breakpoints.down("sm")]: {
    height: "760px", // adjust height for small screens
  },
}));

const GameEmbed = () => {
  return (
    <StyledGameCard variant="outlined">
      <StyledIframeContainer>
        <iframe
          src="https://flyingcometgames.com/fcg/wordy?id=jUwsvwnT8CJXRz9CkYoFJt"
          style={{
            position: "absolute",
            top: 0,
            left: 0,
            width: "100%",
            height: "760px",
            border: "none",
          }}
          title="Seattle Wordy Game"
        />
      </StyledIframeContainer>
    </StyledGameCard>
  );
};

export default GameEmbed;
