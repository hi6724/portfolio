import React from "react";
import { Container, SubTitle } from "./ProjectProblem";
import styled from "styled-components";

function createMarkup(text) {
  return { __html: text };
}

export default function ProjectConclusion({ conclusions }) {
  return (
    <Container>
      <SubTitle>결론</SubTitle>
      <ContentContainer>
        {conclusions?.map((conclusion, i) => (
          <SolutionText dangerouslySetInnerHTML={createMarkup(conclusion.text)} key={i} />
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
  font-size: 18px;
  margin-top: 8px;
  strong {
    font-weight: 900;
    color: rgba(0, 0, 0, 1);
  }
`;
