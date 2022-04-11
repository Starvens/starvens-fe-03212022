import React from 'react'
import FirstPage from './FirstPage'
import ConversionLinks from './ConversionLinks'
import { ThirdPage } from './ThirdPage'
import FourthPage from './FourthPage'
import ConversionLinks2 from './ConversionLinks2'

const LandingPage = () => {
  return (
    <>
      <FirstPage></FirstPage>
      {/* <ConversionLinks></ConversionLinks> */}
      <ConversionLinks2></ConversionLinks2>
      <ThirdPage></ThirdPage>
      <FourthPage></FourthPage>
    </>
  )
}

export default LandingPage