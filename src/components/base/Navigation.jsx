import React, { useRef } from "react";
import Link from "next/link";
import styled from "styled-components";
export function Navigation() {
  const botonRef = useRef();
  const navRef = useRef();

  const handleClick = () => {
    navRef.current.classList.toggle("active")
  };

  return (
    //hacer el nav
    <Nav>
      <NavContainer>
        <Link href="/">
          <Logo>
            <h1>🎞  Movie Films</h1>
          </Logo>
        </Link>
        <ul ref={navRef}>
          <li>
            <Link href="/about">
              <a>About </a>
            </Link>
          </li>
          <li>
            <Link href="/servicios">
              <a>Servicios</a>
            </Link>
          </li>
          <li>
            <Link href="/favoritos">
              <a>Mis Favoritos</a>
            </Link>
          </li>
        </ul>
        <label ref={botonRef} onClick={() => handleClick()}>
          <i className="fas fa-bars"></i>
        </label>
      </NavContainer>
    </Nav>
  );
}

const NavContainer = styled.div`
  padding: 0 0.5em;
  height: 75px;
  width: 100%;
  display: flex;
  justify-content: space-between;
  align-items: center;
  h1 {
    margin: 0;
  }
`;

const Nav = styled.div`
  width: 100%;
  background-color: #fff;
  position: fixed;
  z-index: 100;
  top: 0;
  left: 0;
  padding-right: 1em;

  i {
    display: none;
    @media (max-width: 650px) {
      display: block;
      z-index:10000;
    }
  }
  @media (max-width: 650px) {
    ul{
      flex-direction: column;
      width: 50vw;
      height: auto;

      position: absolute;
      right: 0;
      top: -100vh;
      text-align: center;
      transition: all 0.5s;
    }
    ul.active {
      flex-direction: column;
      width: 50vw;
      height: auto;
      position: absolute;
      right: 0;
      top: 75px;
      text-align: center;
      transition: all 0.5s;
    }
  }
  ul {
    float: right;
    margin-right: 20px;
    padding: 0;
    margin: 0;
    display: flex;
    justify-content: space-between;
    width: 30vw;
    background: white;

    li {
      display: inline-block;
      :hover {
        color: red;
      }
    }
  }
`;
const Logo = styled.div`
  cursor: pointer;
  line-height: 80px;
  padding: 0.5em;
  font-weight: bold;
`;
