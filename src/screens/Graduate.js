import React from "react";
import styled from "styled-components";
import ProjectHeader from "../components/ProjectHeader";
import ProjectProblem from "../components/ProjectProblem";
import ProjectSolution from "../components/ProjectSolution";
export default function Graduate({ project }) {
  return (
    <Container>
      <ProjectHeader project={project} url="/images/graduate/trafficJam.jpg" />
      <ProjectProblem title={"해결과제 1 : deadlock 문제"} url="/images/graduate/deadlock.webp">
        <ContentText>가상의 신호등(VTL)을 이용해서 신호등을 없애는 연구를 진행했습니다 </ContentText>
        <ContentText>
          그 때 발생하는 문제점 중에 하나인
          <strong style={{ fontWeight: 900 }}> *deadlcok 과 gridlock</strong> 을 해결하는데 중점을 두었습니다
        </ContentText>
        <ContentText style={{ marginTop: 8, fontSize: 12 }}>
          *deadlock 이란 신호등이 없는 교차로에서 서로 먼저 가려고 하는 경우, 교차로 중간에서 아무도 이동하지 못하게
          되는 현상이다
        </ContentText>
      </ProjectProblem>
      <ProjectProblem title={"해결과제 2 : gridlock 문제"} url="/images/graduate/loopGridlock2.png">
        <ContentText>두번째 해결과제는 gridlock 이었습니다</ContentText>
        <ContentText>
          gridlock 이란 다음경로에 공간이 없어서 공간이 생길 때 까지 대기하는데, 다음 차선도 다음경로를 대기중이며,
          <strong style={{ fontWeight: 900 }}> 결국 자기자신의 차선이 다음경로의 차선을 막는 현상입니다</strong>
        </ContentText>
        <ContentText style={{ marginTop: 8, fontSize: 12 }}>
          *gridlcok : D는 C를 막고있고, C는 B, B는 A, 마지막으로 A가 다시 D를 막고있다. (A➡B➡C➡D➡A)
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
