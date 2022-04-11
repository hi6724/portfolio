import React from "react";
import styled from "styled-components";
import ProjectHeader from "../components/ProjectHeader";
import ProjectProblem from "../components/ProjectProblem";
import ProjectSolution from "../components/ProjectSolution";
export default function TodoApp({ project }) {
  return (
    <Container>
      <ProjectHeader project={project} url="#" />
      <ProjectProblem url="#">
        <ContentText>가상의 신호등(VTL)을 이용해서 신호등을 없애는 연구를 진행했습니다 </ContentText>
        <ContentText>
          그 때 발생하는 문제점 중에 하나인
          <strong style={{ fontWeight: 900 }}> *gridlock</strong> 을 해결하는데 중점을 두었습니다
        </ContentText>
        <ContentText style={{ marginTop: 8, fontSize: 12 }}>
          *gridlcok 이란 왼쪽의 그림과 같이 서로가 서로를 막으면서 일어난다
        </ContentText>
      </ProjectProblem>
      <ProjectSolution />
    </Container>
  );
}

const Container = styled.div`
  display: flex;
  flex-direction: column;
  gap: 150px;
`;

const ContentText = styled.p`
  margin-top: 35px;
  width: 360px;
  font-family: "BM-Air";
  font-size: 18px;
  line-height: 25px;
  word-break: keep-all;
`;
