import React from "react";
import styled from "styled-components";

export default function ProjectProblem({ title, url, children }) {
  return (
    <ProblemContainer>
      <SubTitle>{title}</SubTitle>
      <Content>
        <ContentImg src={url} />
        <div>{children}</div>
      </Content>
    </ProblemContainer>
  );
}

const ContentImg = styled.img`
  height: 400px;
`;
const Content = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: flex-end;
`;
const SubTitle = styled.h2`
  font-family: "BM-Air";
  font-weight: 600;
  color: #002366;
  opacity: 0.8;
  font-size: 40px;
  font-weight: 600;
`;
const ProblemContainer = styled.div`
  display: flex;
  gap: 45px;
  align-items: center;
  flex-direction: column;
`;
