import * as React from "react";
import Box from "@mui/material/Box";
import { Typography } from "@mui/material";
import JobTag from "./JobTag";
import ActionButton from "./ActionButton";
import Divider from "@mui/material/Divider";
import Stack from "@mui/material/Stack";

export default function JobCard({ job }) {
  return (
    <Box
      sx={{
        width: 375,
        height: 300,
        borderRadius: "5px",
        backgroundColor: "action.disabledBackground",
        p: 2,
        display: "flex",
        flexDirection: "column",
        flexWrap: "wrap",
        alignContent: "flex-start",
        position: "relative",
      }}
    >
      <Typography variant="h6" textAlign="center">
        {job.title}
      </Typography>
      <Divider />
      <Stack direction="row" spacing="1" sx={{ mt: "10px" }}>
        {job.skills.slice(0, 4).map((skill, index) => (
          <JobTag skill={skill} key={index} />
        ))}
      </Stack>
      <Typography sx={{ mt: "20px" }}>{job.description}</Typography>
      <ActionButton></ActionButton>
    </Box>
  );
}
