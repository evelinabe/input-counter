import React, { ChangeEvent, FormEvent } from "react";
import { Box, TextField } from "@mui/material";
import { useNavigate } from "react-router-dom";

export interface InputProps {
  submitValue: string;
  setSubmitValue: (input: string) => void;
}

export const InputField = (props: InputProps) => {
  const { submitValue, setSubmitValue } = props;

  const navigate = useNavigate();

  const handleSubmit = (event: FormEvent): void => {
    event.preventDefault();
    navigate("/statistics", { state: submitValue });
  };

  const handleChange = (event: ChangeEvent<HTMLInputElement>): void => {
    setSubmitValue(event.target.value);
  };

  return (
    <Box component="form" onSubmit={handleSubmit}>
      <TextField
        variant="filled"
        sx={{ width: "100%" }}
        value={submitValue}
        onChange={handleChange}
        helperText="Press Enter to get your stats."
      />
    </Box>
  );
};
