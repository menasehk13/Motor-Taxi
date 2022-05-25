import React from 'react'
import { Link } from 'react-router-dom'
import styled from 'styled-components'
import {NavItems} from '../data/navData'
const Navbar = () => {
  return (
    <Container >
     <div className='right-[100%]'>Addis Motor Taxi </div>
      <div className='flex flex-row gap-5 text-center justify-center align-middle items-center'>
        {NavItems && NavItems.map((data,key)=>(
          <li key={key}  className={window.location.pathname=== data.link ?"text-blue-600 list-none relative after:absolute after:bg-blue-500  after:bottom-[-8px] after:inline-block after:left-[40%]  after:border-2 after:rounded-lg after:w-[12px] after:h-[12px] ":"text-black list-none"}>
          <a href={data.link}>
            {data.title}
          </a>
          </li>
    
        ))}
        <button className='text-white p-2 bg-green-500 rounded-sm text-base'>Help Center</button>
      </div>
    </Container>
  
  )
}



const Container = styled.div`
  width:100%;
   align-items:center;
   padding:10px 0;
   height:3.3rem;
   top:0;
   left:0;
   position:fixed;
   display:flex ;
    z-index:100;
    transition:all 0.3s;
    display: flex;
    text-align: center;
    align-items: center;
    flex-direction: row;
    justify-content: space-evenly;

  

`


export default Navbar