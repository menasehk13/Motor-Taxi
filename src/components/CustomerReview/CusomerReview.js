import React from 'react'
import styled from 'styled-components'
import {FaQuoteLeft} from 'react-icons/fa'
import ImageDrivers from '../../assets/image/profile.jpeg'
import { CustmerData } from '../data/customerData'
const CusomerReview = () => {
  return (
    <Container>
        <h1 className='text-black text-[38px] font-medium'>Testimonials</h1>
        <div className='mt-[5%] flex flex-row justify-center gap-5  h-400px items-center align-middle'>
            {CustmerData.map((data,key)=>(
                <div className='flex justify-center font-poppins capitalize flex-col rounded-md items-center relative p-6 transition ease-in-out  shadow-slate-400 shadow-lg  hover:-translate-y-1 hover:scale-110 hover:bg-indigo-500 hover:text-white'>
                <FaQuoteLeft color='slate'/>
                <p className='mt-5 w-[300px]'>{data.review}</p>
                <div className='bg-transparent flex flex-col absolute justify-center align-middle items-center bottom-[-60px] rounded-full  '>
                    <img className='w-[40px] h-[40px] rounded-full'  src={ImageDrivers} alt='reviews'/>
                    <h1 className='text-black text-[19px] font-bold '>{data.name}</h1>
                    <p className='text-black text-[12px] font-semibold'>{data.occupation}</p>
                  </div>
            </div>  
            ))}
        
         
          
        </div>
    </Container>
  )
}

const Container = styled.div`
width: 100%;
height: auto;
display: flex;
flex-direction: column;
padding: 120px;
justify-content: center;
align-items: center;
text-align: center;
`

export default CusomerReview