import { createTheme, ThemeProvider } from "@mui/material/styles";
import { BrowserRouter, Route, Routes } from "react-router-dom";
import "./App.css";
import GenerateQRCodeTemp from "./components/file-conversion-inprogress/GenerateQRCodeTemp";
import LandingPage from "./components/LandingPage/LandingPage";
import { Login } from "./components/LandingPage/Login";
import { Register } from "./components/LandingPage/Register";
import UserFileUpload from "./components/user-file-upload/UserFileUpload";
import UserLeftNav from "./components/user-file-upload/UserLeftNav";

function App() {
  const theme = createTheme({
    palette: {
      primary: {
        main: "#355E3B",
        light: "#C1E1C1CC ",
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
          <Route path="/" element={<LandingPage />}>
            {" "}
          </Route>
          <Route path="register" element={<Register></Register>}></Route>
          <Route path="login" element={<Login></Login>}></Route>
          <Route
            path="/user"
            element={<UserFileUpload></UserFileUpload>}
          ></Route>
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
