import React from "react";
import { NavItems } from "../data/navData";
import styled from "styled-components";
import {
  FaFacebook,
  FaTwitter,
  FaLinkedin,
  FaInstagram,
  FaTelegramPlane,
} from "react-icons/fa";
const Footer = () => {
  return (
    <Container className="bg-[#2e3031] text-white">
      <div className="con">
        <div className="flex main flex-row justify-between align-middle items-center w-[100%]">
          <div className=" data flex flex-col justify-center text-start h-[200px]">
            <h1 className=" font-semibold text-[28px]">Addis Motor Taxi</h1>
            <p className="text-[14px] w-[350px] mt-3">
              Addis Motor Taxi is the first and only government-licensed company
              in Ethiopia that is creating jobs for motorcycles and taxi service
              providers and is working to increase the income of professionals
              in the sector. Download the app to work with us and submit the
              required documentation to register.We invite you to participate by
              downloading our app, which brings various benefits and upcoming
              new features to the industry.
            </p>
          </div>
          {/*  */}
          <div className="flex flex-col justify-center text-center h-[200px]">
            <h1 className=" font-semibold text-[19px]">QucikLinks</h1>
            {NavItems.map((data, key) => (
              <li key={key} className="list-none mt-3 gap-2">
                <a href={data.link}>{data.title}</a>
              </li>
            ))}
          </div>
          {/*  */}
          <div className="flex flex-col text-center justify-center h-[200px]">
            <h1 className=" font-semibold text-[19px]">About us</h1>
            <li className="list-none flex flex-col justify-center text-center gap-3 mt-3">
              <a href="/">Meet the Team</a>
              <a href="/">Our Story</a>
            </li>
          </div>
          {/*  */}
          <div className="flex flex-col text-center justify-start h-[200px]">
            <h1 className=" font-semibold text-[19px]">ContactUs</h1>
            <p className="mt-3">
              Teklahmnot,Nudo Building 402,
              <br />
              Addis Ababa,Ethiopia
            </p>
            <p className="mt-5">+251 118449939</p>
            <p>contact@addismotortaxi.com</p>
          </div>
        </div>
        <hr className="bg-white h-[2px] w-[100%] mt-9" />
        <div className="  icon flex flex-row w-[100%] justify-between mt-2 items-center">
          <p>Copyright AddisMotorTaxi 2022.All right reserved. </p>
          <div className="flex flex-row gap-5 ">
            <FaFacebook />
            <FaInstagram />
            <FaTwitter />
            <FaLinkedin />
            <FaTelegramPlane />
          </div>
        </div>
      </div>
    </Container>
  );
};

const Container = styled.div`
  width: 100%;
  height: auto;
  display: flex;
  flex-direction: column;
  padding: 10px 0;
 
  p {
    color: cornsilk;
    font-size: 12px;
  }
  .con{
    padding:0 1rem;
  }
  .main {
    @media screen and (max-width: 768px) {
      display: flex;
      flex-direction: column;
      justify-content: center;
    }
  }
  .data {
    @media screen and (max-width: 768px) {
      display: flex;
      flex-direction: column;
      justify-content: center;
      text-align: center;
    }
    p {
      @media screen and (max-width: 768px) {
        align-items: center;
        margin: 0 auto;
        padding: 0.1rem 1rem;
        padding-bottom: 1rem;
      }
    }
  }
  .icon {
    @media screen and (max-width: 768px) {
       flex-direction: column;
       gap:1rem;
    }
  }
`;
export default Footer;
