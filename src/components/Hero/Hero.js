import React from 'react'
import styled from 'styled-components'
import ICONGOOGLE from '../../assets/image/getitongoogle.png'
import {FaGooglePlay,FaApple} from 'react-icons/fa'
const Hero = () => {
  return (
    <Container id='home'>
       <div className='flex flex-col '>
        <h1 className='text-black text-[36px] space-y-0 font-bold leading-tight  '> Download app, <br/> Start drive, Earn <br/> money!</h1>
        <p className='mt-2 text-[14px]'> Download Addis Motor taxi app from playstore, Create <br/> account use your motor and driver by yourself. Get ride and <br/>
        earn more money  </p>
        <div className='flex flex-row mt-10 gap-2  '>
           <button className='flex flex-row leading-tight p-1  justify-center items-center border-2 rounded-[10px] border-white bg-black '>
               <FaGooglePlay color='#ffffff'   size={"40px"} />
               <span className='text-white text-base text-[8px] p-1 flex justify-start flex-col align-baseline items-start leading-none '>
                   GET IT ON
                   <br/>
                   <h1 className='text-[22px] text-white'>Google Play</h1>
               </span>
           </button>
           <button className='flex flex-row leading-tight p-1  justify-center items-center border-2 rounded-[10px] border-white bg-black '>
               <FaApple color='#ffffff'   size={"40px"} />
               <span className='text-white text-base text-[8px] p-1 flex justify-start flex-col align-baseline items-start  leading-none '>
               available on app store
                   <br/>
                   <h1 className='text-[22px] text-white'>App Store</h1>
               </span>
           </button>
        </div>
       </div>
       <div>
      {/* image will be Added */}
       </div>
    </Container>
  )
}
const Container = styled.div`
     width:100%;
     position:relative;
     height: 100vh;
     display: flex;
     justify-content: center;
     align-items: center;
     flex-direction: row;
     gap: 13px;

` 
export default Hero