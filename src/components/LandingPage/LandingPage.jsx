import React from "react";
import ConversionLinks2 from "./ConversionLinks2";
import FirstPage from "./FirstPage";
import FourthPage from "./FourthPage";
import { ThirdPage } from "./ThirdPage";

const LandingPage = () => {
  return (
    <>
      <FirstPage></FirstPage>
      {/* <ConversionLinks></ConversionLinks> */}
      <ConversionLinks2></ConversionLinks2>
      <ThirdPage></ThirdPage>
      <FourthPage></FourthPage>
    </>
  );
};

export default LandingPage;
