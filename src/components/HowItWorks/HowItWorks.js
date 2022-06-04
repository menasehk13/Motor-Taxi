import React from "react";
import styled from "styled-components";
import { RiSecurePaymentFill } from "react-icons/ri";
import { GiFullMotorcycleHelmet } from "react-icons/gi";
import { FaSearchLocation } from "react-icons/fa";
import { ImHappy } from "react-icons/im";
import ImageDriver from "../../assets/image/t3.png";

const HowItWorks = () => {
  return (
    <Container className="font-poppins">
      <div className=" flex justify-center items-center text-center flex-col py-3">
        <h1 className="text-black text-[30px] font-bold">
          How Addis Motor Works
        </h1>
        <p className="mt-2 text-[14px]">
          Download Addis Motor taxi app from playstore, <br /> Create account
          use your motor and
          <br /> driver by yourself. Get ride and earn more money
        </p>
      </div>
      <Work>
        {/* left */}
        <div className="flex flex-col gap-5  justify-end align-end items-end ">
          <div className=" lineshow flex flex-col w-[190px] gap-2 justify-center items-center cursor-pointer  p-5 shadow-lg  shadow-slate-400 rounded-md ">
            <div className="p-3 bg-blue-100 rounded-md ">
              <FaSearchLocation size={28} color="black" />
            </div>
            <h1 className="text-[16px] font-semibold">Request A Trip</h1>
            <p className=" text-[12px] ">
              Choose your pick and drop-off location and the trip type that
              meets your need
            </p>
          </div>
          <div className="lineshow flex flex-col w-[190px]  gap-2 justify-center items-center cursor-pointer  p-5 shadow-lg  shadow-slate-400 rounded-md">
            <div className="p-3 bg-blue-100 rounded-md ">
              <ImHappy size={28} color="yellow" />
            </div>
            <h1 className="text-[16px] font-semibold">Enjoy Your Trip</h1>
            <p className=" text-[12px] ">
              Meet your driver with the help of our real time GPS service and
              enjoy your trip
            </p>
          </div>
        </div>
        {/* center */}
        <div className="flex w-full justify-center items-center">
          <div className=" absolute z-0 bg-slate-300 h-[300px] w-[300px] rounded-full "></div>
          <div className="w-[400px] h-[500px]">
            <img
              className="w-full h-full relative object-cover "
              src={ImageDriver}
              alt="arrived"
            />
          </div>
        </div>
        {/* right */}
        <div className="flex flex-col gap-5 justify-center align-center items-center  w-[30%]">
          <div className="lineshow flex flex-col w-[190px] h-auto gap-2 justify-center items-center cursor-pointer  p-5 shadow-lg  shadow-slate-400 rounded-md">
            <div className="p-3 bg-blue-100 rounded-md ">
              <GiFullMotorcycleHelmet size={28} color="blue" />
            </div>
            <h1 className="text-[16px] font-semibold">Match with a Driver</h1>
            <p className=" text-[12px] ">
              Addis Motor app <br /> will match you with the <br /> nearest
              available driver
            </p>
          </div>
          <div className="lineshow flex flex-col w-[190px] gap-2 justify-center items-center cursor-pointer  p-5 shadow-lg  shadow-slate-400 rounded-md">
            <div className="p-3 bg-blue-100 rounded-md ">
              <RiSecurePaymentFill size={28} color="green" />
            </div>
            <h1 className="text-[16px] font-semibold">Pay and Rate</h1>
            <p className=" text-[12px] ">
              pay with cash or your preffered mobile banking and rate our driver
            </p>
          </div>
        </div>
      </Work>
    </Container>
  );
};

const Container = styled.div`
  width: 100%;
  height: 100%;
  margin: 4rem 0;
  h1{
    font-size: 1.5rem;
  }
  p{
    font-size:.622rem;
  }
`;
const Work = styled.div`
  display: flex;
  margin-top: 3%;
  width: 100%;
  max-width: 1110px;
  gap:25px;
  margin: 0 auto;
  justify-content: space-between;
  align-items: center;
   @media screen and (max-width:768px){
     flex-direction: column;
     justify-content: center;
     align-items: center;
     padding-top:2rem;
   }



`;
export default HowItWorks;
