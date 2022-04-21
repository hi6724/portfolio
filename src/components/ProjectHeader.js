import React from "react";
import styled from "styled-components";

export default function ProjectHeader({ project, url }) {
  console.log(project);
  return (
    <HeaderContainer>
      <HeaderImg src={url} />
      <Title>{project.title}</Title>
      <TagsContainer>참여도 : {project.degree}%</TagsContainer>
      <TagsContainer>
        {project.tags?.map((tag, i) => (
          <h1 key={i}>#{tag}</h1>
        ))}
      </TagsContainer>
    </HeaderContainer>
  );
}
const HeaderImg = styled.img`
  position: absolute;
  left: 0;
  height: 450px;
  /* top: -150px; */
  border-radius: 15px;
`;
const HeaderContainer = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: flex-end;
  align-items: flex-end;
  padding: 20px 15px;
  height: 370px;
  background: rgb(255, 255, 255);
  background: linear-gradient(
    90deg,
    rgba(255, 255, 255, 1) 0%,
    rgba(218, 220, 223, 0.9979342078628326) 17%,
    rgba(250, 252, 255, 1) 100%
  );
`;
const Title = styled.h1`
  font-family: "BM-Pro";
  font-size: 42px;
  margin: 10px 0px;
  width: 360px;
  word-break: keep-all;
`;
const TagsContainer = styled.div`
  display: flex;
  font-size: 20px;
  font-family: "BM-Y";
  width: 360px;
  gap: 8px;
`;
