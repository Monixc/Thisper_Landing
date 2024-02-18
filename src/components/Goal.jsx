import React from "react";
import styled, { css } from "styled-components";
import MainGoal from "../Assets/MainGoal.png";
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
const GoalContainer = styled.div`
  position: relative;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  min-height: 50rem;
  margin-top: -10rem;
  background-color: #f5f5f5;

  ${media.tablet`
  margin-top: 0rem;
  `}
`;
const ImageContainer = styled.div`
  max-width: 60rem;

  ${media.desktop`
  max-width: 50rem;
  `}
  ${media.tablet`
  max-width: 40rem;
  `}
  ${media.phone`
  max-width: 20rem;
  `}
`;
const TextContainer = styled.div`
  margin-top: 1rem;
  text-align: center;
  padding-bottom: 5rem;
  ${media.desktop`
  max-width: 50rem;
  `}
  ${media.tablet`
  max-width: 40rem;
  `}
  ${media.phone`
  max-width: 20rem;
  `}
`;
const TitleText = styled.div`
  font-size: clamp(4rem, 7vw, 5rem);
  font-weight: 700;
`;
const ContentText = styled.div`
  max-width: 60rem;
  font-size: clamp(1rem, 3vw, 1.5rem);
`;
const Goal = () => {
  return (
    <GoalContainer>
      <TextContainer>
        <TitleText>Our Goal</TitleText>
        <ContentText>
          We aim to foster diverse opinions and constructive discussions, not
          just reduce conflicts. We belive in guiding thoughts, rather than
          enforcing rules.{" "}
        </ContentText>
      </TextContainer>
      <ImageContainer>
        <img src={MainGoal} alt="" />
      </ImageContainer>
    </GoalContainer>
  );
};

export default Goal;
