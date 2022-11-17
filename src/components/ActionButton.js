import * as React from "react";
import Button from "@mui/material/Button";
import Stack from "@mui/material/Stack";

export default function ActionButton() {
  return (
    <Stack alignSelf="center" sx={{ marginTop: "auto" }}>
      <Button
        variant="contained"
        sx={{ backgroundColor: "#ff9800", color: "#000" }}
      >
        Learn More
      </Button>
    </Stack>
  );
}
