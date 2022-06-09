import React from "react";
import { Box, Button, Paper, Typography } from "@mui/material";
import { useLocation } from "react-router-dom";

const countWords = (string: string): number => {
  const stringToArray = string.split(" ");
  const filterCount = stringToArray.filter((word: string) => word !== "")
    .length;
  return filterCount;
};

const isPlural = (val: number): boolean => {
  if (val === 1) return false;
  else return true;
};

export const StatisticsView = () => {
  const location = useLocation();

  const val = location.state as string;

  const words = countWords(val);
  const letters = val.length;

  const letterForm = isPlural(letters) ? "letters" : "letter";
  const wordForm = isPlural(words) ? "words" : "word";

  return (
    <Box
      sx={{
        display: "flex",
        justifyContent: "center",
        alignItems: "center",
        width: "100vw",
        height: "100vh",
      }}
    >
      <Paper elevation={0}>
        <Typography>
          Your plans consists of {words} {wordForm} ({letters} {letterForm}).
        </Typography>
        <Box
          component="div"
          width="100%"
          marginTop={2}
          display="flex"
          justifyContent="flex-end"
        >
          <Button href="/" variant="contained">
            More Plans?
          </Button>
        </Box>
      </Paper>
    </Box>
  );
};
