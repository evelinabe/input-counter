import React, { useEffect, useState } from "react";
import { Box, Button, Paper, Skeleton, Typography } from "@mui/material";
import { useLocation } from "react-router-dom";
import { analyzeText } from "../analysis";

interface AnalyticsResponse {
  numWords: number;
  numLetters: number;
}

const isPlural = (val: number): boolean => {
  if (val === 1) return false;
  else return true;
};

export const StatisticsView = () => {
  const [data, setData] = useState<AnalyticsResponse>();

  const location = useLocation();

  const input = location.state as string;

  const getData = async (input: string): Promise<void> => {
    let response = await analyzeText(input);
    setData(response);
  };

  useEffect(() => {
    getData(input);
  }, [input]);

  const renderStatistics = (props: AnalyticsResponse) => {
    const wordForm = isPlural(props.numWords) ? "words" : "word";
    const letterForm = isPlural(props.numLetters) ? "letters" : "letter";
    return (
      <Typography>
        Your plans consists of {props.numWords} {wordForm}({props.numLetters}{" "}
        {letterForm})
      </Typography>
    );
  };

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
        {data ? (
          renderStatistics(data)
        ) : (
          <Skeleton
            variant="rectangular"
            width={280}
            height={25}
            animation="wave"
          ></Skeleton>
        )}

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
