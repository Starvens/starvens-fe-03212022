import logo from "./logo.svg";
import "./App.css";
import NavBar from "./components/NavBar";
import {ThemeProvider, createTheme } from "@mui/material/styles";
import LandingPagePPT1 from "./components/LandingPagePPT1";
import PdfConversionImage from "./components/PdfConversionImage";
import ConversionLinks from "./components/ConversionLinks";
import FirstPage from "./components/FirstPage";
import { ThirdPage } from "./components/ThirdPage";
import FourthPage from './components/FourthPage'

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
      {/* <NavBar></NavBar>
      <LandingPagePPT1></LandingPagePPT1>
      <PdfConversionImage></PdfConversionImage> */}
      <FirstPage></FirstPage>
      <ConversionLinks></ConversionLinks>
      <ThirdPage></ThirdPage>
      <FourthPage></FourthPage>
    </ThemeProvider>
  );
}

export default App;
