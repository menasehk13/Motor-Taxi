import Hero from "../components/Hero/Hero";
import HowItWorks from "../components/HowItWorks/HowItWorks";
import React from 'react'
import styled from 'styled-components'
import Driver from "../components/Driver/Driver";
import Riders from "../components/Riders/Riders";
import Footer from "../components/Footer/Footer";


const Landing = () => {
  return (
    <Container>
        <Hero/>
        <HowItWorks/>
        <Driver/>
        <Riders/>
        <Footer/>
    </Container>
  )
}
const Container = styled.div`
width: 100%;
height: auto;
position: relative;

`

export default Landing