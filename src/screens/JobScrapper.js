import React from "react";
import styled from "styled-components";
import ProjectConclusion from "../components/ProjectConclusion";
import ProjectHeader from "../components/ProjectHeader";
import ProjectProblem from "../components/ProjectProblem";
import ProjectResult from "../components/ProjectResult";
import ProjectSkill from "../components/ProjectSkill";
import ProjectSolution from "../components/ProjectSolution";
export default function JobScrapper({ project }) {
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
  const resultsObj = [
    [
      {
        img: "/images/job-scrapper/search.gif",
        text: "홈 화면과 검색하는 모습",
      },
      {
        img: "/images/job-scrapper/filter.gif",
        text: "경력,학력,기업형태,고용형태로 필터링이 가능",
      },
    ],
    [
      {
        img: "/images/job-scrapper/seeDetail.gif",
        text: "자세히 보고 싶은경우 jobkorea사이트로 이동",
      },
      {
        img: "/images/job-scrapper/mobile.png",
        text: "모바일로 접속했을 때 모습",
      },
    ],
  ];
  const conclusions = [
    {
      text: ` <strong>django, BeautifulSoup </strong>를 이용하여 백엔드를 만들었다`,
    },
    { text: "모바일로 접속시 형태가 바뀌는 <strong>반응형 웹사이트</strong>로 제작했다" },
  ];
  return (
    <Container>
      <ProjectHeader project={project} url="/images/job-scrapper/jobFinding.webp" />
      <ProjectSkill />
      <ProjectProblem title={"설계"} url="/images/job-scrapper/jobScrapperContest.jpg">
        <ContentText>유튜버 노마드코더의 코딩컨테스트에 참가하였습니다 </ContentText>
        <UrlText href="https://nomadcoders.co/community/thread/1622">
          https://nomadcoders.co/community/thread/1622
        </UrlText>
        <ContentText>주제는 파이썬을 이용해서 스크래핑한 결과를 보여주는 웹사이트를 만드는 것 이었습니다</ContentText>
        <ContentText>
          jobkorea사이트의 정보를 python을 통해 스크랩한 후 react로 보여주는 웹사이트를 생각했습니다{" "}
        </ContentText>
      </ProjectProblem>

      <ProjectProblem title={"디자인"} url="/images/job-scrapper/newneek.png">
        <ContentText>
          디자인은 <strong style={{ fontWeight: 900 }}> Newneek </strong>이라는 웹사이트를 참고하였습니다
        </ContentText>
      </ProjectProblem>
      <ProjectProblem size={250} title={"사용 툴"} url="/images/job-scrapper/django.png">
        <ContentText>백엔드는 python의 django를 이용하였고, 프런트는 react를 사용했습니다</ContentText>
        <ContentText>스크래핑은 잡코리아 사이트를 스크래핑하였고 python의 BeautifulSoup을 이용하였습니다</ContentText>
      </ProjectProblem>
      <ProjectResult title={"실행화면"} results={resultsObj} />
      <ProjectConclusion conclusions={conclusions} />
      <UrlText style={{ marginLeft: 25 }} href="https://nomadjobs.netlify.app/">
        *잡스크래퍼 구경하기
      </UrlText>
    </Container>
  );
}

const UrlText = styled.a`
  cursor: pointer;
  color: #007aff;
  opacity: 0.6;
  :hover {
    opacity: 2;
  }
`;

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
