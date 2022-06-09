import React, { useState } from "react";
import { Box, Paper } from "@mui/material";
import { InputTitle } from "../components/inputTitle";
import { InputField, InputProps } from "../components/inputField";

export const InputView = () => {
  const [value, setValue] = useState("");

  const submitValue = (input: string): void => {
    setValue(input);
  };

  const inputProps: InputProps = {
    submitValue: value,
    setSubmitValue: submitValue,
  };

  return (
    <Box
      sx={{
        height: "100vh",
        width: "100vw",
        display: "flex",
        justifyContent: "center",
        alignItems: "center",
      }}
    >
      <Paper elevation={0}>
        <InputTitle />
        <InputField {...inputProps} />
      </Paper>
    </Box>
  );
};
