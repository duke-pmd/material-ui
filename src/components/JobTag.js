import * as React from "react";
import Chip from "@mui/material/Chip";

export default function JobTag({ skill }) {
  return (
    <Chip label={skill} color="error" size="small" style={{ fontSize: 10 }} />
  );
}
