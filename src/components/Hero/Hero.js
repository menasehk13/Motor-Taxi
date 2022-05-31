import React from 'react'
import styled from 'styled-components'
import ICONGOOGLE from '../../assets/image/getitongoogle.png'
import {FaGooglePlay,FaApple,FaCheckCircle} from 'react-icons/fa'
import ImageDriver from '../../assets/image/t3.png'
import ImageDrivers from '../../assets/image/profile.jpeg'

const Hero = () => {
  return (
    <Container id='home'>
      <div  className='content flex justify-between align-middle items-center'>
        {/* data */}
          <div className=' flex flex-col '>
            <div className='flex flex-col '>
              <h1 className='text-black text-[36px] space-y-0 font-bold leading-[2.5rem] '> Download app, <br/> Start drive, Earn <br/> money!</h1>
              <p className='mt-2 text-[14px] '> Download Addis Motor taxi app from playstore, Create <br/> account use your motor and driver by yourself. Get ride and <br/>
            earn more money  </p>
            </div> 

            <div className='flex items-center mt-3 mb-2 justify-start gap-2 '>
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
                  available on 
                      <br/>
                      <h1 className='text-[22px] text-white'>App Store</h1>
                  </span>
              </button>
            </div>
          </div>
          {/* image */}
          <div className=' flex w-[500px]  '>
          <img className='relative shadow-slate-500' src={ImageDriver} alt='display_driver' />
          <div className='absolute p-3 flex flex-row gap-2 bg-green-700 text-white font-light text-center justify-center items-center test-[18px] shadow-lg rounded-md shadow-slate-300  h-[40px] top-[34%]'>
              <FaCheckCircle size='24px' color='white'/> Accept Custmer Ride Request
          </div>
          <div className='absolute p-3 flex flex-row gap-2 bg-slate-700 text-white font-light text-center justify-center items-center test-[18px] shadow-lg shadow-slate-300 rounded-md  h-[40px] right-[10%] bottom-[30%]'>
              <FaCheckCircle size='24px' color='white'/> Earn More Money by Driving
          </div>
          
          </div>
      </div>
      
    </Container>
  )
}
const Container = styled.div`
     width:100%;
     position:relative;
     height: 90vh;
     padding: 25px 0;
   
     
  .content{
    
    margin: 0 auto;
    max-width: 960px;
    width: 100%;
    height: 100%;
  }
` 

export default Hero