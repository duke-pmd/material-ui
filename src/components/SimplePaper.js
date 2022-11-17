import * as React from "react";
import Box from "@mui/material/Box";
import JobCard from "./JobCard";

export default function SimplePaper({ jobs, currentPage }) {
  return (
    <Box
      sx={{
        display: "flex",
        flexWrap: "wrap",
        "& > :not(style)": {
          m: 3,
        },
      }}
    >
      {jobs
        .slice((currentPage - 1) * 5, (currentPage - 1) * 5 + 5)
        .map((job) => (
          <JobCard job={job} key={job.id} />
        ))}
    </Box>
  );
}
