import React from "react";
import styled from "styled-components";
import escudo from "../../images/logo-escudo-ec.svg";

const LogoStyles = styled.div`
  @import url("https://fonts.googleapis.com/css2?family=Roboto:wght@900&display=swap");

  height: 80px;
  margin: 0;
  padding: 0;
  flex-basis: 20%;
  background-size: 150em;
  h1 {
    margin: 0;
    display: inline-flex;
    flex-direction: column;
    align-items: center;
    justify-content: center;
  }
  .shield {
    transform: scale(0.9);
  }
  .legend {
    font-family: "Roboto", sans-serif;
    font-weight: bold;
    font-size: 1.5em;
    font-size: clamp(18px, 1vw, 28px);
  }
`;

export default function Logo() {
  return (
    <LogoStyles className="logo">
      <h1>
        <span className="shield">
          <img src={escudo} alt="Logo de Javascript Ecuador" />
        </span>
        <span className="legend">Ecuador.js</span>
      </h1>
    </LogoStyles>
  );
}
