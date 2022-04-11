import React from "react";
import styled from "styled-components";

export default function ProjectSolution() {
  return (
    <Container>
      <SubTitle>해결방안</SubTitle>
      <SolutionText>어쩌구저쩌구</SolutionText>
    </Container>
  );
}
const Container = styled.div`
  display: flex;
  gap: 45px;
  align-items: center;
  flex-direction: column;
`;

const SubTitle = styled.h2`
  font-family: "BM-Air";
  font-weight: 600;
  color: #002366;
  opacity: 0.8;
  font-size: 40px;
  font-weight: 600;
`;
const SolutionText = styled.p``;
