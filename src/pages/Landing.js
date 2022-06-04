import Hero from "../components/Hero/Hero";
import HowItWorks from "../components/HowItWorks/HowItWorks";
import React from "react";
import styled from "styled-components";
import Driver from "../components/Driver/Driver";
import Riders from "../components/Riders/Riders";
import Footer from "../components/Footer/Footer";
import CusomerReview from "../components/CustomerReview/CusomerReview";
import {BsFillTelephoneFill}from 'react-icons/bs'


const Landing = () => {
  return (
    <Container>
      <Hero />

      <div className="contain">
        <HowItWorks />

        <Driver />
        <Riders />
        <CusomerReview />
        <div className="phone">
          <a href="tel:0910152949">
             <small className="capitalize tracking-wider font-poppins font-medium">call</small>
            <BsFillTelephoneFill className="tel text-xl" />
          </a>
        </div>
      </div>
      <Footer />
    </Container>
  );
};
const Container = styled.div`
  width: 100%;
  height: auto;
  position: relative;
  /*  */
  .phone {
    position: fixed;
    right: 2%;
    top: 50%;
    color: #fff;
    background: #1f618d;
    width: 3rem;
    height: 3rem;
    border-radius: 5px;
    box-shadow: rgba(100, 100, 111, 0.2) 0px 7px 29px 0px;
    z-index:100 ;
    opacity:0 ;
    a {
      text-decoration: none;
      flex-direction: column;
      align-items: center;
      justify-content: center;
      gap: 3px;
      display: flex;
    }
  }
`;

export default Landing;
