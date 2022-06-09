import React from "react";
import { Typography, Icon } from "@mui/material";

export const InputTitle = () => {
  return (
    <Typography variant="h4" mb={2} justifyContent="center">
      Tell me, what are you up to this summer?
      <Icon
        sx={{ verticalAlign: "text-top" }}
        baseClassName="material-icons-two-tone"
        fontSize="inherit"
      >
        deck_outlined
      </Icon>
    </Typography>
  );
};
