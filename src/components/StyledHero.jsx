// import styled from "styled-components";

// const StyledHero = styled.header`
//   min-height: 60vh;
//   background: url(${(props) => props.img}) center/cover no-repeat;
//   display: flex;
//   align-items: center;
//   justify-content: center;
// `;

import React from "react";

function StyledHero({ img, children }) {
  return (
    <header
      className="defaultHero"
      style={{ background: `url(${img}) center/cover no-repeat` }}
    >
      {children}
    </header>
  );
}

export default StyledHero;
