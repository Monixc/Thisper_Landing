import React from "react";
import Tail from "../Assets/Tail.png";
import Face from "../Assets/Face.png";
import styled, { css } from "styled-components";
const InstallContainer = styled.div`
  position: relative;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  min-height: 50rem;

  background-color: #323949;
`;
const InstallTail = styled.div`
  position: absolute;
  top: 0;
  left: 0;
  max-width: 30rem;
`;
const InstallFace = styled.div`
  position: absolute;
  bottom: 0;
  right: 0;
  max-width: 30rem;
`;

const InstallTextContainer = styled.div`
  margin: 1rem;
  margin-top: 5rem;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
`;
const ContentText = styled.text`
  max-width: 60rem;
  font-size: clamp(1rem, 3vw, 1.5rem);
  color: white;
`;
const BoldText = styled.text`
  font-size: clamp(4rem, 7vw, 5rem);
  font-weight: 700;
  color: white;
`;
const Button = styled.button`
margin-top: 3rem;
  padding: 0.7rem 3rem;
  background-color: white;
  color: #323949;
  outline: none;
  border: none;
  border-radius: 5rem;
  font-size: 2rem;
  cursor: pointer;
  font-weight: 700;
  transition: 0.2s;

  &:hover{
    background-color: rgb(234, 234, 234);}
  }
`;

const Install = () => {
  return (
    <InstallContainer>
      <InstallTail>
        <img src={Tail} alt="" />
      </InstallTail>
      <InstallTextContainer>
        <ContentText>
          Join us in cultivating a healthier comment culture!
        </ContentText>
        <BoldText>Install Thisper now</BoldText>
        <Button>Try Now</Button>
      </InstallTextContainer>
      <InstallFace>
        <img src={Face} alt="" />
      </InstallFace>
    </InstallContainer>
  );
};

export default Install;
