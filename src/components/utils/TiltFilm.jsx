import React, { useEffect, useRef } from "react";
import VanillaTilt from "vanilla-tilt";
import styled from "styled-components";

import React from 'react'

const TiltFilm = (props) => {
  const { options, ...rest } = props;
  const tilt = useRef(null);

  useEffect(() => {
    VanillaTilt.init(tilt.current, options);
  }, [options]);

  return (
    <Container ref={tilt} {...rest}>
      <div className="container">
        <div className="card">
          <div className="content">
            <h2>01</h2>
            <h3>card One</h3>
            <p>
              Lorem, ipsum dolor sit amet consectetur adipisicing elit.
              Laboriosam, amet. Expedita aliquam alias voluptas explicabo fuga,
              praesentium sed harum repudiandae, in natus exercitationem impedit
              voluptatibus qui quae accusamus ea illum?
            </p>
            <a href="#">ver mas</a>
          </div>
        </div>
      </div>
    </Container>
  );
}

export default TiltFilm



const Container = styled.div`
  margin-top: 100px;
  position: relative;
  .container {
    width: 100%;
    position: absolute;
    top: 5%;
    right: 0;
    display: flex;
    justify-content: center;
    max-width: 1200px;
    flex-wrap: wrap;
    z-index: 1;
  }
  .container .card {
    position: relative;
    width: 280px;
    height: 400px;
    margin: 30px;
    box-shadow: 20px 20px 50px rgba(0, 0, 0, 0.5);
    border-radius: 15px;
    background: rgba(255, 255, 255, 0.1);
    overflow: hidden;
    display: flex;
    justify-content: center;
    align-items: center;
    border-top: 1px solid rgba(255, 255, 255, 0.5);
    border-left: 1px solid rgba(255, 255, 255, 0.5);
    backdrop-filter: blur(5px);
    :hover .content {
      transform: translateY(0px);
      opacity: 1;
    }
    .content {
      padding: 20px;
      text-align: center;
      transform: translateY(100px);
      opacity: 0;
      transition: 0.5s;

      h2 {
        position: absolute;
        top: -40px;
        right: 30px;
        font-size: 8px;
        color: rgba(255, 255, 255, 0.05);
      }
      h3 {
        font-size: 1.8em;
        color: #fff;
        z-index: 1;
      }
      p {
        font-size: 1em;
        color: #fff;
        font-weight: 300;
      }
      a {
        position: relative;
        display: inline-block;
        padding: 8px 20px;
        margin-top: 15px;
        background: #fff;
        color: #000;
        border-radius: 20px;
        text-decoration: none;
        font-weight: 500;
        box-shadow: 0 5px 15px rgba(0, 0, 0, 0.2);
      }
    }
  }
`;