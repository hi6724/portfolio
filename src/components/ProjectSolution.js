import React from "react";
import styled from "styled-components";
import { Container, SubTitle } from "./ProjectProblem";

export default function ProjectSolution({ solutionObj, title }) {
  return (
    <Container>
      <SubTitle>{title}</SubTitle>
      <ContentContainer>
        {solutionObj?.map((data, i) => (
          <div key={i}>
            <SolutionText>{data.problem}</SolutionText>
            <SolutionText>
              <strong style={{ fontWeight: 600, color: "black" }}>{data.solution}</strong>
            </SolutionText>
          </div>
        ))}
      </ContentContainer>
    </Container>
  );
}
const ContentContainer = styled.div`
  display: flex;
  flex-direction: column;
  gap: 25px;
`;
const SolutionText = styled.p`
  color: rgba(0, 0, 0, 0.7);
  font-family: "BM-Air";
  font-size: 24px;
  margin-top: 8px;
`;
