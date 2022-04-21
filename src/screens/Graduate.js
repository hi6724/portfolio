import React from "react";
import styled from "styled-components";
import ProjectConclusion from "../components/ProjectConclusion";
import ProjectHeader from "../components/ProjectHeader";
import ProjectProblem from "../components/ProjectProblem";
import ProjectResult from "../components/ProjectResult";
import ProjectSolution from "../components/ProjectSolution";

export default function Graduate({ project }) {
  const graduateSolutions = [
    {
      problem: "데드락은 교차로에서 서로 먼저 가려고 할 때 발생한다",
      solution: "가장 먼저 도착한 차선이 모두 진행할 때 까지 다른 차선은 대기한다",
    },
    {
      problem: "그리드락은 다음 경로에 자동차가 너무 많아서 더이상 움직이지 못할때 발생한다",
      solution: "다음 차선으로 진행하기 전에 다음 차선에 2대 이상의 공간이 있는 경우에만 진행한다",
    },
  ];
  const gradutateResults = [
    [
      {
        img: "/images/graduate/deadlock.gif",
        text: "서로 먼저 가려다 아무도 움직이지 못하게 되는 모습",
      },
      {
        img: "/images/graduate/deadlockS.gif",
        text: "가장먼저 도착한 차선먼저 진행시켜서 해결",
      },
    ],
    [
      {
        img: "/images/graduate/gridlock.gif",
        text: "다음 경로가 막혀서 진행하지 못하는 모습",
      },
      {
        img: "/images/graduate/gridlockS.gif",
        text: "다음 경로에 2대의 여유공간를 두어서 해결",
      },
    ],
    [
      {
        img: "/images/graduate/endTime.png",
        text: "시뮬레이션 완료 시간은 신호등에 의한 제어보다 빨랐다",
      },
      {
        img: "/images/graduate/numOfTeleports.png",
        text: "1000번의 시나리오 중 그리드락 혹은 데드락이 한 번도 일어나지 않았다",
      },
    ],
  ];
  const conclusions = [
    {
      text: `그리드락은 다음 차선에 <strong>2대이상의 자동차가 있을 때만 다음 차선으로 진행</strong>시킴으로서 해결하였다`,
    },
    { text: "데드락은 <strong>교차로에 가장먼저 도착한 차선을 먼저 진행</strong>시킴으로서 해결하였다" },
  ];
  return (
    <Container>
      <ProjectHeader project={project} url="/images/graduate/trafficJam.jpg" />
      <ProjectProblem title={"해결과제 1 : 데드락 문제"} url="/images/graduate/deadlock.webp">
        <ContentText>가상의 신호등(VTL)을 이용해서 신호등을 없애는 연구를 진행했습니다 </ContentText>
        <ContentText>
          그 때 발생하는 문제점 중에 하나인
          <strong style={{ fontWeight: 900 }}> 데드락(*deadlcok) 과 그리드락(*gridlock)</strong> 을 해결하는데 중점을
          두었습니다
        </ContentText>
        <ContentText style={{ marginTop: 8, fontSize: 16 }}>
          *deadlock 이란 신호등이 없는 교차로에서 서로 먼저 가려고 하는 경우, 교차로 중간에서 아무도 이동하지 못하게
          되는 현상이다
        </ContentText>
      </ProjectProblem>
      <ProjectProblem title={"해결과제 2 : 그리드락 문제"} url="/images/graduate/loopGridlock2.png">
        <ContentText>두번째 해결과제는 그리드락(gridlock) 이었습니다</ContentText>
        <ContentText>
          gridlock 이란 다음경로에 공간이 없어서 공간이 생길 때 까지 대기하는데, 다음 차선도 다음경로를 대기중이며,
          <strong style={{ fontWeight: 900 }}> 결국 자기자신의 차선이 다음경로의 차선을 막는 현상입니다</strong>
        </ContentText>
        <ContentText style={{ marginTop: 8, fontSize: 16 }}>
          *gridlcok : D는 C를 막고있고, C는 B, B는 A, 마지막으로 A가 다시 D를 막고있다. (A➡B➡C➡D➡A)
        </ContentText>
      </ProjectProblem>
      <ProjectSolution title="해결방안" solutionObj={graduateSolutions} />
      <ProjectResult title={"실험결과"} results={gradutateResults} />
      <ProjectConclusion conclusions={conclusions} />
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
  font-size: 24px;
  line-height: 25px;
  word-break: keep-all;
`;
