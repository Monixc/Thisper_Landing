import React from "react";
import styled, { css } from "styled-components";
import MainGoal from "../Assets/MainGoal.png";

const GoalContainer = styled.div`
  position: relative;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  min-height: 50rem;
  margin-top: -10rem;
  background-color: #f5f5f5;
`;
const ImageContainer = styled.div`
  max-width: 60rem;
`;
const TextContainer = styled.div`
  margin-top: 5rem;
  text-align: center;
  padding-bottom: 5rem;
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
