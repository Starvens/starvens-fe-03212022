import { createTheme, ThemeProvider } from "@mui/material/styles";
import { BrowserRouter, Route, Routes } from "react-router-dom";
import "./App.css";
import GenerateQRCodeTemp from "./components/file-conversion-inprogress/GenerateQRCodeTemp";
import AboutUs from "./components/LandingPage/AboutUs";
import LandingPage from "./components/LandingPage/LandingPage";
import { Login } from "./components/LandingPage/Login";
import { Register } from "./components/LandingPage/Register";
import UserFileUpload from "./components/user-file-upload/UserFileUpload";
import UserLeftNav from "./components/user-file-upload/UserLeftNav";
import Privacy from "./components/service-and-privacy/privacy"
import Service from "./components/service-and-privacy/service"
import PrivateShare from "./components/simple-file-share/PrivateShare";

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
          <Route path="/share" element={<UserLeftNav />}></Route>
          <Route path="/qrcode" element={<GenerateQRCodeTemp />}></Route>
          <Route path="/aboutus" element={<AboutUs />}></Route>
          <Route path="/privacy" element={<Privacy />}></Route>
          <Route path="/service" element={<Service />}></Route>
          <Route path="/share/:id" element={<PrivateShare />}></Route>
          {/* <Route path="/share/" element={<Service />}></Route> */}
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
