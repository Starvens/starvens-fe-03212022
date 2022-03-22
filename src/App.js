import logo from "./logo.svg";
import "./App.css";
import NavBar from "./components/NavBar";
import {ThemeProvider, createTheme } from "@mui/material/styles";
import LandingPagePPT1 from "./components/LandingPagePPT1";
import PdfConversionImage from "./components/PdfConversionImage";

function App() {
  const theme = createTheme({
    palette: {
      primary: {
        main: "#355E3B",
      },
      secondary: {
        main: "#E33E7F",
      },
    },
  });

  return (
    <ThemeProvider theme={theme}>
      <NavBar></NavBar>
      <LandingPagePPT1></LandingPagePPT1>
      <PdfConversionImage></PdfConversionImage>
    </ThemeProvider>
  );
}

export default App;
