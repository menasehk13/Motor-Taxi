import React from "react";
import styled from "styled-components";
import { FaCheckCircle } from "react-icons/fa";
import ImageDriver from "../../assets/image/t3.png";
import img1 from "../../assets/image/app2-removebg-preview.png";
import img2 from "../../assets/image/appp-removebg-preview.png";

const Hero = () => {
  return (
    <Container id="home  ">
      <div className="content flex justify-between gap-3 items-center">
        {/* data */}
        <div className="data   mt-3">
          <h1 className="text-black text-[36px] space-y-0 font-bold  ">
            Download app Start drive <br />
            and Earn money!
          </h1>
          <p className="mt-2 text-[14px] ">
            Download Addis Motor taxi app from <br /> playstore, Create account use
            your motor and driver by yourself. <br /> Get ride and earn more money{" "}
          </p>

          <div className="bt-group py-3 flex text-white  gap-[1.5rem]">
            <div className="rounded-md">
              <button className="btn-link  rounded-md ">
                <a href="#" className="capitalize tracking-wider">
                  <img
                    src={img1}
                    alt=""
                    className="w-full bg-none h-full object-cover"
                  />
                </a>
              </button>
            </div>
            <div className="rounded-md">
              <button className="btn-link  rounded-md ">
                <a href="#" className="capitalize tracking-wider">
                  <img
                    src={img2}
                    alt=""
                    className="w-full h-full object-cover"
                  />
                </a>
              </button>
            </div>
          </div>
        </div>
        {/* image */}
        <div className=" relative px-1  right-img-data">
          <div className="img-g w-[500px]">
            <img
              className=" shadow-slate-500"
              src={ImageDriver}
              alt="display_driver"
            />
          </div>
          <div
            className="check absolute p-1 flex flex-row gap-1
           bg-green-700 text-white font-light text-center
           justify-center items-center text-[15px]  rounded-md  "
          >
            <FaCheckCircle size="20px" color="white" /> Accept Custmer Ride
            Request
          </div>
          <div
            className=" circle absolute p-1 flex flex-row gap-1 bg-slate-700
           text-white font-light text-center justify-center items-center
            text-[15px]  rounded-md "
          >
            <FaCheckCircle size="20px" color="white" /> Earn More Money by
            Driving
          </div>
        </div>
      </div>
    </Container>
  );
};
const Container = styled.div`
  width: 100%;
  padding: 15px 0;
  height: ;
  top: 0;
  left: 0;
  position: relative;
  .content {
    margin: 0 auto;
    max-width: 1110px;
    width: 100%;
    display: flex;
    justify-content: space-between;
    align-items: center;
    height: 100%;

    @media screen and (max-width: 768px) {
      flex-direction: column;
      height: 100%;
      width: 100%;
      justify-content: center;
      text-align: center;
    }
    .data {
      @media screen and (max-width: 768px) {
        align-items: center;
        justify-content: center;
        padding: 2rem 1rem;
        display: flex;
        flex-direction: column;
      }
      h1 {
        @media screen and (max-width: 768px) {
          font-size: 1.3rem;
          font-weight: bold;
        }
      }
      p {
      }
    }
    .btn-link {
      display: inline-block;
      text-align: center;
      transition: all 0.2s;
      background-color: #000;
      height: 40px;
      width: 120px;
      border: none;
      outline: none;
      border-radius: 0.25rem;

      @media screen and (max-width: 768px) {
      }
    }
    img {
      border: none;
      align-items: center;
      justify-content: center;
      outline: none;
      background: none;
    }

    .right-img-data {
      display: flex;
      align-items: center;
      justify-content: center;
      .img-g {
        height: 100%;
        @media screen and (max-width: 768px) {
          width: 100%;
          height: 100%;
          object-fit: cover;
        }
      }
      .check {
        top: 28%;
        left: 30%;
        font-size: 0.91rem;
        transform: translate(-50%, -50%);
        @media screen and (max-width: 768px) {
          top: 33%;
          left: 35%;
          font-size: .51rem;
          transform: translate(-50%, -50%);
         }
          }
      .circle {
        right: 10%;
        bottom: 3rem;
        font-size: .91rem;
        @media screen and (max-width:768px) {
          right: 5%;
          bottom: 3rem;
          font-size: 0.51rem;
        }
      }
      img {
        width: 100%;
        height: 100%;
      }
    }
  }
`;

export default Hero;
