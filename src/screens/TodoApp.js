import React from "react";
import styled from "styled-components";
import ProjectConclusion from "../components/ProjectConclusion";
import ProjectHeader from "../components/ProjectHeader";
import ProjectProblem from "../components/ProjectProblem";
import ProjectResult from "../components/ProjectResult";
import ProjectSolution from "../components/ProjectSolution";
export default function TodoApp({ project }) {
  const todoResults = [
    [
      {
        img: "/images/todoApp/todoLogin22.jpg",
        text: "firebase 를 이용해서 유저를 관리했습니다",
      },
      {
        img: "/images/todoApp/todoFeedback22.jpg",
        text: "자신이 한일과 하지 않을일을 기간별로 보여줍니다",
      },
    ],
    [
      {
        img: "/images/todoApp/todoAdd22.jpg",
        text: "할일의 생성, 조회, 수정, 삭제(CRUD)가 가능하게 하였습니다 ",
      },
    ],
  ];
  const conclusions = [
    {
      text: `기존의 하루 할일만 보여주는 방식에서 <strong>마감시간이 되지 않은 할일</strong>을 모두 보여주는 방식으로 변경하였다`,
    },
    {
      text: "하고자 했던 일을 얼마나 했는지 확인 할 수 있도록 하였고, <strong>성공한 갯수에 따라서 레벨업</strong>을 해서 성취감을 주었다",
    },
  ];
  const solutionObj = [
    {
      problem: "기존의 앱들은 하루 할일만 생성하고 보여줄 수 있었습니다",
      solution: "할일을 생성할 때, 마감기한을 정하고 마감기한이 남은 할일을 모두 보여주도록 했습니다",
    },
    {
      problem: "어플을 이용하면서, 성취감을 느낄 수 있으면 좋겠다고 생각했습니다.",
      solution: "일정 갯수의 할일을 성공할 때 마다, 레벨업을 하도록 했습니다",
    },
  ];
  return (
    <Container>
      <ProjectHeader project={project} url="/images/todoApp/todoThumb.webp" />
      <ProjectProblem title={"설계"} url="/images/todoApp/todoSample22.jpg">
        <ContentText>기존의 할일앱들은 하루 할일들만 보여주는 점이 불편하다고 느꼇습니다. </ContentText>
        <ContentText>
          그리고,
          <strong style={{ fontWeight: 900 }}> 내가 한일과 하지 않은일을 피드백</strong> 할 수 있으면 좋겠다고
          생각했습니다
        </ContentText>
      </ProjectProblem>

      <ProjectProblem title={"디자인"} url="/images/todoApp/routin22.jpg">
        <ContentText>
          디자인은 <strong style={{ fontWeight: 900 }}> 루티너리 : 습관 루틴 만들기</strong>라는 앱을 참고하였습니다{" "}
        </ContentText>
        <ContentText>루틴을 지킬수록 씨앗에서 부화하는 아이디어를 참고했습니다</ContentText>
      </ProjectProblem>
      <ProjectProblem title={"사용 툴"} url="/images/todoApp/react-native.png">
        <ContentText>백엔드는 간단하게 사용 할 수 있는 firebase 를 이용하였습니다</ContentText>
        <ContentText>프런트엔드는 react-native, expo 를 이용해서 개발하였습니다</ContentText>
      </ProjectProblem>
      <ProjectSolution solutionObj={solutionObj} title="해결방안" />
      <ProjectResult title={"실행화면"} results={todoResults} />
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
  font-size: 18px;
  line-height: 25px;
  word-break: keep-all;
`;
