import React from "react";
import { NavLink } from "react-router-dom";
import styled from "styled-components";
import ScreenLayout from "../components/ScreenLayout";
export default function Portfolio() {
  return (
    <ScreenLayout>
      <Container>
        <SkillContainer style={{ backgroundColor: "#5098BA" }}>
          <SkillWrapper>
            <StyledText>#1 졸업논문</StyledText>
            <Title hoverColor={"#1f057b"} to={"project/:1"}>
              자율주행에 따른 교통체증완화
            </Title>
          </SkillWrapper>
        </SkillContainer>
        <SkillContainer style={{ backgroundColor: "#48277C" }}>
          <SkillWrapper>
            <StyledText>#2 토이프로젝트</StyledText>
            <Title hoverColor={"#aa00ff"} to={"project/:2"}>
              할일 앱
            </Title>
          </SkillWrapper>
        </SkillContainer>
        <SkillContainer style={{ backgroundColor: "#9A69C2" }}>
          <SkillWrapper>
            <StyledText>#3 토이프로젝트</StyledText>
            <Title hoverColor={"#4a148c"} to={"project/:3"}>
              다이어트 도우미
            </Title>
          </SkillWrapper>
        </SkillContainer>
      </Container>

      {/* <Container>
        <SkillContainer style={{ backgroundColor: "#5098BA" }}>
          <SkillWrapper>
            <StyledText>#1 졸업논문</StyledText>
            <Title hoverColor={"#1f057b"} to={"#"}>
              자율주행에 따른 교통체증완화
            </Title>
          </SkillWrapper>
        </SkillContainer>
        <SkillContainer style={{ backgroundColor: "#48277C" }}>
          <SkillWrapper>
            <StyledText>#2 토이프로젝트</StyledText>
            <Title hoverColor={"#aa00ff"} to={"#"}>
              할일 앱
            </Title>
          </SkillWrapper>
        </SkillContainer>
        <SkillContainer style={{ backgroundColor: "#9A69C2" }}>
          <SkillWrapper>
            <StyledText>#3 토이프로젝트</StyledText>
            <Title hoverColor={"#4a148c"} to={"#"}>
              다이어트 도우미
            </Title>
          </SkillWrapper>
        </SkillContainer>
      </Container> */}
    </ScreenLayout>
  );
}

const Title = styled(NavLink)`
  color: white;
  font-family: "BM-Pro";
  text-decoration: none;
  font-size: 30px;
  :hover {
    color: ${(props) => props.hoverColor};
  }
  transition: all 0.3s;
`;
const StyledText = styled.h1`
  color: white;
  font-size: 18px;
`;

const Container = styled.div`
  width: 100%;
  height: 100%;
  display: flex;
  justify-content: center;
  align-items: center;
`;
const SkillWrapper = styled.div`
  display: flex;
  gap: 15px;
  flex-direction: column;
  padding: 25px;
`;
const SkillContainer = styled.div`
  width: 100%;
  height: 100%;
  display: flex;
  flex-direction: column;
  justify-content: center;
  /* align-items: center; */
`;
