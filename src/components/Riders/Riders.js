import React from "react";
import styled from "styled-components";
import ImageUser from "../../assets/image/photo1653549036-removebg-preview.png";
import img1 from "../../assets/image/app2-removebg-preview.png";
import img2 from "../../assets/image/appp-removebg-preview.png";
const Riders = () => {
  return (
    <Container id="ride">
      <div className="content">
        <div className=" w-[400px]">
          <img
            src={ImageUser}
            className="w-full h-full object-cover "
            alt="rider"
          />
        </div>
        <div className="data   mt-3">
          <div className="flex pb-2 data-2  flex-col">
            <h1 className=" text-black text-[28px] font-bold ">
              Download the Addis Motor <br /> Driver And Earn More!
            </h1>
            <p className="text-sm mt-2 ">
              Addis Motor Taxi is the first and <br /> only government-licensed
              company in Ethiopia that is creating <br /> jobs for motorcycles
              and taxi service providers and <br /> is working to increase the
              income of professionals in the sector. Download <br /> the app to
              work with us and submit the required documentation to register.
            </p>
          </div>

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
      </div>
    </Container>
  );
};

const Container = styled.div`
  width: 100%;
  height: 100%;
  margin: 30px 0;
  background-color:#2aa ;
  .content {
    margin: 0 auto;
    max-width: 960px;
    width: 100%;
    height: 100%;
    display: flex;
    justify-content: space-between;
    align-items: center;
    @media screen and (max-width: 768px) {
      flex-direction: column;
      justify-content: center;

    }
  }
  .data-2 {
    @media screen and (max-width: 768px) {
      justify-content: center;
       text-align: center
      flex-wrap: wrap;
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
      @media screen and (max-width: 768px) {
        font-size: 12px;
      }
    }
  }
`;

export default Riders;
