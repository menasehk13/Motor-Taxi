import React from 'react'
import styled from 'styled-components'
import {FaGooglePlay,FaApple} from 'react-icons/fa'
import ImageUser from '../../assets/image/photo1653549036-removebg-preview.png'
const Riders = () => {
    return (
        <Container id='ride'>
            <div className='content'>
            <div className=' w-[400px]    flex justify-center items-center'>
            <img src={ImageUser} className='w-full h-full object-cover ' alt='rider'/>
            </div>
            <div className='flex flex-col gap-3 '>
                <h1 className='text-black font-bold text-[28px] text-start font-poppins'>Download the Addis Motor Rider <br/> And  Enjoy The Fast Service! </h1>
                <p className='text-[14px] w-[400px] font-poppins' >Addis Motor Taxi is the first and only government-licensed company in Ethiopia that is creating jobs for motorcycles and taxi service providers and is working to increase the income of professionals in the sector. Download the app to work with us and submit the required documentation to register.We invite you to participate by downloading our app, which brings various benefits and upcoming new features to the industry.</p>
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
            </div>
           
        </Container>
      )
    }
    
    const Container = styled.div`
    width: 100%;
    height: 90vh;
    .content{
        max-width: 960px;
        width: 100%;
        height: 100%;
        margin: 0 auto;
        display:flex;
        justify-content: space-between;
        align-items: center;
    }
    `

    

export default Riders