import { useState } from "react";
import { Box, Container, Typography, Link, IconButton } from "@mui/material";
import CloseIcon from "@mui/icons-material/Close";

export default function DisclaimerBanner({publication}) {
  const [visible, setVisible] = useState(true);

  if (!visible) return null;

  return (
    <Box
      sx={{
        bgcolor: "#ffeb3b",
        py: 1.5,
        textAlign: "center",
        borderBottom: 1,
        borderColor: "divider",
        position: "fixed",
        bottom: 0,
        width: "100%",
        display: visible ? "block" : "none",
      }}
    >
      <Container maxWidth="lg" sx={{ position: "relative" }}>
        <Typography variant="body1" sx={{ fontWeight: 600 }}>
          This is a demo site for showing game functionality. This is NOT
          affiliated with {publication}
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
        <IconButton
          onClick={() => setVisible(false)}
          sx={{
            position: "absolute",
            top: "50%",
            right: 8,
            transform: "translateY(-50%)",
          }}
        >
          <CloseIcon />
        </IconButton>
      </Container>
    </Box>
  );
}
