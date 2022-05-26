import React from 'react'
import styled from 'styled-components'
import {RiSecurePaymentFill} from 'react-icons/ri'
import {GiFullMotorcycleHelmet} from 'react-icons/gi'
import {FaSearchLocation} from 'react-icons/fa'
import {ImHappy} from 'react-icons/im'
import ImageDriver from '../../assets/image/t3.png'

const HowItWorks = () => {
  return (
    <Container className='font-poppins'>
        <h1 className='text-black text-[30px] font-bold'>How Addis Motor Works</h1>
        <p className='mt-2 text-[14px]'> Download Addis Motor taxi app from playstore, Create account use your motor and<br/> driver by yourself. Get ride and 
        earn more money  </p>
        <Work>
            <div className='flex flex-col gap-5  justify-end align-end items-end '>
                 <div className=' lineshow flex flex-col gap-2 justify-start items-start  p-5 hover:shadow-lg  hover:shadow-slate-400 hover:rounded-md '>
                     <div className='p-3 bg-blue-100 rounded-md '>
                      <FaSearchLocation size={38} color="black"/>
                     </div>
                      <h1 className='text-[22px] font-semibold'>Request A Trip</h1>
                        <p className=' text-[14px] text-left'>Choose your pick and drop-off <br/> location and the trip type that <br/> meets your need</p>
                 </div>
                 <div className='lineshow flex flex-col gap-2 justify-start items-start mt-3 p-5 hover:shadow-lg  hover:shadow-slate-400 hover:rounded-md'>
                 <div className='p-3 bg-blue-100 rounded-md '>
                      <ImHappy size={38} color="yellow"/>
                     </div>
                        <h1 className='text-[22px] font-semibold'>Enjoy Your Trip</h1>
                        <p className=' text-[14px] text-left'>Meet your driver with the help of <br/> our real time GPS service and <br/> enjoy your trip</p>
                 </div>
            </div>
            <div className='flex justify-center items-center'>
              
               <div className=' absolute z-0 bg-yellow-300 h-[250px] w-[300px] rounded-full '>
               </div>
               <img className='w-[540px] relative ' src={ImageDriver} alt='arrived'/>
            </div>
            <div className='flex flex-col gap-5 justify-start align-start items-start  w-[30%]'>
                 <div className='flex flex-col gap-2 justify-end items-start p-5 hover:shadow-lg  hover:shadow-slate-400 hover:rounded-md'>
                 <div className='p-3 bg-blue-100 rounded-md '>
                      <GiFullMotorcycleHelmet size={38} color="blue"/>
                     </div>
                        <h1 className='text-[22px] font-semibold'>Match with a Driver</h1>
                        <p className=' text-[14px] text-left'>Addis Motor app <br/> will match you with the <br/> nearest available driver</p>
                 </div>
                 <div className='flex flex-col gap-2 justify-end items-start mt-3 p-5 hover:shadow-lg  hover:shadow-slate-400 hover:rounded-md'>
                 <div className='p-3 bg-blue-100 rounded-md '>
                      <RiSecurePaymentFill size={38} color="green"/>
                     </div>
                        <h1 className='text-[22px] font-semibold'>Pay and Rate</h1>
                        <p className=' text-[14px] text-left'>pay with cash or your preffered <br/> mobile banking and <br/> rate our driver</p>
                 </div>
            </div>

        </Work>
    </Container>
  )
}

const Container = styled.div`
width: 100%;
height: auto;
display: flex;
text-align: center;
flex-direction: column;
justify-content: center;
align-items: center;
margin-top: 5%;
`
const Work = styled.div`
display: flex;
margin-top: 3%;
text-align: start;
flex-direction: row;
gap: 20px;
justify-content: center;
align-items: center;




`
export default HowItWorks