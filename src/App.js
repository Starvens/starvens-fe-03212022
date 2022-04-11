import logo from "./logo.svg";
import "./App.css";
import NavBar from "./components/LandingPage/NavBar";
import { ThemeProvider, createTheme } from "@mui/material/styles";
import LandingPagePPT1 from "./components/LandingPage/LandingPagePPT1";
import PdfConversionImage from "./components/LandingPage/PdfConversionImage";
import ConversionLinks from "./components/LandingPage/ConversionLinks";
import FirstPage from "./components/LandingPage/FirstPage";
import { ThirdPage } from "./components/LandingPage/ThirdPage";
import FourthPage from './components/LandingPage/FourthPage'
import { BrowserRouter, Route, Routes } from "react-router-dom";
import LandingPage from "./components/LandingPage/LandingPage";
import { Register } from "./components/LandingPage/Register";
import { Login } from "./components/LandingPage/Login";
import UserFileUpload from "./components/user-file-upload/UserFileUpload";
import UserLeftNav from "./components/user-file-upload/UserLeftNav";
import GenerateQRCodeTemp from "./components/file-conversion-inprogress/GenerateQRCodeTemp";

function App() {
  const theme = createTheme({
    palette: {
      primary: {
        main: "#355E3B",
        light: '#C1E1C1CC '
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
      <BrowserRouter>
        <Routes>
          <Route path="/" element={<LandingPage />}> </Route>
          <Route path="register" element={<Register></Register>}></Route>
          <Route path="login" element={<Login></Login>}></Route>
          <Route path="/user" element={<UserFileUpload></UserFileUpload>}></Route>
          <Route path="/user2" element={<UserLeftNav />}></Route>
          <Route path="/qrcode" element={<GenerateQRCodeTemp />}></Route>

        </Routes>
        {/* <FirstPage></FirstPage>
      <ConversionLinks></ConversionLinks>
      <ThirdPage></ThirdPage>
      <FourthPage></FourthPage> */}
      </BrowserRouter>
    </ThemeProvider>
  );
}

export default App;
