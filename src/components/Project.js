import { Modal } from "@mui/material";
import { motion } from "framer-motion";
import React, { useRef, useState } from "react";
import styled from "styled-components";
import ProjectModal from "./ProjectModal";

const colors = [
  { bgColor: "#5098BA", hoverColor: "#1f057b" },
  { bgColor: "#48277C", hoverColor: "#aa00ff" },
  { bgColor: "#9A69C2", hoverColor: "#4a148c" },
];

export default function Project({ project, i }) {
  const [open, setOpen] = useState(false);
  const ref = useRef();
  return (
    <>
      <SkillContainer key={project.id} style={{ backgroundColor: colors[i].bgColor }}>
        <SkillWrapper
          key={project.id}
          transition={{ duration: 0.5 }}
          initial={{ opacity: 0.1 }}
          animate={{ opacity: 1 }}
        >
          <StyledText>{project.category}</StyledText>
          <Title hoverColor={colors[i].hoverColor} onClick={() => setOpen(project.id)}>
            {project.title}
          </Title>
          <TagsContainer>참여도 : 100%</TagsContainer>
          <TagsContainer>
            {project.tags?.map((tag, i) => (
              <h1 key={i}>#{tag}</h1>
            ))}
          </TagsContainer>
        </SkillWrapper>
      </SkillContainer>
      <ProjectModal open={open} setOpen={setOpen} ref={ref} />
    </>
  );
}
const TagsContainer = styled.div`
  display: flex;
  color: white;
  font-family: "BM-Y";
  gap: 8px;
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
const Title = styled.h1`
  cursor: pointer;
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
