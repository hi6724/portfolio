import React, { useState, useEffect } from "react";
import styled from "styled-components";
import ScreenLayout from "../components/ScreenLayout";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faChevronRight, faChevronLeft } from "@fortawesome/free-solid-svg-icons";
import Project from "../components/Project";

const projects = [
  {
    id: "graduate",
    category: "졸업연구",
    title: "자율주행에 따른 교통제증완화",
    tags: ["python", "SUMO"],
  },
  {
    id: "todoApp",
    category: "토이 프로젝트",
    title: "할일을 관리해주는 앱",
    tags: ["react-native", "expo", "firebase"],
  },
  {
    id: "newneek",
    category: "클론코딩",
    title: "NEWNEEK 사이트의 클론코딩",
    tags: ["react", "firebase"],
  },
  {
    id: "twitter",
    category: "클론코딩",
    title: "트위터 따라하기",
    tags: ["react", "firebase"],
  },
  {
    id: "insta",
    category: "클론코딩",
    title: "인스타그램 클론코딩",
    tags: ["react", "react-native", "graphql", "prisma"],
  },
  {
    id: 6,
    category: "클론코딩",
    title: "음음ㅇ므",
  },
];

export default function Portfolio() {
  const [page, setPage] = useState(1);
  const [slicedProjects, setSlicedProjects] = useState(projects.slice(0, 3));
  useEffect(() => {
    setSlicedProjects(projects.slice(page - 1, page + 2));
  }, [page]);
  return (
    <ScreenLayout>
      <Container>
        {slicedProjects.map((project, i) => (
          <Project key={i} project={project} i={i} />
        ))}
        {page > 1 && <PageBtnContainer right={false} page={page} setPage={setPage} />}
        {page < projects.length - 2 && <PageBtnContainer right={true} page={page} setPage={setPage} />}
      </Container>
    </ScreenLayout>
  );
}
const PageBtnContainer = ({ right, setPage, page }) => (
  <div style={{ position: "absolute", right: right ? "10px" : "", left: !right ? "10px" : "" }}>
    <PageBtn onClick={() => (right ? setPage(page + 3) : setPage(page - 3))}>
      <FontAwesomeIcon icon={right ? faChevronRight : faChevronLeft} size="3x" color="" />
    </PageBtn>
  </div>
);

const PageBtn = styled.div`
  cursor: pointer;
  color: rgba(0, 0, 0, 0.3);
  :hover {
    color: rgba(0, 0, 0, 0.8);
  }
  transition: all 0.3s;
`;

const Container = styled.div`
  /* width: 100%; */
  height: 100%;
  display: flex;
  justify-content: center;
  align-items: center;
  position: relative;
`;

// <SkillContainer key={project.id} style={{ backgroundColor: colors[i].bgColor }}>
//   <SkillWrapper
//     key={project.id}
//     transition={{ duration: 0.5 }}
//     initial={{ opacity: 0.1 }}
//     animate={{ opacity: 1 }}
//   >
//     <StyledText>{project.category}</StyledText>
//     <Title hoverColor={colors[i].hoverColor} onClick={() => setOpen(project.id)}>
//       {project.title}
//     </Title>
//     <TagsContainer>참여도 : 100%</TagsContainer>
//     <TagsContainer>
//       {project.tags?.map((tag, i) => (
//         <h1 key={i}>#{tag}</h1>
//       ))}
//     </TagsContainer>
//   </SkillWrapper>
// </SkillContainer>
