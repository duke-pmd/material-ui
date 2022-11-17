import * as React from "react";
import Pagination from "@mui/material/Pagination";
import Stack from "@mui/material/Stack";

export default function BasicPagination({ jobs, setCurrentPage, currentPage }) {
  const handlePageChange = (page) => {
    setCurrentPage(page);
  };

  return (
    <Stack spacing={2}>
      <Pagination
        onChange={(e, page) => {
          handlePageChange(page);
        }}
        count={Math.ceil(Object.keys(jobs).length / 5)}
        color="primary"
        style={{
          display: "flex",
          justifyContent: "center",
        }}
      />
    </Stack>
  );
}
