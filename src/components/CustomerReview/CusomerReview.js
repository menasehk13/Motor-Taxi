import React from "react";
import styled from "styled-components";
import { FaQuoteLeft } from "react-icons/fa";
import ImageDrivers from "../../assets/image/profile.jpeg";
import { CustmerData } from "../data/customerData";
const CusomerReview = () => {
  return (
    <Container>
      <div className="contentd">
        <h1 className="text-black text-[38px] font-medium">Testimonials</h1>
        <div className="mt-[5%] content  flex justify-center gap-5  h-400px items-center align-middle">
          {CustmerData.map((data, key) => (
            <div
              className=" data_card flex justify-center box font-poppins capitalize flex-col rounded-md items-center gap-5
                 relative p-6 transition ease-in-out  shadow-slate-400 shadow-lg  hover:-translate-y-1 hover:scale-110 
                 hover:bg-indigo-500 hover:text-white"
            >
              <div className="bg-transparent flex gap-2 absolute left-0 top-0 pt-2 pl-2 justify-center align-middle items-center  rounded-full  ">
                <img
                  className="w-[40px] h-[40px] rounded-full"
                  src={ImageDrivers}
                  alt="reviews"
                />
                <h1 className="text-black text-[16px] font-semibold">
                  {data.name}
                </h1>
              </div>
              <div className="flex w-[200px] h-auto  flex-col gap-1 justify-center mt-5 items-center">
                <FaQuoteLeft color="slate" />
                <p className="">{data.review}</p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </Container>
  );
};

const Container = styled.div`
  width: 100%;
  height: 100%;
  padding: 3rem 0;
 
 

  .box {
    box-shadow: rgba(0, 0, 0, 0.15) 0px 15px 25px,
      rgba(0, 0, 0, 0.05) 0px 5px 10px;
  }
  .content {
    @media screen and (max-width: 768px) {
      flex-direction: column;
      justify-content: center;
    }
    .data_card {
    }
  }
  .contentd{
    margin:0 auto;
    width: 100%;
    max-width: 1110px;
    justify-content: center;
    display: flex;
    align-items: center;
    flex-direction: column;
    height: 100%;
  }
`;

export default CusomerReview;
