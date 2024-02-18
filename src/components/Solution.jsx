import React from "react";
import styled, { css } from "styled-components";
import YouTube from "../Assets/Youtube.png";
import SolutionTitle from "../Assets/SolutionTitle.png";
import Blob3 from "../Assets/Blob3.png";
const sizes = {
  desktop: 1024,
  tablet: 768,
  phone: 480,
};

const media = Object.keys(sizes).reduce((acc, label) => {
  acc[label] = (...args) => css`
    @media (max-width: ${sizes[label]}px) {
      ${css(...args)};
    }
  `;
  return acc;
}, {});
const SolutionContainer = styled.div`
  margin-top: 10rem;
  position: relative;
  display: flex;
  align-items: center;
  justify-content: space-between;
  min-height: 50rem;
`;
const SolutionBackgroundImage = styled.div`
  position: absolute;
  top: -15rem;
  right: -10px;
  z-index: -2;
  max-width: 40rem;

  ${media.desktop`
max-width: 30rem;
right: -40px;
`}
  ${media.tablet`
top: -200px;
right: -30px;
max-width: 28rem;

`}
${media.phone`
display: none;
`}
`;
const SolutionTitleImage = styled.div`
  position: absolute;
  right: 0;
  top: 0;
  margin-top: -9rem;
  margin-right: 2rem;
  max-width: 18rem;

  ${media.tablet`max-width: 12rem;`}
`;
const SoulutionSectionContainer = styled.div`
  position: relative;
  display: flex;
  margin: 2rem;
  margin-top: -20rem;
  padding-left: 3rem;
  ${media.desktop`
  margin: 1rem;
  margin-top: -30rem;
  `}
  ${media.tablet`
  flex-direction: column-reverse;
  align-items: center;
  justify-content: center;
  padding-top: 3rem;
  margin-top: -20rem;
  padding-left: 0rem;
  
  `}
  ${media.phone`
  flex-direction: column-reverse;
  align-items: center;
  justify-content: center;
  margin: 1.5rem;
  padding-top: 3rem;
  margin-top: -30rem;
  padding-left: 0rem;
  `}
`;
const SoulutionImageSeciton = styled.div`
  max-width: 33rem;

  margin-left: 3rem;
  margin-right: 7rem;

  ${media.desktop`
  max-width: 32rem;
margin-right: 2rem;
  margin-top: 12rem;`}
  ${media.tablet`
  max-width: 30rem;
margin-right: 0rem;
  margin-top: 2rem;`}
`;
const SolutionTextSeciton = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  margin-top: 5rem;
  margin-top: 5rem;
  max-width: 70rem;
  margin-right: 2rem;

  ${media.desktop`
  margin-right:0rem;
    `}
  ${media.tablet`
  margin-right:0rem;
    `}
  ${media.phone`
  margin-right:0rem;
    `}
`;
const PrimaryText = styled.text`
  font-size: clamp(1rem, 3vw, 1.5rem);
  max-width: 70rem;
  margin: 1.5rem 0rem;

  ${media.desktop`
  text-align: left;
    max-width: 90%;
    margin-right: 1.5rem;
    `}
  ${media.tablet`
  text-align: center;
    max-width: 90%;
    `}
  ${media.phone`
margin: 0rem;
  text-align: center;
    max-width: 95%;
    `}
`;
const Solution = () => {
  return (
    <SolutionContainer>
      <SolutionBackgroundImage>
        <img src={Blob3} alt="" />
      </SolutionBackgroundImage>
      <SolutionTitleImage>
        <img src={SolutionTitle} alt="" />
      </SolutionTitleImage>
      <SoulutionSectionContainer>
        <SoulutionImageSeciton>
          <img src={YouTube} alt="" />
        </SoulutionImageSeciton>
        <SolutionTextSeciton>
          <PrimaryText>
            Thisper analyzes YouTube comments, visualizing excessive bias and
            malicious comments in Red. In this way, Thisper serves as a catalyst
            for change, transforming the internet from a battlefield of
            conflicting views into a platform for constructive dialogue and
            mutual respect.{" "}
          </PrimaryText>
        </SolutionTextSeciton>
      </SoulutionSectionContainer>
    </SolutionContainer>
  );
};

export default Solution;
