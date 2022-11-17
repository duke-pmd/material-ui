import "./App.css";
import { React, useState } from "react";
import SearchAppBar from "./components/SearchAppBar";
import BasicPagination from "./components/BasicPagination";
import { createTheme, ThemeProvider } from "@mui/material/styles";
import CssBaseline from "@mui/material/CssBaseline";
import jobs from "./jobs.json";
import SimplePaper from "./components/SimplePaper";
import { Container } from "@mui/system";

const darkTheme = createTheme({
  palette: {
    mode: "dark",
  },
});

function App() {
  const [currentPage, setCurrentPage] = useState(1);

  return (
    <>
      <ThemeProvider theme={darkTheme}>
        <CssBaseline />
        <SearchAppBar />
        <Container maxWidth="xl">
          <SimplePaper jobs={jobs} currentPage={currentPage} />
          <BasicPagination
            jobs={jobs}
            setCurrentPage={setCurrentPage}
            currentPage={currentPage}
          />
        </Container>
      </ThemeProvider>
    </>
  );
}

export default App;
