import React, { useState, useEffect } from "react";
import styled from "styled-components";
import ScreenLayout from "../components/ScreenLayout";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faChevronRight, faChevronLeft } from "@fortawesome/free-solid-svg-icons";
import Project from "../components/Project";
import { projectObj } from "../utils/projectsObj";

const PageBtnContainer = ({ right, setPage, page }) => (
  <div style={{ position: "absolute", right: right ? "10px" : "", left: !right ? "10px" : "" }}>
    <PageBtn onClick={() => (right ? setPage(page + 3) : setPage(page - 3))}>
      <FontAwesomeIcon icon={right ? faChevronRight : faChevronLeft} size="3x" color="" />
    </PageBtn>
  </div>
);

export default function Portfolio() {
  const [page, setPage] = useState(1);
  const [slicedProjects, setSlicedProjects] = useState(projectObj.slice(0, 3));
  useEffect(() => {
    setSlicedProjects(projectObj.slice(page - 1, page + 2));
  }, [page]);
  return (
    <ScreenLayout>
      <Container>
        {slicedProjects.map((project, i) => (
          <Project key={i} project={project} i={i} />
        ))}
        {page > 1 && <PageBtnContainer right={false} page={page} setPage={setPage} />}
        {page < projectObj.length - 2 && <PageBtnContainer right={true} page={page} setPage={setPage} />}
      </Container>
    </ScreenLayout>
  );
}

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
