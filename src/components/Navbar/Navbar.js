import React, { useState, useEffect } from "react";
import "../../index.css";
import styled from "styled-components";
import { Link } from "react-scroll";
const Nav = () => {
  const [show, setShow] = useState(false);
  const [navbar, setNavbar] = useState(false);

  const handleClick = (e) => {
    setShow(!show);
    console.log(show);
  };
  const changeBackground = (e) => {
    if (window.scrollY >= 50) {
      setNavbar(true);
    } else {
      setNavbar(false);
    }
  };
  useEffect(() => {
    changeBackground();
    window.addEventListener("scroll", changeBackground);
  });
  
  return (
    <Header className={navbar ? "activeheader header" : "motor"}>
      <nav className="px-2">
        <div className="logo">
          <a
            to="/"
            className="tracking-wider cursor-pointer font-bold
             text-center text-red-600 capitalize"
          >
            Addismotortaxi
          </a>
        </div>

        <div className={show ? "activeul menu" : "menu"}>
          <ul className="flex">
            <li className="active">
              <Link
                spy={true}
                smooth={true}
                offset={-100}
                duration={500}
                onClick={() => handleClick(0)}
                to="/"
              >
                home
              </Link>
            </li>
            <li className="">
              <Link
                spy={true}
                smooth={true}
                offset={-100}
                duration={500}
                onClick={() => handleClick(0)}
                to="driver"
              >
                Driver
              </Link>
            </li>
            <li className="">
              <Link
                spy={true}
                smooth={true}
                offset={-100}
                duration={500}
                onClick={() => handleClick(0)}
                to="ride"
              >
                ride
              </Link>
            </li>
            <li className="">
              <Link
                spy={true}
                smooth={true}
                offset={-100}
                duration={500}
                onClick={() => handleClick(0)}
                to="about"
              >
                About
              </Link>
            </li>
            <li className="">
              <Link
                spy={true}
                smooth={true}
                offset={-100}
                duration={500}
                onClick={() => handleClick(0)}
                to="contact"
              >
                Contact
              </Link>
            </li>

            <button className="bg-blue-400  px-3 py-1 rounded-md">
              help center
            </button>
          </ul>
        </div>
        <div className="toggle ">
          <button onClick={() => handleClick(!show)}>
            <svg
              className="w-6 h-6 "
              fill="none"
              stroke="currentColor"
              viewBox="0 0 24 24"
              xmlns="http://www.w3.org/2000/svg"
            >
              <path
                stroke-linecap="round"
                stroke-linejoin="round"
                stroke-width="2"
                d="M4 8h16M4 16h16"
              ></path>
            </svg>
          </button>
        </div>
      </nav>
    </Header>
  );
};
const Header = styled.div`
  width: 100%;
  align-items: center;
  padding: 10px 0;
  height: 3.3rem;
  top: 0;
  left: 0;
  position: fixed;
  display: flex;
  z-index: 100;
  transition: all 0.3s;
  align-items: center;
  .activeheader {
    background-color: black;
  }
  nav {
    display: flex;
    align-items: center;
    justify-content: space-between;
    width: 100%;
    max-width: 1110px;
    margin: 0 auto;
    height: 100%;
    .toggle {
      display: none;
      align-items: center;
      color: #000;
      justify-content: space-between;
      @media (max-width: 970px) {
        display: block;
        align-items: center;
        justify-content: space-between;
      }
    }
    .menu {
      display: flex;
      align-items: center;
      @media screen and (max-width: 970px) {
        justify-content: center;
        flex-direction: column;
        justify-content: center;
        align-items: start;
        width: 100%;
        margin-left: 1rem;
      }
      @media screen and (max-width: 970px) {
        position: fixed;
        top: 3.3rem;
        left: -100%;
        margin: 0 auto;
        background-color: #222529;
        width: 10.9rem;
        transition: all 0.9s;
        z-index: 1000;
        padding: 2rem 0;
        border-radius: 3px;
        border: none;
        outline: none;
        flex-direction: column;
        gap: 1rem;
        display: flex;
        color: white;
        height: 100%;
      }
      ul {
        gap: 1.1rem;
        @media screen and (max-width: 978px) {
          display: inline-block;
          flex-direction: column;
          width: 100%;
          justify-content: center;
          height: 100%;
          align-items: center;
          column-gap: 2rem;
        }
        li {
          align-items: center;
          display: flex;
          overflow: hidden;
          & #help {
            background-color: #5dade2;
            color: #ffffff;
            font-weight: 700;
            border: none;
            outline: none;
            &:hover {
              border-bottom: none;
            }
          }

          @media screen and (max-width: 978px) {
            column-gap: 2rem;
            padding: 0.25rem 1rem;
            width: 100%;
            display: flex;
            align-items: center;
          }
          a {
            display: flex;
            align-items: center;
            justify-content: center;
            gap: 0.31rem;
            text-transform: capitalize;
            transition: all 0.3s ease-in-out;
            cursor: pointer;
            color: #5dade2;
            text-decoration: none;
            &:hover {
              /* padding-top: 0.1px; */
              border-bottom: 2px solid #a00;
            }
          }
        }
      }
    }

    /* nav end */
    .activeul {
      left: 0;
    }
  }
`;
export default Nav;
