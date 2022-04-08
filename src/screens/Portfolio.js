import React, { useState, useEffect } from "react";
import { NavLink } from "react-router-dom";
import styled from "styled-components";
import ScreenLayout from "../components/ScreenLayout";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faChevronRight, faChevronLeft } from "@fortawesome/free-solid-svg-icons";
import { motion } from "framer-motion";
const projects = [
  {
    id: "graduate",
    category: "졸업연구",
    title: "자율주행에 따른 교통제증완화",
  },
  {
    id: "todoApp",
    category: "토이 프로젝트",
    title: "할일을 관리해주는 앱",
  },
  {
    id: "dietApp",
    category: "토이프로젝트",
    title: "다이어트 도우미",
  },
  {
    id: "newneek",
    category: "클론코딩",
    title: "NEWNEEK 사이트의 클론코딩",
  },
  {
    id: 5,
    category: "클론코딩",
    title: "음 네이버?",
  },
  {
    id: 6,
    category: "클론코딩",
    title: "음음ㅇ므",
  },
];
const colors = [
  { bgColor: "#5098BA", hoverColor: "#1f057b" },
  { bgColor: "#48277C", hoverColor: "#aa00ff" },
  { bgColor: "#9A69C2", hoverColor: "#4a148c" },
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
          <SkillContainer style={{ backgroundColor: colors[i].bgColor }}>
            <SkillWrapper
              key={project.id}
              transition={{ duration: 0.5 }}
              initial={{ opacity: 0.1 }}
              animate={{ opacity: 1 }}
            >
              <StyledText>
                #{page + i} {project.category}
              </StyledText>
              <Title hoverColor={colors[i].hoverColor} to={`project/:${project.id}`}>
                {project.title}
              </Title>
            </SkillWrapper>
          </SkillContainer>
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
const Title = styled(NavLink)`
  color: white;
  font-family: "BM-Pro";
  text-decoration: none;
  font-size: min(30px, 2vw);
  :hover {
    color: ${(props) => props.hoverColor};
  }
  transition: all 0.3s;
`;
const StyledText = styled.h1`
  color: white;
  font-size: min(18px, 1.5vw);
`;

const Container = styled.div`
  /* width: 100%; */
  height: 100%;
  display: flex;
  justify-content: center;
  align-items: center;
  position: relative;
`;
const SkillWrapper = styled(motion.div)`
  display: flex;
  gap: 15px;
  flex-direction: column;
  padding: 25px;
`;
const SkillContainer = styled.div`
  width: 100%;
  height: 100%;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
`;
